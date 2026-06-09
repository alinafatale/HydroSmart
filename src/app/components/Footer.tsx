import { Droplet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">HydroSmart</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              The intelligent water bottle that tracks, reminds, and motivates you to stay hydrated every day.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="/#products" className="hover:text-cyan-400 transition-colors">Subscription Plans</a></li>
              <li><a href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
              <li><a href="/shipping-returns" className="hover:text-cyan-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="/warranty" className="hover:text-cyan-400 transition-colors">Warranty</a></li>
              <li><a href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:support@hydrosmart.com" className="hover:text-cyan-400 transition-colors">
                    support@hydrosmart.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:0123456789" className="hover:text-cyan-400 transition-colors">
                    012-345-6789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p>International Islamic University Malaysia<br />Gombak, Selangor</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 HydroSmart. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="/terms-of-service" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms</a>
              <a href="/contact" className="text-gray-500 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
