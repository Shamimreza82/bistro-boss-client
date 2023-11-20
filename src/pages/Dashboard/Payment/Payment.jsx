import React from 'react';
import SectionTitel from '../../../components/SectionTitel';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';


/// todo: add pubsished key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div className='max-w-4xl m-auto'>
            <SectionTitel
            heading={"payment"}
            subHeading={"please pay to eat"}
            ></SectionTitel>
            <div >
                <Elements stripe={stripePromise}>
                   <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;