import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/BottomNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { getFoodById } from '@/data/foods';

const Favorites = () => {
  const { favorites } = useFavorites();

  const favoriteFoods = favorites
    .map(id => getFoodById(id))
    .filter(food => food !== undefined);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-6 w-6 text-secondary fill-current" />
            <h1 className="text-2xl font-bold text-foreground">我的收藏</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            {favoriteFoods.length > 0 
              ? `已收藏 ${favoriteFoods.length} 个食材` 
              : '还没有收藏任何食材'}
          </p>
        </div>

        {/* Favorites List */}
        <div className="space-y-4">
          {favoriteFoods.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="flex justify-center">
                <Leaf className="h-16 w-16 text-muted-foreground opacity-50" />
              </div>
              <div>
                <p className="text-muted-foreground">还没有收藏任何食材</p>
                <p className="text-sm text-muted-foreground mt-2">
                  去食材库探索更多时令食材吧
                </p>
              </div>
              <Link 
                to="/food-library" 
                className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                前往食材库
              </Link>
            </div>
          ) : (
            favoriteFoods.map((food) => (
              <Link key={food.id} to={`/food/${food.id}`}>
                <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{food.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{food.name}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {food.category}
                            </Badge>
                            {food.season.map((s) => (
                              <Badge key={s} variant="outline" className="text-xs">
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Heart className="h-5 w-5 text-primary fill-current shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{food.description}</p>
                    <div className="flex items-start gap-2 pt-2 border-t border-border">
                      <span className="text-xs font-medium text-secondary shrink-0">功效：</span>
                      <span className="text-xs text-foreground/80">{food.benefits}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Favorites;
