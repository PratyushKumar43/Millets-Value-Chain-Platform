import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    label: string
    positive?: boolean
  }
  icon: LucideIcon
  iconColor?: string
  className?: string
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  iconColor = "text-blue-600",
  className 
}: StatsCardProps) {
  return (
    <Card className={cn("border-0 shadow-sm hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <div className="flex items-center space-x-1">
                {change.positive ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={cn(
                  "text-xs font-medium",
                  change.positive ? "text-green-600" : "text-red-600"
                )}>
                  {change.value > 0 ? '+' : ''}{change.value}%
                </span>
                <span className="text-xs text-gray-500">{change.label}</span>
              </div>
            )}
          </div>
          <div className={cn("h-12 w-12 rounded-full flex items-center justify-center", iconColor.replace('text-', 'bg-').replace('-600', '-100'))}>
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

