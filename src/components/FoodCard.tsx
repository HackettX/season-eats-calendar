import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FoodCardProps {
  name: string;
  description: string;
  benefits: string;
  icon: string;
}

export function FoodCard({ name, description, benefits, icon }: FoodCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow duration-300 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{icon}</div>
          <CardTitle className="text-lg">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-start gap-2 pt-2 border-t border-border">
          <span className="text-xs font-medium text-secondary shrink-0">功效：</span>
          <span className="text-xs text-foreground/80">{benefits}</span>
        </div>
      </CardContent>
    </Card>
  );
}
