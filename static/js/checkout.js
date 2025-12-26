// Use your publishable key here (pk_test...)
const stripe = Stripe("pk_test_12345...");

let elements;

fetch("/create-payment-intent", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ amount: 5000, currency: "usd" }), // example 50$
})
  .then((res) => res.json())
  .then((data) => {
    const clientSecret = data.clientSecret;
    elements = stripe.elements({ clientSecret });
    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element");
  });

document.getElementById("pay-btn").addEventListener("click", async () => {
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: window.location.origin + "/payment-success", // your route
    },
  });

  if (error) {
    alert(error.message);
  }
});
