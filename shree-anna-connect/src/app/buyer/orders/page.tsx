"use client"

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";
import { 
  ShoppingCart,
  Calendar,
  MapPin,
  Package,
  Eye,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const { orders } = useApp();

  const buyerOrders = orders.filter(order => order.buyer === "ABC Processors");

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar userType="buyer" />
      
      {/* Main Content */}
      <div className="md:ml-64">
        <Header userType="buyer" userName="ABC Processors" userInitials="AP" />
        
        <main className="p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/buyer" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Marketplace</span>
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
            </div>
            <p className="text-gray-600">Track your millet orders and delivery status</p>
          </div>

          {buyerOrders.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
              <p className="text-gray-600 mb-6">Start shopping to see your orders here!</p>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="/buyer">Start Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {buyerOrders.map((order) => (
                <Card key={order.id} className="shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Package className="h-5 w-5 text-green-600" />
                          <span>Order #{order.id}</span>
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          Placed on {order.createdAt}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={order.status === 'Confirmed' ? 'default' : 'secondary'}
                          className={order.status === 'Confirmed' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {order.status}
                        </Badge>
                        <p className="text-lg font-bold text-gray-900 mt-2">
                          ₹{order.totalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Order Items */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Order Items:</h4>
                        <div className="space-y-2">
                          {order.products.map((product, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <p className="font-medium text-gray-900">{product.name}</p>
                                <p className="text-sm text-gray-600">Quantity: {product.quantity}kg</p>
                              </div>
                              <p className="font-medium text-gray-900">
                                ₹{(product.price * product.quantity).toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Order Details */}
                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">Order Date: {order.createdAt}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">Delivery: 2-3 business days</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Track Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

