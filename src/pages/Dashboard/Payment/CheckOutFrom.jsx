import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutFrom = () => {
  const {user} = useAuth()
    const stripe = useStripe()
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCarts()
    const [error, setError] = useState(' ')
    const [clientSecret, setClientSecret] = useState('')
    const [transaction, setTrangection] = useState('')

    const totalprice = cart.reduce((total, item) => total + item.price, 0)
    console.log(totalprice);


    useEffect(()=>{
        if(totalprice > 0){
          axiosSecure.post('/create_payment_intent', {price: totalprice} )
          .then( res => {
              console.log(res.data.clientSecret);
              setClientSecret(res.data.clientSecret)
          })
        }

    },[axiosSecure, totalprice])



  const handelSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements){
        return 
    }
    const card = elements.getElement(CardElement)
    if(card === null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card', 
        card
    })

    if(error){
        console.log('payment error', error);
        setError(error.message)
    } else {
        console.log("payment mathod", paymentMethod);
        setError('')
    }

    /// confrim payment 
    const {paymentIntent, error:cardConfirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card, 
        billing_details: {
          email: user?.email || 'anonyms', 
          name: user?.displayName || 'anonyms', 
        }
      }
    })
    if(cardConfirmError){
      console.log('confirm Error' );
    }
    else {
      console.log("payment intend", paymentIntent);
      if(paymentIntent.status === "succeeded")
      console.log("transaction ID", paymentIntent.id);
      setTrangection(paymentIntent.id)

      /// Now save payment in the database

      const payment =  {
        email: user?.email, 
        price: totalprice, 
        transactionID: paymentIntent.id,
        date: new Date(),    /// utc time jone convirt use monent jc for display
        cartID: cart.map(item => item._id), 
        menuItemID: cart.map(item => item.menuId), 
        status: 'panding'
      }

     const result =  await axiosSecure.post('/payments', payment)
     console.log("payment Save ", result.data);
        refetch()
        if(result.data?.paymentResult?.insertedId)
        Swal.fire({
          title: "Good job!",
          text: "Payment SuccessFull",
          icon: "success"
        });


    }


  };




  return (
    <form onSubmit={handelSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      <p className="text-green-600">{transaction}</p>
    </form>
  );
};

export default CheckOutFrom;
