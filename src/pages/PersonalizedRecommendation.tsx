import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNav } from '@/components/BottomNav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { User, Calendar as CalendarIcon, Leaf } from 'lucide-react';
import { getLunarData } from '@/utils/lunar';
import { foodsData, Food } from '@/data/foods';

const PersonalizedRecommendation = () => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setBirthDate(date);
      setIsCalendarOpen(false);
    }
  };

  const getRecommendedFoods = (): Food[] => {
    if (!birthDate) return [];

    const lunarData = getLunarData(birthDate);
    const birthSeason = lunarData.season;

    // 根据出生季节推荐相应季节的食材
    const seasonalFoods = foodsData.filter(food => 
      food.season.includes(birthSeason)
    );

    // 根据干支五行理论进行个性化推荐
    const ganzhiYear = lunarData.ganzhiYear;
    
    // 简化版五行对应关系
    let element = '';
    if (ganzhiYear.includes('甲') || ganzhiYear.includes('乙')) element = '木';
    else if (ganzhiYear.includes('丙') || ganzhiYear.includes('丁')) element = '火';
    else if (ganzhiYear.includes('戊') || ganzhiYear.includes('己')) element = '土';
    else if (ganzhiYear.includes('庚') || ganzhiYear.includes('辛')) element = '金';
    else if (ganzhiYear.includes('壬') || ganzhiYear.includes('癸')) element = '水';

    // 根据五行选择更多推荐
    const elementFoods = {
      '木': ['春笋', '荠菜', '豌豆'],
      '火': ['番茄', '西瓜', '苦瓜'],
      '土': '山药、大白菜、萝卜',
      '金': ['梨', '百合', '莲藕'],
      '水': ['黑芝麻', '黑豆', '绿豆']
    };

    return seasonalFoods.slice(0, 6);
  };

  const recommendedFoods = getRecommendedFoods();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-4">
          <div className="flex items-center justify-center gap-2">
            <User className="h-6 w-6 text-secondary" />
            <h1 className="text-2xl font-bold text-foreground">个性化推荐</h1>
          </div>
          <p className="text-sm text-muted-foreground">根据您的出生时间，推荐适合的食材</p>
        </div>

        {/* Birth Date Selector */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">选择出生日期</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => setIsCalendarOpen(true)}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {birthDate ? birthDate.toLocaleDateString('zh-CN') : '点击选择出生日期'}
            </Button>
          </CardContent>
        </Card>

        {/* Birth Info */}
        {birthDate && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">您的八字信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {(() => {
                const lunarData = getLunarData(birthDate);
                return (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">出生季节</span>
                      <Badge variant="secondary">{lunarData.season}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">农历日期</span>
                      <span className="text-sm font-medium">{lunarData.lunarDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">年柱</span>
                      <span className="text-sm font-medium">{lunarData.ganzhiYear}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">月柱</span>
                      <span className="text-sm font-medium">{lunarData.ganzhiMonth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">日柱</span>
                      <span className="text-sm font-medium">{lunarData.ganzhiDay}</span>
                    </div>
                  </>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {/* Recommendations */}
        {recommendedFoods.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-secondary" />
              <h2 className="text-xl font-semibold text-foreground">为您推荐</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {recommendedFoods.map((food) => (
                <Link key={food.id} to={`/food/${food.id}`}>
                  <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow duration-300 cursor-pointer">
                    <CardHeader className="pb-3">
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
              ))}
            </div>
          </div>
        )}

        {!birthDate && (
          <div className="text-center py-12 text-muted-foreground">
            <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>请先选择您的出生日期</p>
            <p className="text-sm mt-2">我们将根据您的生辰八字推荐适合的食材</p>
          </div>
        )}

        {/* Calendar Dialog */}
        <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>选择出生日期</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center py-4">
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={handleDateSelect}
                className="rounded-md border"
                defaultMonth={new Date(2000, 0)}
                captionLayout="dropdown-buttons"
                fromYear={1900}
                toYear={new Date().getFullYear()}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <BottomNav />
    </div>
  );
};

export default PersonalizedRecommendation;
