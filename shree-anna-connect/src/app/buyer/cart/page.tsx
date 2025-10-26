"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { useApp } from "@/lib/app-context"
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft,
  CreditCard,
  QrCode,
  CheckCircle
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CartPage() {
  const { cart, products, updateCartQuantity, removeFromCart, clearCart, addOrder } = useApp()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [showQRPayment, setShowQRPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  // Get cart items with product details
  const cartItems = cart.map(cartItem => {
    const product = products.find(p => p.id === cartItem.productId)
    return {
      ...cartItem,
      product: product!
    }
  }).filter(item => item.product)

  const totalAmount = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateCartQuantity(productId, newQuantity)
    }
  }

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setShowQRPayment(true)
      setIsCheckingOut(false)
    }, 1000)
  }

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true)
    
    // Create order
    const order = {
      id: `order-${Date.now()}`,
      buyer: "ABC Processors",
      farmer: "Multiple Farmers",
      products: cartItems.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      })),
      totalAmount: totalAmount,
      status: "Confirmed",
      createdAt: new Date().toLocaleDateString(),
      paymentMethod: "QR Code",
      paymentStatus: "Completed"
    }
    
    addOrder(order)
    
    // Clear cart after successful payment
    setTimeout(() => {
      clearCart()
      setShowQRPayment(false)
      setPaymentSuccess(false)
    }, 3000)
  }

  if (cartItems.length === 0 && !showQRPayment && !paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar userType="buyer" />
        <div className="md:ml-64">
          <Header userType="buyer" userName="ABC Processors" userInitials="AP" />
          <main className="p-6">
            <div className="text-center py-16">
              <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add some millet products to get started!</p>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="/buyer">Continue Shopping</Link>
              </Button>
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar userType="buyer" />
        <div className="md:ml-64">
          <Header userType="buyer" userName="ABC Processors" userInitials="AP" />
          <main className="p-6">
            <div className="max-w-md mx-auto text-center py-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">Your order has been confirmed and will be delivered soon.</p>
              <div className="space-y-2">
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Link href="/buyer">Continue Shopping</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/buyer/orders">View Orders</Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (showQRPayment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar userType="buyer" />
        <div className="md:ml-64">
          <Header userType="buyer" userName="ABC Processors" userInitials="AP" />
          <main className="p-6">
            <div className="max-w-md mx-auto">
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <QrCode className="h-6 w-6 text-green-600" />
                    <span>Scan QR Code to Pay</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Fake QR Code */}
                  <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }, (_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-sm ${
                              Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Scan with your UPI app</p>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Items:</span>
                      <span className="font-medium">{totalItems}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">₹{totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery:</span>
                      <span className="font-medium text-green-600">FREE</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span>₹{totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-3">
                    <Button 
                      onClick={handlePaymentSuccess}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Simulate Payment Success
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowQRPayment(false)}
                      className="w-full"
                    >
                      Cancel Payment
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      This is a demo payment simulation for SIH 2024
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    )
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            </div>
            <p className="text-gray-600">Review your items before checkout</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.productId} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                        <img
                          src={`https://images.unsplash.com/photo-1586201375761-83865001e31c?w=80&h=80&fit=crop&crop=center`}
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">{item.product.type} • {item.product.farmer.name}</p>
                        <p className="text-sm text-gray-500">{item.product.farmer.location}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {item.product.certification}
                          </Badge>
                          <span className="text-sm text-gray-600">Quality: {item.product.qualityScore}⭐</span>
                        </div>
                      </div>

                      {/* Price and Quantity */}
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">₹{item.product.price}/kg</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value) || 0)}
                            className="w-16 h-8 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="font-semibold text-green-600 mt-2">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFromCart(item.productId)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="shadow-sm sticky top-6">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items ({totalItems})</span>
                      <span>₹{totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery</span>
                      <span className="text-green-600 font-medium">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes</span>
                      <span>₹0</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isCheckingOut ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Proceed to Checkout
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={clearCart}
                      className="w-full"
                    >
                      Clear Cart
                    </Button>
                  </div>

                  <div className="text-center pt-4 border-t">
                    <p className="text-xs text-gray-500">
                      Secure payment powered by UPI
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

