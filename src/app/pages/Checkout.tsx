import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Header } from "../components/Header";
import { CreditCard, Wallet, Building2, ArrowLeft, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function Checkout() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "fpx" | "ewallet">("card");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States"
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });

  useEffect(() => {
    const pending = localStorage.getItem('pendingOrder');
    if (!pending) {
      navigate('/');
      return;
    }
    setOrderData(JSON.parse(pending));
  }, [navigate]);

  if (!orderData) return null;

  const subtotal = orderData.total || 0;
  const shipping = 10;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "HYDRO10") {
      setDiscount(subtotal * 0.1);
      toast.success("Promo code applied! 10% discount");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handlePlaceOrder = () => {
    if (!shippingInfo.fullName || !shippingInfo.email || !shippingInfo.phone || !shippingInfo.address) {
      toast.error("Please fill in all shipping details");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardInfo.cardNumber || !cardInfo.cardName || !cardInfo.expiryDate || !cardInfo.cvv) {
        toast.error("Please fill in all payment details");
        return;
      }
    }

    const orderId = `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;

    const completedOrder = {
      orderId,
      ...orderData,
      shippingInfo,
      paymentMethod,
      discount,
      shipping,
      total,
      orderDate: new Date().toISOString(),
      status: "pending"
    };

    localStorage.setItem('completedOrder', JSON.stringify(completedOrder));
    localStorage.removeItem('pendingOrder');

    toast.success("Payment successful!");

    setTimeout(() => {
      navigate('/order-confirmation');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <Header />

      <div className="container mx-auto px-6 py-24">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={shippingInfo.fullName}
                      onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      placeholder="+1 (123) 456-7890"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={shippingInfo.country}
                      onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                      className="mt-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      placeholder="123 Main Street, Apt 4B"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                      placeholder="New York"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                      placeholder="NY"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                    <Input
                      id="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                      placeholder="10001"
                      className="mt-2"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CreditCard className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === "card" ? "text-cyan-600" : "text-gray-400"
                    }`} />
                    <p className="text-sm font-medium">Card</p>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("fpx")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "fpx"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Building2 className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === "fpx" ? "text-cyan-600" : "text-gray-400"
                    }`} />
                    <p className="text-sm font-medium">FPX</p>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("ewallet")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === "ewallet"
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Wallet className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === "ewallet" ? "text-cyan-600" : "text-gray-400"
                    }`} />
                    <p className="text-sm font-medium">E-Wallet</p>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={cardInfo.cardNumber}
                        onChange={(e) => setCardInfo({...cardInfo, cardNumber: e.target.value})}
                        placeholder="1234 5678 9012 3456"
                        className="mt-2"
                        maxLength={19}
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        value={cardInfo.cardName}
                        onChange={(e) => setCardInfo({...cardInfo, cardName: e.target.value})}
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          value={cardInfo.expiryDate}
                          onChange={(e) => setCardInfo({...cardInfo, expiryDate: e.target.value})}
                          placeholder="MM/YY"
                          className="mt-2"
                          maxLength={5}
                        />
                      </div>

                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          value={cardInfo.cvv}
                          onChange={(e) => setCardInfo({...cardInfo, cvv: e.target.value})}
                          placeholder="123"
                          className="mt-2"
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "fpx" && (
                  <div className="text-center py-8">
                    <p className="text-gray-600">You will be redirected to your bank's online banking platform</p>
                  </div>
                )}

                {paymentMethod === "ewallet" && (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Select your e-wallet provider after clicking Place Order</p>
                  </div>
                )}
              </Card>
            </div>

            <div>
              <Card className="p-6 bg-white rounded-2xl shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">
                      {orderData.plan === "default" ? "Default Plan" : "Premium Plan"}
                    </p>
                    {orderData.plan === "default" ? (
                      <p className="text-sm text-gray-600">Color: {orderData.color}</p>
                    ) : (
                      <div className="text-sm text-gray-600">
                        <p>Size: {orderData.bottleSpecs?.size}</p>
                        <p>Material: {orderData.bottleSpecs?.material}</p>
                        <p>Color: {orderData.bottleSpecs?.color}</p>
                        {orderData.bottleSpecs?.engraving && <p>Engraving: {orderData.bottleSpecs.engraving}</p>}
                      </div>
                    )}
                    <p className="text-sm text-gray-600 mt-1">Quantity: {orderData.quantity}</p>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">${shipping}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span className="font-semibold">-${discount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-3xl font-bold text-cyan-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="promoCode">Promo Code</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="promoCode"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                    />
                    <Button onClick={handleApplyPromo} variant="outline">
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Try: HYDRO10</p>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Place Order
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
