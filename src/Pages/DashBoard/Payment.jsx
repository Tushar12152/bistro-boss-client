
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';

//TODO:Add publishable key
const stripePromise=loadStripe('')

const Payment = () => {
    return (
        <div> 
              <SectionTitle heading='Payment' subHading='Please pay fast'></SectionTitle>

              <div>
                  <Elements stripe={stripePromise}>

                  </Elements>
              </div>
        </div>
    );
};

export default Payment;