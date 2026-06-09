import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is HydroSmart?",
        a: "HydroSmart is an intelligent water bottle that tracks your daily water intake, reminds you to stay hydrated with LED alerts, and helps you maintain optimal hydration levels throughout the day."
      },
      {
        q: "How does the smart bottle work?",
        a: "The bottle uses IoT sensors to track when you drink water, connects to your smartphone via Bluetooth, and syncs data to your dashboard. The LED light reminds you every 2 hours to drink water based on your hydration goals."
      },
      {
        q: "What's the difference between Default and Premium plans?",
        a: "Default ($49) includes basic tracking, LED reminders, GPS location, and motivational quotes with fixed bottle design (black/white only). Premium ($99) adds biometric fingerprint lock, friend leaderboards, full customization (size, material, colors, engraving), multiple hydration modes, and advanced analytics."
      }
    ]
  },
  {
    category: "Features",
    questions: [
      {
        q: "How accurate is the water intake tracking?",
        a: "Our smart sensors provide approximately 95% accuracy in tracking your water consumption. The bottle measures the change in water level to calculate intake automatically when you respond to LED alerts."
      },
      {
        q: "Can I track my bottle if I lose it?",
        a: "Yes! Both Default and Premium plans include GPS tracking. You can view your bottle's last known location on the map tracker in your dashboard."
      },
      {
        q: "What are the different hydration modes (Premium)?",
        a: "Premium users can choose from 6 modes: Standard (2.5L, 2h reminders), Gym (3.5L, 1h), Work (2.8L, 1.5h), Sleep (500ml, 6h), Travel (3L, 2.5h), and Outdoor (4L, 1h). Each mode adjusts your daily goal and reminder frequency."
      },
      {
        q: "How does the biometric fingerprint lock work?",
        a: "Premium bottles feature a built-in fingerprint sensor on the cap. You can register up to 5 fingerprints and the bottle will only unlock when it detects an authorized fingerprint, preventing unauthorized access."
      }
    ]
  },
  {
    category: "Account & Billing",
    questions: [
      {
        q: "Can I upgrade from Default to Premium?",
        a: "Yes! You can upgrade anytime from your dashboard. You'll keep the same User ID and all your hydration data. Just pay the $50 difference and enjoy all Premium features immediately."
      },
      {
        q: "Can I buy multiple bottles with the same account?",
        a: "Absolutely! You can purchase additional bottles and they'll all be linked to your account. Switch between bottles in your dashboard sidebar (Bottle 1, Bottle 2, etc.)."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, FPX (online banking), and e-wallet payments (GrabPay, Touch 'n Go, etc.). All transactions are processed securely."
      },
      {
        q: "Is there a subscription fee?",
        a: "No! Both Default and Premium are one-time purchases. You pay once and own the bottle forever with no recurring fees."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "How long does the battery last?",
        a: "The bottle battery lasts approximately 7-10 days with normal use. Charging takes about 2 hours via USB-C cable (included). You'll receive low battery notifications in the app."
      },
      {
        q: "Is the bottle waterproof?",
        a: "Yes! The bottle is IPX7 waterproof rated and can be submerged in water up to 1 meter for 30 minutes. However, we recommend hand washing only to preserve the electronic components."
      },
      {
        q: "What smartphone compatibility is required?",
        a: "The HydroSmart app works on iOS 13+ and Android 8+. Your phone needs Bluetooth 4.0 or higher for bottle connectivity."
      },
      {
        q: "Can I use the bottle without a smartphone?",
        a: "Yes! The LED reminder function works independently. However, you'll need the app to view detailed tracking data, change settings, and access advanced features."
      }
    ]
  },
  {
    category: "Shipping & Returns",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days within Malaysia. Express shipping (2-3 days) is available for $25. International shipping takes 10-15 business days."
      },
      {
        q: "What is your return policy?",
        a: "We offer a 30-day money-back guarantee. If you're not satisfied, return the bottle in original condition for a full refund. Note: Customized/engraved bottles can only be returned if defective."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes! We ship to over 15 countries. Shipping costs vary by location and are calculated at checkout."
      }
    ]
  }
];

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev =>
      prev.includes(key) ? prev.filter(item => item !== key) : [...prev, key]
    );
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      qa =>
        qa.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about HydroSmart
              </p>
            </div>

            <Card className="p-6 bg-white rounded-2xl shadow-lg mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search questions..."
                  className="pl-12 h-14 rounded-xl text-lg"
                />
              </div>
            </Card>

            <div className="space-y-8">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
                    <div className="space-y-3">
                      {category.questions.map((qa, qIndex) => {
                        const key = `${category.category}-${qIndex}`;
                        const isOpen = openItems.includes(key);

                        return (
                          <Card
                            key={qIndex}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                          >
                            <button
                              onClick={() => toggleItem(category.category, qIndex)}
                              className="w-full p-6 text-left flex items-center justify-between gap-4"
                            >
                              <span className="font-semibold text-gray-900 text-lg">{qa.q}</span>
                              {isOpen ? (
                                <ChevronUp className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                              )}
                            </button>

                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="border-t pt-4">
                                  <p className="text-gray-700 leading-relaxed">{qa.a}</p>
                                </div>
                              </div>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <Card className="p-12 bg-white rounded-2xl shadow-lg text-center">
                  <p className="text-gray-600 text-lg">No questions found matching "{searchTerm}"</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or browse all categories above</p>
                </Card>
              )}
            </div>

            <Card className="p-6 bg-cyan-50 rounded-2xl border-2 border-cyan-200 mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-700 mb-4">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
              >
                Contact Support
              </a>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
