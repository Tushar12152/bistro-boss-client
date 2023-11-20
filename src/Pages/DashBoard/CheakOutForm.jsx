import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import Swal from "sweetalert2";

const CheakOutForm = () => {
    const stripe=useStripe()
  const elements=useElements()
  const [error,setError]=useState()

    const handleSubmit=async(e)=>{
            e.preventDefault();

            if(!stripe|| !elements){
                 return
            }
        
            const card=elements.getElement(CardElement)

            if(card===null){
                return
            }

            const{error, paymentMethod}=await stripe.createPaymentMethod({
                   type:"card",
                   card,
            })
            if(error){
                console.log('payment error--->',error);
                setError(error.message)
                
            }else{
                console.log('payment method--->', paymentMethod);
                  setError('')
            }
        

    }
    return (
       <form onSubmit={handleSubmit}>
  <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-[#D1A055] my-4" type="submit" disabled={!stripe}>
        Pay
      </button>
          <p className="text-red-400">{error}</p>
       </form>
    );
};

export default CheakOutForm;