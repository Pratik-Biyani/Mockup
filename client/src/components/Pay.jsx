import React, { useState } from 'react';

function Pay() {
  const [amount, setAmount] = useState(500); // Example amount (in INR paisa, so 500 = 5 INR)
  const [currency, setCurrency] = useState("INR");
  const [receiptId, setReceiptId] = useState("order_receipt_123"); // Change to your actual receipt logic
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
  });

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Step 1: Create order on your server
      const response = await fetch("http://localhost:5001/order", {
        method: "POST",
        body: JSON.stringify({
          amount: amount * 100, // Convert amount to paisa
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const order = await response.json();

      // Step 2: Configure Razorpay payment options
      const options = {
        key: "rzp_test_rZy8sy8h3lgvoA", // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount in currency subunits
        currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, // Order ID from server
        handler: async function (response) {
          try {
            const body = { ...response };

            // Step 3: Validate payment on your server
            const validateRes = await fetch("http://localhost:5000/order/validate", {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const validate = await validateRes.json();

            if (validate.msg === "Payment Successful") {
              alert("Payment successful! Booking confirmed.");
            } else {
              alert("Payment failed. Please try again.");
            }
          } catch (error) {
            alert("An error occurred while processing the payment.");
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        console.error("Payment failed:", response);
        alert("Payment failed. Please try again.");
      });
      rzp1.open();
    } catch (error) {
      console.error("Error initiating payment: ", error);
      alert("An error occurred while processing the payment.");
    }
  

  };

  return (
    <div className="container mt-20">
      <button className="bg-blue-500 text-white p-4 rounded-xl mt-4 hover:bg-blue-700" onClick={handlePayment}>
        Pay
          </button>
    </div>
  );
}

export default Pay;
