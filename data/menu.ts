import { Language } from '../types.ts';
import { MenuCategory } from '../types.ts';

export const menuData: MenuCategory[] = [
  {
    id: 'cold-pressed',
    title: {
      [Language.EN]: 'Cold Pressed Juice',
      [Language.TH]: 'สกัดเย็น ไม่ใส่น้ำตาล',
      [Language.ZH]: '冷压果汁 (不加糖)',
    },
    description: {
      [Language.EN]: 'Freshly cold-pressed, no sugar added. Perfect for detox, digestion, and energy.',
      [Language.TH]: 'น้ำผลไม้สกัดเย็น สดใหม่ ไม่ใส่น้ำตาล เหมาะสำหรับดีทอกซ์ ย่อยง่าย เติมพลัง',
      [Language.ZH]: '新鲜冷压，不加糖。非常适合排毒、助消化和补充能量。',
    },
    priceNote: {
      [Language.EN]: '50฿ Each',
      [Language.TH]: 'ขวดละ 50฿',
      [Language.ZH]: '每瓶 50฿',
    },
    image: 'https://i.postimg.cc/nLztnsQ9/juice-me-image-place-holder-and-background-decorative-002.jpg',
    items: [
      {
        name: { [Language.EN]: 'Go Green Detox', [Language.TH]: 'ดีทอกซ์ GOGREEN', [Language.ZH]: '绿色排毒' },
        ingredients: { [Language.EN]: 'Celery, Guava, Green Apple', [Language.TH]: 'ขึ้นฉ่าย, ฝรั่ง, แอปเปิ้ลเขียว', [Language.ZH]: '芹菜, 番石榴, 青苹果' },
        description: { [Language.EN]: 'Helps reduce water retention and weight', [Language.TH]: 'ลดบวมน้ำ ลดน้ำหนัก', [Language.ZH]: '帮助减少水分滞留和体重' },
      },
      {
        name: { [Language.EN]: 'Digestion Boost', [Language.TH]: 'ช่วยย่อยอาหาร', [Language.ZH]: '助消化' },
        ingredients: { [Language.EN]: 'Passionfruit, Ginger, Pineapple, Carrot, Beetroot', [Language.TH]: 'เสาวรส, ขิง, สับปะรด, แครอท, บีทรูท', [Language.ZH]: '百香果, 姜, 菠萝, 胡萝卜, 甜菜根' },
        description: { [Language.EN]: 'Soothes digestion and bloating', [Language.TH]: 'ช่วยขับลมในท้อง', [Language.ZH]: '缓解消化不良和腹胀' },
      },
      {
        name: { [Language.EN]: 'Gut & Lung Detox', [Language.TH]: 'ดีทอกซ์ลำไส้', [Language.ZH]: '肠肺排毒' },
        ingredients: { [Language.EN]: 'Carrot, Passionfruit, Pear, Celery', [Language.TH]: 'แครอท, เสาวรส, สาลี่, ขึ้นฉ่าย', [Language.ZH]: '胡萝卜, 百香果, 梨, 芹菜' },
        description: { [Language.EN]: 'Rich in fiber and antioxidants', [Language.TH]: 'บำรุงปอด ต้านอนุมูลอิสระ', [Language.ZH]: '富含纤维和抗氧化剂' },
      },
      {
        name: { [Language.EN]: 'Refreshing Blend', [Language.TH]: 'REFRESHING', [Language.ZH]: '清爽特调' },
        ingredients: { [Language.EN]: 'Dragon fruit, Red Apple, Lemon, Pineapple', [Language.TH]: 'แก้วมังกร, แอปเปิ้ลแดง, มะนาว, สับปะรด', [Language.ZH]: '火龙果, 红苹果, 柠檬, 菠萝' },
        description: { [Language.EN]: 'Bright & tropical taste', [Language.TH]: 'เพิ่มความสดชื่น', [Language.ZH]: '明亮的热带风味' },
      },
      {
        name: { [Language.EN]: 'ENERGY', [Language.TH]: 'ENERGY', [Language.ZH]: '能量' },
        ingredients: { [Language.EN]: 'Beetroot, Carrot, Red Apple, Ginger', [Language.TH]: 'บีทรูท, แครอท, แอปเปิ้ลแดง, ขิง', [Language.ZH]: '甜菜根, 胡萝卜, 红苹果, 姜' },
        description: { [Language.EN]: 'Boost your stamina', [Language.TH]: 'เพิ่มพลังระหว่างวัน', [Language.ZH]: '增强您的耐力' },
      },
      {
        name: { [Language.EN]: 'STORM', [Language.TH]: 'STORM', [Language.ZH]: '风暴' },
        ingredients: { [Language.EN]: 'Beetroot, Pineapple, Celery, Green Apple', [Language.TH]: 'บีทรูท, สับปะรด, ขึ้นฉ่าย, แอปเปิ้ลเขียว', [Language.ZH]: '甜菜根, 菠萝, 芹菜, 青苹果' },
        description: { [Language.EN]: 'Strong, tangy energy booster', [Language.TH]: 'สดชื่นทุกจิบ', [Language.ZH]: '强烈、浓郁的能量助推器' },
      },
      {
        name: { [Language.EN]: 'Toxin Cleanser', [Language.TH]: 'ล้างสารพิษ', [Language.ZH]: '毒素清理' },
        ingredients: { [Language.EN]: 'Beetroot, Green Apple, Carrot, Pineapple', [Language.TH]: 'บีทรูท, แอปเปิ้ลเขียว, แครอท, สับปะรด', [Language.ZH]: '甜菜根, 青苹果, 胡萝卜, 菠萝' },
        description: { [Language.EN]: 'Full-body detox', [Language.TH]: 'ล้างสารพิษทั่วร่างกาย', [Language.ZH]: '全身排毒' },
      },
      {
        name: { [Language.EN]: 'Allergy Defense', [Language.TH]: 'ป้องกันภูมิแพ้', [Language.ZH]: '过敏防御' },
        ingredients: { [Language.EN]: 'Green Apple, Pineapple, Lemon, Ginger', [Language.TH]: 'แอปเปิ้ลเขียว, สับปะรด, มะนาว, ขิง', [Language.ZH]: '青苹果, 菠萝, 柠檬, 姜' },
        description: { [Language.EN]: 'Soothes allergy symptoms', [Language.TH]: 'ต้านภูมิแพ้', [Language.ZH]: '缓解过敏症状' },
      },
      {
        name: { [Language.EN]: 'Fat Burner', [Language.TH]: 'ลดน้ำหนัก', [Language.ZH]: '燃脂' },
        ingredients: { [Language.EN]: 'Guava, Pineapple, Carrot, Lemon', [Language.TH]: 'ฝรั่ง, สับปะรด, แครอท, มะนาว', [Language.ZH]: '番石榴, 菠萝, 胡萝卜, 柠檬' },
        description: { [Language.EN]: 'Helps with fat reduction', [Language.TH]: 'เผาผลาญไขมันส่วนเกิน', [Language.ZH]: '有助于减少脂肪' },
      },
      {
        name: { [Language.EN]: 'Heart Health', [Language.TH]: 'บำรุงหัวใจ', [Language.ZH]: '心脏健康' },
        ingredients: { [Language.EN]: 'Lemon, Red Apple, Beetroot', [Language.TH]: 'มะนาว, แอปเปิ้ลแดง, บีทรูท', [Language.ZH]: '柠檬, 红苹果, 甜菜根' },
        description: { [Language.EN]: 'Antioxidant-rich blend', [Language.TH]: 'บำรุงหัวใจให้แข็งแรง', [Language.ZH]: '富含抗氧化剂的混合物' },
      },
      {
        name: { [Language.EN]: 'Eye Care', [Language.TH]: 'บำรุงสายตา', [Language.ZH]: '眼部护理' },
        ingredients: { [Language.EN]: 'Carrot, Pineapple, Red Apple', [Language.TH]: 'แครอท, สับปะรด, แอปเปิ้ลแดง', [Language.ZH]: '胡萝卜, 菠萝, 红苹果' },
        description: { [Language.EN]: 'Full of beta-carotene', [Language.TH]: 'บำรุงสายตา', [Language.ZH]: '富含β-胡萝卜素' },
      },
      {
        name: { [Language.EN]: 'REFRESH', [Language.TH]: 'REFRESH', [Language.ZH]: '焕然一新' },
        ingredients: { [Language.EN]: 'Carrot, Pineapple, Red Apple, Lemon', [Language.TH]: 'แครอท, สับปะรด, แอปเปิ้ลแดง, มะนาว', [Language.ZH]: '胡萝卜, 菠萝, 红苹果, 柠檬' },
        description: { [Language.EN]: 'Balanced and cooling taste', [Language.TH]: 'สดชื่นผ่อนคลาย', [Language.ZH]: '均衡清爽的口感' },
      },
      {
        name: { [Language.EN]: 'Up To You (5 Items)', [Language.TH]: 'เลือกเอง 5 อย่าง', [Language.ZH]: '自选5种' },
        ingredients: { [Language.EN]: 'Custom', [Language.TH]: 'จัดสูตรเอง', [Language.ZH]: '自定义' },
        description: { [Language.EN]: 'Mix your own combo from our fresh list', [Language.TH]: 'จัดสูตรเองตามใจคุณ', [Language.ZH]: '从我们的新鲜列表中混合您自己的组合' },
      },
    ],
  },
  {
    id: 'smoothies-milk',
    title: { [Language.EN]: 'Smoothies with Milk', [Language.TH]: 'สมูทตี้ใส่นม', [Language.ZH]: '牛奶冰沙' },
    description: { [Language.EN]: 'Creamy smoothies made from fresh fruits and milk.', [Language.TH]: 'สมูทตี้ปั่นใส่นม หอมมัน สดชื่น หวานธรรมชาติ', [Language.ZH]: '由新鲜水果和牛奶制成的奶油冰沙。' },
    image: 'https://i.postimg.cc/y8TV14Qt/juice-me-image-place-holder-and-background-decorative-0012.jpg',
    items: [
      { name: { [Language.EN]: 'Coconut', [Language.TH]: 'มะพร้าว', [Language.ZH]: '椰子' }, price: 60 },
      { name: { [Language.EN]: 'Strawberry', [Language.TH]: 'สตรอเบอรี่', [Language.ZH]: '草莓' }, price: 55 },
      { name: { [Language.EN]: 'Blueberry', [Language.TH]: 'บลูเบอรี่', [Language.ZH]: '蓝莓' }, price: 55 },
      { name: { [Language.EN]: 'Raspberry', [Language.TH]: 'ราสเบอรี่', [Language.ZH]: '覆盆子' }, price: 55 },
      { name: { [Language.EN]: 'Banana', [Language.TH]: 'กล้วยหอม', [Language.ZH]: '香蕉' }, price: 55 },
      { name: { [Language.EN]: 'Mango', [Language.TH]: 'มะม่วง', [Language.ZH]: '芒果' }, price: 55 },
      { name: { [Language.EN]: 'Cantaloupe', [Language.TH]: 'แคนตาลูป', [Language.ZH]: '哈密瓜' }, price: 55 },
      { name: { [Language.EN]: 'Avocado', [Language.TH]: 'อโวคาโด', [Language.ZH]: '牛油果' }, price: 75 },
    ],
    addOns: {
      title: { [Language.EN]: 'Add-ons:', [Language.TH]: 'ท็อปปิ้ง:', [Language.ZH]: '可添加:' },
      items: [
        { name: { [Language.EN]: 'Basil seed pearls', [Language.TH]: 'เม็ดแมงลัก', [Language.ZH]: '罗勒籽' }, price: 5 },
        { name: { [Language.EN]: 'Yogurt', [Language.TH]: 'โยเกิร์ต', [Language.ZH]: '酸奶' }, price: 10 },
      ],
    },
  },
  {
    id: 'smoothies-no-milk',
    title: { [Language.EN]: 'Smoothies without Milk', [Language.TH]: 'สมูทตี้ไม่ใส่นม', [Language.ZH]: '无奶冰沙' },
    description: { [Language.EN]: 'Pure fruit smoothies, naturally sweet and healthy.', [Language.TH]: 'สมูทตี้ผลไม้ไม่ใส่นม สดชื่นจากธรรมชาติ ไม่แต่งกลิ่น', [Language.ZH]: '纯水果冰沙，天然甜美健康。' },
    image: 'https://i.postimg.cc/t4bqGC5F/juice-me-image-place-holder-and-background-decorative-0013.jpg',
    items: [
      { name: { [Language.EN]: 'Red Soda Smoothie', [Language.TH]: 'แดงโซดาปั่น', [Language.ZH]: '红苏打冰沙' }, price: 45 },
      { name: { [Language.EN]: 'Pineapple Smoothie', [Language.TH]: 'สับปะรดปั่น', [Language.ZH]: '菠萝冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Lemon Smoothie', [Language.TH]: 'มะนาวปั่น', [Language.ZH]: '柠檬冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Green Apple Smoothie', [Language.TH]: 'แอปเปิ้ลเขียวปั่น', [Language.ZH]: '青苹果冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Red Apple Smoothie', [Language.TH]: 'แอปเปิ้ลแดงปั่น', [Language.ZH]: '红苹果冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Watermelon Smoothie', [Language.TH]: 'แตงโมปั่น', [Language.ZH]: '西瓜冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Guava Smoothie', [Language.TH]: 'ฝรั่งปั่น', [Language.ZH]: '番石榴冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Passionfruit Smoothie', [Language.TH]: 'เสาวรสปั่น', [Language.ZH]: '百香果冰沙' }, price: 50 },
      { name: { [Language.EN]: 'Mango Passion Smoothie', [Language.TH]: 'มะม่วงเสาวรสปั่น', [Language.ZH]: '芒果百香果冰沙' }, price: 60 },
      { name: { [Language.EN]: 'Mixed Veggie/Fruit Smoothie', [Language.TH]: 'ผักผลไม้รวมปั่น', [Language.ZH]: '混合蔬果冰沙' }, price: 60 },
      { name: { [Language.EN]: 'Coconut Smoothie', [Language.TH]: 'มะพร้าวปั่น', [Language.ZH]: '椰子冰沙' }, price: 60 },
    ],
  },
  {
    id: 'spicy-smoothies',
    title: { [Language.EN]: 'Spicy Fruit Smoothies', [Language.TH]: 'ปั่นพริกเกลือแซ่บๆ', [Language.ZH]: '泰式辣味水果冰沙' },
    description: { [Language.EN]: 'Thai-style spicy fruit smoothies. A unique twist!', [Language.TH]: 'ปั่นพริกเกลือ สไตล์แซ่บๆ แบบไทยๆ ต้องลอง!', [Language.ZH]: '泰式辣味水果冰沙。独特的风味！' },
    image: 'https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg',
    items: [
      { name: { [Language.EN]: 'Passionfruit Chili Salt Smoothie', [Language.TH]: 'เสาวรสปั่นพริกเกลือ', [Language.ZH]: '百香果辣椒盐冰沙' }, price: 60 },
      { name: { [Language.EN]: 'Lemon Chili Salt Smoothie', [Language.TH]: 'มะนาวปั่นพริกเกลือ', [Language.ZH]: '柠檬辣椒盐冰沙' }, price: 60 },
      { name: { [Language.EN]: 'Mango Chili Salt Smoothie', [Language.TH]: 'มะม่วงปั่นพริกเกลือ', [Language.ZH]: '芒果辣椒盐冰沙' }, price: 55 },
      { name: { [Language.EN]: 'Pineapple Chili Salt Smoothie', [Language.TH]: 'สับปะรดปั่นพริกเกลือ', [Language.ZH]: '菠萝辣椒盐冰沙' }, price: 55 },
      { name: { [Language.EN]: 'Guava Chili Salt Smoothie', [Language.TH]: 'ฝรั่งปั่นพริกเกลือ', [Language.ZH]: '番石榴辣椒盐冰沙' }, price: 55 },
    ],
  },
  {
    id: 'fruit-tea',
    title: { [Language.EN]: 'Fruit Tea', [Language.TH]: 'ชาผลไม้', [Language.ZH]: '水果茶' },
    description: { [Language.EN]: 'Refreshing iced teas infused with real fruit flavors.', [Language.TH]: 'ชาเย็นชื่นใจ ผสมผสานรสชาติผลไม้แท้ๆ', [Language.ZH]: '注入真正水果风味的清爽冰茶。' },
    priceNote: { [Language.EN]: '55฿ Each', [Language.TH]: 'แก้วละ 55฿', [Language.ZH]: '每杯 55฿' },
    image: 'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',
    items: [
      { name: { [Language.EN]: 'Fruit Mixed Tea', [Language.TH]: 'ชาผลไม้รวม', [Language.ZH]: '混合水果茶' } },
      { name: { [Language.EN]: 'Orange Soda Tea', [Language.TH]: 'ชาส้มโซดา', [Language.ZH]: '橙子苏打茶' } },
      { name: { [Language.EN]: 'Lemon Tea', [Language.TH]: 'ชาเลมอน', [Language.ZH]: '柠檬茶' } },
      { name: { [Language.EN]: 'Peach Tea', [Language.TH]: 'ชาพีช', [Language.ZH]: '桃子茶' } },
    ],
    addOns: {
      title: { [Language.EN]: 'Add-ons (+10฿):', [Language.TH]: 'ท็อปปิ้ง (+10฿):', [Language.ZH]: '可添加 (+10฿):' },
      items: [
        { name: { [Language.EN]: 'Konjac Jelly', [Language.TH]: 'บุก', [Language.ZH]: '蒟蒻' }, price: 10 },
        { name: { [Language.EN]: 'Basil seed', [Language.TH]: 'เม็ดแมงลัก', [Language.ZH]: '罗勒籽' }, price: 10 },
        { name: { [Language.EN]: 'Jelly', [Language.TH]: 'เยลลี่', [Language.ZH]: '果冻' }, price: 10 },
        { name: { [Language.EN]: 'Popping boba', [Language.TH]: 'ไข่มุกป๊อป', [Language.ZH]: '爆珠' }, price: 10 },
        { name: { [Language.EN]: 'Blueberry', [Language.TH]: 'บลูเบอร์รี่', [Language.ZH]: '蓝莓' }, price: 10 },
      ],
    },
  },
  {
    id: 'fresh-juices',
    title: { [Language.EN]: 'Fresh Juices', [Language.TH]: 'น้ำคั้นสด', [Language.ZH]: '鲜榨果汁' },
    description: { [Language.EN]: 'Pure, simple, and freshly squeezed juices.', [Language.TH]: 'น้ำผลไม้คั้นสดๆ บริสุทธิ์ เรียบง่าย', [Language.ZH]: '纯净、简单、新鲜榨取的果汁。' },
    image: 'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg',
    items: [
      { name: { [Language.EN]: 'Fresh Orange Juice', [Language.TH]: 'น้ำส้มคั้นสด', [Language.ZH]: '鲜榨橙汁' }, price: 60 },
      { name: { [Language.EN]: 'Fresh Passionfruit Juice', [Language.TH]: 'น้ำเสาวรสคั้นสด', [Language.ZH]: '鲜榨百香果汁' }, price: 55 },
      { name: { [Language.EN]: 'Fresh Lemon Juice', [Language.TH]: 'น้ำมะนาวคั้นสด', [Language.ZH]: '鲜榨柠檬汁' }, price: 50 },
      { name: { [Language.EN]: 'Passionfruit Juice', [Language.TH]: 'น้ำเสาวรสสด', [Language.ZH]: '百香果汁' }, price: 60 },
      { name: { [Language.EN]: 'Lemon Soda', [Language.TH]: 'น้ำมะนาวโซดา', [Language.ZH]: '柠檬苏打' }, price: 50 },
      { name: { [Language.EN]: 'Fresh Honey Lemon', [Language.TH]: 'น้ำผึ้งมะนาวคั้นสด', [Language.ZH]: '鲜榨蜂蜜柠檬' }, price: 60 },
    ],
  },
  {
    id: 'special-drinks',
    title: { [Language.EN]: 'Special Drinks', [Language.TH]: 'ดุดื่ม', [Language.ZH]: '特色饮品' },
    description: { [Language.EN]: 'Classic Thai favorites and comforting drinks.', [Language.TH]: 'เครื่องดื่มคลาสสิกยอดนิยมและเครื่องดื่มชวนผ่อนคลาย', [Language.ZH]: '经典的泰式最爱和舒适饮品。' },
    priceNote: { [Language.EN]: '45฿ Each', [Language.TH]: 'แก้วละ 45฿', [Language.ZH]: '每杯 45฿' },
    image: 'https://i.postimg.cc/Zn3SX1vf/juice-me-image-place-holder-and-background-decorative-008.jpg',
    items: [
      { name: { [Language.EN]: 'Thai Tea', [Language.TH]: 'ชาไทย', [Language.ZH]: '泰式奶茶' } },
      { name: { [Language.EN]: 'Green Tea', [Language.TH]: 'ชาเขียว', [Language.ZH]: '绿茶' } },
      { name: { [Language.EN]: 'Ovaltine', [Language.TH]: 'โอวัลติน', [Language.ZH]: '阿华田' } },
      { name: { [Language.EN]: 'Cocoa', [Language.TH]: 'โกโก้', [Language.ZH]: '可可' } },
      { name: { [Language.EN]: 'Pink Milk', [Language.TH]: 'นมชมพู', [Language.ZH]: '粉红牛奶' } },
      { name: { [Language.EN]: 'Fresh Milk', [Language.TH]: 'นมสด', [Language.ZH]: '鲜牛奶' } },
      { name: { [Language.EN]: 'Grass Jelly Milk', [Language.TH]: 'เฉาก๊วยนมสด', [Language.ZH]: '仙草奶冻' } },
    ],
  },
];