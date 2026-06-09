import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/ui/card";
import { Truck, Package, RotateCcw, Clock } from "lucide-react";

export function ShippingReturns() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Shipping & Returns</h1>
              <p className="text-xl text-gray-600">
                Everything you need to know about shipping and our return policy
              </p>
            </div>

            <Card className="p-8 bg-white rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Shipping Information</h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery Times</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>Standard Shipping:</strong> 5-7 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>Express Shipping:</strong> 2-3 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>International Shipping:</strong> 10-15 business days</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Shipping Costs</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>Standard Shipping:</strong> $10 (Free on orders over $150)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>Express Shipping:</strong> $25</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>International Shipping:</strong> Varies by location (calculated at checkout)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Tracking</h3>
                  <p>
                    Once your order ships, you'll receive a confirmation email with a tracking number.
                    You can also track your order status directly from your HydroSmart dashboard.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Processing Time</h3>
                  <p>
                    All orders are processed within 1-2 business days. Orders placed on weekends or holidays
                    will be processed on the next business day.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <RotateCcw className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Return Policy</h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">30-Day Money-Back Guarantee</h3>
                  <p>
                    We stand behind the quality of our products. If you're not completely satisfied with your
                    HydroSmart bottle, you can return it within 30 days of delivery for a full refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Return Requirements</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span>Product must be in original condition with all accessories and packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span>Must include proof of purchase (order confirmation email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span>Customized/engraved bottles cannot be returned unless defective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span>Bottle must not show signs of use or damage</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Return</h3>
                  <ol className="space-y-3 ml-6 list-decimal">
                    <li>Contact our support team at support@hydrosmart.com to initiate a return</li>
                    <li>Receive your return authorization (RMA) number and return shipping label</li>
                    <li>Pack your item securely in the original packaging</li>
                    <li>Ship the item back using the provided label</li>
                    <li>Receive your refund within 5-7 business days after we receive your return</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Return Shipping Costs</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>Defective Products:</strong> We cover all return shipping costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600">•</span>
                      <span><strong>Change of Mind:</strong> Customer is responsible for return shipping</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Exchanges</h3>
                  <p>
                    If you'd like to exchange your bottle for a different color or model, please contact our
                    support team. We'll arrange the exchange and cover shipping costs for the replacement.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-cyan-50 rounded-2xl border-2 border-cyan-200 mt-8">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-cyan-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-700">
                    If you have any questions about shipping or returns, please contact our support team at{" "}
                    <a href="mailto:support@hydrosmart.com" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                      support@hydrosmart.com
                    </a>{" "}
                    or call us at{" "}
                    <a href="tel:0123456789" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                      012-345-6789
                    </a>
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
