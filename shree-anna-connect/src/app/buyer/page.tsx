"use client"

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";
import { Filter, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BuyerDashboard() {
  const { products, filters, setFilters, searchQuery, cart } = useApp();

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.farmer.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesMilletType = !filters.milletType || filters.milletType === 'all' || product.type.toLowerCase() === filters.milletType.toLowerCase();
    const matchesRegion = !filters.region || filters.region === 'all' || product.farmer.location.toLowerCase().includes(filters.region.toLowerCase());
    const matchesCertification = !filters.certification || filters.certification === 'all' || product.certification.toLowerCase() === filters.certification.toLowerCase();
    
    let matchesPriceRange = true;
    if (filters.priceRange && filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'low':
          matchesPriceRange = product.price >= 30 && product.price <= 40;
          break;
        case 'medium':
          matchesPriceRange = product.price >= 40 && product.price <= 50;
          break;
        case 'high':
          matchesPriceRange = product.price >= 50;
          break;
      }
    }

    return matchesSearch && matchesMilletType && matchesRegion && matchesCertification && matchesPriceRange;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar userType="buyer" />
      
      {/* Main Content */}
      <div className="md:ml-64">
        <Header userType="buyer" userName="ABC Processors" userInitials="AP" />
        
        <main className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
                <p className="text-gray-600">Discover premium millet products from verified farmers across India.</p>
              </div>
              {cart.length > 0 && (
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/buyer/cart" className="flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-6 shadow-sm">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filters:</span>
                </div>
                <Select value={filters.milletType || 'all'} onValueChange={(value) => setFilters({ milletType: value })}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Millet Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="ragi">Ragi</SelectItem>
                    <SelectItem value="bajra">Bajra</SelectItem>
                    <SelectItem value="foxtail">Foxtail</SelectItem>
                    <SelectItem value="jowar">Jowar</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filters.region || 'all'} onValueChange={(value) => setFilters({ region: value })}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="odisha">Odisha</SelectItem>
                    <SelectItem value="mp">Madhya Pradesh</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filters.certification || 'all'} onValueChange={(value) => setFilters({ certification: value })}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Certification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Certifications</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                    <SelectItem value="fssai">FSSAI</SelectItem>
                    <SelectItem value="apeda">APEDA</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filters.priceRange || 'all'} onValueChange={(value) => setFilters({ priceRange: value })}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">₹30-40/kg</SelectItem>
                    <SelectItem value="medium">₹40-50/kg</SelectItem>
                    <SelectItem value="high">₹50+/kg</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  variant="outline" 
                  onClick={() => setFilters({ milletType: 'all', region: 'all', certification: 'all', priceRange: 'all' })}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setFilters({ milletType: 'all', region: 'all', certification: 'all', priceRange: 'all' })}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button className="bg-green-500 hover:bg-green-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}