import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MapPin, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ProductShowcaseCardProps {
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

export function ProductShowcaseCard({ product, className }: ProductShowcaseCardProps) {
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

          {/* Product Description */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Premium quality {product.type.toLowerCase()} from verified organic farms. 
              Rich in nutrients and perfect for healthy cooking.
            </p>
          </div>

          {/* View Products Button */}
          <div className="pt-3 border-t border-gray-100">
            <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2">
              <Link href="/buyer" className="flex items-center justify-center">
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}