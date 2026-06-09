import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Droplet } from "lucide-react";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <Droplet className="w-8 h-8 text-cyan-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              HydroSmart
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              About Us
            </a>
            <a href="/#products" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Subscription Plans
            </a>
            <a href="/contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
