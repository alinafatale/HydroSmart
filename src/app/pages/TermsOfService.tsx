import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { FileText, Scale, AlertTriangle } from "lucide-react";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600">
                Last updated: June 7, 2026
              </p>
            </div>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <p className="text-gray-700">
                Welcome to HydroSmart. By accessing or using our products, website, mobile application, and services
                (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). Please read
                them carefully.
              </p>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  By creating an account, making a purchase, or using our Services, you confirm that you:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Are at least 13 years old (or have parental consent)</li>
                  <li>• Have the legal capacity to enter into a binding agreement</li>
                  <li>• Will comply with all applicable laws and regulations</li>
                  <li>• Accept these Terms and our Privacy Policy</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Account Registration</h2>

              <div className="space-y-4 text-gray-700">
                <p>To access certain features, you must create an account:</p>
                <ul className="space-y-2 ml-6">
                  <li>• Provide accurate, current, and complete information</li>
                  <li>• Maintain the security of your password and account</li>
                  <li>• Promptly update your account information</li>
                  <li>• Accept responsibility for all activities under your account</li>
                  <li>• Notify us immediately of any unauthorized use</li>
                </ul>
                <p className="mt-4">
                  You may not share your account credentials or allow others to access your account. HydroSmart
                  reserves the right to suspend or terminate accounts that violate these Terms.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Product Purchase and Payment</h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pricing</h3>
                  <p>
                    All prices are in USD and subject to change without notice. We reserve the right to correct
                    pricing errors and cancel orders affected by such errors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Payment must be made in full before shipping</li>
                    <li>• We accept credit cards, FPX, and e-wallet payments</li>
                    <li>• All transactions are processed securely through third-party providers</li>
                    <li>• You authorize us to charge your payment method for all fees incurred</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Confirmation</h3>
                  <p>
                    Receipt of an order confirmation does not constitute acceptance of your order. We reserve
                    the right to refuse or cancel orders for any reason, including product availability, errors
                    in pricing, or suspected fraud.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Product Usage and Limitations</h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proper Use</h3>
                  <p>You agree to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Use the product only as intended and according to instructions</li>
                    <li>• Not disassemble, modify, or reverse-engineer the device</li>
                    <li>• Not attempt to bypass security features (biometric lock, GPS)</li>
                    <li>• Keep firmware and software updated for optimal performance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Limitations</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• GPS tracking requires cellular/WiFi connectivity</li>
                    <li>• Battery life varies based on usage and settings</li>
                    <li>• LED and sensors may degrade over time with normal use</li>
                    <li>• Accuracy of hydration tracking is approximate</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Intellectual Property</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  All content, features, and functionality of the Services, including but not limited to text,
                  graphics, logos, software, and design, are owned by HydroSmart and protected by intellectual
                  property laws.
                </p>
                <p>You may not:</p>
                <ul className="space-y-2 ml-6">
                  <li>• Copy, reproduce, or distribute our content without permission</li>
                  <li>• Use our trademarks, logos, or brand elements</li>
                  <li>• Create derivative works based on our Services</li>
                  <li>• Attempt to extract source code from our software</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. User Data and Privacy</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Your use of the Services is also governed by our Privacy Policy. By using the Services, you
                  consent to our collection, use, and sharing of your data as described in the Privacy Policy.
                </p>
                <p>
                  You retain ownership of your personal hydration data. We use this data to provide and improve
                  our Services. You may request deletion of your data at any time.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">7. Disclaimer of Warranties</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">
                  THE SERVICES AND PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
                </p>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, HYDROSMART DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                  INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Merchantability and fitness for a particular purpose</li>
                  <li>• Non-infringement of third-party rights</li>
                  <li>• Accuracy, reliability, or completeness of information</li>
                  <li>• Uninterrupted or error-free operation</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mt-4">
                  <p className="text-sm">
                    <strong>Medical Disclaimer:</strong> HydroSmart products are not medical devices and should not
                    be used to diagnose, treat, or prevent any medical condition. Consult a healthcare professional
                    for personalized health advice.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Scale className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">8. Limitation of Liability</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HYDROSMART SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Loss of profits, data, or business opportunities</li>
                  <li>• Personal injury or property damage</li>
                  <li>• Service interruptions or data breaches</li>
                  <li>• Reliance on hydration recommendations</li>
                </ul>
                <p className="mt-4">
                  Our total liability for any claim shall not exceed the amount you paid for the product or
                  service in the 12 months preceding the claim.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  We may suspend or terminate your account and access to the Services at any time, without notice,
                  for conduct that we believe:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Violates these Terms or applicable laws</li>
                  <li>• Is harmful to other users or our business</li>
                  <li>• Exposes us to legal liability</li>
                  <li>• Is fraudulent or abusive</li>
                </ul>
                <p className="mt-4">
                  Upon termination, your right to use the Services will immediately cease. We are not liable
                  for any loss or damage resulting from termination.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law and Disputes</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms are governed by the laws of Malaysia, without regard to conflict of law principles.
                  Any disputes arising from these Terms or the Services shall be resolved through:
                </p>
                <ol className="space-y-2 ml-6 list-decimal">
                  <li>Informal negotiation (30 days)</li>
                  <li>Mediation (if negotiation fails)</li>
                  <li>Binding arbitration in Selangor, Malaysia</li>
                </ol>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of material changes via:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Email to your registered address</li>
                  <li>• In-app notification</li>
                  <li>• Notice on our website</li>
                </ul>
                <p className="mt-4">
                  Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Miscellaneous</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and HydroSmart
                  regarding the Services.
                </p>
                <p>
                  <strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain
                  in full force.
                </p>
                <p>
                  <strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.
                </p>
                <p>
                  <strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign our rights
                  and obligations without restriction.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-cyan-50 rounded-2xl border-2 border-cyan-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700">
                If you have questions about these Terms of Service:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Email: <a href="mailto:legal@hydrosmart.com" className="text-cyan-600 hover:text-cyan-700 font-semibold">legal@hydrosmart.com</a></li>
                <li>Phone: <a href="tel:0123456789" className="text-cyan-600 hover:text-cyan-700 font-semibold">012-345-6789</a></li>
                <li>Address: International Islamic University Malaysia, Gombak, Selangor</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
