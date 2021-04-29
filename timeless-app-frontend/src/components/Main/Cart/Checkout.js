// This is the helper function we have created to handle the payment via Stripe Checkout.

import StripeCheckout from 'react-stripe-checkout';

// This is the Public Stripe Publishable API key.
const STRIPE_PUBLISHABLE = 'pk_test_51IkHJdCSlyyb5ewgPpZnox7rHPyrndLRSa9wJ1SnyuF00GSO0Dsdm0Ru3ZF67YMxb8zS48PAig5m0IAsZvHGWgAH00I4gWn8jb';

// This function uses the Stripe checkout method using the user and the token id .
const onToken = (user,checkout) => token => 
    checkout(user, token.id);

    // Checkout is a function that we have received through props from the Cart Component. This is the action which we use to checkout.
const Checkout = ({ amount, user, checkout }) => 
// Use the StripeCheckout component and pass in props that can be used.
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='ZAR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;