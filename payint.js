import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your_stripe_publishable_key');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
