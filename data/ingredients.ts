import { Ingredient, Language } from '../types.ts';

/**
 * DEVELOPER NOTE:
 * The 'benefits' arrays below need to be extensively populated for ALL fruits and add-ons
 * to meet the requirement of having ~20 different descriptive writings for each.
 * The examples for Banana and Strawberry provide a template for the expected richness and variety.
 */

export const fruitList: Ingredient[] = [
    { 
      id: "banana", 
      names: { [Language.TH]: "กล้วย", [Language.EN]: "Banana", [Language.ZH]: "香蕉" }, 
      emoji: "🍌", 
      benefits: { 
        [Language.TH]: [
          "เพิ่มพลังงานทันที", "โพแทสเซียมสูงปรี๊ด", "ช่วยเรื่องตะคริว", "ทำให้อารมณ์ดีขึ้น", "ย่อยง่าย สบายท้อง", 
          "เพื่อนซี้ของนักกีฬา", "วิตามิน B6 เพียบ", "บำรุงหัวใจให้แข็งแรง", "ผิวสวยจากภายใน", "ลดความเครียดได้นะ",
          "เพิ่มความสดชื่นยามบ่าย", "คู่หูสมูทตี้สุดเพอร์เฟค", "หวานอร่อยธรรมชาติ", "พลังงานสะอาดจากผลไม้", "กินแล้วมีแรงไปต่อ",
          "ตัวช่วยควบคุมน้ำหนัก", "ไฟเบอร์สูง ดีต่อลำไส้", "แหล่งรวมวิตามินจำเป็น", "สมบัติจากธรรมชาติ", "ผลไม้โปรดของทุกคน"
        ], 
        [Language.EN]: [
          "Instant energy boost", "Sky-high potassium", "Helps with cramps", "Mood enhancer", "Easy to digest", 
          "Athlete's best friend", "Packed with Vitamin B6", "Supports heart health", "Beauty from within", "Stress reliever",
          "Afternoon pick-me-up", "Perfect smoothie partner", "Naturally sweet & delicious", "Clean energy from fruit", "Keeps you going",
          "Aids in weight management", "High fiber for gut health", "Source of essential vitamins", "Nature's treasure", "Everyone's favorite fruit"
        ], 
        [Language.ZH]: [
          "即刻补充能量", "超高钾含量", "缓解抽筋", "改善心情", "易于消化",
          "运动员的好伙伴", "富含维生素B6", "有益心脏健康", "内在美颜", "缓解压力",
          "午后提神佳品", "完美果昔搭档", "天然香甜可口", "水果的清洁能源", "让你活力满满",
          "辅助体重管理", "高纤维益肠道", "必需维生素来源", "大自然的宝藏", "深受大家喜爱的水果"
        ] 
      } 
    },
    { 
      id: "mango", 
      names: { [Language.TH]: "มะม่วง", [Language.EN]: "Mango", [Language.ZH]: "芒果" }, 
      emoji: "🥭", 
      benefits: { 
        [Language.TH]: ["วิตามิน A สูง", "สารต้านอนุมูลอิสระชั้นเยี่ยม", "บำรุงผิวพรรณ", "ราชาแห่งผลไม้ฤดูร้อน"], 
        [Language.EN]: ["Rich in Vitamin A", "Excellent antioxidant source", "Skin nourishment", "King of summer fruits"], 
        [Language.ZH]: ["富含维生素A", "优质抗氧化来源", "滋养肌肤", "夏季水果之王"] 
      } 
    },
    { 
      id: "watermelon", 
      names: { [Language.TH]: "แตงโม", [Language.EN]: "Watermelon", [Language.ZH]: "西瓜" }, 
      emoji: "🍉", 
      benefits: { 
        [Language.TH]: ["ให้ความสดชื่นดับกระหาย", "ช่วยขับปัสสาวะ", "ไลโคปีนสูง", "เพิ่มความชุ่มชื้น"], 
        [Language.EN]: ["Super refreshing & thirst-quenching", "Diuretic properties", "High in lycopene", "Boosts hydration"], 
        [Language.ZH]: ["清爽解渴", "利尿功效", "富含番茄红素", "补充水分"] 
      } 
    },
    { 
      id: "orange", 
      names: { [Language.TH]: "ส้ม", [Language.EN]: "Orange", [Language.ZH]: "橙子" }, 
      emoji: "🍊", 
      benefits: { 
        [Language.TH]: ["วิตามิน C สูงปรี๊ด", "เสริมภูมิคุ้มกันแข็งแรง", "ผิวสวยใส", "สดชื่นตื่นตัว"], 
        [Language.EN]: ["Vitamin C powerhouse", "Boosts immunity effectively", "Promotes radiant skin", "Refreshing and energizing"], 
        [Language.ZH]: ["维生素C之王", "强效增强免疫力", "助您肌肤焕彩", "提神醒脑"] 
      } 
    },
    { 
      id: "guava", 
      names: { [Language.TH]: "ฝรั่ง", [Language.EN]: "Guava", [Language.ZH]: "番石榴" }, 
      emoji: "🍈", 
      benefits: { 
        [Language.TH]: ["ไฟเบอร์สูงมาก", "วิตามิน C มากกว่าส้มอีกนะ", "ช่วยควบคุมน้ำตาล", "เสริมสร้างเหงือกและฟัน"], 
        [Language.EN]: ["Extremely high in fiber", "More Vitamin C than oranges!", "Helps regulate blood sugar", "Strengthens gums and teeth"], 
        [Language.ZH]: ["纤维含量极高", "维生素C比橙子还多！", "帮助调节血糖", "强化牙龈牙齿"] 
      } 
    },
    { 
      id: "apple", 
      names: { [Language.TH]: "แอปเปิ้ล", [Language.EN]: "Apple", [Language.ZH]: "苹果" }, 
      emoji: "🍎", 
      benefits: { 
        [Language.TH]: ["ช่วยย่อยอาหาร", "ต้านอนุมูลอิสระ", "วันละผลห่างไกลหมอ", "เคี้ยวกรุบกริบ"], 
        [Language.EN]: ["Aids digestion", "Antioxidant properties", "An apple a day keeps the doctor away", "Crunchy and satisfying"], 
        [Language.ZH]: ["助消化", "抗氧化特性", "一天一苹果，医生远离我", "松脆可口"] 
      } 
    },
    { 
      id: "pineapple", 
      names: { [Language.TH]: "สับปะรด", [Language.EN]: "Pineapple", [Language.ZH]: "菠萝" }, 
      emoji: "🍍", 
      benefits: { 
        [Language.TH]: ["เอนไซม์ช่วยย่อยโปรตีน", "ลดการอักเสบในร่างกาย", "รสชาติเปรี้ยวอมหวานชื่นใจ", "สัญลักษณ์แห่งการต้อนรับ"], 
        [Language.EN]: ["Digestive enzyme bromelain", "Reduces inflammation in the body", "Tangy and sweet, so delightful", "Symbol of hospitality"], 
        [Language.ZH]: ["菠萝蛋白酶助消化", "减轻体内炎症", "酸甜可口，沁人心脾", "热情好客的象征"] 
      } 
    },
    { 
      id: "carrot", 
      names: { [Language.TH]: "แครอท", [Language.EN]: "Carrot", [Language.ZH]: "胡萝卜" }, 
      emoji: "🥕", 
      benefits: { 
        [Language.TH]: ["บำรุงสายตาเฉียบคม", "เบต้าแคโรทีนสูงลิ่ว", "ผิวพรรณสดใส", "อร่อยทั้งดิบและสุก"], 
        [Language.EN]: ["Sharpens eyesight", "Sky-high beta-carotene", "Promotes glowing skin", "Delicious raw or cooked"], 
        [Language.ZH]: ["明目亮眼", "β-胡萝卜素含量爆表", "肌肤焕发光彩", "生熟皆宜的美味"] 
      } 
    },
    { 
      id: "lemon", 
      names: { [Language.TH]: "มะนาว", [Language.EN]: "Lemon", [Language.ZH]: "柠檬" }, 
      emoji: "🍋", 
      benefits: { 
        [Language.TH]: ["ล้างพิษในร่างกาย", "ช่วยระบบย่อยอาหารทำงานดี", "ปลุกความสดชื่น", "เพิ่มรสชาติให้อาหารและเครื่องดื่ม"], 
        [Language.EN]: ["Detoxifies the body", "Aids digestive system function", "Awakens your senses", "Adds zest to food and drinks"], 
        [Language.ZH]: ["身体排毒好帮手", "助力消化系统", "唤醒活力", "为饮食增添风味"] 
      } 
    },
    { 
      id: "coconut", 
      names: { [Language.TH]: "มะพร้าว", [Language.EN]: "Coconut Meat", [Language.ZH]: "椰肉" }, 
      emoji: "🥥", 
      benefits: { 
        [Language.TH]: ["คืนความสดชื่นแบบทรอปิคอล", "ไขมันดีมีประโยชน์", "เนื้อนุ่มอร่อย", "อิเล็กโทรไลต์ธรรมชาติ"], 
        [Language.EN]: ["Tropical refreshment", "Source of healthy fats", "Tender and delicious texture", "Natural electrolytes"], 
        [Language.ZH]: ["热带风情，清新怡人", "健康脂肪来源", "肉质细嫩可口", "天然电解质"] 
      } 
    },
    { 
      id: "kiwi", 
      names: { [Language.TH]: "กีวี่", [Language.EN]: "Kiwi", [Language.ZH]: "奇异果" }, 
      emoji: "🥝", 
      benefits: { 
        [Language.TH]: ["วิตามิน C สูงเว่อร์", "ดีต่อผิวพรรณสุดๆ", "เมล็ดเล็กๆแต่ประโยชน์เยอะ", "รสชาติเปรี้ยวหวานลงตัว"], 
        [Language.EN]: ["Super high in Vitamin C", "Extremely good for the skin", "Tiny seeds, big benefits", "Perfectly balanced sweet & tart flavor"], 
        [Language.ZH]: ["维生素C含量超高", "对皮肤极好", "小小种子，大大益处", "酸甜平衡的完美口感"] 
      } 
    },
    { 
      id: "blueberry", 
      names: { [Language.TH]: "บลูเบอร์รี่", [Language.EN]: "Blueberry", [Language.ZH]: "蓝莓" }, 
      emoji: "🫐", 
      benefits: { 
        [Language.TH]: ["บำรุงสายตาให้แจ่มใส", "ช่วยเรื่องความจำระยะสั้น", "สารต้านอนุมูลอิสระจิ๋วแต่แจ๋ว", "ผลไม้ซูเปอร์ฟู้ด"], 
        [Language.EN]: ["Keeps eyes healthy and bright", "Boosts short-term memory", "Tiny but mighty antioxidants", "A true superfood berry"], 
        [Language.ZH]: ["保持眼睛健康明亮", "增强短期记忆力", "小巧强大的抗氧化剂", "真正的超级水果"] 
      } 
    },
    { 
      id: "yogurt", 
      names: { [Language.TH]: "โยเกิร์ต", [Language.EN]: "Yogurt", [Language.ZH]: "酸奶" }, 
      emoji: "🍦", 
      benefits: { 
        [Language.TH]: ["ช่วยย่อยอาหารด้วยโปรไบโอติก", "เสริมสร้างแคลเซียม", "เนื้อเนียนนุ่มละมุนลิ้น", "เพิ่มความครีมมี่ให้สมูทตี้"], 
        [Language.EN]: ["Aids digestion with probiotics", "Calcium for strong bones", "Smooth and creamy texture", "Adds creaminess to smoothies"], 
        [Language.ZH]: ["益生菌助消化", "补充钙质强健骨骼", "口感顺滑细腻", "为果昔增添奶油质感"] 
      } 
    },
    { 
      id: "coconut_water", 
      names: { [Language.TH]: "น้ำมะพร้าว", [Language.EN]: "Coconut Water", [Language.ZH]: "椰子水" }, 
      emoji: "💧", 
      benefits: { 
        [Language.TH]: ["รีเฟรชร่างกายทันใจ", "เกลือแร่ธรรมชาติจากพืช", "แคลอรี่ต่ำ", "ดื่มแล้วชื่นใจ"], 
        [Language.EN]: ["Instantly refreshes the body", "Natural plant-based electrolytes", "Low in calories", "Delightful to drink"], 
        [Language.ZH]: ["迅速恢复活力", "天然植物电解质", "低卡路里", "饮后心旷神怡"] 
      } 
    },
    { 
      id: "strawberry", 
      names: { [Language.TH]: "สตรอว์เบอร์รี", [Language.EN]: "Strawberry", [Language.ZH]: "草莓" }, 
      emoji: "🍓", 
      benefits: { 
        [Language.TH]: [
          "วิตามิน C สูงปรี๊ด", "สารต้านอนุมูลอิสระเพียบ", "บำรุงหัวใจให้แข็งแรง", "ผิวสวยใสเปล่งปลั่ง", "รสชาติหวานอมเปรี้ยวลงตัว", 
          "ช่วยควบคุมระดับน้ำตาลในเลือด", "ดีต่อระบบสมองและความจำ", "ลดความเสี่ยงมะเร็งบางชนิด", "ไฟเบอร์ช่วยเรื่องขับถ่าย", "เสริมสร้างภูมิคุ้มกัน",
          "ผลไม้สีแดงแห่งความรัก", "อร่อยจนหยุดไม่ได้", "ราชินีแห่งเบอร์รี่", "เพิ่มความสดใสให้ทุกวัน", "เหมาะสำหรับทำแยมและขนม",
          "ทานสดก็ฟิน ปั่นก็อร่อย", "กลิ่นหอมเย้ายวนใจ", "แหล่งโฟเลตชั้นดี", "ต้านการอักเสบในร่างกาย", "เติมความสุขให้ทุกคำ"
        ], 
        [Language.EN]: [
          "Super rich in Vitamin C", "Packed with antioxidants", "Supports a healthy heart", "Promotes radiant, glowing skin", "Perfectly sweet and tart flavor", 
          "Helps manage blood sugar levels", "Good for brain health and memory", "May reduce risk of certain cancers", "Fiber aids in digestion", "Boosts the immune system",
          "The red fruit of love", "Deliciously addictive", "Queen of berries", "Brightens up any day", "Great for jams and desserts",
          "Enjoy fresh or blended", "Tempting aroma", "Excellent source of folate", "Anti-inflammatory properties", "Happiness in every bite"
        ], 
        [Language.ZH]: [
          "维生素C含量超高", "富含抗氧化剂", "维护心脏健康", "使肌肤光彩照人", "完美的酸甜口味",
          "有助于控制血糖水平", "有益大脑健康和记忆力", "可能降低某些癌症风险", "纤维助消化", "增强免疫系统",
          "爱的红色水果", "美味到停不下来", "浆果之后", "点亮每一天", "非常适合制作果酱和甜点",
          "鲜食或榨汁均可", "诱人的香气", "优质叶酸来源", "抗炎特性", "每一口都是幸福"
        ] 
      } 
    },
    { id: "peach", names: { [Language.TH]: "พีช", [Language.EN]: "Peach", [Language.ZH]: "桃子" }, emoji: "🍑", benefits: { [Language.TH]: ["ดีต่อผิวพรรณนุ่มนิ่ม", "วิตามิน A & C สูง", "กลิ่นหอมหวานชวนฝัน", "เนื้อฉ่ำน้ำ"], [Language.EN]: ["Great for soft skin", "High in Vitamins A & C", "Sweet, dreamy aroma", "Juicy flesh"], [Language.ZH]: ["有益柔嫩肌肤", "富含维生素A和C", "香甜梦幻的香气", "果肉多汁"] } },
    { id: "pear", names: { [Language.TH]: "สาลี่", [Language.EN]: "Pear", [Language.ZH]: "梨" }, emoji: "🍐", benefits: { [Language.TH]: ["ไฟเบอร์สูงช่วยขับถ่าย", "ให้ความชุ่มชื้นแก่ร่างกาย", "รสหวานอ่อนๆ", "เนื้อสัมผัสกรอบ"], [Language.EN]: ["High fiber aids digestion", "Hydrates the body", "Mildly sweet taste", "Crisp texture"], [Language.ZH]: ["高纤维助排便", "为身体补水", "微甜口感", "质地松脆"] } },
    { id: "grapes", names: { [Language.TH]: "องุ่น", [Language.EN]: "Grapes", [Language.ZH]: "葡萄" }, emoji: "🍇", benefits: { [Language.TH]: ["สารต้านอนุมูลอิสระจากเปลือก", "ดีต่อใจและความดัน", "กินง่ายเป็นพวง", "หวานชื่นใจ"], [Language.EN]: ["Antioxidants from the skin", "Good for heart and blood pressure", "Easy to eat in bunches", "Sweet and delightful"], [Language.ZH]: ["果皮富含抗氧化剂", "有益心脏和血压", "成串食用方便", "甘甜爽口"] } },
    { id: "raspberry", names: { [Language.TH]: "ราสเบอร์รี่", [Language.EN]: "Raspberry", [Language.ZH]: "覆盆子" }, emoji: "🍓", benefits: { [Language.TH]: ["ต้านการอักเสบในเซลล์", "วิตามินและแร่ธาตุสูง", "สีแดงสดใสน่ากิน", "รสเปรี้ยวอมหวานมีเอกลักษณ์"], [Language.EN]: ["Fights inflammation at cellular level", "Rich in vitamins and minerals", "Bright red and appetizing", "Unique sweet-tart flavor"], [Language.ZH]: ["细胞级抗炎", "富含维生素和矿物质", "鲜红诱人", "独特的酸甜风味"] } },
    // Note: Using strawberry emoji as a common berry representation
    { id: "avocado", names: { [Language.TH]: "อะโวคาโด", [Language.EN]: "Avocado", [Language.ZH]: "牛油果" }, emoji: "🥑", benefits: { [Language.TH]: ["ไขมันดีต่อสุขภาพหัวใจ", "เนื้อครีมมี่สุดๆ", "อิ่มนาน อยู่ท้อง", "วิตามิน E บำรุงผิว"], [Language.EN]: ["Healthy fats for heart health", "Super creamy texture", "Keeps you full longer", "Vitamin E for skin nourishment"], [Language.ZH]: ["健康脂肪有益心脏", "超级顺滑的奶油质地", "持久饱腹", "维生素E滋养肌肤"] } },
    { id: "passion_fruit", names: { [Language.TH]: "เสาวรส", [Language.EN]: "Passion Fruit", [Language.ZH]: "百香果" }, emoji: "✨", benefits: { [Language.TH]: ["วิตามิน C สูง ช่วยเรื่องภูมิคุ้มกัน", "ช่วยย่อยและระบบขับถ่าย", "กลิ่นหอมเป็นเอกลักษณ์", "รสเปรี้ยวจี๊ดจ๊าดชื่นใจ"], [Language.EN]: ["Rich in Vitamin C for immunity", "Aids digestion and bowel function", "Unique aromatic scent", "Tangy and refreshing taste"], [Language.ZH]: ["富含维生素C助免疫", "助消化和排便", "独特芳香气味", "酸爽提神醒脑"] } },
    { id: "lychee", names: { [Language.TH]: "ลิ้นจี่", [Language.EN]: "Lychee", [Language.ZH]: "荔枝" }, emoji: "💖", benefits: { [Language.TH]: ["วิตามิน C และ B รวม", "สดชื่น หวานฉ่ำ", "ผลไม้โปรดของหยางกุ้ยเฟย", "กลิ่นหอมละมุน"], [Language.EN]: ["Vitamins C and B-complex", "Refreshing and juicy sweet", "Yang Guifei's favorite fruit", "Delicate aroma"], [Language.ZH]: ["维生素C和B族", "清爽多汁香甜", "杨贵妃最爱的水果", "清雅芳香"] } },
    { id: "dragon_fruit", names: { [Language.TH]: "แก้วมังกร", [Language.EN]: "Dragon Fruit", [Language.ZH]: "火龙果" }, emoji: "💜", benefits: { [Language.TH]: ["สารต้านอนุมูลอิสระสีม่วงแดง", "ไฟเบอร์สูง ดีต่อการขับถ่าย", "แคลอรี่ต่ำ เหมาะกับคนคุมน้ำหนัก", "หน้าตาสวยงามแปลกตา"], [Language.EN]: ["Red-purple antioxidants", "High fiber, good for digestion", "Low calorie, great for weight control", "Beautiful and exotic appearance"], [Language.ZH]: ["红紫色抗氧化剂", "高纤维益消化", "低卡路里助控制体重", "外观美丽奇特"] } },
    { id: "papaya", names: { [Language.TH]: "มะละกอ", [Language.EN]: "Papaya", [Language.ZH]: "木瓜" }, emoji: "🟠", benefits: { [Language.TH]: ["เอนไซม์ปาเปนช่วยย่อยโปรตีน", "วิตามิน C และ A สูง", "บำรุงผิวพรรณให้สดใส", "ช่วยเรื่องท้องผูก"], [Language.EN]: ["Papain enzyme aids protein digestion", "High in Vitamins C and A", "Promotes bright, healthy skin", "Helps with constipation"], [Language.ZH]: ["木瓜蛋白酶助蛋白质消化", "富含维生素C和A", "促进肌肤亮丽健康", "缓解便秘"] } },
    { id: "pomegranate", names: { [Language.TH]: "ทับทิม", [Language.EN]: "Pomegranate", [Language.ZH]: "石榴" }, emoji: "🔴", benefits: { [Language.TH]: ["สารต้านอนุมูลอิสระสูงมาก", "ดีต่อสุขภาพหัวใจและหลอดเลือด", "เมล็ดสวยเหมือนอัญมณี", "น้ำทับทิมอร่อยชื่นใจ"], [Language.EN]: ["Very high in antioxidants", "Good for heart and blood vessel health", "Seeds like beautiful jewels", "Delicious and refreshing juice"], [Language.ZH]: ["抗氧化剂含量极高", "有益心血管健康", "籽粒美如宝石", "美味清爽的石榴汁"] } }
];

export const specialAddOns: Ingredient[] = [
    { 
      id: "chia_seeds", 
      names: { [Language.TH]: "เม็ดเจีย", [Language.EN]: "Chia Seeds", [Language.ZH]: "奇亚籽" }, 
      emoji: "⚫", 
      benefits: { 
        [Language.TH]: ["ไฟเบอร์สูงปรี๊ด", "โอเมก้า 3 จากพืช", "ช่วยให้อิ่มนาน", "ดูดซับน้ำพองตัว"], 
        [Language.EN]: ["Super high in fiber", "Plant-based Omega-3s", "Promotes satiety", "Absorbs water and expands"], 
        [Language.ZH]: ["纤维含量超高", "植物性Omega-3", "增强饱腹感", "吸水膨胀"] 
      } 
    },
    { 
      id: "golden_zen_syrup", 
      names: { [Language.TH]: "ไซรัป Golden Zen", [Language.EN]: "Golden Zen Syrup", [Language.ZH]: "Golden Zen 糖浆" }, 
      emoji: "🍯", 
      benefits: { 
        [Language.TH]: ["ต้านไวรัสตามตำรับ", "บำรุงลำคอให้ชุ่มชื่น", "เพิ่มความหอมหวานแบบสุขภาพดี", "ส่วนผสมลับเพื่อความสงบ"], 
        [Language.EN]: ["Traditional antiviral properties", "Soothes and moisturizes the throat", "Adds healthy sweetness and aroma", "Secret ingredient for tranquility"], 
        [Language.ZH]: ["传统抗病毒功效", "滋润喉咙", "增添健康香甜风味", "宁静的秘密配方"] 
      } 
    },
    { 
      id: "berry_kiss_syrup", 
      names: { [Language.TH]: "ไซรัป Berry Kiss", [Language.EN]: "Berry Kiss Syrup", [Language.ZH]: "Berry Kiss 糖浆" }, 
      emoji: "🍓", 
      benefits: { 
        [Language.TH]: ["ความหอมหวานของเบอร์รี่รวม", "เพิ่มความสดใสมีชีวิตชีวา", "สีสันสวยงามน่าดื่ม", "สัมผัสแห่งความสุข"], 
        [Language.EN]: ["Sweet aroma of mixed berries", "Brightens mood and adds vibrancy", "Beautiful color, inviting to drink", "A touch of happiness"], 
        [Language.ZH]: ["混合浆果的香甜气息", "增添活力与光彩", "色泽美丽诱人", "一丝幸福感"] 
      } 
    },
    { 
      id: "protein_powder", 
      names: { [Language.TH]: "ผงโปรตีน", [Language.EN]: "Protein Powder", [Language.ZH]: "蛋白粉" }, 
      emoji: "💪", 
      benefits: { 
        [Language.TH]: ["สร้างกล้ามเนื้อให้แข็งแรง", "ซ่อมแซมร่างกายหลังออกกำลังกาย", "เพิ่มโปรตีนให้มื้ออาหาร", "อิ่มนานขึ้น"], 
        [Language.EN]: ["Builds strong muscles", "Repairs body post-workout", "Boosts protein content of meals", "Increases satiety"], 
        [Language.ZH]: ["塑造强健肌肉", "运动后修复身体", "增加膳食蛋白质", "更持久的饱腹感"] 
      } 
    }
];