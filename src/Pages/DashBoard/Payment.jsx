
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheakOutForm from './CheakOutForm';

//TODO:Add publishable key
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div> 
              <SectionTitle heading='Payment' subHading='Please pay fast'></SectionTitle>

              <div>
                  <Elements stripe={stripePromise}>
                       <CheakOutForm></CheakOutForm>
                  </Elements>
              </div>
        </div>
    );
};

export default Payment;