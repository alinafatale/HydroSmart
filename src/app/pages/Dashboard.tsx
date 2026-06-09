import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Droplet, MapPin, Quote, Fingerprint, Users, Sparkles, LogOut, TrendingUp, Bell, Zap, Package, Dumbbell, Briefcase, Moon, Plane, Mountain, Home, ChevronRight, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const modes = [
  { id: "standard", name: "Standard", icon: Home, goal: 2500, reminderInterval: 2, color: "bg-gray-600" },
  { id: "gym", name: "Gym", icon: Dumbbell, goal: 3500, reminderInterval: 1, color: "bg-red-600" },
  { id: "work", name: "Work", icon: Briefcase, goal: 2800, reminderInterval: 1.5, color: "bg-blue-600" },
  { id: "sleep", name: "Sleep", icon: Moon, goal: 500, reminderInterval: 6, color: "bg-indigo-600" },
  { id: "travel", name: "Travel", icon: Plane, goal: 3000, reminderInterval: 2.5, color: "bg-purple-600" },
  { id: "outdoor", name: "Outdoor", icon: Mountain, goal: 4000, reminderInterval: 1, color: "bg-green-600" }
];

export function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [currentBottleIndex, setCurrentBottleIndex] = useState(0);
  const [currentIntake, setCurrentIntake] = useState(0);
  const [ledActive, setLedActive] = useState(false);
  const [lastDrinkTime, setLastDrinkTime] = useState<number>(Date.now());
  const [selectedMode, setSelectedMode] = useState("standard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const user = JSON.parse(storedUser);
    setUserData(user);
    setSelectedMode(user.selectedMode || "standard");

    if (user.bottles && user.bottles.length > 0) {
      setCurrentIntake(user.bottles[currentBottleIndex]?.currentIntake || 0);
    } else {
      setCurrentIntake(user.currentIntake || 0);
    }

    const storedLastDrink = localStorage.getItem('lastDrinkTime');
    if (storedLastDrink) {
      setLastDrinkTime(parseInt(storedLastDrink));
    }
  }, [navigate, currentBottleIndex]);

  useEffect(() => {
    const checkHydrationReminder = () => {
      const now = Date.now();
      const timeSinceLastDrink = now - lastDrinkTime;
      const reminderInterval = 2 * 60 * 60 * 1000;

      if (timeSinceLastDrink >= reminderInterval && !ledActive) {
        setLedActive(true);
        toast.info("💧 Time to hydrate! Your bottle LED is blinking", {
          duration: 10000,
          action: {
            label: "I drank water",
            onClick: () => handleLedDrink(),
          },
        });
      }
    };

    const interval = setInterval(checkHydrationReminder, 60000);
    checkHydrationReminder();

    return () => clearInterval(interval);
  }, [lastDrinkTime, ledActive]);

  if (!userData) {
    return null;
  }

  const isPremium = userData.tier === 'premium';
  const currentMode = modes.find(m => m.id === selectedMode);
  const dailyGoal = currentMode?.goal || userData.dailyGoal || 2500;
  const progress = (currentIntake / dailyGoal) * 100;
  const currentBottle = userData.bottles?.[currentBottleIndex] || null;

  const motivationalQuotes = [
    "Water is the driving force of all nature. - Leonardo da Vinci",
    "Stay hydrated, stay focused!",
    "Your body is 60% water. Keep it flowing!",
    "Hydration is the foundation of health.",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  const mockFriends = [
    { name: "Sarah J.", streak: 15, intake: 2800 },
    { name: "Mike R.", streak: 12, intake: 2600 },
    { name: "Emma L.", streak: 10, intake: 2400 },
    { name: userData.name, streak: userData.streak || 0, intake: currentIntake, isCurrentUser: true },
  ].sort((a, b) => b.streak - a.streak);

  const handleModeChange = (modeId: string) => {
    const mode = modes.find(m => m.id === modeId);
    if (!mode) return;

    setSelectedMode(modeId);
    const updatedUser = {
      ...userData,
      selectedMode: modeId,
      dailyGoal: mode.goal
    };
    setUserData(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    toast.success(`Switched to ${mode.name} Mode!`);
  };

  const handleBottleSwitch = (index: number) => {
    setCurrentBottleIndex(index);
    if (userData.bottles && userData.bottles[index]) {
      setCurrentIntake(userData.bottles[index].currentIntake || 0);
    }
    toast.success(`Switched to ${userData.bottles[index]?.name || `Bottle ${index + 1}`}`);
  };

  const handleAddWater = (amount: number) => {
    const currentMode = modes.find(m => m.id === selectedMode);
    const goalForMode = currentMode?.goal || dailyGoal;
    const newIntake = Math.min(currentIntake + amount, goalForMode);
    setCurrentIntake(newIntake);

    const now = Date.now();
    setLastDrinkTime(now);
    localStorage.setItem('lastDrinkTime', now.toString());

    let updatedUser = { ...userData };

    if (userData.bottles && userData.bottles.length > 0) {
      updatedUser.bottles = userData.bottles.map((bottle: any, index: number) =>
        index === currentBottleIndex ? { ...bottle, currentIntake: newIntake } : bottle
      );
    } else {
      updatedUser.currentIntake = newIntake;
    }

    setUserData(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    if (ledActive) {
      setLedActive(false);
    }

    toast.success(`Added ${amount}ml! Keep going!`);
  };

  const handleBuyAnotherBottle = () => {
    if (userData.tier === 'premium') {
      navigate('/customize');
    } else {
      navigate('/order-default');
    }
  };

  const handleLedDrink = () => {
    const defaultAmount = 250;
    handleAddWater(defaultAmount);
    setLedActive(false);
    toast.success("Great job staying hydrated! 💧");
  };

  const handleTestLed = () => {
    if (!ledActive) {
      setLedActive(true);
      toast.info("LED Alert activated! This is how your bottle will remind you to drink.", {
        duration: 5000,
      });
    }
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 min-h-screen`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
            {sidebarOpen && !isPremium && <h2 className="font-bold text-gray-900">My Bottles</h2>}
            {sidebarOpen && isPremium && <h2 className="font-bold text-gray-900">Settings</h2>}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className={`w-5 h-5 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Bottles List - Default Users Only */}
            {!isPremium && (
              <>
                <div className="space-y-2 mb-6">
                  {userData.bottles?.map((bottle: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleBottleSwitch(index)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        currentBottleIndex === index
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {sidebarOpen ? (
                        <>
                          <div className="flex items-center gap-2 mb-1">
                            <Droplet className="w-4 h-4" />
                            <span className="font-semibold text-sm"> Bottle {index + 1}</span>
                          </div>
                          <p className="text-xs opacity-80">{bottle.specs.size} • {bottle.specs.material}</p>
                        </>
                      ) : (
                        <Droplet className="w-5 h-5 mx-auto" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Buy Another Bottle Button */}
                {sidebarOpen && (
                  <Button
                    onClick={handleBuyAnotherBottle}
                    variant="outline"
                    className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Another Bottle
                  </Button>
                )}
              </>
            )}

            {/* Mode Selector (Premium Only) */}
            {isPremium && sidebarOpen && (
              <>
                <div className="border-t my-6"></div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Hydration Mode</h3>
                <div className="space-y-2">
                  {modes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => handleModeChange(mode.id)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        selectedMode === mode.id
                          ? `${mode.color} text-white`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <mode.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{mode.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Welcome back, {userData.name}!</h1>
              <p className="text-gray-600 mt-1">
                {isPremium ? (
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    <Sparkles className="w-4 h-4" /> Premium Member • {currentMode?.name} Mode
                  </span>
                ) : (
                  <span className="text-gray-700">Default Member • Standard Mode</span>
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="rounded-xl"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {!isPremium && (
            <Card className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl mb-8 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
                  <p className="text-cyan-100 text-sm">
                    Unlock 6 hydration modes, biometric security, social features, and full customization
                  </p>
                </div>
                <Button
                  onClick={() => navigate('/customize', { state: { isUpgrade: true } })}
                  className="bg-white text-blue-600 hover:bg-cyan-50"
                >
                  Upgrade Now
                </Button>
              </div>
            </Card>
          )}

          {currentBottle && (
            <Card className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Current Bottle: {currentBottle.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {currentBottle.specs.size} • {currentBottle.specs.material} • {currentBottle.specs.color}
                    {currentBottle.specs.engraving && ` • "${currentBottle.specs.engraving}"`}
                  </p>
                </div>
              </div>
            </Card>
          )}

          <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {ledActive && (
              <Card className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-lg border-4 border-cyan-300 animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-ping absolute"></div>
                      <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center relative">
                        <Zap className="w-8 h-8 text-yellow-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">💧 LED Alert: Time to Drink!</h3>
                      <p className="text-cyan-100 text-sm">Your smart bottle is reminding you to stay hydrated</p>
                    </div>
                  </div>
                  <Button
                    onClick={handleLedDrink}
                    className="bg-white text-blue-600 hover:bg-cyan-50 px-6 py-6"
                  >
                    I Drank Water (+250ml)
                  </Button>
                </div>
              </Card>
            )}

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Daily Hydration Tracker</h2>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${ledActive ? 'bg-yellow-400 animate-pulse' : 'bg-gray-300'}`}></div>
                  <Droplet className="w-8 h-8 text-cyan-600" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-5xl font-bold text-cyan-600">{currentIntake}ml</span>
                  <span className="text-lg text-gray-600">of {dailyGoal}ml</span>
                </div>
                <Progress value={progress} className="h-4" />
                <p className="text-sm text-gray-600 mt-2">
                  {progress >= 100 ? '🎉 Goal achieved!' : `${Math.round(progress)}% complete`}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => handleAddWater(250)}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 rounded-xl py-6"
                >
                  + 250ml
                </Button>
                <Button
                  onClick={() => handleAddWater(500)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-6"
                >
                  + 500ml
                </Button>
                <Button
                  onClick={() => handleAddWater(750)}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 rounded-xl py-6"
                >
                  + 750ml
                </Button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      ledActive ? 'bg-yellow-400 animate-pulse' : 'bg-gray-200'
                    }`}>
                      {ledActive ? (
                        <Zap className="w-5 h-5 text-yellow-900" />
                      ) : (
                        <Bell className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        LED Reminder Status
                      </p>
                      <p className="text-xs text-gray-600">
                        {ledActive ? 'Active - Drink water now!' : 'Auto-reminds every 2 hours'}
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    ledActive ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {ledActive ? 'BLINKING' : 'STANDBY'}
                  </div>
                </div>
                {!ledActive && (
                  <Button
                    onClick={handleTestLed}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  >
                    Test LED Reminder
                  </Button>
                )}
              </div>

              {isPremium && (
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-600" />
                    <span className="font-semibold text-gray-900">Weekly Insights</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    You're averaging {Math.round(dailyGoal * 0.85)}ml per day this week.
                    Keep up the great work!
                  </p>
                </div>
              )}
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Bottle Location</h2>
                <MapPin className="w-8 h-8 text-red-500" />
              </div>

              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">Last seen: Home Office</p>
                  <p className="text-sm text-gray-600">Updated 2 minutes ago</p>
                </div>
              </div>
            </Card>

            {isPremium && (
              <Card className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg text-white">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Biometric Security</h2>
                  <Fingerprint className="w-8 h-8" />
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Fingerprint Lock</span>
                    <span className="px-3 py-1 bg-green-400 text-green-900 rounded-full text-xs font-bold">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-sm text-cyan-100">
                    Your bottle is secured with biometric authentication. Only you can unlock it.
                  </p>
                </div>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            {userData.orders && userData.orders.length > 0 && (
              <Card className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-lg font-bold text-gray-900">Recent Order</h3>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Order #{userData.orders[userData.orders.length - 1].orderId}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    {new Date(userData.orders[userData.orders.length - 1].orderDate).toLocaleDateString()}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600">Order Confirmed</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Estimated delivery: 5-7 days</p>
                </div>
              </Card>
            )}

            <Card className="p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-6 h-6 text-cyan-600" />
                <h3 className="text-lg font-bold text-gray-900">Daily Motivation</h3>
              </div>
              <p className="text-gray-700 italic leading-relaxed">{randomQuote}</p>
            </Card>

            {isPremium && (
              <Card className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-lg font-bold text-gray-900">Friend Leaderboard</h3>
                </div>

                <div className="space-y-3">
                  {mockFriends.map((friend, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-xl ${
                        friend.isCurrentUser
                          ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          index === 0 ? 'bg-yellow-400 text-yellow-900' :
                          index === 1 ? 'bg-gray-300 text-gray-700' :
                          index === 2 ? 'bg-orange-400 text-orange-900' :
                          'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {friend.name} {friend.isCurrentUser && '(You)'}
                          </p>
                          <p className="text-xs text-gray-600">{friend.intake}ml today</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-cyan-600">{friend.streak} days</p>
                        <p className="text-xs text-gray-500">streak</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
