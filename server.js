const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const secretKey = 'sk_sbox_blrwqpi5cf2ztkqkhj6co7lgmq';

app.post('/create-payment', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.sandbox.checkout.com/payments/links',
      {
        amount: 100,
        currency: 'USD',
        reference: 'Ali clothes order',
        customer: {
          email: 'aaljboori@gmail.com'
        }
      },
      {
        headers: {
          Authorization: secretKey,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
