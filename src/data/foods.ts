export interface Food {
  id: string;
  name: string;
  icon: string;
  season: string[];
  description: string;
  benefits: string;
  properties: string;
  suitableFor: string[];
  avoidFor: string[];
  recipes: string[];
  category: string;
}

export const foodsData: Food[] = [
  // 春季食材
  {
    id: 'spring-bamboo',
    name: '春笋',
    icon: '🎋',
    season: ['春季'],
    description: '鲜嫩爽脆，春季时令佳品，富含膳食纤维和多种维生素',
    benefits: '清热化痰，益气和胃，利水消肿',
    properties: '性寒，味甘',
    suitableFor: ['热性体质', '便秘人群', '水肿人群'],
    avoidFor: ['脾胃虚寒', '结石患者', '过敏体质'],
    recipes: ['油焖春笋', '春笋炒肉', '春笋汤'],
    category: '蔬菜',
  },
  {
    id: 'shepherd-purse',
    name: '荠菜',
    icon: '🌿',
    season: ['春季'],
    description: '野菜之王，清香可口，营养丰富，春季养生佳品',
    benefits: '清热解毒，明目养肝，健脾利水',
    properties: '性平，味甘',
    suitableFor: ['肝火旺盛', '视力模糊', '水肿人群'],
    avoidFor: ['脾胃虚寒', '腹泻人群'],
    recipes: ['荠菜饺子', '荠菜豆腐羹', '凉拌荠菜'],
    category: '蔬菜',
  },
  {
    id: 'strawberry',
    name: '草莓',
    icon: '🍓',
    season: ['春季'],
    description: '酸甜多汁，维C含量丰富，有"春季第一果"之称',
    benefits: '润肺生津，健脾开胃，美白养颜',
    properties: '性凉，味甘酸',
    suitableFor: ['干咳少痰', '食欲不振', '皮肤暗沉'],
    avoidFor: ['脾胃虚寒', '腹泻人群', '过敏体质'],
    recipes: ['草莓酱', '草莓奶昔', '草莓沙拉'],
    category: '水果',
  },
  {
    id: 'peas',
    name: '豌豆',
    icon: '🫛',
    season: ['春季'],
    description: '春季鲜豆，营养丰富，蛋白质含量高',
    benefits: '和中益气，利小便，解疮毒',
    properties: '性平，味甘',
    suitableFor: ['气虚乏力', '小便不利', '疮疡肿毒'],
    avoidFor: ['腹胀人群', '消化不良'],
    recipes: ['豌豆炒虾仁', '豌豆饭', '豌豆汤'],
    category: '豆类',
  },
  // 夏季食材
  {
    id: 'watermelon',
    name: '西瓜',
    icon: '🍉',
    season: ['夏季'],
    description: '消暑解渴，水分充足，有"天然白虎汤"之称',
    benefits: '清热解暑，生津止渴，利尿消肿',
    properties: '性寒，味甘',
    suitableFor: ['暑热烦渴', '小便不利', '口舌生疮'],
    avoidFor: ['脾胃虚寒', '糖尿病患者', '肾功能不全'],
    recipes: ['西瓜汁', '西瓜冰沙', '西瓜皮凉菜'],
    category: '水果',
  },
  {
    id: 'bitter-melon',
    name: '苦瓜',
    icon: '🥒',
    season: ['夏季'],
    description: '清热去火，苦中带香，是夏季养生必备',
    benefits: '清暑解热，明目解毒，降血糖',
    properties: '性寒，味苦',
    suitableFor: ['暑热烦渴', '目赤肿痛', '血糖偏高'],
    avoidFor: ['脾胃虚寒', '孕妇', '低血糖'],
    recipes: ['凉拌苦瓜', '苦瓜炒蛋', '苦瓜排骨汤'],
    category: '蔬菜',
  },
  {
    id: 'mung-bean',
    name: '绿豆',
    icon: '🫘',
    season: ['夏季'],
    description: '夏季养生佳品，清热解毒功效显著',
    benefits: '清热解毒，消暑利尿，降血脂',
    properties: '性凉，味甘',
    suitableFor: ['暑热烦渴', '痈肿疮毒', '高血脂'],
    avoidFor: ['脾胃虚寒', '体质虚弱', '正服温补药者'],
    recipes: ['绿豆汤', '绿豆粥', '绿豆糕'],
    category: '豆类',
  },
  {
    id: 'tomato',
    name: '番茄',
    icon: '🍅',
    season: ['夏季'],
    description: '酸甜开胃，营养丰富，富含番茄红素',
    benefits: '生津止渴，健胃消食，抗氧化',
    properties: '性微寒，味甘酸',
    suitableFor: ['食欲不振', '口干舌燥', '高血压'],
    avoidFor: ['脾胃虚寒', '空腹不宜'],
    recipes: ['番茄炒蛋', '番茄汤', '番茄酱'],
    category: '蔬菜',
  },
  // 秋季食材
  {
    id: 'lotus-root',
    name: '莲藕',
    icon: '🪷',
    season: ['秋季'],
    description: '秋补佳品，清脆甘甜，有"水中人参"之称',
    benefits: '养阴清热，润燥止渴，清心安神',
    properties: '性寒，味甘',
    suitableFor: ['阴虚内热', '口干咽燥', '失眠多梦'],
    avoidFor: ['脾胃虚寒', '消化不良', '产妇过早食用'],
    recipes: ['糖醋藕片', '莲藕排骨汤', '桂花糯米藕'],
    category: '蔬菜',
  },
  {
    id: 'pomelo',
    name: '柚子',
    icon: '🍊',
    season: ['秋季'],
    description: '果肉饱满，清香怡人，维C含量高',
    benefits: '理气化痰，润肺清肠，降血压',
    properties: '性寒，味甘酸',
    suitableFor: ['痰多咳嗽', '消化不良', '高血压'],
    avoidFor: ['脾胃虚寒', '服药期间慎食'],
    recipes: ['蜂蜜柚子茶', '柚子沙拉', '柚子皮糖'],
    category: '水果',
  },
  {
    id: 'lily',
    name: '百合',
    icon: '🌸',
    season: ['秋季'],
    description: '润肺养生，清心安神，秋季进补佳品',
    benefits: '润肺止咳，清心安神，美容养颜',
    properties: '性微寒，味甘',
    suitableFor: ['肺燥干咳', '心烦失眠', '皮肤干燥'],
    avoidFor: ['风寒咳嗽', '脾胃虚寒', '腹泻人群'],
    recipes: ['百合银耳汤', '百合粥', '百合炒西芹'],
    category: '药食同源',
  },
  {
    id: 'chestnut',
    name: '板栗',
    icon: '🌰',
    season: ['秋季'],
    description: '秋季干果，香甜软糯，有"千果之王"美誉',
    benefits: '养胃健脾，补肾强筋，活血止血',
    properties: '性温，味甘',
    suitableFor: ['脾胃虚弱', '腰膝酸软', '筋骨疼痛'],
    avoidFor: ['糖尿病患者', '消化不良', '多食易胀气'],
    recipes: ['糖炒栗子', '板栗烧鸡', '板栗粥'],
    category: '坚果',
  },
  // 冬季食材
  {
    id: 'radish',
    name: '萝卜',
    icon: '🥕',
    season: ['冬季'],
    description: '冬吃萝卜夏吃姜，不劳医生开药方',
    benefits: '消食化痰，下气宽中，清热解毒',
    properties: '性凉，味辛甘',
    suitableFor: ['消化不良', '痰多咳嗽', '食积腹胀'],
    avoidFor: ['脾胃虚寒', '慢性胃炎', '服用补药期间'],
    recipes: ['萝卜排骨汤', '凉拌萝卜丝', '萝卜炖牛腩'],
    category: '蔬菜',
  },
  {
    id: 'mutton',
    name: '羊肉',
    icon: '🥩',
    season: ['冬季'],
    description: '温补佳品，御寒暖身，冬季进补首选',
    benefits: '温中暖下，补气养血，强身健体',
    properties: '性温，味甘',
    suitableFor: ['阳虚体寒', '气血不足', '体质虚弱'],
    avoidFor: ['热性体质', '发热感冒', '高血压'],
    recipes: ['羊肉汤', '红烧羊肉', '羊肉火锅'],
    category: '肉类',
  },
  {
    id: 'chinese-cabbage',
    name: '大白菜',
    icon: '🥬',
    season: ['冬季'],
    description: '百菜之王，冬季当季，营养丰富价格亲民',
    benefits: '养胃生津，除烦解渴，利尿通便',
    properties: '性平，味甘',
    suitableFor: ['口干舌燥', '便秘人群', '大众养生'],
    avoidFor: ['腹泻人群', '脾胃虚寒重症'],
    recipes: ['醋溜白菜', '白菜炖豆腐', '白菜饺子'],
    category: '蔬菜',
  },
  {
    id: 'chestnut-winter',
    name: '栗子',
    icon: '🌰',
    season: ['冬季'],
    description: '冬季进补，益气健脾，补肾强骨',
    benefits: '补肾强筋，活血止血，益气厚肠',
    properties: '性温，味甘',
    suitableFor: ['肾虚腰痛', '脾胃虚弱', '筋骨不健'],
    avoidFor: ['脾虚便溏', '糖尿病患者', '消化不良'],
    recipes: ['栗子鸡', '栗子粥', '栗子糕'],
    category: '坚果',
  },
];

export function getFoodById(id: string): Food | undefined {
  return foodsData.find(food => food.id === id);
}

export function getFoodsByCategory(category: string): Food[] {
  return foodsData.filter(food => food.category === category);
}

export function getFoodsBySeason(season: string): Food[] {
  return foodsData.filter(food => food.season.includes(season));
}

export function searchFoods(query: string): Food[] {
  const lowerQuery = query.toLowerCase();
  return foodsData.filter(food =>
    food.name.toLowerCase().includes(lowerQuery) ||
    food.description.toLowerCase().includes(lowerQuery) ||
    food.benefits.toLowerCase().includes(lowerQuery) ||
    food.category.toLowerCase().includes(lowerQuery)
  );
}

export const categories = ['全部', '蔬菜', '水果', '豆类', '肉类', '坚果', '药食同源'];
