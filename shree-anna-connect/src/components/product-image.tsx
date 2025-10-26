import { cn } from "@/lib/utils";

interface ProductImageProps {
  productType: string;
  className?: string;
}

export function ProductImage({ productType, className }: ProductImageProps) {
  const getProductEmoji = (type: string) => {
    switch (type.toLowerCase()) {
      case 'ragi': return '🌾';
      case 'bajra': return '🌽';
      case 'foxtail': return '🌿';
      case 'jowar': return '🌱';
      case 'kodo': return '🌾';
      case 'little millet': return '🌾';
      default: return '🌾';
    }
  };

  const getProductColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'ragi': return 'from-red-100 to-red-200';
      case 'bajra': return 'from-yellow-100 to-yellow-200';
      case 'foxtail': return 'from-green-100 to-green-200';
      case 'jowar': return 'from-orange-100 to-orange-200';
      case 'kodo': return 'from-purple-100 to-purple-200';
      case 'little millet': return 'from-blue-100 to-blue-200';
      default: return 'from-gray-100 to-gray-200';
    }
  };

  return (
    <div className={cn(
      "w-full h-48 bg-gradient-to-br rounded-lg flex items-center justify-center text-6xl",
      getProductColor(productType),
      className
    )}>
      {getProductEmoji(productType)}
    </div>
  );
}

