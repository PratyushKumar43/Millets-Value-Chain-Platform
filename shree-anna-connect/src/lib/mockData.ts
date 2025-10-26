// Mock data for Shree Anna Connect platform

export interface Farmer {
  id: string;
  name: string;
  email: string;
  location: string;
  avatar: string;
  kycStatus: 'Pending' | 'Verified';
  joinDate: string;
}

export interface Product {
  id: string;
  name: string;
  type: 'Ragi' | 'Bajra' | 'Foxtail' | 'Jowar' | 'Kodo' | 'Little Millet';
  farmer: Farmer;
  price: number;
  quantity: number;
  certification: 'Organic' | 'FSSAI' | 'APEDA' | 'None';
  image: string;
  description: string;
  harvestDate: string;
  qualityScore: number;
}

export interface Order {
  id: string;
  buyer: string;
  farmer: Farmer;
  products: Product[];
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';
  totalAmount: number;
  createdAt: string;
  deliveryDate?: string;
}

export interface Complaint {
  id: string;
  user: string;
  type: 'Payment' | 'Quality' | 'Delivery' | 'Other';
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
}

// Mock Farmers
export const mockFarmers: Farmer[] = [
  {
    id: 'farmer-1',
    name: 'Ramesh Kumar',
    email: 'ramesh@example.com',
    location: 'Koraput, Odisha',
    avatar: '/avatars/farmer-1.jpg',
    kycStatus: 'Verified',
    joinDate: '2024-01-15'
  },
  {
    id: 'farmer-2',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    location: 'Mandla, Madhya Pradesh',
    avatar: '/avatars/farmer-2.jpg',
    kycStatus: 'Verified',
    joinDate: '2024-02-20'
  },
  {
    id: 'farmer-3',
    name: 'Suresh Patel',
    email: 'suresh@example.com',
    location: 'Karnataka',
    avatar: '/avatars/farmer-3.jpg',
    kycStatus: 'Pending',
    joinDate: '2024-03-10'
  }
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 'product-1',
    name: 'Premium Ragi',
    type: 'Ragi',
    farmer: mockFarmers[0],
    price: 45,
    quantity: 100,
    certification: 'Organic',
    image: '/products/ragi.jpg',
    description: 'High-quality organic ragi grown in traditional methods',
    harvestDate: '2024-08-15',
    qualityScore: 9.2
  },
  {
    id: 'product-2',
    name: 'Golden Bajra',
    type: 'Bajra',
    farmer: mockFarmers[1],
    price: 38,
    quantity: 150,
    certification: 'FSSAI',
    image: '/products/bajra.jpg',
    description: 'Premium bajra with excellent nutritional value',
    harvestDate: '2024-09-01',
    qualityScore: 8.8
  },
  {
    id: 'product-3',
    name: 'Foxtail Millet',
    type: 'Foxtail',
    farmer: mockFarmers[2],
    price: 42,
    quantity: 80,
    certification: 'APEDA',
    image: '/products/foxtail.jpg',
    description: 'Nutritious foxtail millet perfect for health-conscious consumers',
    harvestDate: '2024-07-20',
    qualityScore: 9.0
  },
  {
    id: 'product-4',
    name: 'Jowar Premium',
    type: 'Jowar',
    farmer: mockFarmers[0],
    price: 40,
    quantity: 120,
    certification: 'Organic',
    image: '/products/jowar.jpg',
    description: 'Organic jowar with superior taste and nutrition',
    harvestDate: '2024-08-30',
    qualityScore: 8.9
  }
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'order-1001',
    buyer: 'ABC Processors',
    farmer: mockFarmers[0],
    products: [mockProducts[0]],
    status: 'Confirmed',
    totalAmount: 4500,
    createdAt: '2024-11-01',
    deliveryDate: '2024-11-15'
  },
  {
    id: 'order-1002',
    buyer: 'Shree Foods',
    farmer: mockFarmers[1],
    products: [mockProducts[1]],
    status: 'Shipped',
    totalAmount: 5700,
    createdAt: '2024-10-28',
    deliveryDate: '2024-11-10'
  },
  {
    id: 'order-1003',
    buyer: 'Healthy Grains Co.',
    farmer: mockFarmers[2],
    products: [mockProducts[2]],
    status: 'Pending',
    totalAmount: 3360,
    createdAt: '2024-11-05'
  }
];

// Mock Complaints
export const mockComplaints: Complaint[] = [
  {
    id: 'complaint-50',
    user: 'Farmer Ramesh',
    type: 'Payment',
    description: 'Payment not received for order #1001',
    status: 'Open',
    createdAt: '2024-11-02'
  },
  {
    id: 'complaint-51',
    user: 'ABC Processors',
    type: 'Quality',
    description: 'Quality mismatch in delivered product',
    status: 'In Progress',
    createdAt: '2024-11-01'
  }
];

// Platform Statistics
export const platformStats = {
  totalUsers: 150,
  totalProducts: 450,
  pendingKYC: 5,
  openComplaints: 2,
  totalEarnings: 24500,
  activeListings: 4,
  pendingOrders: 2,
  monthlySales: 8200
};

