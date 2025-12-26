from flask import Flask, render_template, request, jsonify, redirect, url_for
import stripe

app = Flask(__name__)

# ---------------- STRIPE CONFIG ----------------
stripe.api_key = "sk_test_51SL3YRPgs7F3uQzvzt5dKLVF8clukpWQI3fWRcH74dxfsD2mInRysnBNsY4F0r2z4AS1nv1icvQmBXmGY3mtLGNO00SgE95BFz"   # <-- put your STRIPE_SECRET_KEY

DOMAIN = "http://127.0.0.1:5000"     # change to your domain in prod
# ------------------------------------------------


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/perfumes")
def perfumes():
    return render_template("perfumes.html")

@app.route("/samples")
def samples():
    return render_template("samples.html")

@app.route("/collections")
def collections():
    return render_template("collections.html")

@app.route("/story")
def story():
    return render_template("story.html")

@app.route("/sign_in")
def sign_in():
    return render_template("sign_in.html")

@app.route("/sign_up")
def sign_up():
    return render_template("sign_up.html")

@app.route("/checkout")
def checkout():
    return render_template("checkout.html")

@app.route("/payment-success")
def payment_success():
    return "<h1>Payment Successful ✅</h1>"

# ============ STRIPE CHECKOUT =============

@app.route("/create-checkout-session", methods=["POST"])
def create_checkout_session():
    try:
        # Example: static product for now, later dynamic
        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            mode="payment",
            line_items=[{
                "price_data": {
                    "currency": "usd",
                    "unit_amount": 2000,  # 20.00 USD in cents
                    "product_data": {
                        "name": "Perfume Sample Pack",
                    },
                },
                "quantity": 1,
            }],
            success_url=DOMAIN + "/success",
            cancel_url=DOMAIN + "/cancel",
        )
        return jsonify({"id": session.id})
    except Exception as e:
        return jsonify(error=str(e)), 400


@app.route("/success")
def success():
    return "Payment successful! (You can render template later)"

@app.route("/cancel")
def cancel():
    return "Payment canceled (render template later)"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

