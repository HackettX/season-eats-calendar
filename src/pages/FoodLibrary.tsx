import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/BottomNav';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Leaf } from 'lucide-react';
import { foodsData, categories, searchFoods, getFoodsByCategory } from '@/data/foods';

const FoodLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredFoods = searchQuery
    ? searchFoods(searchQuery)
    : selectedCategory === '全部'
    ? foodsData
    : getFoodsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-4">
          <div className="flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-secondary" />
            <h1 className="text-2xl font-bold text-foreground">食材库</h1>
          </div>
          <p className="text-sm text-muted-foreground">探索时令食材，了解食物功效</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索食材、功效..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Food List */}
        <div className="space-y-4">
          {filteredFoods.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              未找到相关食材
            </div>
          ) : (
            filteredFoods.map((food) => (
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

export default FoodLibrary;
