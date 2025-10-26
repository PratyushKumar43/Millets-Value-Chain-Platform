"use client"

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { StatsCard } from "@/components/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-context";
import { 
  Users,
  Package,
  ShoppingCart,
  Flag,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Eye
} from "lucide-react";

export default function AdminDashboard() {
  const { stats, complaints, updateComplaintStatus } = useApp();

  const handleResolveComplaint = (complaintId: string) => {
    updateComplaintStatus(complaintId, 'Resolved');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar userType="admin" />
      
      {/* Main Content */}
      <div className="md:ml-64">
        <Header userType="admin" userName="Admin" userInitials="AD" />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Platform overview and management tools.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Users"
              value={stats.totalUsers}
              change={{ value: 12, label: "this month", positive: true }}
              icon={Users}
              iconColor="text-blue-600"
            />
            <StatsCard
              title="Total Products"
              value={stats.totalProducts}
              change={{ value: 8, label: "this month", positive: true }}
              icon={Package}
              iconColor="text-green-600"
            />
            <StatsCard
              title="Pending KYC"
              value={stats.pendingKYC}
              change={{ value: -2, label: "needs attention", positive: false }}
              icon={CheckCircle}
              iconColor="text-orange-600"
            />
            <StatsCard
              title="Open Complaints"
              value={stats.openComplaints}
              change={{ value: 1, label: "requires action", positive: false }}
              icon={Flag}
              iconColor="text-red-600"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>User Signups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">User signups chart will be displayed here</p>
                    <p className="text-sm text-gray-400">Using Recharts library</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Product Listings by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Product distribution chart will be displayed here</p>
                    <p className="text-sm text-gray-400">Using Recharts library</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Complaints */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">New farmer registration</p>
                      <p className="text-xs text-gray-600">Priya Sharma joined the platform</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Package className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">New product listed</p>
                      <p className="text-xs text-gray-600">Ramesh Kumar added Premium Ragi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <ShoppingCart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Order completed</p>
                      <p className="text-xs text-gray-600">Order #1002 delivered successfully</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Recent Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complaints.map((complaint) => (
                    <div key={complaint.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          complaint.status === 'Open' ? 'bg-red-100' :
                          complaint.status === 'In Progress' ? 'bg-orange-100' :
                          'bg-green-100'
                        }`}>
                          <Flag className={`h-4 w-4 ${
                            complaint.status === 'Open' ? 'text-red-600' :
                            complaint.status === 'In Progress' ? 'text-orange-600' :
                            'text-green-600'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Complaint #{complaint.id}</p>
                          <p className="text-xs text-gray-600">{complaint.user} - {complaint.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="secondary"
                          className={`${
                            complaint.status === 'Open' ? 'bg-red-100 text-red-800' :
                            complaint.status === 'In Progress' ? 'bg-orange-100 text-orange-800' :
                            'bg-green-100 text-green-800'
                          }`}
                        >
                          {complaint.status}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2"
                          onClick={() => handleResolveComplaint(complaint.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Resolve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}