"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useApp } from "@/lib/app-context"
import { Star, Heart, ShoppingCart, MapPin, Truck, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    type: string
    farmer: {
      name: string
      location: string
    }
    price: number
    quantity: number
    certification: string
    qualityScore: number
    harvestDate: string
  }
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart, cart, updateCartQuantity, removeFromCart } = useApp()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const getProductImage = (type: string) => {
    // Using high-quality placeholder images that represent different millet types
    const imageMap: Record<string, string> = {
      'Ragi': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
      'Bajra': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center',
      'Foxtail': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop&crop=center',
      'Jowar': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
      'Kodo': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop&crop=center',
      'Little Millet': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center'
    }
    return imageMap[type] || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center'
  }

  const getCertificationColor = (cert: string) => {
    switch (cert) {
      case 'Organic': return 'bg-green-100 text-green-800 border-green-200'
      case 'FSSAI': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'APEDA': return 'bg-purple-100 text-purple-800 border-purple-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    addToCart(product.id)
    
    // Simulate API call
    setTimeout(() => {
      setIsAddingToCart(false)
    }, 1000)
  }

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const cartItem = cart.find(item => item.productId === product.id)
  const isInCart = !!cartItem

  return (
    <Card className={cn("group hover:shadow-xl transition-all duration-300 border-0 shadow-sm bg-white", className)}>
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={getProductImage(product.type)}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`h-8 w-8 p-0 bg-white/80 hover:bg-white transition-colors ${
                isFavorited ? 'text-red-500' : 'text-gray-600'
              }`}
              onClick={handleToggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
            </Button>
          </div>
          <div className="absolute top-3 left-3">
            <Badge className={cn("text-xs font-medium", getCertificationColor(product.certification))}>
              {product.certification}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700">{product.qualityScore}</span>
            </div>
          </div>

          {/* Farmer Info */}
          <div className="flex items-center space-x-2 mb-3">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs bg-green-100 text-green-600">
                {product.farmer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span className="font-medium">{product.farmer.name}</span>
              <span>•</span>
              <MapPin className="h-3 w-3" />
              <span>{product.farmer.location}</span>
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
              <span className="text-sm text-gray-500">/kg</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{product.quantity}kg available</p>
              <p className="text-xs text-gray-500">Harvest: {product.harvestDate}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {isInCart ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-green-50 p-2 rounded-lg">
                  <span className="text-sm font-medium text-green-800">In Cart</span>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateCartQuantity(product.id, cartItem.quantity - 1)}
                      className="h-6 w-6 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-6 text-center">{cartItem.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateCartQuantity(product.id, cartItem.quantity + 1)}
                      className="h-6 w-6 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </Button>
              </div>
            ) : (
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 transition-all"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </Button>
            )}
            <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
              View Details
            </Button>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center justify-center mt-3 pt-3 border-t border-gray-100">
            <Truck className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm text-gray-600">Free delivery in 2-3 days</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}