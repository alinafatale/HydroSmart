import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

export function Warranty() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Warranty Information</h1>
              <p className="text-xl text-gray-600">
                Your HydroSmart bottle is protected by our comprehensive warranty
              </p>
            </div>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">2-Year Limited Warranty</h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  HydroSmart provides a 2-year limited warranty on all bottles from the date of purchase.
                  This warranty covers defects in materials and workmanship under normal use.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Covered</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>LED light malfunction or failure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>GPS tracking system defects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Biometric fingerprint sensor issues (Premium only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Battery performance below specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Manufacturing defects in materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Structural integrity issues (cracks, leaks not caused by damage)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Bluetooth connectivity problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Mobile app synchronization issues caused by hardware</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What's NOT Covered</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Accidental damage, drops, or impacts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Water damage from improper sealing or user error</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Normal wear and tear (scratches, discoloration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Damage from unauthorized repairs or modifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Loss or theft of the product</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Cosmetic damage that doesn't affect functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Damage from extreme temperatures or environmental conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Software issues or app-related problems (covered separately)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to File a Warranty Claim</h2>

              <div className="space-y-6 text-gray-700">
                <ol className="space-y-4 ml-6 list-decimal">
                  <li>
                    <strong>Contact Support:</strong> Email us at support@hydrosmart.com with your order number
                    and a description of the issue
                  </li>
                  <li>
                    <strong>Provide Documentation:</strong> Include photos/videos of the defect and proof of purchase
                  </li>
                  <li>
                    <strong>Diagnosis:</strong> Our team will review your claim within 2 business days
                  </li>
                  <li>
                    <strong>Resolution:</strong> If approved, we'll either:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Send a replacement bottle</li>
                      <li>• Provide a return label for repair</li>
                      <li>• Issue a full refund (if replacement unavailable)</li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
                  <p className="text-sm">
                    <strong>Note:</strong> Warranty claims require proof of purchase. Please keep your order
                    confirmation email for warranty purposes.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Extended Warranty (Optional)</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Extend your coverage with HydroSmart Protection Plus for an additional 2 years (total 4 years).
                </p>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Protection Plus Benefits:</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>4 years total coverage (2 years standard + 2 years extended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Covers one accidental damage incident</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Priority customer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Free battery replacement (after 2 years)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-lg font-semibold">Price: $19.99</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Important Information</h3>
                  <p className="text-gray-700">
                    This warranty gives you specific legal rights, and you may also have other rights which vary
                    by jurisdiction. For full warranty terms and conditions, please review our complete warranty
                    policy document provided with your purchase.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
