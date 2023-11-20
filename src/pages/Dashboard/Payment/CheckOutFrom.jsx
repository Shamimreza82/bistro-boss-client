import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";

const CheckOutFrom = () => {
    const stripe = useStripe()
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart] = useCarts()

    const [clientSecret, setClientSecret] = useState('')

    const totalprice = cart.reduce((total, item) => total + item.price, 0)



    useEffect(()=>{
        axiosSecure.post('/create_payment_intent', {price: totalprice} )
        .then( res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })

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
    } else {
        console.log("payment mathod", paymentMethod);
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
    </form>
  );
};

export default CheckOutFrom;
