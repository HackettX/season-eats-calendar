import { useState } from 'react';
import { DateHeader } from '@/components/DateHeader';
import { FoodCard } from '@/components/FoodCard';
import { getLunarData, getSeasonalFoods } from '@/utils/lunar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Leaf } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-background">
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

        {/* Seasonal Foods Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">
              {lunarData.season}时令食材
            </h2>
            <span className="text-sm text-muted-foreground">
              应季而食
            </span>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {seasonalFoods.map((food) => (
              <FoodCard
                key={food.name}
                name={food.name}
                description={food.description}
                benefits={food.benefits}
                icon={food.icon}
              />
            ))}
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
    </div>
  );
};

export default Index;
