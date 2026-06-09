import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Droplet, ArrowLeft, ShoppingCart } from "lucide-react";
import { Header } from "../components/Header";

export function OrderDefault() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState<"black" | "white">("black");
  const [quantity, setQuantity] = useState(1);

  const price = 49;
  const total = price * quantity;

  const handleProceedToCheckout = () => {
    const orderData = {
      plan: "default",
      color: selectedColor,
      quantity,
      price,
      total,
      bottleSpecs: {
        size: "750ml",
        material: "Standard BPA-Free Plastic",
        color: selectedColor,
      }
    };

    localStorage.setItem('pendingOrder', JSON.stringify(orderData));
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <Header />

      <div className="container mx-auto px-6 py-24">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Plans
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Default Plan - Customize Your Order</h1>
            <p className="text-lg text-gray-600">Select your bottle color and quantity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bottle Details</h2>

              <div className="mb-6">
                <Label className="text-base mb-3 block">Choose Color</Label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedColor("black")}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedColor === "black"
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="w-16 h-16 bg-black rounded-full mx-auto mb-3"></div>
                    <p className="font-semibold text-gray-900">Black</p>
                  </button>

                  <button
                    onClick={() => setSelectedColor("white")}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedColor === "white"
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full mx-auto mb-3"></div>
                    <p className="font-semibold text-gray-900">White</p>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <Label className="text-base mb-3 block">Quantity</Label>
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    variant="outline"
                    className="w-12 h-12"
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">{quantity}</span>
                  <Button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    variant="outline"
                    className="w-12 h-12"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Bottle Specifications:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Size: 750ml (Fixed)</li>
                  <li>• Material: BPA-Free Plastic</li>
                  <li>• Smart LED Reminders</li>
                  <li>• GPS Tracking</li>
                  <li>• Daily Intake Tracker</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Plan</span>
                  <span className="font-semibold text-gray-900">Default</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Color</span>
                  <span className="font-semibold text-gray-900 capitalize">{selectedColor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price per bottle</span>
                  <span className="font-semibold text-gray-900">${price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quantity</span>
                  <span className="font-semibold text-gray-900">{quantity}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-bold text-cyan-600">${total}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="w-32 h-48 rounded-2xl shadow-lg"
                    style={{ backgroundColor: selectedColor === "black" ? "#000000" : "#FFFFFF" }}
                  >
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-black/20 rounded-b-xl"></div>
                    <div className="relative flex items-center justify-center h-full">
                      <Droplet className={`w-8 h-8 ${selectedColor === "black" ? "text-white" : "text-gray-800"}`} />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">Preview of your bottle</p>
              </div>

              <Button
                onClick={handleProceedToCheckout}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
