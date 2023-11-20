import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

// import Swal from "sweetalert2";
import useAxiosSecure from './../../Hooks/useAxiosSecure';
import useCarts from './../../Hooks/useCarts';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheakOutForm = () => {
    const stripe=useStripe()
  const elements=useElements()
  const [error,setError]=useState('')
  const [clientSecret,setClientSecret]=useState('')
  const [transectionId,setTransectionId]=useState('')
const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
   const [cart,refetch]=useCarts()
//    console.log(cart)
   const totalPrice= cart.reduce((total,item)=>total+item.price,0)
    const navigate=useNavigate()

   

   useEffect(()=>{
      if(totalPrice>0){
        axiosSecure.post('create-payment-intent',{price:totalPrice})
        .then(res=>{
           console.log(res.data.clientSecret);
           setClientSecret(res.data.clientSecret)
        })
      }

   },[axiosSecure,totalPrice])





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
        
            //confirmed Payment

            const{paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
                payment_method:{
                    card:card,
                    billing_details:{
                        email:user?.email || 'anonymous',
                        name:user?.displayName || 'anonymous'
                    
                    }
                }
            })

            if(confirmError){
                console.log('confirm error');
            }else{
                  console.log('success payment intenet', paymentIntent);

                  if(paymentIntent.status==='succeeded'){
                     console.log('transection id------>' ,  paymentIntent.id);
                     setTransectionId(paymentIntent?.id)
                    
                     const payment={
                         email:user?.email,
                         price:totalPrice,
                         transactionId: paymentIntent.id,
                         date:new Date() , //utc convert date. moment js useing
                         cartIds:cart.map(item=>item._id ),
                        //  menuItemIds:cart.map(item=>item.menuId),

                         status:'pending'

                     }
                               
                   const res=await axiosSecure.post('/payments',payment)
                   console.log( 'payment saved',res.data);
                   refetch()
                   if(res?.data?.paymentResult.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment is successfully compleate ,Thank you",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate('/dashboard/paymentHistory')
                   }

                  }
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
      <button className="btn bg-[#D1A055] my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
          <p className="text-red-400">{error}</p>
          {
            transectionId && <p className="text-green-500">Your transection Id: {transectionId}</p>
          }
       </form>
    );
};

export default CheakOutForm;