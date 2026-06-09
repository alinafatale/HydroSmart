import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Header } from "../components/Header";
import { CheckCircle, Package, Truck, MapPin, User } from "lucide-react";
import { toast } from "sonner";

export function OrderConfirmation() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<any>(null);
  const [hasAccount, setHasAccount] = useState<boolean | null>(null);
  const [isUpgrade, setIsUpgrade] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem('completedOrder');
    if (!completed) {
      navigate('/');
      return;
    }

    const order = JSON.parse(completed);
    setOrderData(order);
    setIsUpgrade(order.isUpgrade === true);

    sendOrderToSeller(order);
  }, [navigate]);

  const sendOrderToSeller = (order: any) => {
    const sellerOrder = {
      orderId: order.orderId,
      orderDate: new Date(order.orderDate).toLocaleString(),
      plan: order.plan,
      quantity: order.quantity,
      total: order.total,
      customer: {
        name: order.shippingInfo.fullName,
        email: order.shippingInfo.email,
        phone: order.shippingInfo.phone,
        shippingAddress: `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state} ${order.shippingInfo.zipCode}, ${order.shippingInfo.country}`
      },
      bottleSpecifications: order.plan === "default"
        ? {
            plan: "Default",
            color: order.color,
            size: "750ml",
            material: "BPA-Free Plastic"
          }
        : {
            plan: "Premium",
            size: order.bottleSpecs.size,
            material: order.bottleSpecs.material,
            color: order.bottleSpecs.color,
            engraving: order.bottleSpecs.engraving || "None"
          },
      paymentMethod: order.paymentMethod,
      status: order.status
    };

    console.log("📧 ORDER SENT TO SELLER:", sellerOrder);
    localStorage.setItem(`seller_order_${order.orderId}`, JSON.stringify(sellerOrder));

    toast.success("Order confirmation sent to seller successfully!");
  };

  const handleContinue = () => {
    if (hasAccount === null && !isUpgrade) {
      toast.error("Please select if you have an account");
      return;
    }

    if (isUpgrade) {
      // Upgrade current user's account
      const currentUserStr = localStorage.getItem('currentUser');
      if (!currentUserStr) {
        toast.error("No user logged in. Please log in first to upgrade.");
        navigate('/login');
        return;
      }

      const currentUser = JSON.parse(currentUserStr);
      
      // Create new premium bottle
      const newBottle = {
        bottleId: `BTL${Math.floor(100000 + Math.random() * 900000)}`,
        name: `Bottle 1`,
        specs: {
          size: orderData.bottleSpecs.size,
          material: orderData.bottleSpecs.material,
          color: orderData.bottleSpecs.color,
          engraving: orderData.bottleSpecs.engraving || undefined
        },
        currentIntake: currentUser.currentIntake || 0,
        dailyGoal: currentUser.dailyGoal || 3000
      };

      // Upgrade user to premium
      const upgradedUser = {
        ...currentUser,
        tier: 'premium',
        selectedMode: currentUser.selectedMode || 'standard',
        availableModes: ["standard", "gym", "work", "sleep", "travel", "outdoor"],
        bottles: [newBottle],
        orders: [...(currentUser.orders || []), orderData],
        bottleCustomization: orderData.bottleSpecs
      };

      localStorage.setItem('currentUser', JSON.stringify(upgradedUser));
      localStorage.removeItem('completedOrder');

      toast.success("Upgrade successful! Welcome to Premium!");
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      return;
    }

    localStorage.setItem('selectedTier', orderData.plan);

    if (hasAccount) {
      navigate('/login');
    } else {
      navigate('/signup');
    }
  };

  if (!orderData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <Header />

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white rounded-3xl shadow-xl mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
              <p className="text-lg text-gray-600">Thank you for your purchase</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order ID</p>
                  <p className="text-xl font-bold text-gray-900">{orderData.orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Date</p>
                  <p className="text-xl font-bold text-gray-900">
                    {new Date(orderData.orderDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Order Details</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      {orderData.plan === "default" ? "Default Plan" : "Premium Plan"}
                    </p>
                    {orderData.plan === "default" ? (
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>• Color: {orderData.color}</p>
                        <p>• Size: 750ml</p>
                        <p>• Material: BPA-Free Plastic</p>
                        <p>• Quantity: {orderData.quantity}</p>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>• Size: {orderData.bottleSpecs.size}</p>
                        <p>• Material: {orderData.bottleSpecs.material}</p>
                        <p>• Color: {orderData.bottleSpecs.color}</p>
                        {orderData.bottleSpecs.engraving && (
                          <p>• Engraving: {orderData.bottleSpecs.engraving}</p>
                        )}
                        <p>• Quantity: {orderData.quantity}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Address</h3>
                  <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                    <p className="font-semibold">{orderData.shippingInfo.fullName}</p>
                    <p>{orderData.shippingInfo.address}</p>
                    <p>{orderData.shippingInfo.city}, {orderData.shippingInfo.state} {orderData.shippingInfo.zipCode}</p>
                    <p>{orderData.shippingInfo.country}</p>
                    <p className="mt-2">Email: {orderData.shippingInfo.email}</p>
                    <p>Phone: {orderData.shippingInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Status</h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      Your order is being processed. Estimated delivery: 5-7 business days
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-900">Order Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mb-8">
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${(orderData.total - orderData.shipping + (orderData.discount || 0)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">${orderData.shipping}</span>
              </div>
              {orderData.discount > 0 && (
                <div className="flex justify-between items-center text-sm mb-2 text-green-600">
                  <span>Discount</span>
                  <span className="font-semibold">-${orderData.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="text-xl font-bold text-gray-900">Total Paid</span>
                <span className="text-3xl font-bold text-cyan-600">${orderData.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <User className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  {isUpgrade ? (
                    <>
                      <h3 className="font-semibold text-gray-900 mb-2">🎉 Upgrade Complete!</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        Your account has been upgraded to Premium! You'll now have access to all hydration modes, biometric security, and social features.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-semibold text-gray-900 mb-2">Create Your Account to Track Your Order</h3>
                      <p className="text-sm text-gray-700 mb-4">
                        To access your dashboard and track your order, please create an account or log in if you already have one.
                      </p>

                      <div className="space-y-3">
                        <button
                          onClick={() => setHasAccount(false)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            hasAccount === false
                              ? "border-cyan-500 bg-cyan-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <p className="font-semibold text-gray-900">I'm a new customer</p>
                          <p className="text-sm text-gray-600">Create an account to track your order</p>
                        </button>

                        <button
                          onClick={() => setHasAccount(true)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            hasAccount === true
                              ? "border-cyan-500 bg-cyan-50"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <p className="font-semibold text-gray-900">I already have an account</p>
                          <p className="text-sm text-gray-600">Log in to view your dashboard</p>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
            >
              {isUpgrade ? "Go to Dashboard" : `Continue to ${hasAccount ? "Login" : "Sign Up"}`}
            </Button>
          </Card>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to <span className="font-semibold">{orderData.shippingInfo.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
