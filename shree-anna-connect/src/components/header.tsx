"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useApp } from "@/lib/app-context"
import { 
  Search, 
  Bell, 
  ShoppingCart, 
  User,
  Menu,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface HeaderProps {
  userType?: 'farmer' | 'buyer' | 'admin'
  userName?: string
  userInitials?: string
}

export function Header({ userType = 'farmer', userName = 'User', userInitials = 'U' }: HeaderProps) {
  const { searchQuery, setSearchQuery, cart } = useApp()
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const getSearchPlaceholder = () => {
    switch (userType) {
      case 'farmer': return "Search products, orders..."
      case 'buyer': return "Search millet products..."
      case 'admin': return "Search users, products..."
      default: return "Search..."
    }
  }

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 md:px-6">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={getSearchPlaceholder()}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg transition-all ${
                isSearchFocused ? 'ring-2 ring-green-500 border-green-500' : 'focus:ring-2 focus:ring-green-500 focus:border-transparent'
              }`}
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart for buyers */}
          {userType === 'buyer' && (
            <Button asChild variant="ghost" size="sm" className="relative">
              <Link href="/buyer/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>
          )}

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></Badge>
          </Button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-green-100 text-green-600 font-medium">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500 capitalize">{userType}</p>
            </div>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
