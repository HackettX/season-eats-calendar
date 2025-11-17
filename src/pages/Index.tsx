import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DateHeader } from '@/components/DateHeader';
import { FoodCard } from '@/components/FoodCard';
import { BottomNav } from '@/components/BottomNav';
import { getLunarData, getSeasonalFoods } from '@/utils/lunar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Leaf, ArrowRight } from 'lucide-react';
import { solarTermsData } from '@/data/solarTerms';
import { foodsData } from '@/data/foods';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const lunarData = getLunarData(selectedDate);
  const seasonalFoods = getSeasonalFoods(lunarData.season);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setIsCalendarOpen(false);
    }
  };

  const currentSolarTerm = solarTermsData.find(term => term.season === lunarData.season);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 pt-4">
          <div className="flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-secondary" />
            <h1 className="text-2xl font-bold text-foreground">时令食历</h1>
          </div>
          <p className="text-sm text-muted-foreground">顺应节气，健康饮食</p>
        </div>

        {/* Date Card */}
        <DateHeader
          date={selectedDate}
          lunarData={lunarData}
          onOpenCalendar={() => setIsCalendarOpen(true)}
        />

        {/* Solar Term Card */}
        {currentSolarTerm && (
          <Link to={`/solar-term/${currentSolarTerm.id}`}>
            <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground cursor-pointer hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{currentSolarTerm.icon}</span>
                    <h3 className="text-xl font-semibold">当前节气：{currentSolarTerm.name}</h3>
                  </div>
                  <p className="text-sm opacity-90">{currentSolarTerm.description}</p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </Link>
        )}

        {/* Seasonal Foods Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">
              {lunarData.season}时令食材
            </h2>
            <Link to="/food-library">
              <Button variant="ghost" size="sm" className="text-sm">
                查看更多 <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {seasonalFoods.map((food) => {
              const foodData = foodsData.find(f => f.name === food.name);
              return foodData ? (
                <Link key={food.name} to={`/food/${foodData.id}`}>
                  <FoodCard
                    name={food.name}
                    description={food.description}
                    benefits={food.benefits}
                    icon={food.icon}
                  />
                </Link>
              ) : (
                <FoodCard
                  key={food.name}
                  name={food.name}
                  description={food.description}
                  benefits={food.benefits}
                  icon={food.icon}
                />
              );
            })}
          </div>
        </div>

        {/* Calendar Dialog */}
        <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>选择日期</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center py-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="rounded-md border"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
