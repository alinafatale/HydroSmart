import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Droplet, ArrowLeft, Sparkles, ShoppingCart } from "lucide-react";
import { Header } from "../components/Header";
import { toast } from "sonner";

export function Customization() {
  const navigate = useNavigate();
  const location = useLocation();
  const isUpgrade = (location.state as any)?.isUpgrade === true;
  
  const [size, setSize] = useState("750ml");
  const [material, setMaterial] = useState("stainless-steel");
  const [color, setColor] = useState("#3B82F6");
  const [engraving, setEngraving] = useState("");
  const [quantity, setQuantity] = useState(1);

  const price = 99;
  const total = price * quantity;

  const handleProceedToCheckout = () => {
    if (engraving && engraving.length > 20) {
      toast.error("Engraving must be 20 characters or less");
      return;
    }

    const orderData = {
      plan: "premium",
      quantity,
      price,
      total,
      isUpgrade,
      bottleSpecs: {
        size,
        material: material === "stainless-steel" ? "Stainless Steel" : material === "plastic" ? "BPA-Free Plastic" : "Glass",
        color,
        engraving,
      }
    };

    localStorage.setItem('pendingOrder', JSON.stringify(orderData));
    toast.success("Customization saved!");
    navigate('/checkout');
  };

  const sizeOptions = [
    { value: "500ml", label: "500ml", description: "Compact & Portable" },
    { value: "750ml", label: "750ml", description: "Standard Size" },
    { value: "1000ml", label: "1L", description: "Extra Capacity" },
  ];

  const materialOptions = [
    { value: "plastic", label: "BPA-Free Plastic", description: "Lightweight & Durable" },
    { value: "stainless-steel", label: "Stainless Steel", description: "Premium & Insulated" },
    { value: "glass", label: "Glass", description: "Pure & Eco-Friendly" },
  ];

  const colorOptions = [
    { value: "#3B82F6", label: "Ocean Blue" },
    { value: "#06B6D4", label: "Cyan" },
    { value: "#10B981", label: "Emerald" },
    { value: "#8B5CF6", label: "Purple" },
    { value: "#EC4899", label: "Pink" },
    { value: "#F59E0B", label: "Amber" },
    { value: "#EF4444", label: "Red" },
    { value: "#1F2937", label: "Midnight" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <Header />

      <div className="container mx-auto px-6 py-24">
        <div className="mb-8">
          <Button
            onClick={() => navigate(isUpgrade ? '/dashboard' : '/')}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isUpgrade ? 'Back to Dashboard' : 'Back to Plans'}
          </Button>
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{isUpgrade ? 'Upgrade to Premium' : 'Premium Plan - Customize Your Bottle'}</h1>
              <p className="text-gray-600 mt-1">{isUpgrade ? 'Upgrade your account and customize your bottle' : 'Design your perfect HydroSmart bottle with full customization'}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bottle Size</h2>
              <div className="grid gap-3">
                {sizeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSize(option.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      size === option.value
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Material</h2>
              <div className="grid gap-3">
                {materialOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setMaterial(option.value)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      material === option.value
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Color</h2>
              <div className="grid grid-cols-4 gap-3">
                {colorOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setColor(option.value)}
                    className={`aspect-square rounded-xl border-4 transition-all relative ${
                      color === option.value
                        ? 'border-gray-900 scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: option.value }}
                  >
                    {color === option.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">
                  Selected: {colorOptions.find(c => c.value === color)?.label}
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Name Engraving</h2>
              <Label htmlFor="engraving" className="text-base mb-2 block">
                Personalize your bottle (max 20 characters)
              </Label>
              <Input
                id="engraving"
                type="text"
                value={engraving}
                onChange={(e) => setEngraving(e.target.value.slice(0, 20))}
                placeholder="Enter your name or text"
                className="h-12 rounded-xl"
                maxLength={20}
              />
              <p className="text-sm text-gray-500 mt-2">
                {engraving.length}/20 characters
              </p>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quantity</h2>
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
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan</span>
                  <span className="font-semibold">Premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per bottle</span>
                  <span className="font-semibold">${price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity</span>
                  <span className="font-semibold">{quantity}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-bold text-cyan-600">${total}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Button
              onClick={handleProceedToCheckout}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Proceed to Checkout
            </Button>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Live Preview</h2>

              <div className="bg-white rounded-2xl p-12 flex items-center justify-center min-h-[500px]">
                <div className="relative">
                  <div
                    className="w-32 h-64 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-500"
                    style={{
                      backgroundColor: color,
                      transform: size === "500ml" ? "scale(0.85)" : size === "1000ml" ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-black/20 rounded-b-2xl"></div>

                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                      <Droplet className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

                    {material === 'stainless-steel' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    )}

                    {material === 'glass' && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                    )}
                  </div>

                  {engraving && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <p className="text-sm font-semibold text-gray-700 tracking-wide">
                        {engraving}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                  <span className="text-sm text-gray-600">Size</span>
                  <span className="text-sm font-semibold text-gray-900">{size}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                  <span className="text-sm text-gray-600">Material</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {materialOptions.find(m => m.value === material)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                  <span className="text-sm text-gray-600">Color</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {colorOptions.find(c => c.value === color)?.label}
                  </span>
                </div>
                {engraving && (
                  <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                    <span className="text-sm text-gray-600">Engraving</span>
                    <span className="text-sm font-semibold text-gray-900">{engraving}</span>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
