import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Header } from "../components/Header";
import { Dumbbell, Briefcase, Moon, Plane, Mountain, Home } from "lucide-react";

const modes = [
  {
    id: "standard",
    name: "Standard Mode",
    icon: Home,
    description: "Regular hydration tracking for daily activities",
    goal: 2500,
    reminderInterval: 2,
    color: "bg-gray-600"
  },
  {
    id: "gym",
    name: "Gym Mode",
    icon: Dumbbell,
    description: "Optimized for workout sessions with frequent reminders",
    goal: 3500,
    reminderInterval: 1,
    color: "bg-red-600"
  },
  {
    id: "work",
    name: "Work Mode",
    icon: Briefcase,
    description: "Perfect for office hours with balanced reminders",
    goal: 2800,
    reminderInterval: 1.5,
    color: "bg-blue-600"
  },
  {
    id: "sleep",
    name: "Sleep Mode",
    icon: Moon,
    description: "Minimal notifications during rest hours",
    goal: 500,
    reminderInterval: 6,
    color: "bg-indigo-600"
  },
  {
    id: "travel",
    name: "Travel Mode",
    icon: Plane,
    description: "Adjusted for traveling with timezone awareness",
    goal: 3000,
    reminderInterval: 2.5,
    color: "bg-purple-600"
  },
  {
    id: "outdoor",
    name: "Outdoor Mode",
    icon: Mountain,
    description: "High intake goals for outdoor activities and sports",
    goal: 4000,
    reminderInterval: 1,
    color: "bg-green-600"
  }
];

export function ModeSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const isPremium = location.state?.isPremium || false;
  const isOnboarding = location.state?.isOnboarding || false;
  const userData = location.state?.userData;

  const [selectedMode, setSelectedMode] = useState("standard");

  const availableModes = isPremium
    ? modes
    : modes.filter(m => m.id === "standard");

  const handleContinue = () => {
    if (isOnboarding) {
      const updatedUserData = {
        ...userData,
        selectedMode,
        availableModes: isPremium ? modes.map(m => m.id) : ["standard"],
        dailyGoal: modes.find(m => m.id === selectedMode)?.goal || 2500
      };

      localStorage.setItem('pendingUserData', JSON.stringify(updatedUserData));
      navigate('/signup', { state: { userData: updatedUserData } });
    } else {
      const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const updatedUser = {
        ...storedUser,
        selectedMode,
        dailyGoal: modes.find(m => m.id === selectedMode)?.goal || 2500
      };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <Header />

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {isPremium ? "Choose Your Hydration Mode" : "Standard Mode"}
            </h1>
            <p className="text-xl text-gray-600">
              {isPremium
                ? "Select the mode that best fits your lifestyle. You can change this anytime."
                : "Default members use Standard Mode. Upgrade to Premium to unlock all modes!"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {availableModes.map((mode) => (
              <Card
                key={mode.id}
                onClick={() => isPremium && setSelectedMode(mode.id)}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  selectedMode === mode.id
                    ? "ring-4 ring-cyan-500 shadow-xl scale-105"
                    : "hover:shadow-lg"
                } ${!isPremium && mode.id !== "standard" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className={`w-16 h-16 ${mode.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <mode.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mode.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{mode.description}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-700"><strong>Daily Goal:</strong> {mode.goal}ml</p>
                  <p className="text-gray-700"><strong>Reminders:</strong> Every {mode.reminderInterval}h</p>
                </div>
              </Card>
            ))}
          </div>

          {!isPremium && (
            <Card className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Unlock All 6 Modes with Premium!</h3>
                  <p className="text-cyan-100">Get Gym, Work, Sleep, Travel, and Outdoor modes with Premium subscription</p>
                </div>
                <Button
                  onClick={() => navigate('/')}
                  className="bg-white text-blue-600 hover:bg-cyan-50"
                >
                  Upgrade Now
                </Button>
              </div>
            </Card>
          )}

          <Button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-6 rounded-xl text-lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
