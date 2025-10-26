import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Logo size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold text-dark-blue-800">Join Our Community</h1>
          <p className="text-gray-600 mt-2">Create your Shree Anna Connect account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>
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
              <Label htmlFor="role">I am a</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer/SHG</SelectItem>
                  <SelectItem value="buyer">Buyer/Processor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                type="text" 
                placeholder="Enter your location"
                className="w-full"
              />
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Create Account
            </Button>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
