const stripe = require('stripe')('your_stripe_secret_key');

app.post('/api/payment', async (req, res) => {
    const { amount, currency } = req.body;
    
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],
        });
        res.status(200).send(paymentIntent.client_secret);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
