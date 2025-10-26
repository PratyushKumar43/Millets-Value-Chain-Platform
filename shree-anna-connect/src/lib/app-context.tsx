"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { mockProducts, mockOrders, mockComplaints, platformStats } from '@/lib/mockData'

interface User {
  id: string
  name: string
  email: string
  type: 'farmer' | 'buyer' | 'admin'
  avatar?: string
}

interface CartItem {
  productId: string
  quantity: number
}

interface FiltersType {
  milletType: string
  region: string
  certification: string
  priceRange: string
}

interface AppContextType {
  // User state
  user: User | null
  setUser: (user: User | null) => void
  
  // Cart state
  cart: CartItem[]
  addToCart: (productId: string, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  
  // Search and filters
  searchQuery: string
  setSearchQuery: (query: string) => void
  filters: FiltersType
  setFilters: (filters: Partial<FiltersType>) => void
  
  // Orders
  orders: typeof mockOrders
  addOrder: (order: any) => void
  updateOrderStatus: (orderId: string, status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled') => void
  
  // Products
  products: typeof mockProducts
  addProduct: (product: any) => void
  updateProduct: (productId: string, updates: any) => void
  
  // Complaints
  complaints: typeof mockComplaints
  addComplaint: (complaint: any) => void
  updateComplaintStatus: (complaintId: string, status: 'Open' | 'In Progress' | 'Resolved') => void
  
  // Stats
  stats: typeof platformStats
  updateStats: (updates: Partial<typeof platformStats>) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFiltersState] = useState<FiltersType>({
    milletType: 'all',
    region: 'all',
    certification: 'all',
    priceRange: 'all'
  })

  const setFilters = (newFilters: Partial<FiltersType>) => {
    setFiltersState(prev => ({ ...prev, ...newFilters }))
  }
  const [orders, setOrders] = useState(mockOrders)
  const [products, setProducts] = useState(mockProducts)
  const [complaints, setComplaints] = useState(mockComplaints)
  const [stats, setStats] = useState(platformStats)

  const addToCart = (productId: string, quantity = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.productId === productId)
      if (existingItem) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId))
  }

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const addOrder = (order: any) => {
    setOrders(prev => [...prev, order])
  }

  const updateOrderStatus = (orderId: string, status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled') => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    )
  }

  const addProduct = (product: any) => {
    setProducts(prev => [...prev, product])
  }

  const updateProduct = (productId: string, updates: any) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === productId ? { ...product, ...updates } : product
      )
    )
  }

  const addComplaint = (complaint: any) => {
    setComplaints(prev => [...prev, complaint])
  }

  const updateComplaintStatus = (complaintId: string, status: 'Open' | 'In Progress' | 'Resolved') => {
    setComplaints(prev =>
      prev.map(complaint =>
        complaint.id === complaintId ? { ...complaint, status } : complaint
      )
    )
  }

  const updateStats = (updates: Partial<typeof platformStats>) => {
    setStats(prev => ({ ...prev, ...updates }))
  }

  const value: AppContextType = {
    user,
    setUser,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    orders,
    addOrder,
    updateOrderStatus,
    products,
    addProduct,
    updateProduct,
    complaints,
    addComplaint,
    updateComplaintStatus,
    stats,
    updateStats
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

