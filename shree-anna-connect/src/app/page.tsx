"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { ProductShowcaseCard } from "@/components/product-showcase-card";
import { useApp } from "@/lib/app-context";
import { 
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  Star,
  Truck,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Package,
  MapPin
} from "lucide-react";

export default function LandingPage() {
  const { searchQuery, setSearchQuery, products } = useApp();

  const handleSearch = () => {
    // Navigate to buyer dashboard with search query
    window.location.href = `/buyer?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for millet products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </Button>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <a href="/login">Sign In</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Modern E-commerce Style */}
      <section className="bg-gradient-to-r from-green-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                  🚀 India's Leading Millet Marketplace
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fresh Millets from{" "}
                  <span className="text-green-600">Farm to Table</span>
          </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect directly with verified farmers. Get premium quality millets with complete traceability and fair pricing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                  <a href="/buyer">Shop Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-4">
                  <a href="/signup">Sell Your Millets</a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">500+ Verified Farmers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">100% Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Free Delivery</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-green-100 to-green-200 border-0">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">500+ Farmers</h3>
                      <p className="text-xs text-gray-600">Verified & Trusted</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-100 to-orange-200 border-0">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">1000+ Products</h3>
                      <p className="text-xs text-gray-600">Fresh & Organic</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-0">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">₹50L+ Sales</h3>
                      <p className="text-xs text-gray-600">This Year</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">25+ States</h3>
                      <p className="text-xs text-gray-600">Pan India</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-green-600">Millet Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover premium quality millets from verified farmers across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductShowcaseCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href="/buyer">View All Products</a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-green-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to connect farmers with buyers and create a sustainable millet ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Farmers List Products</h3>
              <p className="text-gray-600">
                Verified farmers upload their millet products with quality certificates and transparent pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Buyers Browse & Order</h3>
              <p className="text-gray-600">
                Buyers explore products, check traceability, and place orders with secure payment options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Delivery</h3>
              <p className="text-gray-600">
                Products are delivered fresh with complete traceability and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Farmers & Buyers Nationwide
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of satisfied farmers and buyers who trust our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Verified Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Satisfied Buyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Tonnes Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Logo className="mb-4" />
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering farmers and connecting buyers through technology. 
                Building a sustainable millet ecosystem for India's future.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Shree Anna Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}