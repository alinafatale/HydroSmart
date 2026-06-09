import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Check, Droplet, MapPin, Quote, Fingerprint, Users, Sparkles, Zap, Target, Heart, Award } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BottleCarousel } from "../components/BottleCarousel";

export function ProductComparison() {
  const navigate = useNavigate();

  const handleChooseDefault = () => {
    navigate('/order-default');
  };

  const handleChoosePremium = () => {
    navigate('/customize');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Stay Hydrated, Stay in Control
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              The intelligent water bottle that tracks your intake, reminds you to drink, and keeps you motivated every day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg"
              >
                Explore Now
              </Button>
              <Button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">About HydroSmart</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're revolutionizing hydration through smart technology, health-focused innovation, and sustainable design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower people to achieve optimal hydration through intelligent IoT technology that seamlessly integrates into daily life, promoting health and wellness.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Product Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our smart bottles combine cutting-edge IoT sensors, LED alerts, GPS tracking, and biometric security to create the ultimate hydration companion.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-700 leading-relaxed">
                  Committed to eco-friendly materials and reducing plastic waste. Every HydroSmart bottle helps eliminate 156 single-use plastic bottles per year.
                </p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">500K+</div>
                  <div className="text-cyan-100">Happy Users</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">2.5M</div>
                  <div className="text-cyan-100">Liters Tracked Daily</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">98%</div>
                  <div className="text-cyan-100">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-cyan-100">Countries Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Smart Bottle Collection</h2>
            <p className="text-xl text-gray-600">
              Discover our range of intelligent bottles in various colors and premium designs
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <BottleCarousel />
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Subscription Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect HydroSmart plan that fits your lifestyle and hydration goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white shadow-xl rounded-3xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                  <Droplet className="w-16 h-16 text-gray-800" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Default Plan</h2>
                <p className="text-gray-600">Essential hydration tracking</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-600">/one-time</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 rounded-full mt-1">
                    <Zap className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Smart LED Reminders</p>
                    <p className="text-sm text-gray-600">Bottle lights up every 2 hours to remind you to drink</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-gray-100 rounded-full mt-1">
                    <Check className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Daily Water Intake Tracking</p>
                    <p className="text-sm text-gray-600">Monitor and track your hydration progress</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-gray-100 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Map Tracker (Locate Lost Bottle)</p>
                    <p className="text-sm text-gray-600">Never lose your bottle with GPS tracking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-gray-100 rounded-full mt-1">
                    <Quote className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Motivational Quotes</p>
                    <p className="text-sm text-gray-600">Stay inspired with daily hydration quotes</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl mt-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Fixed Bottle Design:</p>
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 bg-black text-white text-xs rounded-full">Black</span>
                    <span className="px-3 py-1 bg-white border border-gray-300 text-black text-xs rounded-full">White</span>
                  </div>
                  <p className="text-xs text-gray-500">Fixed size • Standard material</p>
                </div>
              </div>

              <Button
                onClick={handleChooseDefault}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-6 rounded-xl text-lg"
              >
                Choose Default
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl rounded-3xl border-2 border-blue-400 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Premium Plan</h2>
                <p className="text-cyan-100">All features + Full customization</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">$99</span>
                  <span className="text-cyan-100">/one-time</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-white/20 backdrop-blur-sm rounded-full mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">All Default Features</p>
                    <p className="text-sm text-cyan-100">LED alerts, tracking, map & quotes included</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-white/20 backdrop-blur-sm rounded-full mt-1">
                    <Fingerprint className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Biometric Fingerprint Lock</p>
                    <p className="text-sm text-cyan-100">Secure drinking access with fingerprint authentication</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-white/20 backdrop-blur-sm rounded-full mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Daily Streak with Friends</p>
                    <p className="text-sm text-cyan-100">Compete on leaderboard and stay motivated together</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mt-6 border border-white/20">
                  <p className="text-sm font-semibold text-white mb-2">Full Customization:</p>
                  <ul className="space-y-1 text-sm text-cyan-100">
                    <li>• Choose your bottle size</li>
                    <li>• Select premium materials (plastic, stainless steel)</li>
                    <li>• Wide range of color options</li>
                    <li>• LED light color customization</li>
                    <li>• Personalized name engraving</li>
                    <li>• Advanced analytics & insights</li>
                  </ul>
                </div>
              </div>

              <Button
                onClick={handleChoosePremium}
                className="w-full bg-white text-blue-600 hover:bg-cyan-50 py-6 rounded-xl text-lg font-semibold"
              >
                Upgrade to Premium
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
