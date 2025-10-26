"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Settings, 
  Users,
  Store,
  Heart,
  MapPin,
  Flag,
  ChevronRight,
  Menu
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface SidebarProps {
  className?: string
  userType?: 'farmer' | 'buyer' | 'admin'
}

const navigation = {
  farmer: [
    {
      title: "Overview",
      href: "/farmer",
      icon: BarChart3,
    },
    {
      title: "My Products",
      href: "/farmer/products",
      icon: Package,
    },
    {
      title: "Orders",
      href: "/farmer/orders",
      icon: ShoppingCart,
    },
    {
      title: "Analytics",
      href: "/farmer/analytics",
      icon: BarChart3,
    },
  ],
  buyer: [
    {
      title: "Marketplace",
      href: "/buyer",
      icon: Store,
    },
    {
      title: "Shopping Cart",
      href: "/buyer/cart",
      icon: ShoppingCart,
    },
    {
      title: "My Orders",
      href: "/buyer/orders",
      icon: Package,
    },
    {
      title: "Favorites",
      href: "/buyer/favorites",
      icon: Heart,
    },
    {
      title: "Traceability",
      href: "/buyer/traceability",
      icon: MapPin,
    },
  ],
  admin: [
    {
      title: "Overview",
      href: "/admin",
      icon: BarChart3,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      title: "Complaints",
      href: "/admin/complaints",
      icon: Flag,
    },
  ]
}

export function Sidebar({ className, userType = 'farmer' }: SidebarProps) {
  const [open, setOpen] = useState(false)
  
  const navItems = navigation[userType] || navigation.farmer

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Desktop Sidebar */}
      <div className={cn("hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0", className)}>
        <div className="flex flex-col flex-grow pt-5 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Logo />
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <Link
                href="/settings"
                className="flex-shrink-0 w-full group block"
              >
                <div className="flex items-center">
                  <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                    Settings
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center px-4 py-4 border-b">
              <Logo />
            </div>
            <ScrollArea className="flex-1 px-4 py-4">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                    {item.title}
                  </Link>
                ))}
              </nav>
            </ScrollArea>
            <div className="border-t border-gray-200 p-4">
              <Link
                href="/settings"
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                onClick={() => setOpen(false)}
              >
                <Settings className="mr-3 h-5 w-5 text-gray-400" />
                Settings
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
