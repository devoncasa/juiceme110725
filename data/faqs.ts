import { Language } from '../types.ts';

export interface FaqItem {
  question: { [key in Language]: string };
  answer: { [key in Language]: string };
}

export const faqsData: FaqItem[] = [
  {
    question: {
      [Language.EN]: '1. What is cold-pressed juice, and how is it made?',
      [Language.TH]: '1. น้ำผลไม้สกัดเย็นคืออะไร ทำไมถึงดีกว่าน้ำผลไม้ทั่วไป?',
      [Language.ZH]: '1. 什么是冷压果汁，它是如何制作的？',
    },
    answer: {
      [Language.EN]: 'Cold-pressed juice is extracted using a hydraulic press that applies thousands of pounds of pressure to fruits and vegetables. This method does not use heat, which helps preserve vitamins, enzymes, and phytonutrients that are typically destroyed in traditional juicing methods. It results in juice that’s richer in nutrition, flavor, and freshness.',
      [Language.TH]: 'น้ำผลไม้สกัดเย็นคือน้ำผลไม้ที่ได้จากการใช้เครื่องสกัดแบบไฮดรอลิกที่ไม่ใช้ความร้อน ทำให้สารอาหาร วิตามิน และเอนไซม์ยังคงอยู่ครบถ้วน ต่างจากน้ำผลไม้ทั่วไปที่อาจผ่านความร้อนซึ่งทำให้คุณค่าทางอาหารลดลง เหมาะกับคนรักสุขภาพอย่างแท้จริง',
      [Language.ZH]: '冷压果汁是使用液压机对水果和蔬菜施加数千磅的压力提取而成的。此方法不使用热量，有助于保存维生素、酶和植物营养素，这些通常在传统榨汁方法中会被破坏。这样得到的果汁营养更丰富、风味更佳、更新鲜。',
    },
  },
  {
    question: {
      [Language.EN]: '2. What are the health benefits of cold-pressed juice?',
      [Language.TH]: '2. น้ำผลไม้สกัดเย็นมีประโยชน์อย่างไรบ้าง?',
      [Language.ZH]: '2. 冷压果汁有什么健康益处？',
    },
    answer: {
      [Language.EN]: 'Cold-pressed juice delivers a high concentration of nutrients in a single serving, including antioxidants, anti-inflammatory compounds, vitamins, and minerals. These juices can help boost immunity, improve digestion, support skin health, and increase energy when consumed regularly as part of a balanced lifestyle.',
      [Language.TH]: 'อุดมไปด้วยวิตามิน แร่ธาตุ และสารต้านอนุมูลอิสระ ช่วยเสริมภูมิคุ้มกัน บำรุงผิวพรรณ ระบบย่อยอาหาร และเพิ่มพลังงานได้ดี โดยเฉพาะเมื่อดื่มเป็นประจำควบคู่กับการทานอาหารที่ดี',
      [Language.ZH]: '冷压果汁单份即可提供高浓度的营养，包括抗氧化剂、抗炎化合物、维生素和矿物质。作为均衡生活方式的一部分，定期饮用这些果汁有助于增强免疫力、改善消化、支持皮肤健康和增加能量。',
    },
  },
  {
    question: {
        [Language.EN]: '3. How does cold-pressed juice compare to centrifugal or pasteurized juices?',
        [Language.TH]: '3. น้ำผลไม้สกัดเย็นต่างจากน้ำผลไม้แบบปั่นหรือแบบพาสเจอร์ไรส์อย่างไร?',
        [Language.ZH]: '3. 冷压果汁与离心式或巴氏杀菌果汁有何不同？',
    },
    answer: {
        [Language.EN]: 'Unlike centrifugal juicers (which spin at high speed and generate heat), cold-pressed juicers avoid oxidation and thermal degradation. Also, pasteurized juices are heat-treated for shelf life but lose a significant portion of live enzymes and delicate nutrients. Cold-pressed juices are fresher, more nutritious, and chemical-free.',
        [Language.TH]: 'แบบปั่นหรือแบบแรงเหวี่ยงจะเกิดความร้อนและอากาศ ทำให้สารอาหารบางส่วนสูญเสียไป ส่วนแบบพาสเจอร์ไรส์จะผ่านความร้อนสูงเพื่อเก็บได้นาน แต่วิตามินและเอนไซม์บางชนิดก็หายไปด้วย ขณะที่น้ำสกัดเย็นสดใหม่และเก็บคุณค่าไว้ครบถ้วนที่สุด',
        [Language.ZH]: '与高速旋转并产生热量的离心式榨汁机不同，冷压榨汁机避免了氧化和热降解。此外，巴氏杀菌果汁经过热处理以延长保质期，但会损失大部分活性酶和脆弱的营养素。冷压果汁更新鲜、营养更丰富且不含化学物质。',
    },
  },
  {
    question: {
        [Language.EN]: '4. Can I use cold-pressed juices as a meal replacement or for cleansing?',
        [Language.TH]: '4. ดื่มน้ำสกัดเย็นแทนมื้ออาหารหรือใช้ล้างพิษ (detox) ได้ไหม?',
        [Language.ZH]: '4. 我可以用冷压果汁代替正餐或用于排毒吗？',
    },
    answer: {
        [Language.EN]: 'Yes, many people use cold-pressed juices as part of juice cleanses, detox programs, or intermittent fasting routines. While juice fasting can give the digestive system a break and flood the body with micronutrients, long-term use should be done under professional guidance. Add protein or healthy fats if using as a meal substitute.',
        [Language.TH]: 'ได้ค่ะ หลายคนใช้น้ำผลไม้สกัดเย็นในโปรแกรมดีท็อกซ์หรือล้างลำไส้ เพราะร่างกายดูดซึมได้ไว แต่ถ้าใช้แทนมื้ออาหารบ่อย ๆ ควรมีการเสริมโปรตีนหรือไขมันดีร่วมด้วยเพื่อให้สมดุล และควรอยู่ภายใต้คำแนะนำของผู้เชี่ยวชาญ',
        [Language.ZH]: '是的，许多人将冷压果汁用作果汁排毒、净化计划或间歇性禁食的一部分。虽然果汁禁食可以让消化系统得到休息并为身体注入微量营养素，但长期使用应在专业指导下进行。如果用作代餐，请添加蛋白质或健康脂肪。',
    },
  },
  {
    question: {
        [Language.EN]: '5. How long do cold-pressed juices stay fresh?',
        [Language.TH]: '5. น้ำผลไม้สกัดเย็นเก็บได้นานแค่ไหน?',
        [Language.ZH]: '5. 冷压果汁能保鲜多久？',
    },
    answer: {
        [Language.EN]: 'Without added preservatives, cold-pressed juices typically last 3 to 5 days when properly refrigerated (below 4°C or 39°F). They should be kept in airtight glass bottles and consumed quickly after opening, as natural oxidation will degrade quality over time. Always check for changes in color, smell, or taste.',
        [Language.TH]: 'โดยทั่วไปจะเก็บได้นาน 3–5 วัน เมื่อแช่ในตู้เย็นที่อุณหภูมิต่ำกว่า 4°C (หรือ 39°F) และควรดื่มทันทีหลังเปิดฝาเพื่อรักษาคุณภาพให้ดีที่สุด หลีกเลี่ยงแสงแดดและอากาศเพื่อป้องกันการเสื่อมสภาพ',
        [Language.ZH]: '在没有添加防腐剂的情况下，冷压果汁在适当冷藏（低于4°C或39°F）下通常可以保存3到5天。它们应存放在密封的玻璃瓶中，并在开封后尽快饮用，因为自然氧化会随着时间的推移降低品质。请务必检查颜色、气味或味道的变化。',
    },
  },
  {
    question: {
        [Language.EN]: '6. Are cold-pressed juices safe for children and seniors?',
        [Language.TH]: '6. เด็กหรือผู้สูงอายุดื่มน้ำสกัดเย็นได้ไหม?',
        [Language.ZH]: '6. 冷压果汁对儿童和老人安全吗？',
    },
    answer: {
        [Language.EN]: 'Yes, they are generally safe for all ages when consumed in moderation. However, parents should watch for high natural sugar content in fruit-heavy juices and ensure diversity of ingredients. For seniors, cold-pressed juice can help supplement nutrients, especially if chewing or digestion is a concern.',
        [Language.TH]: 'ได้ค่ะ น้ำสกัดเย็นปลอดภัยสำหรับทุกวัย แต่ควรเลือกสูตรที่มีน้ำตาลธรรมชาติน้อย โดยเฉพาะสำหรับเด็ก หรือผู้สูงวัยควรเน้นสูตรที่ย่อยง่าย และเสริมสารอาหารที่จำเป็นในแต่ละช่วงวัย',
        [Language.ZH]: '是的，适量饮用对所有年龄段的人通常都是安全的。但是，父母应注意水果含量高的果汁中的天然糖分含量，并确保成分多样化。对于老年人来说，冷压果汁可以帮助补充营养，尤其是在咀嚼或消化有困难的情况下。',
    },
  },
    {
    question: {
        [Language.EN]: '7. Is it better to juice or blend (smoothies)?',
        [Language.TH]: '7. ระหว่างน้ำผลไม้กับสมูทตี้ แบบไหนดีกว่า?',
        [Language.ZH]: '7. 榨汁和打冰沙哪个更好？',
    },
    answer: {
        [Language.EN]: 'Juicing removes the fiber, allowing nutrients to be absorbed quickly—ideal for detox or energy boost. Smoothies retain fiber, which supports digestion, satiety, and blood sugar balance. Each serves a purpose: juices for quick nutrient delivery, smoothies for sustained energy and gut health.',
        [Language.TH]: 'น้ำผลไม้: ดูดซึมไว เหมาะกับการฟื้นฟูพลังงานหรือดีท็อกซ์\n\nสมูทตี้: มีไฟเบอร์ ช่วยให้อิ่มนาน ย่อยช้า เหมาะกับการทานแทนมื้ออาหาร\nทั้งสองแบบมีข้อดีต่างกัน ขึ้นอยู่กับจุดประสงค์ในการดื่ม',
        [Language.ZH]: '榨汁会去除纤维，使营养物质被快速吸收——非常适合排毒或补充能量。冰沙保留了纤维，有助于消化、饱腹感和血糖平衡。两者各有用途：果汁用于快速输送营养，冰沙用于持续能量和肠道健康。',
    },
  },
  {
    question: {
        [Language.EN]: '8. Can I lose weight by drinking cold-pressed juices or smoothies?',
        [Language.TH]: '8. ดื่มน้ำสกัดเย็นหรือสมูทตี้ช่วยลดน้ำหนักได้จริงไหม?',
        [Language.ZH]: '8. 喝冷压果汁或冰沙能减肥吗？',
    },
    answer: {
        [Language.EN]: 'When used smartly, juices and smoothies can support weight management by replacing high-calorie, low-nutrient meals. Juices are low in calories but high in nutrients, while smoothies (especially with protein, greens, and healthy fats) can serve as filling meal replacements. Watch sugar content and portion size.',
        [Language.TH]: 'หากเลือกสูตรให้เหมาะสม เช่น ลดผลไม้รสหวานและเพิ่มผัก หรือโปรตีนและไขมันดี สมูทตี้สามารถใช้แทนมื้ออาหารได้ ส่วนสูตรน้ำสกัดเย็นที่มีแคลอรี่น้อยก็ช่วยควบคุมน้ำหนักได้เช่นกัน',
        [Language.ZH]: '如果使用得当，果汁和冰沙可以通过替代高热量、低营养的膳食来支持体重管理。果汁热量低但营养丰富，而冰沙（特别是含有蛋白质、绿色蔬菜和健康脂肪的冰沙）可以作为充饥的代餐。注意糖分含量和份量。',
    },
  },
  {
    question: {
        [Language.EN]: '9. What ingredients are best for energy, skin, or immunity?',
        [Language.TH]: '9. วัตถุดิบแบบไหนที่เหมาะสำหรับเพิ่มพลัง บำรุงผิว หรือเสริมภูมิคุ้มกัน?',
        [Language.ZH]: '9. 哪些成分最适合补充能量、护肤或增强免疫力？',
    },
    answer: {
        [Language.EN]: 'Energy: Beets, oranges, spinach, spirulina\nSkin Health: Carrots (vitamin A), cucumber (hydration), berries (antioxidants)\nImmunity: Ginger, turmeric, lemon, kale, goji berry\nTip: Rotate ingredients to get a full spectrum of nutrients.',
        [Language.TH]: 'เพิ่มพลัง: บีทรูท ส้ม ผักโขม\n\nผิวพรรณ: แครอท แตงกวา เบอร์รี่\n\nภูมิคุ้มกัน: ขิง ขมิ้น มะนาว โกจิเบอร์รี่\nแนะนำให้สลับวัตถุดิบบ่อย ๆ เพื่อได้รับสารอาหารครบถ้วน',
        [Language.ZH]: '能量: 甜菜根、橙子、菠菜、螺旋藻。\n护肤: 胡萝卜（维生素A）、黄瓜（补水）、浆果（抗氧化剂）。\n免疫力: 姜、姜黄、柠檬、羽衣甘蓝、枸杞。\n提示: 轮换成分以获得全面的营养。',
    },
  },
  {
    question: {
        [Language.EN]: '10. Are your juices organic or additive-free?',
        [Language.TH]: '10. วัตถุดิบของ Juice Me ปลอดภัยและออร์แกนิคหรือไม่?',
        [Language.ZH]: '10. 你们的果汁是有机的还是无添加的？',
    },
    answer: {
        [Language.EN]: 'All our cold-pressed juices are made with fresh, natural ingredients, with no artificial preservatives, colors, or refined sugars. Whenever possible, we source organic or pesticide-free produce from local and regional farms in Thailand.',
        [Language.TH]: 'วัตถุดิบของเราสดใหม่จากธรรมชาติ ปราศจากสารกันบูด สีแต่งกลิ่น และน้ำตาลขัดขาว โดยเราคัดสรรผักผลไม้จากเกษตรกรท้องถิ่น และแหล่งปลูกที่ใส่ใจสุขภาพลูกค้าเป็นหลัก',
        [Language.ZH]: '我们所有的冷压果汁都采用新鲜、天然的原料制成，不含人工防腐剂、色素或精制糖。只要有可能，我们就会从泰国本地和地区的农场采购有机或无农药的产品。',
    },
  },
  {
    question: {
        [Language.EN]: '11. Why is cold-pressed juice more expensive than regular juice?',
        [Language.TH]: '11. ทำไมน้ำสกัดเย็นถึงราคาสูงกว่าน้ำผลไม้ทั่วไป?',
        [Language.ZH]: '11. 为什么冷压果汁比普通果汁贵？',
    },
    answer: {
        [Language.EN]: 'Cold-pressing is a slow, labor-intensive process using high-pressure equipment. It uses more produce per bottle and retains significantly more nutrients. The higher cost reflects the quality of ingredients, nutrient density, and shorter shelf life without preservatives.',
        [Language.TH]: 'เพราะใช้วัตถุดิบปริมาณมากต่อขวด กระบวนการสกัดช้าและใช้เครื่องเฉพาะ ทำให้ได้สารอาหารเข้มข้นกว่าน้ำทั่วไป รวมถึงไม่มีสารกันบูดหรือการผ่านความร้อน จึงมีต้นทุนสูงกว่าน้ำผลไม้ทั่วไปที่ผ่านการผลิตแบบเชิงอุตสาหกรรม',
        [Language.ZH]: '冷压是一个缓慢、劳动密集型的过程，使用高压设备。每瓶使用的农产品更多，并保留了更多的营养。较高的成本反映了原料的质量、营养密度以及没有防腐剂的较短保质期。',
    },
  },
  {
    question: {
        [Language.EN]: '12. Can I customize my juice or smoothie order?',
        [Language.TH]: '12. สามารถสั่งน้ำหรือสมูทตี้แบบปรับสูตรเองได้ไหม?',
        [Language.ZH]: '12. 我可以定制我的果汁或冰沙订单吗？',
    },
    answer: {
        [Language.EN]: 'Yes! At Juice Me, we offer custom builds. You can choose from our wide selection of over 120 fruits, vegetables, and herbs, including Thai superfoods. Personalize your drink based on your taste, dietary needs, or wellness goals—and our team will craft it fresh!',
        [Language.TH]: 'ได้เลย! ลูกค้าสามารถเลือกส่วนผสมเองจากวัตถุดิบกว่า 120 ชนิด ทั้งผลไม้ ผัก สมุนไพร และซูเปอร์ฟู้ดไทย ปรับรสชาติหรือเลือกตามเป้าหมายสุขภาพได้ตามใจ ทีมเราจะคั้นสดใหม่ให้ทุกแก้ว',
        [Language.ZH]: '可以！在Juice Me，我们提供定制服务。您可以从我们超过120种水果、蔬菜和草药（包括泰国超级食品）的广泛选择中进行选择。根据您的口味、饮食需求或健康目标来个性化您的饮品——我们的团队将为您新鲜制作！',
    },
  },
];
