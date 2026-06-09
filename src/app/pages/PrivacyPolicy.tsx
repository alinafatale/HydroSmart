import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Shield, Lock, Eye, Database } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">
                Last updated: June 7, 2026
              </p>
            </div>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <p className="text-gray-700 mb-6">
                At HydroSmart, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our smart water bottle products and services.
              </p>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Name, email address, and phone number</li>
                    <li>• Shipping and billing addresses</li>
                    <li>• Payment information (processed securely through third-party providers)</li>
                    <li>• Account credentials (username, password)</li>
                    <li>• Profile preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hydration Data</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Daily water intake records</li>
                    <li>• Hydration goals and activity levels</li>
                    <li>• Drinking patterns and habits</li>
                    <li>• Reminder preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Device Information</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Bottle serial number and model</li>
                    <li>• GPS location data (when location tracking is enabled)</li>
                    <li>• Bluetooth connection logs</li>
                    <li>• Battery and sensor performance data</li>
                    <li>• Firmware version and update history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• App usage statistics and interaction data</li>
                    <li>• Feature preferences and settings</li>
                    <li>• Social features activity (friend connections, leaderboards)</li>
                    <li>• Customer support interactions</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Product Functionality:</strong> To operate your smart bottle features, including hydration tracking, LED reminders, and GPS location services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Personalization:</strong> To customize your experience and provide personalized hydration recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Order Processing:</strong> To fulfill orders, process payments, and deliver products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Customer Support:</strong> To respond to inquiries, troubleshoot issues, and provide assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Product Improvements:</strong> To analyze usage patterns and improve our products and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Communications:</strong> To send order updates, product announcements, and promotional offers (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <Lock className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Secure authentication and biometric access (Premium)</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Limited employee access to personal data</li>
                  <li>• Secure cloud infrastructure with backup systems</li>
                  <li>• Compliance with international data protection standards</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>

              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                  <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li>• <strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li>• <strong>Data Portability:</strong> Receive your data in a machine-readable format</li>
                  <li>• <strong>Restriction:</strong> Limit how we process your data</li>
                  <li>• <strong>Object:</strong> Object to certain types of data processing</li>
                </ul>

                <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200 mt-4">
                  <p className="text-sm">
                    To exercise these rights, contact us at <strong>privacy@hydrosmart.com</strong>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>

              <div className="space-y-4 text-gray-700">
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>Service Providers:</strong> Third-party companies that help us operate our business
                    (payment processors, shipping carriers, cloud hosting)
                  </li>
                  <li>
                    <strong>Analytics Partners:</strong> To understand usage patterns and improve our products
                    (data is anonymized)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location Data</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Our GPS tracking feature collects location data to help you find your bottle. You can:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Enable or disable location tracking at any time in app settings</li>
                  <li>• View and delete your location history</li>
                  <li>• Choose to share location only when the app is in use</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Location data is encrypted and only accessible to you and authorized support staff for
                  troubleshooting purposes.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect personal
                  information from children under 13. If you believe we have collected information from a
                  child under 13, please contact us immediately.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes via:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Email notification</li>
                  <li>• In-app notification</li>
                  <li>• Notice on our website</li>
                </ul>
                <p className="mt-4">
                  Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-cyan-50 rounded-2xl border-2 border-cyan-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or our privacy practices:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Email: <a href="mailto:privacy@hydrosmart.com" className="text-cyan-600 hover:text-cyan-700 font-semibold">privacy@hydrosmart.com</a></li>
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
