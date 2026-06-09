import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Droplet } from "lucide-react";
import { toast } from "sonner";
import { getPreRegisteredUser } from "../utils/preRegisteredUsers";

export function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleForgotPassword = () => {
    if (!resetEmail) {
      toast.error("Please enter your email address");
      return;
    }

    console.log("Password reset requested for:", resetEmail);
    toast.success("Password reset link sent to your email!");
    setShowForgotPassword(false);
    setResetEmail("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const preRegisteredUser = getPreRegisteredUser(userId, password);

    if (preRegisteredUser) {
      localStorage.setItem('currentUser', JSON.stringify(preRegisteredUser));

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      const completedOrder = localStorage.getItem('completedOrder');
      if (completedOrder) {
        const orderInfo = JSON.parse(completedOrder);
        
        // Only add bottles for default users
        let updatedBottles = preRegisteredUser.bottles || [];
        if (preRegisteredUser.tier !== 'premium') {
          const newBottle = {
            bottleId: `BTL${Math.floor(100000 + Math.random() * 900000)}`,
            name: `Bottle ${updatedBottles.length + 1}`,
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
            dailyGoal: preRegisteredUser.dailyGoal
          };
          updatedBottles.push(newBottle);
        }
        
        const updatedUserData = {
          ...preRegisteredUser,
          bottles: updatedBottles,
          orders: [...(preRegisteredUser.orders || []), orderInfo]
        };
        localStorage.setItem('currentUser', JSON.stringify(updatedUserData));
        localStorage.removeItem('completedOrder');
      }

      toast.success(`Welcome back, ${preRegisteredUser.name}!`);
      navigate('/dashboard');
      return;
    }

    const storedUser = localStorage.getItem('currentUser');

    if (!storedUser) {
      toast.error("No account found. Please check your credentials or sign up.");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.userId === userId && userData.password === password) {
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      const completedOrder = localStorage.getItem('completedOrder');
      if (completedOrder) {
        const orderInfo = JSON.parse(completedOrder);
        
        // Only add bottles for default users
        let updatedBottles = userData.bottles || [];
        if (userData.tier !== 'premium') {
          const newBottle = {
            bottleId: `BTL${Math.floor(100000 + Math.random() * 900000)}`,
            name: `Bottle ${updatedBottles.length + 1}`,
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
            dailyGoal: userData.dailyGoal
          };
          updatedBottles.push(newBottle);
        }
        
        const updatedUserData = {
          ...userData,
          bottles: updatedBottles,
          orders: [...(userData.orders || []), orderInfo]
        };
        localStorage.setItem('currentUser', JSON.stringify(updatedUserData));
        localStorage.removeItem('completedOrder');
      }

      toast.success("Welcome back!");
      navigate('/dashboard');
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 bg-white shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <Droplet className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Forgot Password</h2>
            <p className="text-gray-600 mt-2">Enter your email to reset your password</p>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="resetEmail">Email Address</Label>
              <Input
                id="resetEmail"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="your@email.com"
                className="mt-2 h-12 rounded-xl"
                required
              />
            </div>

            <Button
              onClick={handleForgotPassword}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
            >
              Send Reset Link
            </Button>

            <Button
              onClick={() => setShowForgotPassword(false)}
              variant="outline"
              className="w-full py-6 rounded-xl text-lg"
            >
              Back to Login
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
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your HydroSmart account</p>
        </div>

        <div className="mb-6 p-4 bg-cyan-50 rounded-xl border border-cyan-200">
          <p className="text-sm font-semibold text-gray-900 mb-2">Demo Accounts:</p>
          <p className="text-xs text-gray-700">Premium: <strong>HD978789</strong> / 123456</p>
          <p className="text-xs text-gray-700">Default: <strong>HD510748</strong> / 123456</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="userId">User ID</Label>
            <Input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="HD123456"
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
              placeholder="Enter your password"
              className="mt-2 h-12 rounded-xl"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
          >
            Sign In
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
}
