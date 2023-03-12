const { response } = require("express");
const mercadopago = require("mercadopago");
require('dotenv').config();

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

module.exports = postPayment = async (req, res) => {
    const prod = req.body;
    let preference = {
          items: [
             {
                id: prod.id,
                title: prod.name,
                currency_id: 'USD',
                picture_url: prod.image,
                description: prod.description,
                type: prod.type,
                unit_price: prod.price,
                quantity: 1,
             },
           ],
        back_urls: {
            success: 'localhost:3000',
            failure: '',
            pending: '',
        },
        auto_return: 'approved',
        binary_mode: true,
    }
    mercadopago.preferences.create(preference)
    .then((response) => res.status(200).send({response}))
    .catch((error) => res.status(400).send({error: error.message}))
};

{/* <script
  src="https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js"
  data-preference-id='<%= global.id %>'>
</script> */}