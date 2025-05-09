import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const razorpay = new Razorpay({
  key_id: "rzp_test_rZy8sy8h3lgvoA",
    key_secret: "UspGlVHcWKyNK4j3PAhfOvJM"
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/order", async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: req.body.amount,
      currency: req.body.currency,
      receipt: req.body.receipt,
    });

    if (!order) {
      return res.status(500).json({ message: "Failed to create order" });
    }

    res.json(order);
  } catch (err) {
    return res.status(500).json({ message: "Failed to create order" });
  }
});

app.post('/order/validate', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  // Generate the expected signature using HMAC SHA256
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  
  const digest = sha.digest("hex");

  // Compare the generated signature with the received signature
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction not legitimate!" });
  }

  // If the signatures match, the payment is legitimate
  res.json({
    msg: "Payment Successful",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});
