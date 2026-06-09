import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Droplet, Activity, Briefcase, Award } from "lucide-react";
import { toast } from "sonner";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const selectedTier = localStorage.getItem('selectedTier') || 'default';

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setShowOnboarding(true);
  };

  const handleCompleteOnboarding = () => {
    const userId = `HYD${Math.floor(100000 + Math.random() * 900000)}`;

    const completedOrder = localStorage.getItem('completedOrder');
    let orderInfo = null;
    let bottles = [];

    if (completedOrder) {
      orderInfo = JSON.parse(completedOrder);
      
      // Create bottle from order data
      const newBottle = {
        bottleId: `BTL${Math.floor(100000 + Math.random() * 900000)}`,
        name: `Bottle ${bottles.length + 1}`,
        specs: orderInfo.plan === "default" 
          ? {
              size: "750ml",
              material: "BPA-Free Plastic",
              color: orderInfo.color
            }
          : {
              size: orderInfo.bottleSpecs.size,
              material: orderInfo.bottleSpecs.material,
              color: orderInfo.bottleSpecs.color,
              engraving: orderInfo.bottleSpecs.engraving || undefined
            },
        currentIntake: 0,
        dailyGoal: activityLevel === 'high' ? 3000 : activityLevel === 'medium' ? 2500 : 2000
      };
      bottles.push(newBottle);
    }

    const userData = {
      userId,
      name,
      email,
      password,
      tier: selectedTier,
      lifestyle,
      activityLevel,
      dailyGoal: activityLevel === 'high' ? 3000 : activityLevel === 'medium' ? 2500 : 2000,
      currentIntake: 0,
      streak: 0,
      orders: orderInfo ? [orderInfo] : [],
      bottles: bottles,
      bottleCustomization: orderInfo?.bottleSpecs || (selectedTier === 'premium' ? {
        size: '750ml',
        material: 'stainless-steel',
        color: '#3B82F6',
        engraving: name
      } : null)
    };

    localStorage.setItem('currentUser', JSON.stringify(userData));

    if (completedOrder) {
      localStorage.removeItem('completedOrder');
    }

    toast.success(`Account created! Your ID: ${userId}`);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full p-8 bg-white shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <Droplet className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Personalize Your Experience</h2>
            <p className="text-gray-600 mt-2">Help us tailor your hydration goals</p>
          </div>

          <div className="space-y-6">
            <div>
              <Label className="text-base mb-3 block">What's your lifestyle?</Label>
              <div className="grid grid-cols-3 gap-3">
                {['Sedentary', 'Moderate', 'Active'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLifestyle(option.toLowerCase())}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      lifestyle === option.toLowerCase()
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Briefcase className={`w-6 h-6 mx-auto mb-2 ${
                      lifestyle === option.toLowerCase() ? 'text-cyan-600' : 'text-gray-400'
                    }`} />
                    <p className="text-sm font-medium">{option}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base mb-3 block">Activity level?</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Low', value: 'low', icon: Activity, goal: '2L/day' },
                  { label: 'Medium', value: 'medium', icon: Activity, goal: '2.5L/day' },
                  { label: 'High', value: 'high', icon: Award, goal: '3L/day' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setActivityLevel(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      activityLevel === option.value
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <option.icon className={`w-6 h-6 mx-auto mb-2 ${
                      activityLevel === option.value ? 'text-cyan-600' : 'text-gray-400'
                    }`} />
                    <p className="text-sm font-medium">{option.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{option.goal}</p>
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleCompleteOnboarding}
              disabled={!lifestyle || !activityLevel}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
            >
              Complete Setup
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-8 bg-white shadow-xl rounded-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600 mt-2">
            Join HydroSmart{" "}
            <span className={`font-semibold ${selectedTier === 'premium' ? 'text-blue-600' : 'text-gray-700'}`}>
              ({selectedTier === 'premium' ? 'Premium' : 'Default'})
            </span>
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 h-12 rounded-xl"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-2 h-12 rounded-xl"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password"
              className="mt-2 h-12 rounded-xl"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
          >
            Continue
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}
