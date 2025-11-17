import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Heart } from 'lucide-react';
import { getFoodById } from '@/data/foods';
import { useFavorites } from '@/hooks/useFavorites';
import { toast } from '@/hooks/use-toast';

const FoodDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const food = id ? getFoodById(id) : undefined;

  if (!food) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">未找到该食材</p>
          <Button onClick={() => navigate(-1)} className="mt-4">
            返回
          </Button>
        </div>
      </div>
    );
  }

  const favorite = isFavorite(food.id);

  const handleToggleFavorite = () => {
    toggleFavorite(food.id);
    toast({
      title: favorite ? '已取消收藏' : '已添加收藏',
      description: favorite ? `${food.name}已从收藏中移除` : `${food.name}已添加到收藏`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant={favorite ? 'default' : 'outline'}
            size="icon"
            onClick={handleToggleFavorite}
          >
            <Heart className={`h-5 w-5 ${favorite ? 'fill-current' : ''}`} />
          </Button>
        </div>

        {/* Food Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{food.icon}</div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{food.name}</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">{food.category}</Badge>
                  {food.season.map((s) => (
                    <Badge key={s} variant="outline">{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-secondary mb-2">简介</h3>
              <p className="text-sm text-muted-foreground">{food.description}</p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">性味归经</h3>
              <p className="text-sm text-foreground">{food.properties}</p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">主要功效</h3>
              <p className="text-sm text-foreground">{food.benefits}</p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">适宜人群</h3>
              <div className="flex flex-wrap gap-2">
                {food.suitableFor.map((item) => (
                  <Badge key={item} variant="outline" className="bg-secondary/10">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">不适宜人群</h3>
              <div className="flex flex-wrap gap-2">
                {food.avoidFor.map((item) => (
                  <Badge key={item} variant="outline" className="bg-destructive/10">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">推荐做法</h3>
              <div className="space-y-2">
                {food.recipes.map((recipe, index) => (
                  <div key={recipe} className="flex items-center gap-2">
                    <span className="text-xs font-medium text-primary">{index + 1}.</span>
                    <span className="text-sm text-foreground">{recipe}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FoodDetail;
