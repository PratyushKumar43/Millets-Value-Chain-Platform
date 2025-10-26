"use client"

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { StatsCard } from "@/components/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";
import { 
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Plus,
  Eye,
  Calendar,
  MapPin
} from "lucide-react";

export default function FarmerDashboard() {
  const { orders, stats, addProduct } = useApp();

  const handleAddProduct = () => {
    const newProduct = {
      id: `product-${Date.now()}`,
      name: "Premium Ragi",
      type: "Ragi",
      farmer: {
        name: "Ramesh Kumar",
        location: "Odisha"
      },
      price: 45,
      quantity: 100,
      certification: "Organic",
      qualityScore: 4.8,
      harvestDate: "2024-01-15"
    };
    addProduct(newProduct);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar userType="farmer" />
      
      {/* Main Content */}
      <div className="md:ml-64">
        <Header userType="farmer" userName="Ramesh Kumar" userInitials="RK" />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Farmer Dashboard</h1>
            <p className="text-gray-600">Welcome back, Ramesh! Here's your farming overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Earnings"
              value={`₹${stats.totalEarnings.toLocaleString()}`}
              change={{ value: 12.5, label: "from last month", positive: true }}
              icon={DollarSign}
              iconColor="text-green-600"
            />
            <StatsCard
              title="Active Listings"
              value={stats.activeListings}
              change={{ value: 8, label: "products live", positive: true }}
              icon={Package}
              iconColor="text-blue-600"
            />
            <StatsCard
              title="Pending Orders"
              value={stats.pendingOrders}
              change={{ value: -2, label: "requires attention", positive: false }}
              icon={ShoppingCart}
              iconColor="text-orange-600"
            />
            <StatsCard
              title="This Month Sales"
              value={`₹${stats.monthlySales.toLocaleString()}`}
              change={{ value: 8.2, label: "from last month", positive: true }}
              icon={TrendingUp}
              iconColor="text-purple-600"
            />
          </div>

          {/* Recent Orders */}
          <Card className="shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Button 
                  className="bg-orange-500 hover:bg-orange-600"
                  onClick={handleAddProduct}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Product
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <ShoppingCart className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">Buyer: {order.buyer}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">Created: {order.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">₹{order.totalAmount.toLocaleString()}</p>
                        <Badge 
                          variant={order.status === 'Confirmed' ? 'default' : 'secondary'}
                          className={order.status === 'Confirmed' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}