import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_51IkHJdCSlyyb5ewgPpZnox7rHPyrndLRSa9wJ1SnyuF00GSO0Dsdm0Ru3ZF67YMxb8zS48PAig5m0IAsZvHGWgAH00I4gWn8jb';

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='ZAR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;