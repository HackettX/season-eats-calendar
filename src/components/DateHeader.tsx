import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LunarData } from '@/utils/lunar';

interface DateHeaderProps {
  date: Date;
  lunarData: LunarData;
  onOpenCalendar: () => void;
}

export function DateHeader({ date, lunarData, onOpenCalendar }: DateHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary via-accent to-primary/80 text-primary-foreground rounded-2xl p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-5xl font-bold mb-2">
            {format(date, 'd')}
          </div>
          <div className="text-lg opacity-90">
            {format(date, 'yyyy年MM月', { locale: zhCN })}
          </div>
          <div className="text-base opacity-75 mt-1">
            {format(date, 'EEEE', { locale: zhCN })}
          </div>
        </div>
        <Button
          variant="secondary"
          size="icon"
          onClick={onOpenCalendar}
          className="rounded-full bg-white/20 hover:bg-white/30 border-0"
        >
          <Calendar className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="border-t border-white/20 pt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="opacity-75">农历</span>
          <span className="font-medium">{lunarData.lunarDate}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="opacity-75">干支</span>
          <span className="font-medium">{lunarData.ganzhiDay}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="opacity-75">节气</span>
          <span className="font-medium">{lunarData.solarTerm}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="opacity-75">季节</span>
          <span className="font-medium">{lunarData.season}</span>
        </div>
      </div>
    </div>
  );
}
