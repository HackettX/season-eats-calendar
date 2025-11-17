import { Lunar, Solar } from 'lunar-javascript';

export interface LunarData {
  lunarDate: string;
  ganzhi: string;
  ganzhiYear: string;
  ganzhiMonth: string;
  ganzhiDay: string;
  solarTerm: string;
  season: string;
}

export function getLunarData(date: Date): LunarData {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();
  
  return {
    lunarDate: `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
    ganzhi: `${lunar.getYearInGanZhi()}年 ${lunar.getMonthInGanZhi()}月 ${lunar.getDayInGanZhi()}日`,
    ganzhiYear: lunar.getYearInGanZhi(),
    ganzhiMonth: lunar.getMonthInGanZhi(),
    ganzhiDay: lunar.getDayInGanZhi(),
    solarTerm: lunar.getCurrentJieQi()?.getName() || lunar.getCurrentQi()?.getName() || '无',
    season: getSeason(date.getMonth()),
  };
}

function getSeason(month: number): string {
  if (month >= 2 && month <= 4) return '春季';
  if (month >= 5 && month <= 7) return '夏季';
  if (month >= 8 && month <= 10) return '秋季';
  return '冬季';
}

interface SeasonalFood {
  name: string;
  description: string;
  benefits: string;
  icon: string;
}

export function getSeasonalFoods(season: string): SeasonalFood[] {
  const foods: Record<string, SeasonalFood[]> = {
    '春季': [
      { name: '春笋', description: '鲜嫩爽脆，春季时令', benefits: '清热化痰，益气和胃', icon: '🎋' },
      { name: '荠菜', description: '野菜之王，清香可口', benefits: '清热解毒，明目养肝', icon: '🌿' },
      { name: '草莓', description: '酸甜多汁，维C丰富', benefits: '润肺生津，健脾开胃', icon: '🍓' },
      { name: '豌豆', description: '春季鲜豆，营养丰富', benefits: '和中益气，利小便', icon: '🫛' },
    ],
    '夏季': [
      { name: '西瓜', description: '消暑解渴，水分充足', benefits: '清热解暑，生津止渴', icon: '🍉' },
      { name: '苦瓜', description: '清热去火，苦中带香', benefits: '清暑解热，明目解毒', icon: '🥒' },
      { name: '绿豆', description: '夏季养生佳品', benefits: '清热解毒，消暑利尿', icon: '🫘' },
      { name: '番茄', description: '酸甜开胃，营养丰富', benefits: '生津止渴，健胃消食', icon: '🍅' },
    ],
    '秋季': [
      { name: '莲藕', description: '秋补佳品，清脆甘甜', benefits: '养阴清热，润燥止渴', icon: '🪷' },
      { name: '柚子', description: '果肉饱满，清香怡人', benefits: '理气化痰，润肺清肠', icon: '🍊' },
      { name: '百合', description: '润肺养生，清心安神', benefits: '润肺止咳，清心安神', icon: '🌸' },
      { name: '板栗', description: '秋季干果，香甜软糯', benefits: '养胃健脾，补肾强筋', icon: '🌰' },
    ],
    '冬季': [
      { name: '萝卜', description: '冬吃萝卜夏吃姜', benefits: '消食化痰，下气宽中', icon: '🥕' },
      { name: '羊肉', description: '温补佳品，御寒暖身', benefits: '温中暖下，补气养血', icon: '🥩' },
      { name: '大白菜', description: '百菜之王，冬季当季', benefits: '养胃生津，除烦解渴', icon: '🥬' },
      { name: '栗子', description: '冬季进补，益气健脾', benefits: '补肾强筋，活血止血', icon: '🌰' },
    ],
  };

  return foods[season] || foods['春季'];
}
