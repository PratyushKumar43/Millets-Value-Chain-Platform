"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Logo } from "@/components/logo";
import { useApp } from "@/lib/app-context";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { setUser } = useApp();
  const router = useRouter();

  const handleLogin = (userType: 'farmer' | 'buyer' | 'admin') => {
    // Set user context
    setUser({
      id: `user-${userType}-1`,
      name: userType === 'farmer' ? 'Ramesh Kumar' : userType === 'buyer' ? 'ABC Processors' : 'Admin',
      email: `${userType}@example.com`,
      type: userType,
      avatar: undefined
    });

    // Navigate to appropriate dashboard
    router.push(`/${userType}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Logo size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold text-dark-blue-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your Shree Anna Connect account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Login as</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer/SHG</SelectItem>
                  <SelectItem value="buyer">Buyer/Processor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => handleLogin('farmer')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Login as Farmer
              </Button>
              <Button 
                onClick={() => handleLogin('buyer')}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                Login as Buyer
              </Button>
              <Button 
                onClick={() => handleLogin('admin')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Login as Admin
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-green-600 hover:text-green-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
