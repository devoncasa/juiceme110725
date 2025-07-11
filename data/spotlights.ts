import { Language, SuperfoodSpotlight } from '../types.ts';

export const spotlightsData: SuperfoodSpotlight[] = [
  {
    id: 'avocado',
    type: 'fruit',
    image: 'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg',
    title: {
      [Language.EN]: 'The Creamy Powerhouse: Avocado',
      [Language.TH]: 'ขุมพลังเนื้อครีม: อะโวคาโด',
      [Language.ZH]: '奶油动力源：牛油果',
    },
    description: {
      [Language.EN]: "This unique fruit is prized for its high content of healthy monounsaturated fats, which are incredible for heart health and keeping you feeling full. Its buttery, creamy texture makes it a perfect base for creating exceptionally smooth and rich smoothies, adding a luxurious mouthfeel that's hard to beat.",
      [Language.TH]: 'ผลไม้พิเศษนี้โดดเด่นด้วยไขมันไม่อิ่มตัวเชิงเดี่ยวที่ดีต่อสุขภาพในปริมาณสูง ซึ่งยอดเยี่ยมสำหรับสุขภาพหัวใจและช่วยให้คุณรู้สึกอิ่มนาน เนื้อสัมผัสที่เนียนนุ่มเหมือนเนยทำให้เป็นเบสที่สมบูรณ์แบบสำหรับสมูทตี้ที่เนียนและเข้มข้นเป็นพิเศษ',
      [Language.ZH]: '这种独特的水果因其富含健康的单不饱和脂肪而备受推崇，对心脏健康非常有益，并能让您保持饱腹感。其黄油般的奶油质地使其成为制作异常顺滑浓郁的冰沙的完美基底，带来难以匹敌的奢华口感。',
    },
    fact: {
      [Language.EN]: 'Biologically, an avocado is a single-seed berry! It matures on the tree but only ripens after being harvested.',
      [Language.TH]: 'ในทางชีววิทยา อะโวคาโดคือเบอร์รี่ที่มีเมล็ดเดียว! มันจะแก่บนต้น แต่จะสุกหลังจากเก็บเกี่ยวแล้วเท่านั้น',
      [Language.ZH]: '从生物学上讲，牛油果是一种单籽浆果！它在树上成熟，但只有在采摘后才会变熟。',
    },
    why: {
      [Language.EN]: "It's loaded with potassium (more than a banana!), fiber, and Vitamin E. The healthy fats also help your body absorb fat-soluble vitamins from other ingredients in your smoothie, maximizing the nutritional punch of your entire drink.",
      [Language.TH]: 'มันเต็มไปด้วยโพแทสเซียม (มากกว่ากล้วย!), ไฟเบอร์ และวิตามิน E ไขมันดีเหล่านี้ยังช่วยให้ร่างกายดูดซึมวิตามินที่ละลายในไขมันจากส่วนผสมอื่น ๆ ในสมูทตี้ของคุณ เพิ่มคุณค่าทางโภชนาการสูงสุดให้กับเครื่องดื่มของคุณ',
      [Language.ZH]: '它富含钾（比香蕉还多！）、纤维和维生素E。健康的脂肪还能帮助您的身体从冰沙中的其他成分中吸收脂溶性维生素，从而最大限度地提高整杯饮料的营养价值。',
    },
    tip: {
      [Language.EN]: 'For the creamiest smoothie, use a ripe avocado that gives slightly to firm, gentle pressure. Blend it with a splash of lemon or lime juice to prevent browning and add a zesty kick!',
      [Language.TH]: 'เพื่อให้ได้สมูทตี้ที่ครีมมี่ที่สุด ใช้อะโวคาโดที่สุกกำลังดีซึ่งจะนิ่มเล็กน้อยเมื่อกดเบาๆ ปั่นกับน้ำมะนาวเล็กน้อยเพื่อป้องกันไม่ให้มันเปลี่ยนเป็นสีน้ำตาลและเพิ่มรสชาติที่สดชื่น!',
      [Language.ZH]: '想要制作最奶油般的冰沙，请使用成熟的牛油果，即用手轻轻按压时会略微变软。将其与少量柠檬或青柠汁混合，以防止褐变并增添一丝清爽的风味！',
    },
  },
  {
    id: 'berries',
    type: 'mixed-fruits',
    image: 'https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg',
    title: {
      [Language.EN]: 'The Antioxidant Trio: Berries',
      [Language.TH]: 'สามทหารเสือต้านอนุมูลอิสระ: ตระกูลเบอร์รี่',
      [Language.ZH]: '抗氧化三剑客：浆果',
    },
    description: {
      [Language.EN]: "Imagine the combined power of strawberries, blueberries, and raspberries. This vibrant trio is nature's defense squad, packed with antioxidants like anthocyanins which give them their brilliant hues. This creates a potent elixir that supports brain health, boosts your immune system, and promotes radiant skin.",
      [Language.TH]: 'ลองนึกภาพพลังที่รวมกันของสตรอเบอร์รี่ บลูเบอร์รี่ และราสเบอร์รี่ สามทหารเสือสีสันสดใสนี้คือหน่วยป้องกันของธรรมชาติ อัดแน่นไปด้วยสารต้านอนุมูลอิสระเช่นแอนโทไซยานินที่ให้สีสันสดใส กลายเป็นยาอายุวัฒนะที่ทรงพลังซึ่งสนับสนุนสุขภาพสมอง เสริมสร้างระบบภูมิคุ้มกัน และส่งเสริมผิวที่เปล่งปลั่ง',
      [Language.ZH]: '想象一下草莓、蓝莓和覆盆子的综合力量。这个充满活力的三人组是大自然的防御小队，富含花青素等抗氧化剂，赋予它们绚丽的色彩。这创造出一种有效的灵丹妙药，支持大脑健康，增强免疫系统，并促进容光焕发的肌肤。',
    },
    fact: {
      [Language.EN]: 'Many berries, including raspberries, are members of the rose family, sharing botanical relatives with apples and cherries.',
      [Language.TH]: 'เบอร์รี่หลายชนิด รวมถึงราสเบอร์รี่ เป็นสมาชิกในวงศ์กุหลาบ มีความเกี่ยวข้องทางพฤกษศาสตร์กับแอปเปิ้ลและเชอร์รี่',
      [Language.ZH]: '许多浆果，包括覆盆子，都是蔷薇科的成员，与苹果和樱桃有植物学上的亲缘关系。',
    },
    why: {
      [Language.EN]: 'This mix provides a broad spectrum of vitamins (especially Vitamin C) and dietary fiber for a low calorie count. The combination of different phytonutrients offers more comprehensive health benefits than any single berry could alone.',
      [Language.TH]: 'ส่วนผสมนี้ให้วิตามินหลากหลายชนิด (โดยเฉพาะวิตามินซี) และใยอาหารในปริมาณแคลอรี่ที่ต่ำ การรวมกันของสารพฤกษเคมีที่แตกต่างกันให้ประโยชน์ต่อสุขภาพที่ครอบคลุมมากกว่าเบอร์รี่ชนิดเดียว',
      [Language.ZH]: '这种混合物提供了广泛的维生素（特别是维生素C）和膳食纤维，而且热量很低。不同植物营养素的组合比任何单一浆果本身都能提供更全面的健康益处。',
    },
    tip: {
      [Language.EN]: 'Use a mix of fresh and frozen berries. The frozen ones will give your smoothie a thick, ice-cream-like consistency without watering down the intense flavor.',
      [Language.TH]: 'ใช้เบอร์รี่ทั้งสดและแช่แข็งผสมกัน เบอร์รี่แช่แข็งจะทำให้สมูทตี้ของคุณมีเนื้อข้นเหมือนไอศกรีมโดยไม่ทำให้รสชาติเข้มข้นจางลง',
      [Language.ZH]: '混合使用新鲜和冷冻的浆果。冷冻的浆果会给你的冰沙带来浓稠如冰淇淋的质地，而不会稀释浓郁的风味。',
    },
  },
  {
    id: 'kale',
    type: 'vegetable',
    image: 'https://i.postimg.cc/25crWdfx/juice-me-image-place-holder-and-background-decorative-0010.jpg',
    title: {
      [Language.EN]: 'The Green Giant: Mighty Kale',
      [Language.TH]: 'ยักษ์ใหญ่สีเขียว: เคลผู้ยิ่งใหญ่',
      [Language.ZH]: '绿色巨人：强大的羽衣甘蓝',
    },
    description: {
      [Language.EN]: "Kale is the undisputed king of nutrient-dense greens. This leafy vegetable is a true powerhouse, offering more nutritional value for fewer calories than almost any other food. Adding kale is one of the easiest ways to supercharge your drink, supporting everything from bone health to detoxification processes in your body.",
      [Language.TH]: 'เคลคือราชาแห่งผักใบเขียวที่อุดมด้วยสารอาหารอย่างไม่มีข้อโต้แย้ง ผักใบนี้เป็นขุมพลังที่แท้จริง ให้คุณค่าทางโภชนาการมากกว่าสำหรับแคลอรี่ที่น้อยกว่าอาหารอื่น ๆ เกือบทั้งหมด การเพิ่มเคลเป็นวิธีที่ง่ายที่สุดในการเพิ่มพลังให้เครื่องดื่มของคุณ สนับสนุนทุกอย่างตั้งแต่สุขภาพกระดูกไปจนถึงกระบวนการล้างพิษในร่างกาย',
      [Language.ZH]: '羽衣甘蓝是营养密集型绿色蔬菜中无可争议的王者。这种叶类蔬菜是一个真正的动力源，比几乎任何其他食物都以更少的热量提供更多的营养价值。添加羽衣甘蓝是增强您饮品能量的最简单方法之一，支持从骨骼健康到身体排毒过程的一切。',
    },
    fact: {
      [Language.EN]: 'A single cup of raw kale has more Vitamin C than an orange and more Vitamin A than a carrot!',
      [Language.TH]: 'เคลดิบหนึ่งถ้วยมีวิตามินซีมากกว่าส้มหนึ่งลูกและมีวิตามินเอมากกว่าแครอทหนึ่งหัว!',
      [Language.ZH]: '一杯生羽衣甘蓝的维生素C含量比一个橙子还多，维生素A含量比一根胡萝卜还多！',
    },
    why: {
      [Language.EN]: "Its high concentration of antioxidants and anti-inflammatory compounds helps protect your body at a cellular level. It's also a great source of plant-based iron and chlorophyll.",
      [Language.TH]: 'ความเข้มข้นสูงของสารต้านอนุมูลอิสระและสารต้านการอักเสบช่วยปกป้องร่างกายของคุณในระดับเซลล์ นอกจากนี้ยังเป็นแหล่งธาตุเหล็กและคลอโรฟิลล์จากพืชที่ดีเยี่ยม',
      [Language.ZH]: '其高浓度的抗氧化剂和抗炎化合物有助于在细胞水平上保护您的身体。它也是植物性铁和叶绿素的绝佳来源。',
    },
    tip: {
      [Language.EN]: 'To reduce bitterness, remove the tough central stem before blending. Massaging the leaves with a bit of lemon juice for a minute can also soften them and make them more palatable.',
      [Language.TH]: 'เพื่อลดความขม ให้เอาก้านกลางที่แข็งออกก่อนปั่น การนวดใบด้วยน้ำมะนาวเล็กน้อยเป็นเวลาหนึ่งนาทียังช่วยให้ใบนุ่มและอร่อยขึ้นได้',
      [Language.ZH]: '为减少苦味，在搅拌前去除坚硬的中心茎。用少量柠檬汁按摩叶子一分钟也可以使其变软，口感更好。',
    },
  },
  {
    id: 'mango',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Tropical Gold: Mango',
      [Language.TH]: 'ทองคำแห่งเขตร้อน: มะม่วง',
      [Language.ZH]: '热带黄金：芒果',
    },
    description: {
      [Language.EN]: 'Known as the "king of fruits", mangoes are a sweet, fragrant, and juicy delight. Their rich, golden flesh is not only delicious but also packed with nutrients that support overall health, making them a perfect addition to any smoothie for a taste of the tropics.',
      [Language.TH]: 'ได้รับการขนานนามว่าเป็น "ราชาแห่งผลไม้" มะม่วงเป็นผลไม้ที่หอมหวานและชุ่มฉ่ำ เนื้อสีทองอร่อยไม่เพียงเท่านั้น แต่ยังอุดมไปด้วยสารอาหารที่สนับสนุนสุขภาพโดยรวม ทำให้เป็นส่วนผสมที่สมบูรณ์แบบสำหรับสมูทตี้ทุกชนิดเพื่อรสชาติของเขตร้อน',
      [Language.ZH]: '被誉为“水果之王”的芒果，香甜多汁。其丰富的金色果肉不仅美味，还富含支持整体健康的营养素，是任何冰沙的完美搭配，带来热带风情。',
    },
    fact: {
      [Language.EN]: 'There are over 500 varieties of mangoes grown around the world!',
      [Language.TH]: 'มีมะม่วงกว่า 500 สายพันธุ์ที่ปลูกทั่วโลก!',
      [Language.ZH]: '全世界种植的芒果有超过500个品种！',
    },
    why: {
      [Language.EN]: 'Mangoes are an excellent source of Vitamin A and C, which are crucial for immune function and skin health. They also contain folate and antioxidants like mangiferin, which has anti-inflammatory properties.',
      [Language.TH]: 'มะม่วงเป็นแหล่งวิตามิน A และ C ที่ยอดเยี่ยม ซึ่งสำคัญต่อการทำงานของระบบภูมิคุ้มกันและสุขภาพผิว นอกจากนี้ยังมีโฟเลตและสารต้านอนุมูลอิสระเช่นแมงจิเฟอรินซึ่งมีคุณสมบัติต้านการอักเสบ',
      [Language.ZH]: '芒果是维生素A和C的极佳来源，对免疫功能和皮肤健康至关重要。它们还含有叶酸和芒果苷等抗氧化剂，具有抗炎特性。',
    },
    tip: {
      [Language.EN]: 'Combine mango with a creamy base like yogurt or coconut milk for an incredibly smooth texture. A little bit of lime juice will brighten its flavor even more.',
      [Language.TH]: 'ผสมมะม่วงกับเบสที่เป็นครีมเช่นโยเกิร์ตหรือกะทิเพื่อให้ได้เนื้อสัมผัสที่เนียนอย่างไม่น่าเชื่อ น้ำมะนาวเล็กน้อยจะช่วยเพิ่มรสชาติให้สดใสยิ่งขึ้น',
      [Language.ZH]: '将芒果与酸奶或椰奶等奶油基底混合，可获得令人难以置信的光滑质地。少许青柠汁会使其风味更加明亮。',
    },
  },
  {
    id: 'pineapple',
    type: 'fruit',
    image: 'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',
    title: {
      [Language.EN]: 'The Digestive King: Pineapple',
      [Language.TH]: 'ราชาแห่งการย่อย: สับปะรด',
      [Language.ZH]: '消化之王：菠萝',
    },
    description: {
      [Language.EN]: 'This tropical fruit offers a burst of sweet and tangy flavor. Beyond its taste, pineapple is celebrated for its unique enzyme, bromelain, which aids in protein digestion and reduces inflammation, making it a functional and delicious choice.',
      [Language.TH]: 'ผลไม้เขตร้อนนี้ให้รสชาติที่หวานอมเปรี้ยวอย่างลงตัว นอกจากรสชาติแล้ว สับปะรดยังมีเอนไซม์พิเศษคือโบรมีเลน ซึ่งช่วยในการย่อยโปรตีนและลดการอักเสบ ทำให้เป็นตัวเลือกที่อร่อยและมีประโยชน์',
      [Language.ZH]: '这种热带水果带来甜美和浓郁的风味。除了味道之外，菠萝还因其独特的菠萝蛋白酶而闻名，该酶有助于蛋白质消化并减少炎症，使其成为功能性强且美味的选择。',
    },
    fact: {
      [Language.EN]: 'A pineapple is not a single fruit, but a cluster of up to 200 fruitlets fused together.',
      [Language.TH]: 'สับปะรดไม่ใช่ผลไม้เดี่ยว แต่เป็นกลุ่มของผลย่อยมากถึง 200 ผลรวมกัน',
      [Language.ZH]: '菠萝不是一个单一的水果，而是由多达200个小果实融合而成的果簇。',
    },
    why: {
      [Language.EN]: 'Rich in Vitamin C and manganese, pineapple supports the immune system and bone health. The bromelain enzyme not only aids digestion but may also help reduce muscle soreness after exercise.',
      [Language.TH]: 'สับปะรดอุดมไปด้วยวิตามินซีและแมงกานีส ช่วยเสริมสร้างระบบภูมิคุ้มกันและสุขภาพกระดูก เอนไซม์โบรมีเลนไม่เพียงช่วยย่อยอาหาร แต่ยังอาจช่วยลดอาการปวดกล้ามเนื้อหลังการออกกำลังกาย',
      [Language.ZH]: '菠萝富含维生素C和锰，支持免疫系统和骨骼健康。菠萝蛋白酶不仅有助于消化，还可能有助于减轻运动后的肌肉酸痛。',
    },
    tip: {
      [Language.EN]: 'Freeze pineapple chunks before blending for a frosty, slushie-like texture. It pairs wonderfully with coconut and ginger.',
      [Language.TH]: 'แช่แข็งชิ้นสับปะรดก่อนปั่นเพื่อให้ได้เนื้อสัมผัสที่เย็นเหมือนสลัชชี่ เข้ากันได้ดีกับมะพร้าวและขิง',
      [Language.ZH]: '在搅拌前冷冻菠萝块，以获得冰霜般的冰沙质地。它与椰子和姜搭配得非常好。',
    },
  },
  {
    id: 'spinach',
    type: 'vegetable',
    image: 'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg',
    title: {
      [Language.EN]: 'The Iron Leaf: Spinach',
      [Language.TH]: 'ใบไม้เหล็ก: ผักโขม',
      [Language.ZH]: '铁叶：菠菜',
    },
    description: {
      [Language.EN]: "Don't be fooled by its delicate leaves; spinach is a nutritional giant. It's an easy way to add a host of vitamins and minerals to your smoothie without significantly altering the taste, providing a hidden boost of green goodness.",
      [Language.TH]: 'อย่าให้ใบที่บอบบางของมันหลอกคุณ ผักโขมเป็นยักษ์ใหญ่ทางโภชนาการ เป็นวิธีง่ายๆ ในการเพิ่มวิตามินและแร่ธาตุมากมายลงในสมูทตี้ของคุณโดยไม่เปลี่ยนรสชาติมากนัก ให้คุณประโยชน์สีเขียวที่ซ่อนอยู่',
      [Language.ZH]: '不要被它娇嫩的叶子所迷惑；菠菜是营养巨头。这是向冰沙中添加多种维生素和矿物质的简便方法，而不会显著改变味道，提供了隐藏的绿色能量。',
    },
    fact: {
      [Language.EN]: 'The creator of the cartoon "Popeye" is credited with boosting spinach consumption in the USA by a third!',
      [Language.TH]: 'ผู้สร้างการ์ตูนเรื่อง "ป๊อปอาย" ได้รับเครดิตว่าช่วยเพิ่มการบริโภคผักโขมในสหรัฐอเมริกาถึงหนึ่งในสาม!',
      [Language.ZH]: '卡通片《大力水手》的创作者被认为使美国的菠菜消费量增加了三分之一！',
    },
    why: {
      [Language.EN]: 'Spinach is loaded with iron, calcium, vitamin K, and antioxidants like lutein and zeaxanthin, which are vital for eye health. It provides these nutrients with very few calories.',
      [Language.TH]: 'ผักโขมอุดมไปด้วยธาตุเหล็ก แคลเซียม วิตามินเค และสารต้านอนุมูลอิสระเช่นลูทีนและซีแซนทีน ซึ่งจำเป็นต่อสุขภาพดวงตา มันให้สารอาหารเหล่านี้โดยมีแคลอรี่น้อยมาก',
      [Language.ZH]: '菠菜富含铁、钙、维生素K以及叶黄素和玉米黄质等抗氧化剂，这些对眼睛健康至关重要。它以极低的热量提供这些营养素。',
    },
    tip: {
      [Language.EN]: 'Blend spinach with a sweet fruit like banana or pineapple. The sweetness completely masks any "green" taste, making it perfect for kids and picky eaters.',
      [Language.TH]: 'ปั่นผักโขมกับผลไม้รสหวานเช่นกล้วยหรือสับปะรด ความหวานจะกลบรสชาติ "เขียว" ทั้งหมด ทำให้เหมาะสำหรับเด็กและคนทานยาก',
      [Language.ZH]: '将菠菜与香蕉或菠萝等甜味水果混合。甜味完全掩盖了任何“绿色”味道，非常适合儿童和挑食者。',
    },
  },
   {
    id: 'ginger',
    type: 'vegetable',
    image: 'https://i.postimg.cc/DZSFPWv3/juice-me-image-place-holder-and-background-decorative-009.jpg',
    title: {
      [Language.EN]: 'The Spicy Healer: Ginger',
      [Language.TH]: 'ผู้เยียวยารสเผ็ดร้อน: ขิง',
      [Language.ZH]: '辛辣治愈者：姜',
    },
    description: {
      [Language.EN]: 'For centuries, this fiery root has been used in traditional medicine for its potent anti-inflammatory and digestive benefits. A small piece adds a warm, spicy kick to any juice or smoothie, waking up your senses and soothing your stomach.',
      [Language.TH]: 'เป็นเวลาหลายศตวรรษที่รากไม้รสเผ็ดร้อนนี้ถูกใช้ในการแพทย์แผนโบราณเพื่อคุณสมบัติต้านการอักเสบและช่วยย่อยอาหารที่มีศักยภาพ ชิ้นเล็กๆ เพียงชิ้นเดียวก็เพิ่มความเผ็ดร้อนที่อบอุ่นให้กับน้ำผลไม้หรือสมูทตี้ ปลุกประสาทสัมผัสและบรรเทากระเพาะอาหารของคุณ',
      [Language.ZH]: '几个世纪以来，这种辛辣的根茎因其强大的抗炎和助消化功效而被用于传统医学。一小块就能为任何果汁或冰沙增添温暖辛辣的刺激，唤醒您的感官，舒缓您的胃部。',
    },
    fact: {
      [Language.EN]: 'Ginger is in the same plant family as turmeric and cardamom.',
      [Language.TH]: 'ขิงอยู่ในวงศ์พืชเดียวกับขมิ้นและกระวาน',
      [Language.ZH]: '姜与姜黄和豆蔻属于同一植物科。',
    },
    why: {
      [Language.EN]: 'The main bioactive compound in ginger is gingerol, which is responsible for much of its medicinal properties. It is highly effective against nausea, can help fight the flu and common cold, and supports healthy digestion.',
      [Language.TH]: 'สารออกฤทธิ์ทางชีวภาพหลักในขิงคือจินเจอร์รอล ซึ่งรับผิดชอบคุณสมบัติทางยาส่วนใหญ่ของมัน มันมีประสิทธิภาพสูงในการต่อต้านอาการคลื่นไส้ สามารถช่วยต่อสู้กับไข้หวัดใหญ่และไข้หวัดธรรมดา และสนับสนุนการย่อยอาหารที่ดีต่อสุขภาพ',
      [Language.ZH]: '姜中的主要生物活性化合物是姜辣素，它负责其大部分药用特性。它对恶心非常有效，可以帮助对抗流感和普通感冒，并支持健康的消化。',
    },
    tip: {
      [Language.EN]: 'A little goes a long way! Start with a small, pea-sized amount of fresh ginger and add more to taste. It pairs exceptionally well with carrot, apple, and lemon.',
      [Language.TH]: 'ใช้น้อยๆ แต่ได้ผลมาก! เริ่มต้นด้วยขิงสดปริมาณเท่าเมล็ดถั่วแล้วเพิ่มตามรสชาติ มันเข้ากันได้ดีเป็นพิเศษกับแครอท แอปเปิ้ล และมะนาว',
      [Language.ZH]: '一点点就够了！从一小块豌豆大小的生姜开始，然后根据口味添加更多。它与胡萝卜、苹果和柠檬搭配得非常好。',
    },
  },
  {
    id: 'beetroot',
    type: 'vegetable',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Earthy Energizer: Beetroot',
      [Language.TH]: 'ผู้ปลุกพลังจากดิน: บีทรูท',
      [Language.ZH]: '大地能量源：甜菜根',
    },
    description: {
      [Language.EN]: 'This vibrant root vegetable imparts a stunning ruby-red color and a unique, earthy-sweet flavor to any blend. It\'s renowned for its ability to boost stamina and improve blood flow, making it a favorite among athletes and health enthusiasts.',
      [Language.TH]: 'ผักรากสีสดใสนี้ให้สีแดงทับทิมที่น่าทึ่งและรสชาติหวานปนดินที่เป็นเอกลักษณ์ในทุกๆ การปั่น มีชื่อเสียงในด้านความสามารถในการเพิ่มความแข็งแกร่งและปรับปรุงการไหลเวียนของเลือด ทำให้เป็นที่ชื่นชอบของนักกีฬาและผู้รักสุขภาพ',
      [Language.ZH]: '这种充满活力的根茎蔬菜为任何混合物带来惊人的宝石红色和独特的泥土甜味。它以增强耐力和改善血液流动的能力而闻名，使其成为运动员和健康爱好者的最爱。',
    },
    fact: {
      [Language.EN]: 'In ancient Rome, beetroot was used not as food, but as a treatment for fever and constipation.',
      [Language.TH]: 'ในกรุงโรมโบราณ บีทรูทไม่ได้ใช้เป็นอาหาร แต่ใช้เป็นยารักษาไข้และอาการท้องผูก',
      [Language.ZH]: '在古罗马，甜菜根不是用作食物，而是用作治疗发烧和便秘的药物。',
    },
    why: {
      [Language.EN]: 'Beets are rich in dietary nitrates, which the body converts to nitric oxide. This compound helps relax and dilate blood vessels, leading to better circulation and potentially lower blood pressure. They are also a good source of folate, potassium, and antioxidants.',
      [Language.TH]: 'บีทรูทอุดมไปด้วยไนเตรตจากอาหาร ซึ่งร่างกายจะเปลี่ยนเป็นไนตริกออกไซด์ สารประกอบนี้ช่วยผ่อนคลายและขยายหลอดเลือด ทำให้การไหลเวียนดีขึ้นและอาจลดความดันโลหิตได้ นอกจากนี้ยังเป็นแหล่งโฟเลต โพแทสเซียม และสารต้านอนุมูลอิสระที่ดี',
      [Language.ZH]: '甜菜富含膳食硝酸盐，人体会将其转化为一氧化氮。这种化合物有助于放松和扩张血管，从而改善血液循环并可能降低血压。它们也是叶酸、钾和抗氧化剂的良好来源。',
    },
    tip: {
      [Language.EN]: 'Balance the earthy flavor of beetroot with a sweet and tangy fruit like apple or orange. A little ginger can also cut through the earthiness and add a nice warmth.',
      [Language.TH]: 'ปรับสมดุลรสชาติที่เป็นดินของบีทรูทด้วยผลไม้รสหวานอมเปรี้ยวเช่นแอปเปิ้ลหรือส้ม ขิงเล็กน้อยยังสามารถตัดรสชาติของดินและเพิ่มความอบอุ่นได้ดี',
      [Language.ZH]: '用苹果或橙子等酸甜水果来平衡甜菜根的泥土味。少许姜也可以减少泥土味并增添温暖的感觉。',
    },
  },
  {
    id: 'orange',
    type: 'fruit',
    image: 'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',
    title: {
      [Language.EN]: 'The Sunshine Fruit: Orange',
      [Language.TH]: 'ผลไม้แห่งแสงตะวัน: ส้ม',
      [Language.ZH]: '阳光水果：橙子',
    },
    description: {
      [Language.EN]: 'A classic for a reason, the orange is a burst of juicy, sweet-tart flavor that brightens any day. It\'s the go-to fruit for a powerful dose of Vitamin C, the cornerstone of a healthy immune system.',
      [Language.TH]: 'เป็นผลไม้คลาสสิกด้วยเหตุผล ส้มคือรสชาติที่ฉ่ำหวานอมเปรี้ยวที่ทำให้ทุกวันสดใส เป็นผลไม้หลักสำหรับวิตามินซีในปริมาณสูง ซึ่งเป็นรากฐานของระบบภูมิคุ้มกันที่แข็งแรง',
      [Language.ZH]: '经典之选，橙子多汁、酸甜，能点亮任何一天。它是获取强效维生素C的首选水果，是健康免疫系统的基石。',
    },
    fact: {
      [Language.EN]: 'The color orange was named after the fruit, not the other way around!',
      [Language.TH]: 'สีส้มถูกตั้งชื่อตามผลไม้ ไม่ใช่กลับกัน!',
      [Language.ZH]: '橙色是以水果命名的，而不是反过来！',
    },
    why: {
      [Language.EN]: 'Beyond its famous Vitamin C content, oranges provide hesperidin, an antioxidant that may help lower blood pressure and has anti-inflammatory effects. They also offer fiber and potassium for heart health.',
      [Language.TH]: 'นอกเหนือจากวิตามินซีที่มีชื่อเสียงแล้ว ส้มยังมีเฮสเพอริดินซึ่งเป็นสารต้านอนุมูลอิสระที่อาจช่วยลดความดันโลหิตและมีฤทธิ์ต้านการอักเสบ นอกจากนี้ยังมีไฟเบอร์และโพแทสเซียมสำหรับสุขภาพหัวใจ',
      [Language.ZH]: '除了著名的维生素C含量外，橙子还提供橙皮苷，一种可能有助于降低血压并具有抗炎作用的抗氧化剂。它们还提供有益于心脏健康的纤维和钾。',
    },
    tip: {
      [Language.EN]: 'For a creamier smoothie, try blending orange with yogurt or a frozen banana to create a healthy "creamsicle" flavor.',
      [Language.TH]: 'เพื่อให้ได้สมูทตี้ที่ครีมมี่ขึ้น ลองปั่นส้มกับโยเกิร์ตหรือกล้วยแช่แข็งเพื่อสร้างรสชาติ "ครีมสิเคิล" ที่ดีต่อสุขภาพ',
      [Language.ZH]: '想要更奶油般的冰沙，可以尝试将橙子与酸奶或冷冻香蕉混合，创造出健康的“梦龙”风味。',
    },
  },
  {
    id: 'cucumber',
    type: 'vegetable',
    image: 'https://i.postimg.cc/WpDbMyzq/juice-me-image-place-holder-and-background-decorative-0019.jpg',
    title: {
      [Language.EN]: 'The Hydration Hero: Cucumber',
      [Language.TH]: 'ฮีโร่แห่งความชุ่มชื้น: แตงกวา',
      [Language.ZH]: '补水英雄：黄瓜',
    },
    description: {
      [Language.EN]: 'Cool, crisp, and incredibly refreshing, cucumber is the ultimate ingredient for hydration. Composed of about 96% water, it adds volume and a clean, fresh taste to smoothies without adding many calories.',
      [Language.TH]: 'เย็น, กรอบ, และสดชื่นอย่างไม่น่าเชื่อ แตงกวาเป็นส่วนผสมที่ดีที่สุดสำหรับการให้ความชุ่มชื้น ประกอบด้วยน้ำประมาณ 96% ช่วยเพิ่มปริมาตรและรสชาติที่สะอาดสดชื่นให้กับสมูทตี้โดยไม่เพิ่มแคลอรี่มากนัก',
      [Language.ZH]: '凉爽、清脆、令人难以置信的清爽，黄瓜是补水的终极成分。它由约96%的水组成，为冰沙增加了体积和清新干净的味道，而不会增加很多热量。',
    },
    fact: {
      [Language.EN]: 'Cucumbers are technically a fruit, belonging to the same family as watermelons and pumpkins.',
      [Language.TH]: 'ตามหลักพฤกษศาสตร์ แตงกวาเป็นผลไม้ อยู่ในวงศ์เดียวกับแตงโมและฟักทอง',
      [Language.ZH]: '严格来说，黄瓜是一种水果，与西瓜和南瓜属于同一科。',
    },
    why: {
      [Language.EN]: 'It\'s a fantastic source of silica, a trace mineral that contributes to healthy connective tissues like skin, hair, and nails. Cucumbers also contain antioxidants and anti-inflammatory compounds.',
      [Language.TH]: 'เป็นแหล่งซิลิกาที่ยอดเยี่ยม ซึ่งเป็นแร่ธาตุที่ช่วยเสริมสร้างเนื้อเยื่อเกี่ยวพันให้แข็งแรง เช่น ผิวหนัง ผม และเล็บ แตงกวายังมีสารต้านอนุมูลอิสระและสารประกอบต้านการอักเสบ',
      [Language.ZH]: '它是二氧化硅的极佳来源，这是一种有助于健康结缔组织（如皮肤、头发和指甲）的微量矿物质。黄瓜还含有抗氧化剂和抗炎化合物。',
    },
    tip: {
      [Language.EN]: 'Blend cucumber with mint and lime for a revitalizing, spa-like green juice. No need to peel if you\'re using organic cucumbers—the skin is full of nutrients!',
      [Language.TH]: 'ปั่นแตงกวากับมินต์และมะนาวเพื่อน้ำผักสีเขียวที่ให้ความสดชื่นเหมือนอยู่ในสปา ไม่จำเป็นต้องปอกเปลือกหากใช้แตงกวาออร์แกนิก—เปลือกเต็มไปด้วยสารอาหาร!',
      [Language.ZH]: '将黄瓜与薄荷和青柠混合，制成恢复活力的水疗式绿色果汁。如果使用有机黄瓜，则无需削皮——皮富含营养！',
    },
  },
  {
    id: 'lemon',
    type: 'fruit',
    image: 'https://i.postimg.cc/DZSFPWv3/juice-me-image-place-holder-and-background-decorative-009.jpg',
    title: {
      [Language.EN]: 'The Zesty Cleanser: Lemon',
      [Language.TH]: 'ผู้ทำความสะอาดรสเปรี้ยวจี๊ด: มะนาว',
      [Language.ZH]: '活力清洁剂：柠檬',
    },
    description: {
      [Language.EN]: 'This bright, acidic fruit is a powerhouse of flavor and detoxification. A squeeze of lemon can lift and brighten the taste of any smoothie, cutting through sweetness and adding a refreshing, zesty note.',
      [Language.TH]: 'ผลไม้รสเปรี้ยวสดใสนี้เป็นขุมพลังของรสชาติและการล้างพิษ การบีบมะนาวสามารถยกระดับและทำให้รสชาติของสมูทตี้ใดๆ สดใสขึ้น ตัดความหวานและเพิ่มโน้ตที่สดชื่นและมีชีวิตชีวา',
      [Language.ZH]: '这种明亮、酸性的水果是风味和排毒的强者。一挤柠檬汁可以提升和提亮任何冰沙的味道，减少甜味，增添清爽的活力气息。',
    },
    fact: {
      [Language.EN]: 'The high acid content in lemons means they were historically used by sailors to prevent scurvy on long voyages.',
      [Language.TH]: 'ปริมาณกรดที่สูงในมะนาวหมายความว่าในอดีตถูกใช้โดยกะลาสีเพื่อป้องกันโรคเลือดออกตามไรฟันในการเดินทางไกล',
      [Language.ZH]: '柠檬的高酸含量意味着历史上水手们用它来预防长途航行中的坏血病。',
    },
    why: {
      [Language.EN]: 'Rich in Vitamin C and citrus flavonoids, lemons support the immune system and have strong antioxidant properties. They are also believed to stimulate the liver and aid in the body\'s natural detoxification processes.',
      [Language.TH]: 'มะนาวอุดมไปด้วยวิตามินซีและซิตรัสฟลาโวนอยด์ ช่วยเสริมสร้างระบบภูมิคุ้มกันและมีคุณสมบัติต้านอนุมูลอิสระที่แข็งแกร่ง ยังเชื่อกันว่าช่วยกระตุ้นตับและช่วยในกระบวนการล้างพิษตามธรรมชาติของร่างกาย',
      [Language.ZH]: '柠檬富含维生素C和柑橘类黄酮，支持免疫系统，具有很强的抗氧化特性。人们还认为它们可以刺激肝脏，帮助身体的自然排毒过程。',
    },
    tip: {
      [Language.EN]: 'Use both the juice and the zest (the yellow part of the peel) to get the maximum flavor and nutritional benefit. Lemon pairs wonderfully with berries, ginger, and green vegetables.',
      [Language.TH]: 'ใช้น้ำและเปลือก (ส่วนสีเหลืองของเปลือก) เพื่อให้ได้รสชาติและคุณประโยชน์ทางโภชนาการสูงสุด มะนาวเข้ากันได้ดีกับเบอร์รี่ ขิง และผักใบเขียว',
      [Language.ZH]: '同时使用果汁和果皮（果皮的黄色部分）以获得最大的风味和营养价值。柠檬与浆果、姜和绿色蔬菜搭配得非常好。',
    },
  },
  {
    id: 'papaya',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Enzyme Wonder: Papaya',
      [Language.TH]: 'ความมหัศจรรย์แห่งเอนไซม์: มะละกอ',
      [Language.ZH]: '酶之奇迹：木瓜',
    },
    description: {
      [Language.EN]: 'With its buttery texture and delicately sweet flavor, papaya is a tropical treasure. It is most famous for papain, a powerful digestive enzyme that helps break down proteins, making it incredibly soothing for the stomach.',
      [Language.TH]: 'ด้วยเนื้อสัมผัสที่เนียนนุ่มและรสชาติที่หวานละมุน มะละกอเป็นสมบัติแห่งเขตร้อน มีชื่อเสียงที่สุดในเรื่องของปาเปน ซึ่งเป็นเอนไซม์ย่อยอาหารที่มีประสิทธิภาพซึ่งช่วยย่อยสลายโปรตีน ทำให้เป็นมิตรต่อกระเพาะอาหารอย่างยิ่ง',
      [Language.ZH]: '木瓜质地如黄油，味道微甜，是热带的宝藏。它最著名的是木瓜蛋白酶，一种强大的消化酶，有助于分解蛋白质，对胃部极为舒缓。',
    },
    fact: {
      [Language.EN]: 'Papaya seeds are edible and have a sharp, peppery taste. They are often ground up and used as a substitute for black pepper.',
      [Language.TH]: 'เมล็ดมะละกอสามารถรับประทานได้และมีรสชาติเผ็ดร้อนคล้ายพริกไทย มักจะถูกบดและใช้แทนพริกไทยดำ',
      [Language.ZH]: '木瓜籽可以食用，味道辛辣如胡椒。它们经常被磨碎用作黑胡椒的替代品。',
    },
    why: {
      [Language.EN]: 'Papaya is an excellent source of Vitamin C and Vitamin A, supporting immune function and vision. The enzyme papain makes it exceptional for digestive health, helping to reduce bloating and indigestion.',
      [Language.TH]: 'มะละกอเป็นแหล่งวิตามินซีและวิตามินเอที่ดีเยี่ยม สนับสนุนการทำงานของระบบภูมิคุ้มกันและการมองเห็น เอนไซม์ปาเปนทำให้มันยอดเยี่ยมสำหรับสุขภาพทางเดินอาหาร ช่วยลดอาการท้องอืดและการย่อยอาหารไม่ดี',
      [Language.ZH]: '木瓜是维生素C和维生素A的极佳来源，支持免疫功能和视力。木瓜蛋白酶使其在消化系统健康方面表现出色，有助于减少腹胀和消化不良。',
    },
    tip: {
      [Language.EN]: 'Combine papaya with lime juice to enhance its flavor and add a zesty contrast. It also blends beautifully with mango and pineapple for a full tropical experience.',
      [Language.TH]: 'ผสมมะละกอกับน้ำมะนาวเพื่อเพิ่มรสชาติและสร้างความแตกต่างที่สดชื่น นอกจากนี้ยังเข้ากันได้ดีกับมะม่วงและสับปะรดเพื่อประสบการณ์เขตร้อนเต็มรูปแบบ',
      [Language.ZH]: '将木瓜与青柠汁结合，以增强其风味并增添清爽的对比。它与芒果和菠萝也能完美融合，带来完整的热带体验。',
    },
  },
  {
    id: 'pomegranate',
    type: 'fruit',
    image: 'https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg',
    title: {
      [Language.EN]: 'The Jewel of Health: Pomegranate',
      [Language.TH]: 'อัญมณีแห่งสุขภาพ: ทับทิม',
      [Language.ZH]: '健康宝石：石榴',
    },
    description: {
      [Language.EN]: 'Each pomegranate is a treasure chest filled with hundreds of ruby-red, juice-filled seeds called arils. They offer a unique sweet-tart flavor and a burst of juicy texture, packed with some of the most powerful antioxidants in the fruit kingdom.',
      [Language.TH]: 'ทับทิมแต่ละผลเปรียบเสมือนหีบสมบัติที่เต็มไปด้วยเมล็ดสีแดงทับทิมที่ชุ่มฉ่ำหลายร้อยเม็ดเรียกว่าอาริลส์ ให้รสชาติหวานอมเปรี้ยวที่เป็นเอกลักษณ์และเนื้อสัมผัสที่แตกกระจายในปาก อัดแน่นไปด้วยสารต้านอนุมูลอิสระที่ทรงพลังที่สุดในอาณาจักรผลไม้',
      [Language.ZH]: '每个石榴都是一个宝库，里面装满了数百个被称为假种皮的红宝石色、多汁的种子。它们提供独特的酸甜风味和多汁的口感，富含水果王国中最强大的抗氧化剂。',
    },
    fact: {
      [Language.EN]: 'An ancient fruit, pomegranates are mentioned in many historical texts, including the Old Testament of the Bible and the Babylonian Talmud.',
      [Language.TH]: 'เป็นผลไม้โบราณ ทับทิมถูกกล่าวถึงในตำราประวัติศาสตร์มากมาย รวมถึงพระคัมภีร์เก่าและคัมภีร์ทัลมุดของบาบิโลน',
      [Language.ZH]: '石榴是一种古老的水果，在许多历史文献中都有提及，包括《圣经旧约》和《巴比伦塔木德》。',
    },
    why: {
      [Language.EN]: 'Pomegranates are loaded with potent antioxidants like punicalagins and anthocyanins, which have been shown to have powerful anti-inflammatory effects and support heart health by protecting LDL cholesterol from oxidative damage.',
      [Language.TH]: 'ทับทิมเต็มไปด้วยสารต้านอนุมูลอิสระที่มีศักยภาพเช่นพูนิคาลาจินและแอนโทไซยานิน ซึ่งแสดงให้เห็นว่ามีฤทธิ์ต้านการอักเสบที่แข็งแกร่งและสนับสนุนสุขภาพหัวใจโดยการปกป้อง LDL คอเลสเตอรอลจากการทำลายของออกซิเดชัน',
      [Language.ZH]: '石榴富含石榴皮鞣素和花青素等强效抗氧化剂，已被证明具有强大的抗炎作用，并通过保护低密度脂蛋白胆固醇免受氧化损伤来支持心脏健康。',
    },
    tip: {
      [Language.EN]: 'Use pomegranate juice as a liquid base for your smoothies to get the benefits without the crunchy seeds. It pairs well with berries, cherries, and orange.',
      [Language.TH]: 'ใช้น้ำทับทิมเป็นของเหลวพื้นฐานสำหรับสมูทตี้ของคุณเพื่อรับประโยชน์โดยไม่ต้องมีเมล็ดที่กรุบกรอบ เข้ากันได้ดีกับเบอร์รี่ เชอร์รี่ และส้ม',
      [Language.ZH]: '使用石榴汁作为冰沙的液体基底，以获得好处而没有嘎吱作响的种子。它与浆果、樱桃和橙子搭配得很好。',
    },
  },
  {
    id: 'kiwi',
    type: 'fruit',
    image: 'https://i.postimg.cc/25crWdfx/juice-me-image-place-holder-and-background-decorative-0010.jpg',
    title: {
      [Language.EN]: 'The Vitamin C Bomb: Kiwi',
      [Language.TH]: 'ระเบิดวิตามินซี: กีวี',
      [Language.ZH]: '维生素C炸弹：奇异果',
    },
    description: {
      [Language.EN]: 'With its fuzzy brown skin and brilliant green flesh speckled with tiny black seeds, kiwi is as fun to look at as it is to eat. Its unique, tangy-sweet flavor adds an exotic twist to smoothies.',
      [Language.TH]: 'ด้วยเปลือกสีน้ำตาลมีขนและเนื้อสีเขียวสดใสที่มีเมล็ดสีดำเล็กๆ กระจายอยู่ กีวีจึงน่ามองพอๆ กับน่ากิน รสชาติเปรี้ยวอมหวานที่เป็นเอกลักษณ์ช่วยเพิ่มความแปลกใหม่ให้กับสมูทตี้',
      [Language.ZH]: '奇异果有着毛茸茸的棕色外皮和鲜绿色的果肉，点缀着微小的黑色种子，看起来和吃起来一样有趣。其独特的酸甜风味为冰沙增添了异国情调。',
    },
    fact: {
      [Language.EN]: 'Originally known as the Chinese gooseberry, it was renamed "kiwi" by New Zealand exporters after their national bird.',
      [Language.TH]: 'เดิมทีรู้จักกันในชื่อ "Chinese gooseberry" ผู้ส่งออกจากนิวซีแลนด์ได้เปลี่ยนชื่อเป็น "kiwi" ตามชื่อนกประจำชาติของพวกเขา',
      [Language.ZH]: '奇异果原名中华醋栗，后由新西兰出口商以其国鸟的名字重新命名为“kiwi”。',
    },
    why: {
      [Language.EN]: 'Just one kiwi can provide more than your daily requirement of Vitamin C! It\'s also a good source of Vitamin K and dietary fiber, which aids digestion. The enzyme actinidin in kiwi also helps break down protein.',
      [Language.TH]: 'กีวีเพียงผลเดียวสามารถให้วิตามินซีได้มากกว่าความต้องการในแต่ละวัน! นอกจากนี้ยังเป็นแหล่งวิตามินเคและใยอาหารที่ดีซึ่งช่วยในการย่อยอาหาร เอนไซม์แอกทินิดินในกีวียังช่วยย่อยโปรตีนอีกด้วย',
      [Language.ZH]: '一个奇异果就能提供超过您每日所需的维生素C！它也是维生素K和膳食纤维的良好来源，有助于消化。奇异果中的奇异果蛋白酶也有助于分解蛋白质。',
    },
    tip: {
      [Language.EN]: 'For a vibrant green smoothie, blend kiwi with spinach and green apple. The skin is edible and full of fiber, so feel free to leave it on if you have a powerful blender!',
      [Language.TH]: 'เพื่อให้ได้สมูทตี้สีเขียวสดใส ปั่นกีวีกับผักโขมและแอปเปิ้ลเขียว เปลือกสามารถรับประทานได้และเต็มไปด้วยไฟเบอร์ ดังนั้นหากคุณมีเครื่องปั่นที่ทรงพลังก็ไม่ต้องปอกเปลือก!',
      [Language.ZH]: '想要一杯充满活力的绿色冰沙，可以将奇异果与菠菜和青苹果混合。果皮可以食用且富含纤维，所以如果你有强力搅拌机，可以连皮一起搅拌！',
    },
  },
   {
    id: 'watermelon',
    type: 'fruit',
    image: 'https://i.postimg.cc/gkVpsbWj/juice-me-image-place-holder-and-background-decorative-005.jpg',
    title: {
      [Language.EN]: 'The Ultimate Hydrator: Watermelon',
      [Language.TH]: 'สุดยอดแห่งความชุ่มชื้น: แตงโม',
      [Language.ZH]: '终极补水神器：西瓜',
    },
    description: {
      [Language.EN]: 'The quintessential summer fruit, watermelon is incredibly hydrating and refreshing. Its light, sweet flavor makes it a perfect base for juices and light smoothies, helping to quench thirst on a hot day.',
      [Language.TH]: 'ผลไม้ฤดูร้อนที่เป็นแก่นสาร แตงโมให้ความชุ่มชื้นและสดชื่นอย่างไม่น่าเชื่อ รสชาติที่เบาและหวานทำให้เป็นเบสที่สมบูรณ์แบบสำหรับน้ำผลไม้และสมูทตี้เบาๆ ช่วยดับกระหายในวันที่อากาศร้อน',
      [Language.ZH]: '作为典型的夏季水果，西瓜非常补水和清爽。其清淡、甜美的味道使其成为果汁和清淡冰沙的完美基底，有助于在炎热的天气里解渴。',
    },
    fact: {
      [Language.EN]: 'There are over 1,200 varieties of watermelon, and some are yellow or orange inside!',
      [Language.TH]: 'มีแตงโมกว่า 1,200 สายพันธุ์ และบางสายพันธุ์มีเนื้อสีเหลืองหรือสีส้ม!',
      [Language.ZH]: '西瓜有超过1200个品种，有些内部是黄色或橙色的！',
    },
    why: {
      [Language.EN]: 'Watermelon is a great source of lycopene, a powerful antioxidant linked to heart and skin health. It also contains citrulline, an amino acid that may improve exercise performance and reduce muscle soreness.',
      [Language.TH]: 'แตงโมเป็นแหล่งไลโคปีนที่ดีเยี่ยม ซึ่งเป็นสารต้านอนุมูลอิสระที่มีประสิทธิภาพซึ่งเชื่อมโยงกับสุขภาพหัวใจและผิวหนัง นอกจากนี้ยังมีซิทรูลีน ซึ่งเป็นกรดอะมิโนที่อาจช่วยเพิ่มประสิทธิภาพในการออกกำลังกายและลดอาการปวดกล้ามเนื้อ',
      [Language.ZH]: '西瓜是番茄红素的重要来源，这是一种与心脏和皮肤健康相关的强大抗氧化剂。它还含有瓜氨酸，一种可以提高运动表现和减轻肌肉酸痛的氨基酸。',
    },
    tip: {
      [Language.EN]: 'Blend watermelon with a handful of fresh mint for an incredibly refreshing and cooling drink. Freezing the chunks before blending creates a delicious, healthy slushie.',
      [Language.TH]: 'ปั่นแตงโมกับมินต์สดหนึ่งกำมือเพื่อเครื่องดื่มที่สดชื่นและเย็นอย่างไม่น่าเชื่อ การแช่แข็งชิ้นแตงโมก่อนปั่นจะสร้างสลัชชี่ที่อร่อยและดีต่อสุขภาพ',
      [Language.ZH]: '将西瓜与一把新鲜薄荷混合，制成令人难以置信的清爽提神的饮品。在搅拌前冷冻西瓜块可以制作出美味健康的冰沙。',
    },
  },
  {
    id: 'celery',
    type: 'vegetable',
    image: 'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg',
    title: {
      [Language.EN]: 'The Green Purifier: Celery',
      [Language.TH]: 'เครื่องกรองสีเขียว: ขึ้นฉ่ายฝรั่ง',
      [Language.ZH]: '绿色净化器：芹菜',
    },
    description: {
      [Language.EN]: 'Famous for its role in the green juice trend, celery is a low-calorie vegetable packed with water and electrolytes. It has a distinct salty and slightly bitter taste that provides a savory, cleansing base for juices.',
      [Language.TH]: 'มีชื่อเสียงในกระแสของน้ำผักสีเขียว ขึ้นฉ่ายฝรั่งเป็นผักแคลอรี่ต่ำที่อุดมไปด้วยน้ำและอิเล็กโทรไลต์ มีรสเค็มและขมเล็กน้อยที่เป็นเอกลักษณ์ซึ่งให้รสชาติที่สะอาดและเป็นเบสสำหรับน้ำผลไม้',
      [Language.ZH]: '芹菜因其在绿色果汁潮流中的作用而闻名，是一种富含水分和电解质的低热量蔬菜。它具有独特的咸味和微苦味，为果汁提供了美味、清爽的基底。',
    },
    fact: {
      [Language.EN]: 'The "strings" in celery stalks are actually vascular tissues that transport water and nutrients throughout the plant.',
      [Language.TH]: '"เส้น" ในก้านขึ้นฉ่ายฝรั่งคือเนื้อเยื่อท่อลำเลียงที่ขนส่งน้ำและสารอาหารไปทั่วทั้งพืช',
      [Language.ZH]: '芹菜茎中的“筋”实际上是植物中输送水分和养分的维管组织。',
    },
    why: {
      [Language.EN]: 'Celery is a great source of beneficial antioxidants and anti-inflammatory compounds. It is also known for being a natural diuretic, which can help reduce bloating and support kidney function.',
      [Language.TH]: 'ขึ้นฉ่ายฝรั่งเป็นแหล่งของสารต้านอนุมูลอิสระและสารประกอบต้านการอักเสบที่เป็นประโยชน์ นอกจากนี้ยังเป็นที่รู้จักในฐานะยาขับปัสสาวะตามธรรมชาติ ซึ่งสามารถช่วยลดอาการท้องอืดและสนับสนุนการทำงานของไต',
      [Language.ZH]: '芹菜是有益抗氧化剂和抗炎化合物的重要来源。它还以天然利尿剂而闻名，可以帮助减少腹胀并支持肾脏功能。',
    },
    tip: {
      [Language.EN]: 'To balance its savory flavor in a juice, pair celery with a sweet apple and a squeeze of lemon. For a smoothie, blend it with cucumber and pear for a hydrating treat.',
      [Language.TH]: 'เพื่อปรับสมดุลรสชาติของมันในน้ำผลไม้ ให้จับคู่ขึ้นฉ่ายฝรั่งกับแอปเปิ้ลหวานและบีบมะนาวเล็กน้อย สำหรับสมูทตี้ ให้ปั่นกับแตงกวาและสาลี่เพื่อความสดชื่นที่ให้ความชุ่มชื้น',
      [Language.ZH]: '为了平衡其在果汁中的咸味，可将芹菜与甜苹果和一挤柠檬搭配。若是冰沙，可将其与黄瓜和梨混合，制成补水佳品。',
    },
  },
  {
    id: 'chia_seeds',
    type: 'fruit', // contextually
    image: 'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg',
    title: {
      [Language.EN]: 'The Omega Powerhouse: Chia Seeds',
      [Language.TH]: 'ขุมพลังโอเมก้า: เมล็ดเจีย',
      [Language.ZH]: '欧米茄动力源：奇亚籽',
    },
    description: {
      [Language.EN]: 'These tiny black seeds are a modern superfood staple for a reason. When soaked in liquid, they form a gel-like consistency, which can help thicken smoothies and keep you feeling full for longer.',
      [Language.TH]: 'เมล็ดสีดำเล็กๆ เหล่านี้เป็นวัตถุดิบหลักของซูเปอร์ฟู้ดสมัยใหม่ด้วยเหตุผล เมื่อแช่ในของเหลว พวกมันจะสร้างความสม่ำเสมอคล้ายเจล ซึ่งสามารถช่วยทำให้สมูทตี้ข้นขึ้นและทำให้คุณรู้สึกอิ่มนานขึ้น',
      [Language.ZH]: '这些微小的黑色种子成为现代超级食品主食是有原因的。当浸泡在液体中时，它们会形成凝胶状的稠度，有助于使冰沙变稠并让您更长时间地感到饱腹。',
    },
    fact: {
      [Language.EN]: 'Chia seeds can absorb up to 12 times their weight in water, which is what gives them their unique gelling property.',
      [Language.TH]: 'เมล็ดเจียสามารถดูดซับน้ำได้มากถึง 12 เท่าของน้ำหนักตัว ซึ่งเป็นสิ่งที่ทำให้พวกมันมีคุณสมบัติในการสร้างเจลที่เป็นเอกลักษณ์',
      [Language.ZH]: '奇亚籽可以吸收高达其重量12倍的水分，这赋予了它们独特的胶凝特性。',
    },
    why: {
      [Language.EN]: 'Chia seeds are an excellent plant-based source of omega-3 fatty acids, which are crucial for brain health. They are also packed with fiber, protein, calcium, and antioxidants.',
      [Language.TH]: 'เมล็ดเจียเป็นแหล่งโอเมก้า 3 จากพืชที่ดีเยี่ยม ซึ่งจำเป็นต่อสุขภาพสมอง นอกจากนี้ยังอุดมไปด้วยไฟเบอร์ โปรตีน แคลเซียม และสารต้านอนุมูลอิสระ',
      [Language.ZH]: '奇亚籽是植物性欧米茄-3脂肪酸的极佳来源，对大脑健康至关重要。它们还富含纤维、蛋白质、钙和抗氧化剂。',
    },
    tip: {
      [Language.EN]: 'For a smooth texture, blend the chia seeds directly into your smoothie. For a "bubble tea" like texture, stir them in after blending and let them sit for 5-10 minutes to gel up.',
      [Language.TH]: 'เพื่อให้ได้เนื้อสัมผัสที่เนียน ให้ปั่นเมล็ดเจียลงในสมูทตี้โดยตรง หากต้องการเนื้อสัมผัสเหมือน "ชานมไข่มุก" ให้คนลงไปหลังปั่นและปล่อยให้มันเซ็ตตัวเป็นเจล 5-10 นาที',
      [Language.ZH]: '想要光滑的质地，可以直接将奇亚籽混入冰沙中搅拌。想要类似“珍珠奶茶”的质地，可以在搅拌后将其搅入，然后静置5-10分钟使其胶化。',
    },
  },
  {
    id: 'passion_fruit',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Aromatic Zing: Passion Fruit',
      [Language.TH]: 'ความซ่าหอมหวน: เสาวรส',
      [Language.ZH]: '芳香活力：百香果',
    },
    description: {
      [Language.EN]: 'This fruit has a tough outer rind and a center filled with juicy, seed-filled pulp. Its intensely aromatic, tropical, and tangy flavor can elevate any smoothie from simple to sublime.',
      [Language.TH]: 'ผลไม้ชนิดนี้มีเปลือกนอกที่แข็งและมีเนื้อที่เต็มไปด้วยน้ำและเมล็ดอยู่ตรงกลาง รสชาติที่หอมเข้มข้น เป็นเขตร้อน และเปรี้ยวจี๊ดสามารถยกระดับสมูทตี้ใดๆ จากธรรมดาให้กลายเป็นเลิศรสได้',
      [Language.ZH]: '这种水果有坚硬的外皮和充满多汁、带籽果肉的中心。其浓郁的芳香、热带风情和酸爽的味道可以将任何冰沙从简单提升到极致。',
    },
    fact: {
      [Language.EN]: 'The passion flower is an intricate, beautiful bloom, and some varieties are used as a calming herbal supplement.',
      [Language.TH]: 'ดอกเสาวรสเป็นดอกไม้ที่ซับซ้อนและสวยงาม และบางสายพันธุ์ถูกใช้เป็นอาหารเสริมสมุนไพรเพื่อความสงบ',
      [Language.ZH]: '西番莲是一种错综复杂、美丽的花朵，某些品种被用作镇静草药补充剂。',
    },
    why: {
      [Language.EN]: 'Passion fruit is a rich source of dietary fiber, Vitamin C, and Vitamin A. The seeds provide a significant amount of fiber, which is great for digestive health and promoting a feeling of fullness.',
      [Language.TH]: 'เสาวรสเป็นแหล่งใยอาหาร วิตามินซี และวิตามินเอที่อุดมสมบูรณ์ เมล็ดให้ใยอาหารในปริมาณมาก ซึ่งดีต่อสุขภาพทางเดินอาหารและส่งเสริมความรู้สึกอิ่ม',
      [Language.ZH]: '百香果是膳食纤维、维生素C和维生素A的丰富来源。种子提供了大量的纤维，对消化健康和促进饱腹感非常有益。',
    },
    tip: {
      [Language.EN]: 'Simply scoop out the pulp and add it to your blender. The crunchy seeds can be blended in or strained out, depending on your preference. It pairs well with mango, banana, and orange.',
      [Language.TH]: 'เพียงแค่ตักเนื้อออกแล้วใส่ลงในเครื่องปั่นของคุณ เมล็ดที่กรุบกรอบสามารถปั่นรวมเข้าไปหรือกรองออกก็ได้ ขึ้นอยู่กับความชอบของคุณ เข้ากันได้ดีกับมะม่วง กล้วย และส้ม',
      [Language.ZH]: '只需挖出果肉并将其添加到搅拌机中即可。根据您的喜好，可以将嘎吱作响的种子一起搅拌或过滤掉。它与芒果、香蕉和橙子搭配得很好。',
    },
  },
  {
    id: 'dragon_fruit',
    type: 'fruit',
    image: 'https://i.postimg.cc/gkVpsbWj/juice-me-image-place-holder-and-background-decorative-005.jpg',
    title: {
      [Language.EN]: 'The Exotic Beauty: Dragon Fruit',
      [Language.TH]: 'ความงามที่แปลกใหม่: แก้วมังกร',
      [Language.ZH]: '异域之美：火龙果',
    },
    description: {
      [Language.EN]: 'Also known as Pitaya, this stunning fruit has a vibrant pink skin and white or magenta flesh dotted with tiny black seeds. It has a mild, subtly sweet flavor, similar to a pear or kiwi, and adds an incredible color to smoothies.',
      [Language.TH]: 'หรือที่รู้จักกันในชื่อพิทยา ผลไม้ที่น่าทึ่งนี้มีเปลือกสีชมพูสดและเนื้อสีขาวหรือสีม่วงแดงที่มีเมล็ดสีดำเล็กๆ กระจายอยู่ มีรสชาติที่อ่อนโยนและหวานเล็กน้อยคล้ายกับสาลี่หรือกีวี และเพิ่มสีสันที่น่าทึ่งให้กับสมูทตี้',
      [Language.ZH]: '火龙果，又名红毛丹，这种令人惊艳的水果有着鲜艳的粉红色外皮和点缀着微小黑色种子的白色或洋红色果肉。它的味道温和、微甜，类似于梨或奇异果，并为冰沙增添了令人难以置信的色彩。',
    },
    fact: {
      [Language.EN]: 'Dragon fruit grows on a type of cactus, and the flowers only bloom at night for a single evening.',
      [Language.TH]: 'แก้วมังกรเติบโตบนต้นกระบองเพชรชนิดหนึ่ง และดอกไม้จะบานในเวลากลางคืนเพียงคืนเดียวเท่านั้น',
      [Language.ZH]: '火龙果生长在一种仙人掌上，花朵只在晚上开放一晚。',
    },
    why: {
      [Language.EN]: 'This fruit is a good source of fiber, magnesium, and iron. The magenta varieties are particularly rich in antioxidants called betacyanins, which have anti-inflammatory and protective properties.',
      [Language.TH]: 'ผลไม้นี้เป็นแหล่งใยอาหาร แมกนีเซียม และธาตุเหล็กที่ดี พันธุ์สีม่วงแดงอุดมไปด้วยสารต้านอนุมูลอิสระที่เรียกว่าเบตาไซยานิน ซึ่งมีคุณสมบัติต้านการอักเสบและป้องกัน',
      [Language.ZH]: '这种水果是纤维、镁和铁的良好来源。洋红色品种尤其富含称为甜菜青素的抗氧化剂，具有抗炎和保护特性。',
    },
    tip: {
      [Language.EN]: 'For the most vibrant color, choose the magenta-fleshed variety. Its mild flavor means it pairs well with almost any other fruit, especially berries and banana.',
      [Language.TH]: 'เพื่อให้ได้สีที่สดใสที่สุด ให้เลือกพันธุ์เนื้อสีม่วงแดง รสชาติที่อ่อนโยนของมันหมายความว่ามันเข้ากันได้ดีกับผลไม้อื่นๆ เกือบทุกชนิด โดยเฉพาะเบอร์รี่และกล้วย',
      [Language.ZH]: '想要最鲜艳的颜色，请选择洋红色果肉的品种。其温和的味道意味着它几乎可以与任何其他水果搭配，尤其是浆果和香蕉。',
    },
  },
  {
    id: 'coconut_water',
    type: 'fruit', // contextually
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'Nature\'s Gatorade: Coconut Water',
      [Language.TH]: 'เกเตอเรดแห่งธรรมชาติ: น้ำมะพร้าว',
      [Language.ZH]: '大自然的佳得乐：椰子水',
    },
    description: {
      [Language.EN]: 'This clear liquid from young, green coconuts is a naturally sweet and refreshing alternative to plain water. It provides a subtle tropical flavor and a boost of hydration, making it an excellent liquid base for any smoothie.',
      [Language.TH]: 'ของเหลวใสจากมะพร้าวน้ำหอมอ่อนนี้เป็นทางเลือกที่หวานและสดชื่นตามธรรมชาติแทนน้้ำเปล่า ให้รสชาติเขตร้อนที่ละเอียดอ่อนและการเพิ่มความชุ่มชื้น ทำให้เป็นเบสของเหลวที่ยอดเยี่ยมสำหรับสมูทตี้ทุกชนิด',
      [Language.ZH]: '来自年轻青椰子的这种清澈液体是纯净水的天然甜美和清爽的替代品。它提供微妙的热带风味和补水效果，使其成为任何冰沙的绝佳液体基底。',
    },
    fact: {
      [Language.EN]: 'During World War II, coconut water was reportedly used as an emergency intravenous hydration fluid due to its sterility and similar composition to blood plasma.',
      [Language.TH]: 'ในช่วงสงครามโลกครั้งที่สอง มีรายงานว่าน้ำมะพร้าวถูกใช้เป็นของเหลวให้ความชุ่มชื้นทางหลอดเลือดดำในกรณีฉุกเฉินเนื่องจากความปลอดเชื้อและองค์ประกอบที่คล้ายกับพลาสมาในเลือด',
      [Language.ZH]: '据报道，在第二次世界大战期间，由于其无菌性和与血浆相似的成分，椰子水被用作紧急静脉补液。',
    },
    why: {
      [Language.EN]: 'Coconut water is rich in electrolytes, particularly potassium and magnesium, which are essential for proper muscle function and rehydration after exercise. It is low in calories and sugar compared to most sports drinks.',
      [Language.TH]: 'น้ำมะพร้าวอุดมไปด้วยอิเล็กโทรไลต์ โดยเฉพาะโพแทสเซียมและแมกนีเซียม ซึ่งจำเป็นต่อการทำงานของกล้ามเนื้อที่เหมาะสมและการคืนความชุ่มชื้นหลังการออกกำลังกาย มีแคลอรี่และน้ำตาลต่ำเมื่อเทียบกับเครื่องดื่มเกลือแร่ส่วนใหญ่',
      [Language.ZH]: '椰子水富含电解质，特别是钾和镁，这对于正常的肌肉功能和运动后的补水至关重要。与大多数运动饮料相比，它的卡路里和糖分含量较低。',
    },
    tip: {
      [Language.EN]: 'Use it as the primary liquid in your smoothie instead of water or milk for a natural sweetness and an electrolyte boost. It pairs perfectly with pineapple, mango, and spinach.',
      [Language.TH]: 'ใช้เป็นของเหลวหลักในสมูทตี้ของคุณแทนน้้ำหรือนมเพื่อความหวานตามธรรมชาติและการเพิ่มอิเล็กโทรไลต์ เข้ากันได้ดีกับสับปะรด มะม่วง และผักโขม',
      [Language.ZH]: '在您的冰沙中用它代替水或牛奶作为主要液体，以获得天然的甜味和电解质的补充。它与菠萝、芒果和菠菜完美搭配。',
    },
  },
  {
    id: 'grapes',
    type: 'fruit',
    image: 'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg',
    title: {
      [Language.EN]: 'The Heart\'s Guardian: Grapes',
      [Language.TH]: 'ผู้พิทักษ์หัวใจ: องุ่น',
      [Language.ZH]: '心脏守护者：葡萄',
    },
    description: {
      [Language.EN]: 'These juicy, bite-sized fruits are a source of natural energy and sweetness. Available in various colors, each type offers a unique profile of beneficial compounds, especially in their skins.',
      [Language.TH]: 'ผลไม้ขนาดพอดีคำที่ชุ่มฉ่ำเหล่านี้เป็นแหล่งของพลังงานและความหวานตามธรรมชาติ มีให้เลือกหลายสี แต่ละชนิดมีสารประกอบที่เป็นประโยชน์เฉพาะตัว โดยเฉพาะในเปลือกของมัน',
      [Language.ZH]: '这些多汁、一口大小的水果是天然能量和甜味的来源。有各种颜色可供选择，每种类型都提供独特的有益化合物，尤其是在其果皮中。',
    },
    fact: {
      [Language.EN]: 'Grapes are technically berries, and there are over 8,000 varieties of grapes from about 60 species.',
      [Language.TH]: 'ตามหลักพฤกษศาสตร์ องุ่นเป็นเบอร์รี่ และมีองุ่นกว่า 8,000 สายพันธุ์จากประมาณ 60 สปีชีส์',
      [Language.ZH]: '严格来说，葡萄是浆果，大约有60个物种的8000多个品种。',
    },
    why: {
      [Language.EN]: 'Grapes, particularly the red and purple varieties, are rich in resveratrol, a powerful antioxidant found in the skin that is linked to heart health and longevity. They also provide Vitamin C and K.',
      [Language.TH]: 'องุ่น โดยเฉพาะพันธุ์สีแดงและสีม่วง อุดมไปด้วยเรสเวอราทรอล ซึ่งเป็นสารต้านอนุมูลอิสระที่มีประสิทธิภาพที่พบในเปลือกซึ่งเชื่อมโยงกับสุขภาพหัวใจและอายุที่ยืนยาว นอกจากนี้ยังให้วิตามินซีและเค',
      [Language.ZH]: '葡萄，特别是红色和紫色品种，富含白藜芦醇，这是一种在果皮中发现的强大抗氧化剂，与心脏健康和长寿有关。它们还提供维生素C和K。',
    },
    tip: {
      [Language.EN]: 'Freeze your grapes before blending them into a smoothie. This creates a thick, creamy, and cold consistency without needing to add ice, which can dilute the flavor.',
      [Language.TH]: 'แช่แข็งองุ่นของคุณก่อนปั่นลงในสมูทตี้ สิ่งนี้จะสร้างความข้น ครีมมี่ และเย็นโดยไม่จำเป็นต้องเพิ่มน้ำแข็ง ซึ่งอาจทำให้รสชาติเจือจาง',
      [Language.ZH]: '在将葡萄混入冰沙之前先将其冷冻。这样可以产生浓稠、奶油状和冰冷的稠度，而无需添加会稀释风味的冰块。',
    },
  },
   {
    id: 'peach',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Velvety Skin Elixir: Peach',
      [Language.TH]: 'ยาอายุวัฒนะเพื่อผิวกำมะหยี่: พีช',
      [Language.ZH]: '天鹅绒美肤灵药：桃子',
    },
    description: {
      [Language.EN]: 'With its fuzzy skin and sweet, fragrant flesh, the peach is a beloved summer fruit. Its juicy, floral notes add a delicate sweetness and a beautiful aroma to smoothies and juices.',
      [Language.TH]: 'ด้วยเปลือกที่มีขนและเนื้อที่หวานหอม พีชเป็นผลไม้ฤดูร้อนอันเป็นที่รัก รสชาติที่ชุ่มฉ่ำและหอมกรุ่นของดอกไม้ช่วยเพิ่มความหวานที่ละเอียดอ่อนและกลิ่นหอมที่สวยงามให้กับสมูทตี้และน้ำผลไม้',
      [Language.ZH]: '桃子有着毛茸茸的表皮和香甜的果肉，是备受喜爱的夏季水果。其多汁、花香的味道为冰沙和果汁增添了细腻的甜味和美丽的香气。',
    },
    fact: {
      [Language.EN]: 'Peaches are members of the rose family and are related to almonds. The word "peach" is derived from the Latin for "Persian apple".',
      [Language.TH]: 'พีชเป็นสมาชิกในวงศ์กุหลาบและมีความเกี่ยวข้องกับอัลมอนด์ คำว่า "peach" มาจากภาษาละตินที่แปลว่า "แอปเปิ้ลเปอร์เซีย"',
      [Language.ZH]: '桃子是蔷薇科的成员，与杏仁有亲缘关系。“桃子”一词源自拉丁语，意为“波斯苹果”。',
    },
    why: {
      [Language.EN]: 'Peaches are a good source of vitamins C and A, which are important for skin health and vision. They also contain antioxidants like flavonoids and carotenoids that help protect the body from oxidative stress.',
      [Language.TH]: 'พีชเป็นแหล่งวิตามินซีและเอที่ดี ซึ่งสำคัญต่อสุขภาพผิวและการมองเห็น นอกจากนี้ยังมีสารต้านอนุมูลอิสระเช่นฟลาโวนอยด์และแคโรทีนอยด์ที่ช่วยปกป้องร่างกายจากความเครียดจากปฏิกิริยาออกซิเดชัน',
      [Language.ZH]: '桃子是维生素C和A的良好来源，对皮肤健康和视力很重要。它们还含有类黄酮和类胡萝卜素等抗氧化剂，有助于保护身体免受氧化应激。',
    },
    tip: {
      [Language.EN]: 'For a smoother smoothie, you can quickly peel a peach by blanching it in hot water for 30-60 seconds. Peaches pair beautifully with berries, vanilla, and ginger.',
      [Language.TH]: 'เพื่อให้ได้สมูทตี้ที่เนียนขึ้น คุณสามารถปอกเปลือกพีชได้อย่างรวดเร็วโดยการลวกในน้ำร้อน 30-60 วินาที พีชเข้ากันได้ดีกับเบอร์รี่ วานิลลา และขิง',
      [Language.ZH]: '想要更顺滑的冰沙，可以快速将桃子在热水中焯30-60秒来去皮。桃子与浆果、香草和姜搭配得非常好。',
    },
  },
  {
    id: 'pear',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Gentle Fiber Friend: Pear',
      [Language.TH]: 'เพื่อนไฟเบอร์ผู้อ่อนโยน: สาลี่',
      [Language.ZH]: '温和纤维之友：梨',
    },
    description: {
      [Language.EN]: 'Sweet, juicy, and with a unique grainy texture, pears are a wonderfully satisfying fruit. They provide a mild, honey-like sweetness that complements stronger flavors in a smoothie without overpowering them.',
      [Language.TH]: 'หวาน, ชุ่มฉ่ำ, และมีเนื้อสัมผัสที่เป็นเอกลักษณ์, สาลี่เป็นผลไม้ที่น่าพึงพอใจอย่างยิ่ง ให้ความหวานอ่อนๆ คล้ายน้ำผึ้งซึ่งเสริมรสชาติที่แรงกว่าในสมูทตี้โดยไม่กลบรสชาติเหล่านั้น',
      [Language.ZH]: '梨子香甜多汁，质地独特，是一种非常令人满意的 水果。它们提供温和的、类似蜂蜜的甜味，可以补充冰沙中更强烈的风味而不会压倒它们。',
    },
    fact: {
      [Language.EN]: 'There are over 3,000 estimated varieties of pears grown worldwide.',
      [Language.TH]: 'มีสาลี่กว่า 3,000 สายพันธุ์ที่ปลูกทั่วโลก',
      [Language.ZH]: '全世界估计种植了超过3000个梨品种。',
    },
    why: {
      [Language.EN]: 'Pears are an excellent source of dietary fiber, including prebiotics which feed beneficial gut bacteria. They are also a good source of Vitamin C and copper, and are considered a hypoallergenic fruit.',
      [Language.TH]: 'สาลี่เป็นแหล่งใยอาหารที่ดีเยี่ยม รวมถึงพรีไบโอติกส์ซึ่งเป็นอาหารของแบคทีเรียที่ดีในลำไส้ นอกจากนี้ยังเป็นแหล่งวิตามินซีและทองแดงที่ดี และถือเป็นผลไม้ที่ไม่ก่อให้เกิดอาการแพ้',
      [Language.ZH]: '梨是膳食纤维的极佳来源，包括益生元，可为有益的肠道细菌提供食物。它们也是维生素C和铜的良好来源，并被认为是低过敏性水果。',
    },
    tip: {
      [Language.EN]: 'Leave the skin on for maximum fiber! Ripe pears blend into a very smooth, creamy consistency. They are delicious when paired with cinnamon, ginger, or spinach.',
      [Language.TH]: 'เก็บเปลือกไว้เพื่อไฟเบอร์สูงสุด! สาลี่สุกจะปั่นได้เนื้อเนียนละเอียดอร่อยเมื่อจับคู่กับอบเชย ขิง หรือผักโขม',
      [Language.ZH]: '保留果皮以获得最大纤维！熟梨可以搅拌成非常顺滑、奶油般的稠度。它们与肉桂、姜或菠菜搭配时非常美味。',
    },
  },
   {
    id: 'banana',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Smoothie Superstar: Banana',
      [Language.TH]: 'ซูเปอร์สตาร์แห่งสมูทตี้: กล้วย',
      [Language.ZH]: '冰沙超级明星：香蕉',
    },
    description: {
      [Language.EN]: 'The humble banana is the foundation of countless smoothies for a reason. It provides natural sweetness, an unparalleled creamy texture, and a host of nutrients that make it both delicious and functional.',
      [Language.TH]: 'กล้วยธรรมดาๆ เป็นพื้นฐานของสมูทตี้นับไม่ถ้วนด้วยเหตุผล มันให้ความหวานตามธรรมชาติ เนื้อครีมที่ไม่มีใครเทียบได้ และสารอาหารมากมายที่ทำให้มันทั้งอร่อยและมีประโยชน์',
      [Language.ZH]: '香蕉是无数冰沙的基础，这是有原因的。它提供天然的甜味、无与伦比的奶油质地以及一系列营养素，使其既美味又实用。',
    },
    fact: {
      [Language.EN]: 'Bananas are technically berries, and they float in water!',
      [Language.TH]: 'ตามหลักพฤกษศาสตร์ กล้วยเป็นเบอร์รี่ และมันลอยน้ำได้!',
      [Language.ZH]: '严格来说，香蕉是浆果，而且它们能浮在水上！',
    },
    why: {
      [Language.EN]: 'Bananas are famous for their high potassium content, which is vital for heart health and blood pressure regulation. They also provide Vitamin B6, Vitamin C, and fiber, making them great for sustained energy.',
      [Language.TH]: 'กล้วยมีชื่อเสียงในด้านปริมาณโพแทสเซียมสูง ซึ่งจำเป็นต่อสุขภาพหัวใจและการควบคุมความดันโลหิต นอกจากนี้ยังให้วิตามินบี 6 วิตามินซี และไฟเบอร์ ทำให้เหมาะสำหรับพลังงานที่ยั่งยืน',
      [Language.ZH]: '香蕉以其高钾含量而闻名，这对心脏健康和血压调节至关重要。它们还提供维生素B6、维生素C和纤维，非常适合持续提供能量。',
    },
    tip: {
      [Language.EN]: 'For the thickest, creamiest smoothies, use a frozen banana. The riper the banana (with more brown spots), the sweeter it will be, reducing the need for other sweeteners.',
      [Language.TH]: 'เพื่อให้ได้สมูทตี้ที่ข้นและครีมมี่ที่สุด ให้ใช้กล้วยแช่แข็ง ยิ่งกล้วยสุกมาก (มีจุดสีน้ำตาลมากขึ้น) ก็จะยิ่งหวานมากขึ้น ลดความจำเป็นในการใช้สารให้ความหวานอื่น ๆ',
      [Language.ZH]: '想要最浓稠、最奶油般的冰沙，请使用冷冻香蕉。香蕉越熟（褐色斑点越多），它就越甜，从而减少了对其他甜味剂的需求。',
    },
  },
  {
    id: 'carrot',
    type: 'vegetable',
    image: 'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',
    title: {
      [Language.EN]: 'The Vision Vitalizer: Carrot',
      [Language.TH]: 'ผู้ฟื้นฟูสายตา: แครอท',
      [Language.ZH]: '视力活化剂：胡萝卜',
    },
    description: {
      [Language.EN]: 'This sweet root vegetable is famous for supporting good vision, but its benefits don\'t stop there. Carrots add a lovely sweetness, vibrant color, and a wealth of nutrients to any juice or smoothie.',
      [Language.TH]: 'ผักรากหวานนี้มีชื่อเสียงในการสนับสนุนการมองเห็นที่ดี แต่ประโยชน์ของมันไม่ได้หยุดอยู่แค่นั้น แครอทเพิ่มความหวานที่น่ารัก สีสันสดใส และสารอาหารมากมายให้กับน้ำผลไม้หรือสมูทตี้ทุกชนิด',
      [Language.ZH]: '这种甜味的根茎蔬菜以支持良好视力而闻名，但其好处不止于此。胡萝卜为任何果汁或冰沙增添了可爱的甜味、鲜艳的色彩和丰富的营养。',
    },
    fact: {
      [Language.EN]: 'The first cultivated carrots were purple, red, and yellow, not orange. The orange carrot was developed by Dutch growers in the 17th century.',
      [Language.TH]: 'แครอทที่ปลูกครั้งแรกเป็นสีม่วง สีแดง และสีเหลือง ไม่ใช่สีส้ม แครอทสีส้มได้รับการพัฒนาโดยชาวสวนชาวดัตช์ในศตวรรษที่ 17',
      [Language.ZH]: '最早种植的胡萝卜是紫色、红色和黄色的，而不是橙色。橙色胡萝卜是17世纪由荷兰种植者培育出来的。',
    },
    why: {
      [Language.EN]: 'Carrots are one of the richest sources of beta-carotene, an antioxidant that the body converts into Vitamin A. Vitamin A is crucial for vision, immune function, and skin health.',
      [Language.TH]: 'แครอทเป็นหนึ่งในแหล่งเบต้าแคโรทีนที่อุดมสมบูรณ์ที่สุด ซึ่งเป็นสารต้านอนุมูลอิสระที่ร่างกายเปลี่ยนเป็นวิตามินเอ วิตามินเอมีความสำคัญต่อการมองเห็น การทำงานของระบบภูมิคุ้มกัน และสุขภาพผิว',
      [Language.ZH]: '胡萝卜是β-胡萝卜素最丰富的来源之一，这是一种抗氧化剂，人体会将其转化为维生素A。维生素A对视力、免疫功能和皮肤健康至关重要。',
    },
    tip: {
      [Language.EN]: 'Carrots pair wonderfully with fruits that have a bit of tartness or spice, like orange, apple, and ginger. Lightly steaming them can make them easier to blend and unlock more beta-carotene.',
      [Language.TH]: 'แครอทเข้ากันได้ดีกับผลไม้ที่มีรสเปรี้ยวหรือเผ็ดเล็กน้อย เช่น ส้ม แอปเปิ้ล และขิง การนึ่งเล็กน้อยสามารถทำให้ปั่นง่ายขึ้นและปลดปล่อยเบต้าแคโรทีนได้มากขึ้น',
      [Language.ZH]: '胡萝卜与带有一点酸味或辛辣味的水果搭配得非常好，如橙子、苹果和姜。稍微蒸一下可以使它们更容易搅拌并释放更多的β-胡萝卜素。',
    },
  },
  {
    id: 'mint',
    type: 'vegetable',
    image: 'https://i.postimg.cc/WpDbMyzq/juice-me-image-place-holder-and-background-decorative-0019.jpg',
    title: {
      [Language.EN]: 'The Cool Refresher: Mint',
      [Language.TH]: 'ความสดชื่นสุดคูล: มินต์',
      [Language.ZH]: '清凉提神剂：薄荷',
    },
    description: {
      [Language.EN]: 'This aromatic herb adds an instant burst of cool, clean freshness to any beverage. A few leaves are all it takes to transform a standard smoothie into a revitalizing and invigorating treat.',
      [Language.TH]: 'สมุนไพรหอมนี้เพิ่มความสดชื่นที่เย็นและสะอาดทันทีให้กับเครื่องดื่มทุกชนิด ใบไม้เพียงไม่กี่ใบก็สามารถเปลี่ยนสมูทตี้ธรรมดาให้กลายเป็นเครื่องดื่มที่ให้ความสดชื่นและกระปรี้กระเปร่าได้',
      [Language.ZH]: '这种芳香草本植物为任何饮料增添了瞬间的清凉、洁净的清新感。只需几片叶子，就能将标准的冰沙变成恢复活力和提神的享受。',
    },
    fact: {
      [Language.EN]: 'In Greek mythology, the nymph Minthe was transformed into the mint plant by an angered Persephone.',
      [Language.TH]: 'ในตำนานเทพเจ้ากรีก นางไม้ Minthe ถูกสาปให้กลายเป็นต้นมินต์โดย Persephone ที่โกรธเกรี้ยว',
      [Language.ZH]: '在希腊神话中，仙女明塔被愤怒的珀耳塞福涅变成了薄荷植物。',
    },
    why: {
      [Language.EN]: 'Mint is well-known for its ability to aid digestion and soothe an upset stomach. It also contains antioxidants and may help relieve irritation in the throat.',
      [Language.TH]: 'มินต์เป็นที่รู้จักกันดีในด้านความสามารถในการช่วยย่อยอาหารและบรรเทาอาการท้องอืด นอกจากนี้ยังมีสารต้านอนุมูลอิสระและอาจช่วยบรรเทาอาการระคายเคืองในลำคอ',
      [Language.ZH]: '薄荷以其帮助消化和舒缓胃部不适的能力而闻名。它还含有抗氧化剂，并可能有助于缓解喉咙的刺激。',
    },
    tip: {
      [Language.EN]: 'Mint is a powerful flavor, so start with just a few leaves and add more if needed. It pairs exceptionally well with watermelon, cucumber, pineapple, and chocolate flavors.',
      [Language.TH]: 'มินต์มีรสชาติที่ทรงพลัง ดังนั้นให้เริ่มต้นด้วยใบเพียงไม่กี่ใบแล้วเพิ่มตามต้องการ มันเข้ากันได้ดีเป็นพิเศษกับแตงโม แตงกวา สับปะรด และรสช็อกโกแลต',
      [Language.ZH]: '薄荷是一种强烈的风味，所以从几片叶子开始，如果需要可以再加。它与西瓜、黄瓜、菠萝和巧克力风味搭配得非常好。',
    },
  },
  {
    id: 'mangosteen',
    type: 'fruit',
    image: 'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg',
    title: {
      [Language.EN]: 'The Queen of Fruits: Mangosteen',
      [Language.TH]: 'ราชินีแห่งผลไม้: มังคุด',
      [Language.ZH]: '水果之后：山竹',
    },
    description: {
      [Language.EN]: 'Revered for its exquisite, sweet-tart flavor and snow-white, segmented flesh. Mangosteen is a tropical delicacy that offers a luxurious and refreshing experience, often considered one of the most delicious fruits in the world.',
      [Language.TH]: 'ได้รับการยกย่องในรสชาติหวานอมเปรี้ยวที่งดงามและเนื้อสีขาวหิมะที่แบ่งเป็นกลีบ มังคุดเป็นผลไม้เมืองร้อนอันล้ำค่าที่มอบประสบการณ์หรูหราและสดชื่น มักถูกยกให้เป็นหนึ่งในผลไม้ที่อร่อยที่สุดในโลก',
      [Language.ZH]: '因其精致的酸甜风味和雪白的分瓣果肉而备受尊崇。山竹是一种热带美食，提供奢华清爽的体验，常被认为是世界上最美味的水果之一。',
    },
    fact: {
      [Language.EN]: "It's rumored that Queen Victoria offered a knighthood to anyone who could bring her a fresh mangosteen from Asia.",
      [Language.TH]: 'มีข่าวลือว่าสมเด็จพระราชินีนาถวิกตอเรียเคยเสนอพระราชทานบรรดาศักดิ์ให้กับใครก็ตามที่สามารถนำมังคุดสดจากเอเชียมาถวายได้',
      [Language.ZH]: '据传，维多利亚女王曾悬赏封爵，给任何能为她从亚洲带来新鲜山竹的人。',
    },
    why: {
      [Language.EN]: 'It is uniquely rich in a class of antioxidants called xanthones, found primarily in the rind. These compounds have powerful anti-inflammatory properties and may support a healthy immune system.',
      [Language.TH]: 'มังคุดอุดมไปด้วยสารต้านอนุมูลอิสระกลุ่มแซนโทน (xanthones) ซึ่งส่วนใหญ่พบในเปลือก สารประกอบเหล่านี้มีคุณสมบัติต้านการอักเสบที่ทรงพลังและอาจช่วยสนับสนุนระบบภูมิคุ้มกันให้แข็งแรง',
      [Language.ZH]: '它独特地富含一种名为氧杂蒽酮的抗氧化剂，主要存在于果皮中。这些化合物具有强大的抗炎特性，并可能支持健康的免疫系统。',
    },
    tip: {
      [Language.EN]: 'To open, gently press the middle until it cracks, then twist apart. For smoothies, the delicate flavor pairs best with mild fruits like pear, lychee, or banana so as not to overwhelm its unique taste.',
      [Language.TH]: 'ในการเปิด ให้ค่อยๆ กดตรงกลางจนเปลือกแตก แล้วบิดออกจากกัน สำหรับสมูทตี้ รสชาติที่ละเอียดอ่อนของมันเข้ากันได้ดีที่สุดกับผลไม้รสอ่อนๆ เช่น สาลี่ ลิ้นจี่ หรือกล้วย เพื่อไม่ให้กลบรสชาติที่เป็นเอกลักษณ์',
      [Language.ZH]: '要打开它，请轻轻按压中间直到裂开，然后扭开。对于冰沙，其细腻的风味最好与梨、荔枝或香蕉等温和的水果搭配，以免掩盖其独特的味道。',
    },
  },
  {
    id: 'moringa',
    type: 'vegetable',
    image: 'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg',
    title: {
      [Language.EN]: 'The Miracle Tree: Moringa',
      [Language.TH]: 'ต้นไม้มหัศจรรย์: มะรุม',
      [Language.ZH]: '奇迹之树：辣木',
    },
    description: {
      [Language.EN]: 'Moringa leaves are one of the most nutrient-dense plants on the planet. Often sold as a green powder, adding a small amount to your smoothie is a simple way to dramatically boost its nutritional profile.',
      [Language.TH]: 'ใบมะรุมเป็นหนึ่งในพืชที่มีสารอาหารหนาแน่นที่สุดในโลก มักขายในรูปแบบผงสีเขียว การเติมเพียงเล็กน้อยลงในสมูทตี้ของคุณเป็นวิธีง่ายๆ ในการเพิ่มคุณค่าทางโภชนาการอย่างมาก',
      [Language.ZH]: '辣木叶是地球上营养最密集的植物之一。它通常以绿色粉末的形式出售，在您的冰沙中加入少量是显著提升其营养成分的简单方法。',
    },
    fact: {
      [Language.EN]: 'Known as the "drumstick tree" because of its long, slender seed pods, almost every part of the Moringa tree is edible and has been used for centuries in traditional medicine.',
      [Language.TH]: 'เป็นที่รู้จักในชื่อ "ต้นไม้ตีกลอง" เนื่องจากฝักเมล็ดที่ยาวเรียว เกือบทุกส่วนของต้นมะรุมสามารถรับประทานได้และถูกใช้ในการแพทย์แผนโบราณมานานหลายศตวรรษ',
      [Language.ZH]: '因其细长的豆荚而被称为“鸡腿树”，辣木树的几乎每个部分都可以食用，并在传统医学中使用了几个世纪。',
    },
    why: {
      [Language.EN]: "It's a complete plant protein containing all 9 essential amino acids. It's also packed with iron, calcium, Vitamin A, C, and K, and antioxidants like quercetin and chlorogenic acid.",
      [Language.TH]: 'เป็นโปรตีนจากพืชที่สมบูรณ์ซึ่งมีกรดอะมิโนที่จำเป็นครบทั้ง 9 ชนิด นอกจากนี้ยังอุดมไปด้วยธาตุเหล็ก แคลเซียม วิตามินเอ ซี และเค และสารต้านอนุมูลอิสระเช่นเควอซิทินและกรดคลอโรจีนิก',
      [Language.ZH]: '它是一种完整的植物蛋白，包含所有9种必需氨基酸。它还富含铁、钙、维生素A、C和K，以及槲皮素和绿原酸等抗氧化剂。',
    },
    tip: {
      [Language.EN]: 'Moringa has a strong, earthy, spinach-like flavor. Start with just half a teaspoon in your smoothie and pair it with sweet, strong fruits like mango, pineapple, or banana to balance the taste.',
      [Language.TH]: 'มะรุมมีรสชาติเข้มข้นคล้ายดินและผักโขม เริ่มต้นด้วยเพียงครึ่งช้อนชาในสมูทตี้ของคุณและจับคู่กับผลไม้รสหวานจัด เช่น มะม่วง สับปะรด หรือกล้วย เพื่อปรับสมดุลรสชาติ',
      [Language.ZH]: '辣木具有浓郁的泥土味，类似菠菜。从半茶匙开始加入您的冰沙，并与芒果、菠萝或香蕉等甜味浓郁的水果搭配以平衡味道。',
    },
  },
  {
    id: 'butterfly_pea',
    type: 'vegetable',
    image: 'https://i.postimg.cc/y8TV14Qt/juice-me-image-place-holder-and-background-decorative-0012.jpg',
    title: {
      [Language.EN]: 'The Color-Changing Magic: Butterfly Pea',
      [Language.TH]: 'เวทมนตร์เปลี่ยนสี: อัญชัน',
      [Language.ZH]: '变色魔法：蝶豆花',
    },
    description: {
      [Language.EN]: 'This beautiful flower yields a brilliant blue tea with a mild, woody, and earthy flavor. Its most captivating feature is its ability to change color from deep blue to vibrant purple or pink with the addition of an acid, like lemon juice.',
      [Language.TH]: 'ดอกไม้ที่สวยงามนี้ให้ชาสีน้ำเงินสดใสพร้อมรสชาติที่อ่อนโยนคล้ายไม้และดิน คุณสมบัติที่น่าหลงใหลที่สุดคือความสามารถในการเปลี่ยนสีจากสีน้ำเงินเข้มเป็นสีม่วงหรือสีชมพูสดใสเมื่อเติมกรด เช่น น้ำมะนาว',
      [Language.ZH]: '这种美丽的花朵能泡出鲜艳的蓝色茶，带有温和的木质和泥土味。其最迷人的特点是，在加入柠檬汁等酸性物质后，它能从深蓝色变为鲜艳的紫色或粉色。',
    },
    fact: {
      [Language.EN]: 'The color change is a natural litmus test! The blue anthocyanin pigments react to changes in pH level, turning purple/pink in acidic conditions and greenish-yellow in alkaline conditions.',
      [Language.TH]: 'การเปลี่ยนสีเป็นการทดสอบลิตมัสตามธรรมชาติ! สารสีแอนโทไซยานินสีน้ำเงินจะทำปฏิกิริยากับการเปลี่ยนแปลงของระดับ pH เปลี่ยนเป็นสีม่วง/ชมพูในสภาวะที่เป็นกรดและเป็นสีเขียวอมเหลืองในสภาวะที่เป็นด่าง',
      [Language.ZH]: '颜色的变化是一种天然的石蕊测试！蓝色的花青素颜料对pH值的变化做出反应，在酸性条件下变为紫色/粉色，在碱性条件下变为绿黄色。',
    },
    why: {
      [Language.EN]: 'It\'s rich in the antioxidant anthocyanin (specifically ternatins), which is responsible for the blue color and potential health benefits like protecting the skin from premature aging and supporting cognitive health.',
      [Language.TH]: 'อุดมไปด้วยสารต้านอนุมูลอิสระแอนโทไซยานิน (โดยเฉพาะเทอร์นาทิน) ซึ่งรับผิดชอบต่อสีน้ำเงินและประโยชน์ต่อสุขภาพที่อาจเกิดขึ้น เช่น การปกป้องผิวจากการแก่ก่อนวัยและสนับสนุนสุขภาพการรับรู้',
      [Language.ZH]: '它富含抗氧化剂花青素（特别是蝶豆素），这赋予了它蓝色以及潜在的健康益处，如保护皮肤免于过早衰老和支持认知健康。',
    },
    tip: {
      [Language.EN]: 'Brew the dried flowers into a tea first, then use the cooled blue tea as your smoothie liquid. Create a stunning visual effect by pouring a little lemon juice on top of the finished smoothie right before serving.',
      [Language.TH]: 'ชงดอกไม้แห้งเป็นชาก่อน แล้วใช้ชาสีน้ำเงินที่เย็นแล้วเป็นของเหลวในสมูทตี้ของคุณ สร้างเอฟเฟกต์ภาพที่น่าทึ่งโดยการเทน้ำมะนาวเล็กน้อยลงบนสมูทตี้ที่ทำเสร็จแล้วก่อนเสิร์ฟ',
      [Language.ZH]: '首先将干花泡成茶，然后用冷却的蓝色茶作为冰沙液体。在享用前，将少量柠檬汁倒在成品冰沙上，可以创造出惊人的视觉效果。',
    },
  },
  {
    id: 'durian',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The King of Fruits: Durian',
      [Language.TH]: 'ราชาแห่งผลไม้: ทุเรียน',
      [Language.ZH]: '水果之王：榴莲',
    },
    description: {
      [Language.EN]: 'Infamous for its powerful and persistent aroma, durian is a fruit that people either love or hate. Those who love it cherish its rich, custardy flesh that boasts a complex flavor profile of sweet, savory, and creamy notes.',
      [Language.TH]: 'ทุเรียนมีชื่อเสียงในด้านกลิ่นที่รุนแรงและติดทนนาน เป็นผลไม้ที่คนจะรักหรือไม่ก็เกลียดไปเลย สำหรับคนที่รักมัน จะชื่นชอบเนื้อที่เข้มข้นเหมือนคัสตาร์ดซึ่งมีรสชาติที่ซับซ้อนทั้งหวาน เค็ม และครีมมี่',
      [Language.ZH]: '榴莲以其强烈而持久的香气而臭名昭著，是一种让人又爱又恨的水果。爱它的人珍视其浓郁的、奶油冻般的果肉，它拥有甜、咸、奶油般复杂的风味。',
    },
    fact: {
      [Language.EN]: 'The smell is so pungent that durian is banned on many types of public transport and in hotels across Southeast Asia.',
      [Language.TH]: 'กลิ่นของมันฉุนมากจนทุเรียนถูกห้ามนำขึ้นระบบขนส่งสาธารณะหลายประเภทและในโรงแรมทั่วเอเชียตะวันออกเฉียงใต้',
      [Language.ZH]: '它的气味非常刺鼻，以至于在东南亚的许多公共交通工具和酒店中都禁止携带榴莲。',
    },
    why: {
      [Language.EN]: 'Despite its reputation, durian is incredibly nutritious. It\'s rich in energy, dietary fiber, healthy fats, and is an excellent source of potassium, Vitamin C, and various B-vitamins.',
      [Language.TH]: 'แม้จะมีชื่อเสียงเช่นนั้น แต่ทุเรียนกลับมีคุณค่าทางโภชนาการอย่างไม่น่าเชื่อ อุดมไปด้วยพลังงาน ใยอาหาร ไขมันดี และเป็นแหล่งโพแทสเซียม วิตามินซี และวิตามินบีต่างๆ ที่ยอดเยี่ยม',
      [Language.ZH]: '尽管名声不佳，榴莲的营养却极其丰富。它富含能量、膳食纤维、健康脂肪，并且是钾、维生素C和多种B族维生素的极佳来源。',
    },
    tip: {
      [Language.EN]: 'Its flavor is extremely dominant. For a durian smoothie, use just a small amount of the flesh and blend it with mild bases like coconut milk or regular milk to let its unique character shine without being overwhelming.',
      [Language.TH]: 'รสชาติของมันโดดเด่นอย่างยิ่ง สำหรับสมูทตี้ทุเรียน ให้ใช้เนื้อเพียงเล็กน้อยแล้วปั่นกับเบสรสอ่อนๆ เช่น กะทิหรือนมวัว เพื่อให้ลักษณะเฉพาะของมันโดดเด่นโดยไม่แรงเกินไป',
      [Language.ZH]: '它的味道极其霸道。制作榴莲冰沙时，只需少量果肉，并将其与温和的基底（如椰奶或普通牛奶）混合，以使其独特的个性得以展现而不过于强烈。',
    },
  },
  {
    id: 'jackfruit',
    type: 'fruit',
    image: 'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',
    title: {
      [Language.EN]: 'The Versatile Giant: Jackfruit',
      [Language.TH]: 'ยักษ์ใหญ่สารพัดประโยชน์: ขนุน',
      [Language.ZH]: '多才多艺的巨人：菠萝蜜',
    },
    description: {
      [Language.EN]: "The world's largest tree fruit, a single jackfruit can weigh up to 80 pounds! The prize inside are the fleshy pods, which have a sweet flavor often described as a combination of apple, pineapple, mango, and banana.",
      [Language.TH]: 'ผลไม้บนต้นที่ใหญ่ที่สุดในโลก ขนุนลูกเดียวอาจหนักได้ถึง 80 ปอนด์! รางวัลที่อยู่ข้างในคือยวงเนื้อซึ่งมีรสหวานที่มักถูกอธิบายว่าเป็นการผสมผสานระหว่างแอปเปิ้ล สับปะรด มะม่วง และกล้วย',
      [Language.ZH]: '作为世界上最大的树生水果，一个菠萝蜜可重达80磅！里面的奖品是肉质的果包，其甜味常被描述为苹果、菠萝、芒果和香蕉的组合。',
    },
    fact: {
      [Language.EN]: 'Unripe, green jackfruit has a neutral flavor and a meat-like texture, making it a popular meat substitute for vegans and vegetarians, especially for dishes like pulled pork.',
      [Language.TH]: 'ขนุนดิบสีเขียวมีรสชาติที่เป็นกลางและเนื้อสัมผัสคล้ายเนื้อสัตว์ ทำให้เป็นที่นิยมใช้แทนเนื้อสำหรับชาววีแกนและมังสวิรัติ โดยเฉพาะสำหรับอาหารอย่างพูลพอร์ก',
      [Language.ZH]: '未成熟的绿色菠萝蜜味道中性，质地类似肉，使其成为素食者和纯素食者流行的肉类替代品，尤其适用于像手撕猪肉这样的菜肴。',
    },
    why: {
      [Language.EN]: "It's a good source of dietary fiber, Vitamin C, and Vitamin B6. It also provides potassium, which is important for maintaining healthy blood pressure.",
      [Language.TH]: 'เป็นแหล่งใยอาหาร วิตามินซี และวิตามินบี 6 ที่ดี นอกจากนี้ยังให้โพแทสเซียมซึ่งมีความสำคัญต่อการรักษาระดับความดันโลหิตให้แข็งแรง',
      [Language.ZH]: '它是膳食纤维、维生素C和维生素B6的良好来源。它还提供钾，这对于维持健康的血压很重要。',
    },
    tip: {
      [Language.EN]: 'Use ripe, sweet jackfruit pods for smoothies. They add a wonderful tropical sweetness and fibrous texture. It pairs exceptionally well with other tropical fruits like mango, pineapple, and coconut milk.',
      [Language.TH]: 'ใช้ยวงขนุนสุกหวานสำหรับทำสมูทตี้ มันเพิ่มความหวานแบบร้อนชื้นและเนื้อสัมผัสที่มีเส้นใยได้อย่างยอดเยี่ยม เข้ากันได้ดีเป็นพิเศษกับผลไม้เขตร้อนอื่นๆ เช่น มะม่วง สับปะรด และกะทิ',
      [Language.ZH]: '使用成熟、甜美的菠萝蜜果包制作冰沙。它们增添了美妙的热带甜味和纤维质地。它与其他热带水果如芒果、菠萝和椰奶搭配得非常好。',
    },
  },
  {
    id: 'rambutan',
    type: 'fruit',
    image: 'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg',
    title: {
      [Language.EN]: 'The Hairy Lychee: Rambutan',
      [Language.TH]: 'ลิ้นจี่มีขน: เงาะ',
      [Language.ZH]: '毛茸茸的荔枝：红毛丹',
    },
    description: {
      [Language.EN]: 'A close relative of the lychee, the rambutan is a stunning tropical fruit with a hairy red and green shell. Inside, the translucent white flesh is sweet, juicy, and incredibly refreshing, with a flavor profile that is both sweet and slightly acidic.',
      [Language.TH]: 'เงาะเป็นญาติสนิทของลิ้นจี่ เป็นผลไม้เมืองร้อนที่สวยงามมีเปลือกสีแดงและเขียวที่มีขนปกคลุม ข้างในเป็นเนื้อสีขาวใสที่หวานฉ่ำและสดชื่นอย่างไม่น่าเชื่อ มีรสชาติที่ทั้งหวานและเปรี้ยวเล็กน้อย',
      [Language.ZH]: '作为荔枝的近亲，红毛丹是一种令人惊叹的热带水果，外壳呈红绿色并长满毛。内部半透明的白色果肉甜美多汁，极其清爽，风味甜中带微酸。',
    },
    fact: {
      [Language.EN]: 'The name "rambutan" comes from the Malay word "rambut", which literally means "hair", a direct reference to its unique spiky appearance.',
      [Language.TH]: 'ชื่อ "เงาะ" (Rambutan) มาจากคำว่า "rambut" ในภาษามลายูซึ่งแปลว่า "ผม" หรือ "ขน" ซึ่งหมายถึงลักษณะภายนอกที่เป็นหนามแหลมของมันโดยตรง',
      [Language.ZH]: '“红毛丹”这个名字来自马来语单词“rambut”，字面意思是“头发”，直接指其独特的刺状外观。',
    },
    why: {
      [Language.EN]: 'Rambutan is an excellent source of Vitamin C, which boosts the immune system, and copper, which is vital for brain development and strong bones. It also provides a good amount of fiber.',
      [Language.TH]: 'เงาะเป็นแหล่งวิตามินซีที่ดีเยี่ยมซึ่งช่วยเสริมสร้างระบบภูมิคุ้มกัน และทองแดงซึ่งจำเป็นต่อพัฒนาการของสมองและกระดูกที่แข็งแรง นอกจากนี้ยังมีใยอาหารในปริมาณที่ดี',
      [Language.ZH]: '红毛丹是维生素C的极佳来源，可增强免疫系统；也是铜的良好来源，对大脑发育和骨骼强健至关重要。它还提供大量的纤维。',
    },
    tip: {
      [Language.EN]: 'To peel, score the rind around the middle with a knife and twist it open, or simply bite into the rind to start a tear. It\'s delicious on its own or paired with pineapple and lime in a smoothie.',
      [Language.TH]: 'ในการปอกเปลือก ให้ใช้มีดกรีดรอบๆ ตรงกลางเปลือกแล้วบิดเปิดออก หรือแค่กัดเปลือกเพื่อเริ่มฉีกก็ได้ มันอร่อยในตัวเองหรือจับคู่กับสับปะรดและมะนาวในสมูทตี้',
      [Language.ZH]: '要剥皮，可以用刀在果皮中间划一圈然后扭开，或者直接咬住果皮撕开。它本身就很美味，或者在冰沙中与菠萝和青柠搭配。',
    },
  },
  {
    id: 'soursop',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Creamy Cure: Soursop',
      [Language.TH]: 'ยารักษาเนื้อครีม: ทุเรียนเทศ',
      [Language.ZH]: '奶油疗法：刺果番荔枝',
    },
    description: {
      [Language.EN]: 'Soursop has a unique, aromatic flavor often described as a combination of strawberry and pineapple, with sour citrus notes and an underlying creamy texture reminiscent of coconut or banana.',
      [Language.TH]: 'ทุเรียนเทศมีรสชาติที่เป็นเอกลักษณ์และหอมหวน ซึ่งมักจะถูกอธิบายว่าเป็นการผสมผสานระหว่างสตรอเบอร์รี่และสับปะรด มีรสเปรี้ยวของซิตรัสและเนื้อครีมที่ชวนให้นึกถึงมะพร้าวหรือกล้วย',
      [Language.ZH]: '刺果番荔枝具有独特芳香的风味，常被描述为草莓和菠萝的结合体，带有酸涩的柑橘味和类似椰子或香蕉的奶油质地。',
    },
    fact: {
      [Language.EN]: 'Despite its name, it is not typically a "sour" fruit but has a complex sweet-tart flavor profile. The large black seeds inside are inedible and should be discarded.',
      [Language.TH]: 'แม้จะมีชื่อว่าทุเรียนเทศ แต่ก็ไม่ได้มีรสเปรี้ยวจัด แต่มีรสชาติหวานอมเปรี้ยวที่ซับซ้อน เมล็ดสีดำขนาดใหญ่ข้างในไม่สามารถรับประทานได้และควรทิ้งไป',
      [Language.ZH]: '尽管名字里带“刺果”，但它通常不是一种“酸”的水果，而是具有复杂的酸甜风味。里面的大黑籽不可食用，应丢弃。',
    },
    why: {
      [Language.EN]: 'It is very high in Vitamin C, an antioxidant known for boosting immune health. It is also a good source of B vitamins and has been studied for its rich content of annonaceous acetogenins.',
      [Language.TH]: 'มันมีวิตามินซีสูงมาก ซึ่งเป็นสารต้านอนุมูลอิสระที่รู้จักกันในการส่งเสริมสุขภาพภูมิคุ้มกัน นอกจากนี้ยังเป็นแหล่งวิตามินบีที่ดีและได้รับการศึกษาเรื่องสารประกอบ acetogenins ที่อุดมสมบูรณ์',
      [Language.ZH]: '它富含维生素C，这是一种以增强免疫健康而闻名的抗氧化剂。它也是B族维生素的良好来源，并因其富含番荔枝内酯而受到研究。',
    },
    tip: {
      [Language.EN]: 'The seeds must be removed before blending. Its creamy texture makes it perfect for smoothies. Pair it with lime juice and a hint of nutmeg or cinnamon to complement its unique flavor.',
      [Language.TH]: 'ต้องเอาเมล็ดออกก่อนนำไปปั่น เนื้อครีมของมันทำให้เหมาะสำหรับทำสมูทตี้ จับคู่กับน้ำมะนาวและลูกจันทน์เทศหรืออบเชยเล็กน้อยเพื่อเสริมรสชาติที่เป็นเอกลักษณ์',
      [Language.ZH]: '搅拌前必须去除种子。其奶油般的质地使其非常适合制作冰沙。搭配青柠汁和少许肉豆蔻或肉桂，以衬托其独特的风味。',
    },
  },
  {
    id: 'lotus_root',
    type: 'vegetable',
    image: 'https://i.postimg.cc/WpDbMyzq/juice-me-image-place-holder-and-background-decorative-0019.jpg',
    title: {
      [Language.EN]: 'The Sacred Pattern: Lotus Root',
      [Language.TH]: 'ลวดลายศักดิ์สิทธิ์: รากบัว',
      [Language.ZH]: '神圣图案：莲藕',
    },
    description: {
      [Language.EN]: 'An aquatic vegetable with a crunchy texture and a mildly sweet flavor. When sliced, it reveals a beautiful, lace-like pattern, making it as visually appealing as it is nutritious. It\'s a staple in many Asian cuisines.',
      [Language.TH]: 'เป็นผักน้ำที่มีเนื้อสัมผัสกรุบกรอบและรสหวานอ่อนๆ เมื่อหั่นออกมาจะเผยให้เห็นลวดลายที่สวยงามคล้ายลูกไม้ ทำให้มันน่ามองพอๆ กับที่คุณค่าทางอาหาร เป็นวัตถุดิบหลักในอาหารเอเชียหลายชนิด',
      [Language.ZH]: '一种水生蔬菜，质地松脆，味道微甜。切开后，它会展现出美丽的蕾丝状图案，使其在视觉上与营养价值同样吸引人。它是许多亚洲美食的主食。',
    },
    fact: {
      [Language.EN]: 'The hollow channels inside the lotus root are air canals that help the plant breathe while submerged. This pattern is a symbol of purity in many Eastern cultures.',
      [Language.TH]: 'ช่องว่างภายในรากบัวคือท่ออากาศที่ช่วยให้พืชหายใจขณะอยู่ใต้น้ำ ลวดลายนี้เป็นสัญลักษณ์ของความบริสุทธิ์ในวัฒนธรรมตะวันออกหลายแห่ง',
      [Language.ZH]: '莲藕内部的中空通道是帮助植物在水下呼吸的气道。在许多东方文化中，这种图案是纯洁的象征。',
    },
    why: {
      [Language.EN]: 'It is an excellent source of dietary fiber and Vitamin C. It also provides important minerals like potassium, which helps regulate blood pressure, and copper, essential for iron metabolism.',
      [Language.TH]: 'เป็นแหล่งใยอาหารและวิตามินซีที่ดีเยี่ยม นอกจากนี้ยังมีแร่ธาตุที่สำคัญเช่นโพแทสเซียมซึ่งช่วยควบคุมความดันโลหิต และทองแดงซึ่งจำเป็นต่อการเผาผลาญธาตุเหล็ก',
      [Language.ZH]: '它是膳食纤维和维生素C的极佳来源。它还提供重要的矿物质，如有助于调节血压的钾和对铁代谢至关重要的铜。',
    },
    tip: {
      [Language.EN]: 'For juicing or smoothies, peel the tough outer skin and chop the root. It yields a refreshing, slightly thick liquid that pairs wonderfully with apple, pear, and a touch of ginger.',
      [Language.TH]: 'สำหรับการคั้นน้ำหรือทำสมูทตี้ ให้ปอกเปลือกนอกที่แข็งออกแล้วหั่นราก จะได้ของเหลวที่สดชื่นและข้นเล็กน้อยซึ่งเข้ากันได้ดีกับแอปเปิ้ล สาลี่ และขิงเล็กน้อย',
      [Language.ZH]: '榨汁或制作冰沙时，请削去坚硬的外皮并切碎根部。它能产生清爽、略带浓稠的液体，与苹果、梨和少许姜搭配得非常好。',
    },
  },
  {
    id: 'roselle',
    type: 'vegetable',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Crimson Cooler: Roselle',
      [Language.TH]: 'เครื่องดื่มดับร้อนสีแดงเข้ม: กระเจี๊ยบแดง',
      [Language.ZH]: '绯红冷却剂：洛神花',
    },
    description: {
      [Language.EN]: 'Known as Roselle or sour tea, this plant is famous for its fleshy, bright red calyces (not the flower itself) which are used to make a tart, cranberry-like beverage that is popular across the world, especially in tropical climates.',
      [Language.TH]: 'เป็นที่รู้จักในชื่อกระเจี๊ยบแดงหรือชาเปรี้ยว พืชชนิดนี้มีชื่อเสียงจากกลีบเลี้ยงสีแดงสดอวบน้ำ (ไม่ใช่ตัวดอกไม้) ซึ่งใช้ทำเครื่องดื่มรสเปรี้ยวคล้ายแครนเบอร์รี่ที่เป็นที่นิยมทั่วโลก โดยเฉพาะในสภาพอากาศร้อน',
      [Language.ZH]: '这种植物被称为洛神花或酸茶，以其肉质、鲜红色的花萼（而非花朵本身）而闻名，用于制作一种酸爽、类似蔓越莓的饮料，在世界各地，尤其是在热带气候中非常受欢迎。',
    },
    fact: {
      [Language.EN]: 'The part of the plant used is the calyx, the protective layer around the flower bud. After the flower blooms and falls off, the calyx grows into the fleshy, red "fruit" that is harvested.',
      [Language.TH]: 'ส่วนของพืชที่ใช้คือกลีบเลี้ยง ซึ่งเป็นชั้นป้องกันรอบดอกตูม หลังจากดอกบานและร่วงไป กลีบเลี้ยงจะเจริญเติบโตเป็น "ผล" สีแดงอวบน้ำที่ถูกเก็บเกี่ยว',
      [Language.ZH]: '使用的植物部分是花萼，即花蕾周围的保护层。花朵绽放凋谢后，花萼会长成肉质的红色“果实”，然后被采摘。',
    },
    why: {
      [Language.EN]: 'Roselle is packed with Vitamin C and powerful antioxidants called anthocyanins, which give it its deep red color. It has traditionally been used to support cardiovascular health and lower blood pressure.',
      [Language.TH]: 'กระเจี๊ยบแดงอุดมไปด้วยวิตามินซีและสารต้านอนุมูลอิสระที่ทรงพลังที่เรียกว่าแอนโทไซยานิน ซึ่งให้สีแดงเข้ม ในทางการแพทย์แผนโบราณมักใช้เพื่อสนับสนุนสุขภาพหัวใจและหลอดเลือดและลดความดันโลหิต',
      [Language.ZH]: '洛神花富含维生素C和强大的抗氧化剂花青素，这赋予了它深红色。传统上，它被用来支持心血管健康和降低血压。',
    },
    tip: {
      [Language.EN]: 'Brew the dried calyces into a tea, cool it down, and use it as a vibrant, tart liquid base for smoothies. Its strong flavor needs to be balanced with sweet fruits like mango, banana, or strawberries.',
      [Language.TH]: 'ชงกลีบเลี้ยงแห้งเป็นชา ทิ้งไว้ให้เย็นแล้วใช้เป็นของเหลวพื้นฐานรสเปรี้ยวสีสดสำหรับสมูทตี้ รสชาติที่เข้มข้นของมันต้องสมดุลด้วยผลไม้รสหวาน เช่น มะม่วง กล้วย หรือสตรอว์เบอร์รี',
      [Language.ZH]: '将干燥的花萼泡成茶，冷却后用作冰沙的鲜艳、酸爽的液体基底。其强烈的风味需要用芒果、香蕉或草莓等甜味水果来平衡。',
    },
  },
  {
    id: 'taro_root',
    type: 'vegetable',
    image: 'https://i.postimg.cc/y8TV14Qt/juice-me-image-place-holder-and-background-decorative-0012.jpg',
    title: {
      [Language.EN]: 'The Purple Creamer: Taro Root',
      [Language.TH]: 'ครีมเมอร์สีม่วง: เผือก',
      [Language.ZH]: '紫色奶精：芋头',
    },
    description: {
      [Language.EN]: 'A starchy root vegetable with a unique, mildly sweet, and nutty flavor. When cooked, it becomes soft, starchy, and creamy, making it a beloved ingredient in both sweet desserts and savory dishes, especially famous in bubble tea.',
      [Language.TH]: 'เป็นผักหัวที่มีแป้งสูง มีรสชาติหวานอ่อนๆ และกลิ่นคล้ายถั่วที่เป็นเอกลักษณ์ เมื่อปรุงสุกจะนุ่ม มีแป้ง และมีความครีมมี่ ทำให้เป็นส่วนผสมยอดนิยมทั้งในของหวานและอาหารคาว โดยเฉพาะอย่างยิ่งมีชื่อเสียงในชานมไข่มุก',
      [Language.ZH]: '一种淀粉质的根茎蔬菜，具有独特、温和的甜味和坚果风味。煮熟后，它变得柔软、富含淀粉和奶油状，使其成为甜点和咸味菜肴中备受喜爱的成分，尤其在珍珠奶茶中非常有名。',
    },
    fact: {
      [Language.EN]: 'Taro is one of the world\'s oldest cultivated plants and must be cooked before consumption, as it is toxic in its raw form due to high levels of calcium oxalate.',
      [Language.TH]: 'เผือกเป็นหนึ่งในพืชที่ปลูกเก่าแก่ที่สุดในโลกและต้องปรุงสุกก่อนบริโภค เนื่องจากมีพิษในรูปแบบดิบเนื่องจากมีแคลเซียมออกซาเลตในระดับสูง',
      [Language.ZH]: '芋头是世界上最古老的栽培植物之一，食用前必须煮熟，因为它生吃时含有高水平的草酸钙而有毒。',
    },
    why: {
      [Language.EN]: 'Taro is an excellent source of dietary fiber and complex carbohydrates, providing sustained energy. It also contains significant amounts of potassium, manganese, and Vitamin B6.',
      [Language.TH]: 'เผือกเป็นแหล่งใยอาหารและคาร์โบไฮเดรตเชิงซ้อนที่ดีเยี่ยม ให้พลังงานที่ยั่งยืน นอกจากนี้ยังมีโพแทสเซียม แมงกานีส และวิตามินบี 6 ในปริมาณมาก',
      [Language.ZH]: '芋头是膳食纤维和复合碳水化合物的极佳来源，可提供持续的能量。它还含有大量的钾、锰和维生素B6。',
    },
    tip: {
      [Language.EN]: 'For smoothies, always use taro that has been steamed or boiled until tender and then cooled. This creates a wonderfully thick and creamy texture. It pairs perfectly with coconut milk and vanilla for that classic, beloved taro flavor.',
      [Language.TH]: 'สำหรับสมูทตี้ ให้ใช้เผือกที่นึ่งหรือต้มจนนิ่มแล้วทิ้งไว้ให้เย็นเสมอ สิ่งนี้จะสร้างเนื้อสัมผัสที่ข้นและครีมมี่อย่างน่าอัศจรรย์ เข้ากันได้ดีกับกะทิและวานิลลาเพื่อรสชาติเผือกคลาสสิกอันเป็นที่รัก',
      [Language.ZH]: '制作冰沙时，务必使用蒸或煮至软烂然后冷却的芋头。这样可以创造出极佳的浓稠和奶油质地。它与椰奶和香草完美搭配，带来经典而备受喜爱的芋头风味。',
    },
  },
  {
    id: 'goji_berries',
    type: 'fruit',
    image: 'https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg',
    title: {
      [Language.EN]: 'The Longevity Berry: Goji Berries',
      [Language.TH]: 'เบอร์รี่แห่งความยืนยาว: โกจิเบอร์รี่',
      [Language.ZH]: '长寿之果：枸杞',
    },
    description: {
      [Language.EN]: 'These small, red-orange berries have been used in traditional Chinese medicine for thousands of years. They have a unique, slightly sweet and sour taste, and are often consumed dried, like raisins.',
      [Language.TH]: 'เบอร์รี่สีแดง-ส้มขนาดเล็กเหล่านี้ถูกใช้ในการแพทย์แผนจีนมานานหลายพันปี มีรสชาติหวานอมเปรี้ยวที่เป็นเอกลักษณ์ และมักบริโภคในรูปแบบแห้งคล้ายลูกเกด',
      [Language.ZH]: '这些小小的红橙色浆果在中国传统医学中已使用了数千年。它们具有独特的、微甜带酸的味道，通常像葡萄干一样以干果形式食用。',
    },
    fact: {
      [Language.EN]: 'Goji berries are also known as wolfberries. They contain all eight essential amino acids.',
      [Language.TH]: 'โกจิเบอร์รี่มีอีกชื่อว่าวูล์ฟเบอร์รี่ ประกอบด้วยกรดอะมิโนที่จำเป็นครบทั้งแปดชนิด',
      [Language.ZH]: '枸杞也被称为狼果。它包含所有八种必需氨基酸。',
    },
    why: {
      [Language.EN]: 'They are an excellent source of antioxidants, particularly zeaxanthin, which is known to protect the eyes from age-related damage. They also support immune function and promote healthy skin.',
      [Language.TH]: 'เป็นแหล่งสารต้านอนุมูลอิสระชั้นเยี่ยม โดยเฉพาะซีแซนทีนซึ่งเป็นที่รู้จักในการปกป้องดวงตาจากความเสื่อมตามวัย นอกจากนี้ยังช่วยสนับสนุนการทำงานของภูมิคุ้มกันและส่งเสริมผิวพรรณที่แข็งแรง',
      [Language.ZH]: '它们是抗氧化剂的极佳来源，特别是玉米黄质，以保护眼睛免受年龄相关性损伤而闻名。它们还支持免疫功能并促进健康的皮肤。',
    },
    tip: {
      [Language.EN]: 'Soak dried goji berries in water for a few minutes to soften them before adding to your smoothie. They pair well with orange, carrot, and ginger.',
      [Language.TH]: 'แช่โกจิเบอร์รี่แห้งในน้ำสักครู่เพื่อให้นิ่มลงก่อนนำไปปั่น เข้ากันได้ดีกับส้ม แครอท และขิง',
      [Language.ZH]: '在加入冰沙前，将干枸杞在水中浸泡几分钟使其变软。它们与橙子、胡萝卜和姜搭配得很好。',
    },
  },
  {
    id: 'acai_berries',
    type: 'fruit',
    image: 'https://i.postimg.cc/8krNFrXh/juice-me-image-place-holder-and-background-decorative-007.jpg',
    title: {
      [Language.EN]: 'The Amazonian Power Berry: Acai',
      [Language.TH]: 'พาวเวอร์เบอร์รี่แห่งอเมซอน: อาซาอิ',
      [Language.ZH]: '亚马逊能量莓：巴西莓',
    },
    description: {
      [Language.EN]: 'Hailing from the Amazon rainforest, açaí berries are small, dark purple fruits that have gained worldwide fame. They taste like a mix of wild berries and a hint of dark chocolate.',
      [Language.TH]: 'มาจากป่าฝนอเมซอน อาซาอิเบอร์รี่เป็นผลไม้สีม่วงเข้มขนาดเล็กที่ได้รับชื่อเสียงไปทั่วโลก มีรสชาติเหมือนเบอร์รี่ป่าผสมกับดาร์กช็อกโกแลตเล็กน้อย',
      [Language.ZH]: '巴西莓来自亚马逊雨林，是一种深紫色的小水果，享誉全球。它们的味道像是野生浆果和一丝黑巧克力的混合。',
    },
    fact: {
      [Language.EN]: 'Açaí berries grow on palm trees and are highly perishable, which is why they are most often sold as a frozen purée or powder outside of their native region.',
      [Language.TH]: 'อาซาอิเบอร์รี่เติบโตบนต้นปาล์มและเน่าเสียง่ายมาก ซึ่งเป็นเหตุผลว่าทำไมจึงมักขายในรูปแบบเพียวเร่แช่แข็งหรือผงนอกพื้นที่ดั้งเดิม',
      [Language.ZH]: '巴西莓生长在棕榈树上，极易腐烂，这就是为什么在原产地以外，它们通常以冷冻果泥或粉末的形式出售。',
    },
    why: {
      [Language.EN]: 'They have an incredibly high antioxidant content, even more than cranberries or blueberries. They\'re also a source of healthy fats (omega-3, 6, and 9) and fiber, supporting heart and digestive health.',
      [Language.TH]: 'มีสารต้านอนุมูลอิสระสูงอย่างไม่น่าเชื่อ มากกว่าแครนเบอร์รี่หรือบลูเบอร์รี่เสียอีก นอกจากนี้ยังเป็นแหล่งไขมันดี (โอเมก้า 3, 6, และ 9) และไฟเบอร์ ซึ่งช่วยสนับสนุนสุขภาพหัวใจและระบบย่อยอาหาร',
      [Language.ZH]: '它们的抗氧化剂含量极高，甚至超过蔓越莓或蓝莓。它们也是健康脂肪（欧米茄-3、6和9）和纤维的来源，支持心脏和消化系统健康。',
    },
    tip: {
      [Language.EN]: 'Use frozen açaí purée packs as the base for a thick, vibrant smoothie bowl. Top with granola, banana, and a drizzle of honey for a classic "açaí bowl".',
      [Language.TH]: 'ใช้อาซาอิเพียวเร่แช่แข็งเป็นเบสสำหรับสมูทตี้โบวล์ที่ข้นและมีสีสันสดใส โรยหน้าด้วยกราโนล่า กล้วย และน้ำผึ้งเล็กน้อยเพื่อทำ "อาซาอิโบวล์" แบบคลาสสิก',
      [Language.ZH]: '使用冷冻巴西莓果泥包作为制作浓郁、色彩鲜艳的冰沙碗的基底。在上面加上格兰诺拉麦片、香蕉和一抹蜂蜜，即可制成经典的“巴西莓碗”。',
    },
  },
  {
    id: 'sweet_potato',
    type: 'vegetable',
    image: 'https://i.postimg.cc/5jcrvy0g/juice-me-image-place-holder-and-background-decorative-0016.jpg',
    title: {
      [Language.EN]: 'The Golden Root: Sweet Potato',
      [Language.TH]: 'รากไม้สีทอง: มันเทศ',
      [Language.ZH]: '金色根茎：红薯',
    },
    description: {
      [Language.EN]: 'This versatile root vegetable offers a creamy texture and a natural, earthy sweetness. It\'s a satisfying and nutrient-dense addition to smoothies, making them more filling and substantial.',
      [Language.TH]: 'ผักหัวชนิดนี้มีเนื้อสัมผัสที่เนียนนุ่มและรสหวานตามธรรมชาติ เป็นส่วนเสริมที่น่าพอใจและมีสารอาหารหนาแน่นสำหรับสมูทตี้ ทำให้เครื่องดื่มอิ่มและมีเนื้อมีหนังมากขึ้น',
      [Language.ZH]: '这种多功能的根茎蔬菜提供奶油般的质地和自然的泥土甜味。它是冰沙中令人满意且营养密集的补充，使其更具饱腹感和实质性。',
    },
    fact: {
      [Language.EN]: 'Despite its name, the sweet potato is not closely related to the common potato. It belongs to the morning glory family.',
      [Language.TH]: 'แม้จะมีชื่อว่ามันเทศ แต่ก็ไม่ได้มีความเกี่ยวข้องใกล้ชิดกับมันฝรั่งทั่วไป มันอยู่ในวงศ์ผักบุ้ง',
      [Language.ZH]: '尽管名字里有“薯”，但红薯与普通马铃薯关系不密切。它属于旋花科。',
    },
    why: {
      [Language.EN]: 'It\'s one of the best sources of beta-carotene, which converts to Vitamin A in the body, essential for vision and immune health. It\'s also packed with fiber, Vitamin C, and manganese.',
      [Language.TH]: 'เป็นหนึ่งในแหล่งเบต้าแคโรทีนที่ดีที่สุด ซึ่งจะเปลี่ยนเป็นวิตามินเอในร่างกาย จำเป็นต่อการมองเห็นและสุขภาพภูมิคุ้มกัน นอกจากนี้ยังเต็มไปด้วยไฟเบอร์ วิตามินซี และแมงกานีส',
      [Language.ZH]: '它是β-胡萝卜素的最佳来源之一，β-胡萝卜素在体内转化为维生素A，对视力和免疫健康至关重要。它还富含纤维、维生素C和锰。',
    },
    tip: {
      [Language.EN]: 'Use cooked (steamed or roasted) and cooled sweet potato for the best texture. It blends into a thick, creamy consistency and pairs beautifully with cinnamon, nutmeg, and banana.',
      [Language.TH]: 'ใช้มันเทศที่ปรุงสุก (นึ่งหรือย่าง) และทำให้เย็นลงเพื่อให้ได้เนื้อสัมผัสที่ดีที่สุด มันจะปั่นได้เนื้อข้นเนียนและเข้ากันได้ดีกับอบเชย ลูกจันทน์เทศ และกล้วย',
      [Language.ZH]: '使用煮熟（蒸或烤）并冷却的红薯以获得最佳质地。它能混合成浓稠的奶油状，与肉桂、肉豆蔻和香蕉搭配得非常漂亮。',
    },
  },
  {
    id: 'turmeric',
    type: 'vegetable',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Golden Spice: Turmeric',
      [Language.TH]: 'เครื่องเทศสีทอง: ขมิ้น',
      [Language.ZH]: '黄金香料：姜黄',
    },
    description: {
      [Language.EN]: 'A staple in Ayurvedic medicine and Indian cuisine, this bright yellow spice has a warm, peppery flavor. A small amount can add a golden hue and powerful health benefits to any smoothie.',
      [Language.TH]: 'เป็นวัตถุดิบหลักในการแพทย์อายุรเวทและอาหารอินเดีย เครื่องเทศสีเหลืองสดนี้มีรสชาติที่อบอุ่นและเผ็ดร้อน ปริมาณเล็กน้อยสามารถเพิ่มสีทองและคุณประโยชน์ต่อสุขภาพที่ทรงพลังให้กับสมูทตี้ใดๆ',
      [Language.ZH]: '作为阿育吠陀医学和印度美食的主食，这种亮黄色的香料具有温暖、辛辣的味道。少量即可为任何冰沙增添金色色调和强大的健康益处。',
    },
    fact: {
      [Language.EN]: 'Turmeric is what gives curry powder its characteristic yellow color.',
      [Language.TH]: 'ขมิ้นเป็นสิ่งที่ทำให้ผงกะหรี่มีสีเหลืองที่เป็นเอกลักษณ์',
      [Language.ZH]: '姜黄是咖喱粉具有特色黄色的原因。',
    },
    why: {
      [Language.EN]: 'Its main active compound is curcumin, a powerful antioxidant with strong anti-inflammatory effects. It supports joint health, brain function, and has been linked to a lower risk of heart disease.',
      [Language.TH]: 'สารออกฤทธิ์หลักของมันคือเคอร์คูมิน ซึ่งเป็นสารต้านอนุมูลอิสระที่มีประสิทธิภาพพร้อมฤทธิ์ต้านการอักเสบที่แข็งแกร่ง ช่วยสนับสนุนสุขภาพข้อต่อ การทำงานของสมอง และเชื่อมโยงกับความเสี่ยงที่ลดลงของโรคหัวใจ',
      [Language.ZH]: '其主要活性化合物是姜黄素，一种具有强大抗炎作用的强效抗氧化剂。它支持关节健康、大脑功能，并与降低心脏病风险有关。',
    },
    tip: {
      [Language.EN]: 'Always pair turmeric with a pinch of black pepper. The piperine in black pepper enhances the absorption of curcumin by up to 2,000%! It works well with mango, pineapple, and ginger.',
      [Language.TH]: 'ควรจับคู่ขมิ้นกับพริกไทยดำเล็กน้อยเสมอ สารไพเพอรีนในพริกไทยดำช่วยเพิ่มการดูดซึมเคอร์คูมินได้ถึง 2,000%! มันเข้ากันได้ดีกับมะม่วง สับปะรด และขิง',
      [Language.ZH]: '始终将姜黄与一小撮黑胡椒搭配。黑胡椒中的胡椒碱可将姜黄素的吸收率提高多达2000%！它与芒果、菠萝和姜搭配得很好。',
    },
  },
  {
    id: 'flax_seeds',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Lignan Leader: Flax Seeds',
      [Language.TH]: 'ผู้นำลิกแนน: เมล็ดแฟลกซ์',
      [Language.ZH]: '木脂素领导者：亚麻籽',
    },
    description: {
      [Language.EN]: 'These small, nutty-flavored seeds are a nutritional powerhouse. When ground, they can be easily added to smoothies to boost fiber and healthy fat content.',
      [Language.TH]: 'เมล็ดเล็กๆ ที่มีรสคล้ายถั่วเหล่านี้เป็นขุมพลังทางโภชนาการ เมื่อบดแล้ว สามารถเติมลงในสมูทตี้ได้อย่างง่ายดายเพื่อเพิ่มปริมาณไฟเบอร์และไขมันดี',
      [Language.ZH]: '这些带有坚果风味的小种子是营养的动力源。磨碎后，它们可以轻松添加到冰沙中，以增加纤维和健康脂肪的含量。',
    },
    fact: {
      [Language.EN]: 'Flax has been cultivated for thousands of years and was used by ancient Egyptians to make linen cloth.',
      [Language.TH]: 'แฟลกซ์ถูกเพาะปลูกมานานหลายพันปีและชาวอียิปต์โบราณใช้ทำผ้าลินิน',
      [Language.ZH]: '亚麻已经种植了数千年，古埃及人用它来制作亚麻布。',
    },
    why: {
      [Language.EN]: 'They are the richest plant source of lignans, a type of antioxidant that may help protect against certain cancers. They are also an excellent source of plant-based omega-3 fatty acids (ALA) and both soluble and insoluble fiber.',
      [Language.TH]: 'เป็นแหล่งลิกแนนจากพืชที่อุดมสมบูรณ์ที่สุด ซึ่งเป็นสารต้านอนุมูลอิสระชนิดหนึ่งที่อาจช่วยป้องกันมะเร็งบางชนิด นอกจากนี้ยังเป็นแหล่งกรดไขมันโอเมก้า 3 จากพืช (ALA) และไฟเบอร์ทั้งที่ละลายน้ำและไม่ละลายน้ำ',
      [Language.ZH]: '它们是木脂素最丰富的植物来源，木脂素是一种可能有助于预防某些癌症的抗氧化剂。它们也是植物性欧米茄-3脂肪酸（ALA）以及可溶性和不可溶性纤维的极佳来源。',
    },
    tip: {
      [Language.EN]: 'Use ground flax seeds (flax meal) for better nutrient absorption. Add a tablespoon to your smoothie for a fiber boost that helps promote fullness.',
      [Language.TH]: 'ใช้เมล็ดแฟลกซ์บด (flax meal) เพื่อการดูดซึมสารอาหารที่ดีขึ้น เพิ่มหนึ่งช้อนโต๊ะลงในสมูทตี้ของคุณเพื่อเพิ่มไฟเบอร์ซึ่งช่วยให้รู้สึกอิ่ม',
      [Language.ZH]: '使用磨碎的亚麻籽（亚麻籽粉）以获得更好的营养吸收。在您的冰沙中加入一汤匙，以增加纤维，有助于促进饱腹感。',
    },
  },
  {
    id: 'spirulina',
    type: 'vegetable',
    image: 'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg',
    title: {
      [Language.EN]: 'The Algae All-Star: Spirulina',
      [Language.TH]: 'ดาวเด่นแห่งสาหร่าย: สไปรูลิน่า',
      [Language.ZH]: '藻类全明星：螺旋藻',
    },
    description: {
      [Language.EN]: 'A type of blue-green algae, spirulina is one of the most nutrient-dense foods on Earth. It has a strong, distinct sea-like flavor and an intense green color.',
      [Language.TH]: 'เป็นสาหร่ายสีเขียวแกมน้ำเงินชนิดหนึ่ง สไปรูลิน่าเป็นหนึ่งในอาหารที่มีสารอาหารหนาแน่นที่สุดในโลก มีรสชาติเข้มข้นคล้ายทะเลและมีสีเขียวจัด',
      [Language.ZH]: '作为一种蓝绿藻，螺旋藻是地球上营养最密集的食物之一。它具有浓郁、独特的海藻味和强烈的绿色。',
    },
    fact: {
      [Language.EN]: 'Spirulina was a food source for the Aztecs and was consumed by NASA astronauts as a dietary supplement on space missions.',
      [Language.TH]: 'สไปรูลิน่าเคยเป็นแหล่งอาหารของชาวแอซเท็กและถูกนักบินอวกาศของนาซ่าบริโภคเป็นอาหารเสริมในภารกิจอวกาศ',
      [Language.ZH]: '螺旋藻曾是阿兹特克人的食物来源，并被NASA宇航员在太空任务中作为膳食补充剂食用。',
    },
    why: {
      [Language.EN]: 'It\'s a complete protein, containing all essential amino acids. It\'s also rich in B-vitamins, iron, and copper. Its main active compound, phycocyanin, is a potent antioxidant and anti-inflammatory agent.',
      [Language.TH]: 'เป็นโปรตีนที่สมบูรณ์ซึ่งมีกรดอะมิโนที่จำเป็นครบถ้วน นอกจากนี้ยังอุดมไปด้วยวิตามินบี ธาตุเหล็ก และทองแดง สารออกฤทธิ์หลักของมันคือไฟโคไซยานิน ซึ่งเป็นสารต้านอนุมูลอิสระและต้านการอักเสบที่มีประสิทธิภาพ',
      [Language.ZH]: '它是一种完整的蛋白质，包含所有必需氨基酸。它还富含B族维生素、铁和铜。其主要活性化合物藻蓝蛋白是一种有效的抗氧化剂和抗炎剂。',
    },
    tip: {
      [Language.EN]: 'Spirulina\'s flavor is very strong. Start with a small amount (1/2 teaspoon) and mask it with sweet fruits like banana, pineapple, and mango.',
      [Language.TH]: 'รสชาติของสไปรูลิน่านั้นแรงมาก เริ่มต้นด้วยปริมาณเล็กน้อย (1/2 ช้อนชา) และกลบรสด้วยผลไม้หวานเช่น กล้วย สับปะรด และมะม่วง',
      [Language.ZH]: '螺旋藻的味道非常浓烈。从少量（1/2茶匙）开始，并用香蕉、菠萝和芒果等甜味水果来掩盖它。',
    },
  },
  {
    id: 'matcha',
    type: 'vegetable',
    image: 'https://i.postimg.cc/25crWdfx/juice-me-image-place-holder-and-background-decorative-0010.jpg',
    title: {
      [Language.EN]: 'The Zen Master: Matcha',
      [Language.TH]: 'ปรมาจารย์แห่งเซน: มัทฉะ',
      [Language.ZH]: '禅宗大师：抹茶',
    },
    description: {
      [Language.EN]: 'Matcha is a finely ground powder of specially grown and processed green tea leaves. It offers a unique combination of calm alertness, thanks to its blend of caffeine and L-theanine. It has a rich, grassy, and slightly sweet flavor.',
      [Language.TH]: 'มัทฉะคือผงละเอียดของใบชาเขียวที่ปลูกและแปรรูปเป็นพิเศษ ให้การผสมผสานที่เป็นเอกลักษณ์ของความสงบและความตื่นตัว ด้วยส่วนผสมของคาเฟอีนและแอล-ธีอะนีน มีรสชาติเข้มข้นเหมือนหญ้าและหวานเล็กน้อย',
      [Language.ZH]: '抹茶是特殊种植和加工的绿茶叶的细磨粉末。由于其咖啡因和L-茶氨酸的混合，它提供了独特的平静警觉性组合。它具有浓郁的草本味和微甜的味道。',
    },
    fact: {
      [Language.EN]: 'Unlike regular green tea, where leaves are steeped and discarded, with matcha you consume the entire leaf, receiving a much higher concentration of nutrients.',
      [Language.TH]: 'แตกต่างจากชาเขียวทั่วไปที่ชงแล้วทิ้งใบ แต่กับมัทฉะคุณจะได้บริโภคทั้งใบ ซึ่งได้รับสารอาหารที่มีความเข้มข้นสูงกว่ามาก',
      [Language.ZH]: '与普通绿茶不同，普通绿茶的茶叶是浸泡后丢弃的，而抹茶则是食用了整片茶叶，从而获得了更高浓度的营养。',
    },
    why: {
      [Language.EN]: 'It is exceptionally high in antioxidants called catechins, especially EGCG, which is linked to boosting metabolism and preventing cell damage. The amino acid L-theanine promotes relaxation and focus without the jittery side effects of coffee.',
      [Language.TH]: 'มีสารต้านอนุมูลอิสระที่เรียกว่าคาเทชินสูงเป็นพิเศษ โดยเฉพาะ EGCG ซึ่งเชื่อมโยงกับการเพิ่มการเผาผลาญและป้องกันความเสียหายของเซลล์ กรดอะมิโนแอล-ธีอะนีนช่วยส่งเสริมการผ่อนคลายและสมาธิโดยไม่มีผลข้างเคียงที่ทำให้กระวนกระวายเหมือนกาแฟ',
      [Language.ZH]: '它富含称为儿茶素的抗氧化剂，特别是EGCG，与促进新陈代谢和防止细胞损伤有关。氨基酸L-茶氨酸能促进放松和专注，而没有咖啡的紧张副作用。',
    },
    tip: {
      [Language.EN]: 'Use ceremonial-grade matcha for the best flavor and color. It pairs wonderfully with banana, vanilla, and milk (dairy or plant-based) for a creamy matcha latte smoothie.',
      [Language.TH]: 'ใช้มัทฉะเกรดพิธีชงชาเพื่อให้ได้รสชาติและสีที่ดีที่สุด เข้ากันได้ดีกับกล้วย วานิลลา และนม (นมวัวหรือนมจากพืช) สำหรับสมูทตี้มัทฉะลาเต้ที่เนียนนุ่ม',
      [Language.ZH]: '使用礼仪级抹茶以获得最佳风味和颜色。它与香蕉、香草和牛奶（乳制品或植物奶）搭配得非常好，可以制作出奶油般的抹茶拿铁冰沙。',
    },
  },
  {
    id: 'cacao',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Mood Booster: Cacao',
      [Language.TH]: 'ตัวช่วยสร้างอารมณ์: คาเคา',
      [Language.ZH]: '情绪助推器：可可',
    },
    description: {
      [Language.EN]: 'Cacao is the raw, unprocessed form of chocolate. It has a rich, bitter, and intensely chocolatey flavor. Using cacao powder or nibs in a smoothie provides all the goodness of chocolate without the added sugar.',
      [Language.TH]: 'คาเคาคือรูปแบบดิบที่ไม่ผ่านการแปรรูปของช็อกโกแลต มีรสชาติเข้มข้น ขม และมีความเป็นช็อกโกแลตอย่างรุนแรง การใช้ผงคาเคาหรือคาเคานิบส์ในสมูทตี้ให้คุณประโยชน์ทั้งหมดของช็อกโกแลตโดยไม่มีน้ำตาลเพิ่ม',
      [Language.ZH]: '可可是巧克力的原始、未加工形式。它具有浓郁、苦涩和强烈的巧克力风味。在冰沙中使用可可粉或可可碎粒，可以提供巧克力的所有好处，而无需添加糖分。',
    },
    fact: {
      [Language.EN]: 'Cacao was considered a "food of the gods" by the Mayan and Aztec civilizations and was even used as a form of currency.',
      [Language.TH]: 'คาเคาถือเป็น "อาหารของทวยเทพ" โดยอารยธรรมมายาและแอซเท็ก และยังเคยถูกใช้เป็นรูปแบบของสกุลเงิน',
      [Language.ZH]: '可可被玛雅和阿兹特克文明认为是“众神之食”，甚至被用作一种货币形式。',
    },
    why: {
      [Language.EN]: 'It is one of the richest sources of plant-based antioxidants (flavonoids) in the world, which support heart health. It\'s also high in iron, magnesium, and contains compounds that can boost mood and feelings of well-being.',
      [Language.TH]: 'เป็นหนึ่งในแหล่งสารต้านอนุมูลอิสระจากพืช (ฟลาโวนอยด์) ที่อุดมสมบูรณ์ที่สุดในโลก ซึ่งช่วยสนับสนุนสุขภาพหัวใจ นอกจากนี้ยังมีธาตุเหล็ก แมกนีเซียมสูง และมีสารประกอบที่สามารถเพิ่มอารมณ์และความรู้สึกดี',
      [Language.ZH]: '它是世界上最丰富的植物性抗氧化剂（类黄酮）来源之一，支持心脏健康。它还富含铁、镁，并含有可以提升情绪和幸福感的化合物。',
    },
    tip: {
      [Language.EN]: 'Pair cacao powder with sweet fruits like banana or dates to balance its natural bitterness. For a crunchy texture, add cacao nibs. It\'s delicious with almond butter and milk.',
      [Language.TH]: 'จับคู่ผงคาเคากับผลไม้หวานเช่น กล้วยหรืออินทผลัมเพื่อปรับสมดุลความขมตามธรรมชาติ หากต้องการเนื้อสัมผัสที่กรุบกรอบ ให้เพิ่มคาเคานิบส์ มันอร่อยเมื่อทานกับเนยอัลมอนด์และนม',
      [Language.ZH]: '将可可粉与香蕉或枣等甜味水果搭配，以平衡其天然的苦味。想要嘎吱嘎吱的口感，可以添加可可碎粒。它与杏仁酱和牛奶搭配非常美味。',
    },
  },
  {
    id: 'cherries',
    type: 'fruit',
    image: 'https://i.postimg.cc/sftfKJG6/juice-me-image-place-holder-and-background-decorative-0014.jpg',
    title: {
      [Language.EN]: 'The Recovery Gem: Cherries',
      [Language.TH]: 'อัญมณีแห่งการฟื้นฟู: เชอร์รี่',
      [Language.ZH]: '恢复宝石：樱桃',
    },
    description: {
      [Language.EN]: 'Both sweet and tart cherries are vibrant, flavorful fruits that pack a serious nutritional punch. Their deep red color is a clue to their rich antioxidant content.',
      [Language.TH]: 'ทั้งเชอร์รี่หวานและเปรี้ยวเป็นผลไม้ที่มีสีสันสดใสและรสชาติจัดจ้านซึ่งมีคุณค่าทางโภชนาการสูง สีแดงเข้มของมันเป็นเครื่องบ่งชี้ถึงปริมาณสารต้านอนุมูลอิสระที่อุดมสมบูรณ์',
      [Language.ZH]: '甜樱桃和酸樱桃都是充满活力、味道鲜美的水果，营养价值极高。它们深红色的外表是其丰富抗氧化剂含量的线索。',
    },
    fact: {
      [Language.EN]: 'Tart cherries contain natural melatonin, the hormone that helps regulate sleep-wake cycles, making them a potential natural sleep aid.',
      [Language.TH]: 'เชอร์รี่เปรี้ยวมีเมลาโทนินตามธรรมชาติ ซึ่งเป็นฮอร์โมนที่ช่วยควบคุมวงจรการนอนหลับและการตื่น ทำให้เป็นตัวช่วยในการนอนหลับตามธรรมชาติที่มีศักยภาพ',
      [Language.ZH]: '酸樱桃含有天然的褪黑激素，这是一种有助于调节睡眠-觉醒周期的激素，使其成为潜在的天然助眠剂。',
    },
    why: {
      [Language.EN]: 'Cherries are loaded with anthocyanins, powerful antioxidants with strong anti-inflammatory properties. They are prized by athletes for their ability to speed up muscle recovery and reduce soreness after exercise.',
      [Language.TH]: 'เชอร์รี่เต็มไปด้วยแอนโทไซยานิน ซึ่งเป็นสารต้านอนุมูลอิสระที่มีประสิทธิภาพพร้อมคุณสมบัติต้านการอักเสบที่แข็งแกร่ง นักกีฬาชื่นชอบในความสามารถในการเร่งการฟื้นตัวของกล้ามเนื้อและลดอาการปวดหลังการออกกำลังกาย',
      [Language.ZH]: '樱桃富含花青素，这是一种具有强大抗炎特性的强效抗氧化剂。它们因能够加速肌肉恢复和减轻运动后酸痛而备受运动员青睐。',
    },
    tip: {
      [Language.EN]: 'Use frozen, pitted cherries for a thick, cold smoothie. Tart cherry juice can also be used as a liquid base for its concentrated benefits. They pair wonderfully with cacao, vanilla, and banana.',
      [Language.TH]: 'ใช้เชอร์รี่แช่แข็งที่ไม่มีเมล็ดเพื่อให้ได้สมูทตี้ที่ข้นและเย็น น้ำเชอร์รี่เปรี้ยวยังสามารถใช้เป็นของเหลวพื้นฐานเพื่อประโยชน์ที่เข้มข้น เข้ากันได้ดีกับคาเคา วานิลลา และกล้วย',
      [Language.ZH]: '使用冷冻、去核的樱桃制作浓稠、冰冷的冰沙。酸樱桃汁也可以用作液体基底，以获得其浓缩的益处。它们与可可、香草和香蕉搭配得非常好。',
    },
  },
  {
    id: 'cranberries',
    type: 'fruit',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Tart Protector: Cranberries',
      [Language.TH]: 'ผู้พิทักษ์รสเปรี้ยว: แครนเบอร์รี่',
      [Language.ZH]: '酸味保护者：蔓越莓',
    },
    description: {
      [Language.EN]: 'These small, tart, red berries are famous for their role in holiday meals, but their benefits are year-round. Their sharp flavor adds a zing to smoothies that cuts through sweetness.',
      [Language.TH]: 'เบอร์รี่สีแดงเล็กๆ รสเปรี้ยวเหล่านี้มีชื่อเสียงในเรื่องบทบาทในมื้ออาหารช่วงวันหยุด แต่ประโยชน์ของมันมีตลอดทั้งปี รสชาติที่แหลมคมของมันช่วยเพิ่มความซ่าให้กับสมูทตี้ที่ตัดความหวานได้ดี',
      [Language.ZH]: '这些小而酸的红色浆果因其在节日餐中的作用而闻名，但它们的好处是全年性的。它们尖锐的味道为冰沙增添了一丝活力，可以中和甜味。',
    },
    fact: {
      [Language.EN]: 'Cranberries have small air pockets inside, which is why they float in water. This property is used by farmers to help harvest them.',
      [Language.TH]: 'แครนเบอร์รี่มีช่องอากาศเล็กๆ อยู่ข้างใน ซึ่งเป็นเหตุผลว่าทำไมมันถึงลอยน้ำได้ คุณสมบัตินี้ถูกใช้โดยเกษตรกรเพื่อช่วยในการเก็บเกี่ยว',
      [Language.ZH]: '蔓越莓内部有小气囊，这就是它们能浮在水面上的原因。农民利用这一特性来帮助收割。',
    },
    why: {
      [Language.EN]: 'They are best known for their high concentration of proanthocyanidins (PACs), which help prevent certain bacteria from sticking to the urinary tract walls, supporting urinary health. They are also a great source of Vitamin C.',
      [Language.TH]: 'เป็นที่รู้จักกันดีในเรื่องความเข้มข้นสูงของโปรแอนโธไซยานิดิน (PACs) ซึ่งช่วยป้องกันไม่ให้แบคทีเรียบางชนิดเกาะติดกับผนังทางเดินปัสสาวะ ซึ่งสนับสนุนสุขภาพทางเดินปัสสาวะ นอกจากนี้ยังเป็นแหล่งวิตามินซีที่ดีเยี่ยม',
      [Language.ZH]: '它们以其高浓度的原花青素（PACs）而闻名，有助于防止某些细菌附着在尿道壁上，从而支持泌尿系统健康。它们也是维生素C的重要来源。',
    },
    tip: {
      [Language.EN]: 'Fresh or frozen cranberries are very tart. Balance their flavor with a sweet fruit like banana, apple, or orange. A little maple syrup or a date can also help.',
      [Language.TH]: 'แครนเบอร์รี่สดหรือแช่แข็งมีรสเปรี้ยวมาก ปรับสมดุลรสชาติด้วยผลไม้หวานเช่น กล้วย แอปเปิ้ล หรือส้ม น้ำเชื่อมเมเปิ้ลเล็กน้อยหรืออินทผลัมก็ช่วยได้เช่นกัน',
      [Language.ZH]: '新鲜或冷冻的蔓越莓非常酸。用香蕉、苹果或橙子等甜味水果来平衡它们的味道。少许枫糖浆或一颗枣子也有帮助。',
    },
  },
  {
    id: 'dates',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'Nature\'s Caramel: Dates',
      [Language.TH]: 'คาราเมลแห่งธรรมชาติ: อินทผลัม',
      [Language.ZH]: '大自然的焦糖：枣子',
    },
    description: {
      [Language.EN]: 'Dates are the fruit of the date palm tree and have a sweet, caramel-like flavor and a soft, chewy texture. They are an excellent natural sweetener for smoothies, replacing the need for refined sugar.',
      [Language.TH]: 'อินทผลัมเป็นผลของต้นปาล์มอินทผลัมและมีรสหวานเหมือนคาราเมลและเนื้อสัมผัสที่นุ่มและหนึบ เป็นสารให้ความหวานตามธรรมชาติที่ยอดเยี่ยมสำหรับสมูทตี้ แทนที่ความจำเป็นในการใช้น้ำตาลทรายขาว',
      [Language.ZH]: '枣子是枣椰树的果实，具有甜美的、类似焦糖的风味和柔软、耐嚼的质地。它们是冰沙的极佳天然甜味剂，取代了精制糖的需求。',
    },
    fact: {
      [Language.EN]: 'Dates have been cultivated in the Middle East for thousands of years and are one of the sweetest fruits in the world.',
      [Language.TH]: 'อินทผลัมถูกเพาะปลูกในตะวันออกกลางมานานหลายพันปีและเป็นหนึ่งในผลไม้ที่หวานที่สุดในโลก',
      [Language.ZH]: '枣子在中东已经种植了数千年，是世界上最甜的水果之一。',
    },
    why: {
      [Language.EN]: 'They are a great source of energy and are packed with dietary fiber, which aids digestion. They also provide key minerals like potassium, magnesium, and copper.',
      [Language.TH]: 'เป็นแหล่งพลังงานที่ดีเยี่ยมและเต็มไปด้วยใยอาหารซึ่งช่วยในการย่อยอาหาร นอกจากนี้ยังให้แร่ธาตุที่สำคัญเช่น โพแทสเซียม แมกนีเซียม และทองแดง',
      [Language.ZH]: '它们是能量的重要来源，富含膳食纤维，有助于消化。它们还提供钾、镁和铜等关键矿物质。',
    },
    tip: {
      [Language.EN]: 'Use Medjool dates for the best flavor and texture. Always remember to remove the pit before blending! Soak them in warm water for 10 minutes if they are dry to help them blend more easily.',
      [Language.TH]: 'ใช้อินทผลัมพันธุ์เมดจูลเพื่อให้ได้รสชาติและเนื้อสัมผัสที่ดีที่สุด อย่าลืมเอาเม็ดออกก่อนปั่นเสมอ! แช่ในน้ำอุ่น 10 นาทีหากแห้งเกินไปเพื่อช่วยให้ปั่นง่ายขึ้น',
      [Language.ZH]: '使用Medjool枣以获得最佳风味和质地。搅拌前务必记得去核！如果它们很干，可以在温水中浸泡10分钟，以帮助它们更容易混合。',
    },
  },
  {
    id: 'cinnamon',
    type: 'vegetable',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Warming Spice: Cinnamon',
      [Language.TH]: 'เครื่องเทศให้ความอบอุ่น: อบเชย',
      [Language.ZH]: '暖身香料：肉桂',
    },
    description: {
      [Language.EN]: 'One of the most popular spices in the world, cinnamon has a sweet, warm, and comforting aroma and flavor. A dash of cinnamon can add complexity and a feeling of warmth to any smoothie.',
      [Language.TH]: 'หนึ่งในเครื่องเทศที่นิยมมากที่สุดในโลก อบเชยมีกลิ่นหอมและรสชาติที่หวาน อบอุ่น และปลอบโยน อบเชยเพียงเล็กน้อยสามารถเพิ่มความซับซ้อนและความรู้สึกอบอุ่นให้กับสมูทตี้ใดๆ',
      [Language.ZH]: '作为世界上最受欢迎的香料之一，肉桂具有甜美、温暖和舒适的香气和味道。一小撮肉桂可以为任何冰沙增添复杂性和温暖的感觉。',
    },
    fact: {
      [Language.EN]: 'True cinnamon, known as Ceylon cinnamon, is different from the more common Cassia cinnamon and has a more delicate flavor.',
      [Language.TH]: 'อบเชยแท้ที่เรียกว่าอบเชยซีลอนนั้นแตกต่างจากอบเชยจีนที่พบได้บ่อยกว่าและมีรสชาติที่ละเอียดอ่อนกว่า',
      [Language.ZH]: '真正的肉桂，称为锡兰肉桂，与更常见的肉桂（决明子肉桂）不同，味道更细腻。',
    },
    why: {
      [Language.EN]: 'Cinnamon is loaded with powerful antioxidants and has potent anti-inflammatory properties. It is well-studied for its ability to help lower blood sugar levels and improve insulin sensitivity.',
      [Language.TH]: 'อบเชยเต็มไปด้วยสารต้านอนุมูลอิสระที่มีประสิทธิภาพและมีคุณสมบัติต้านการอักเสบที่แข็งแกร่ง ได้รับการศึกษาอย่างดีในด้านความสามารถในการช่วยลดระดับน้ำตาลในเลือดและปรับปรุงความไวของอินซูลิน',
      [Language.ZH]: '肉桂富含强大的抗氧化剂，并具有强大的抗炎特性。它因其有助于降低血糖水平和改善胰岛素敏感性的能力而得到充分研究。',
    },
    tip: {
      [Language.EN]: 'A little goes a long way. Start with 1/4 to 1/2 teaspoon. It\'s a classic pairing with apple, pear, sweet potato, and banana, and it makes any smoothie taste like a dessert.',
      [Language.TH]: 'ใช้น้อยแต่ได้ผลมาก เริ่มต้นด้วย 1/4 ถึง 1/2 ช้อนชา เป็นการจับคู่แบบคลาสสิกกับแอปเปิ้ล สาลี่ มันเทศ และกล้วย และทำให้สมูทตี้ทุกชนิดมีรสชาติเหมือนของหวาน',
      [Language.ZH]: '一点点就够了。从1/4到1/2茶匙开始。它与苹果、梨、红薯和香蕉是经典搭配，让任何冰沙都尝起来像甜点。',
    },
  },
  {
    id: 'quinoa',
    type: 'vegetable',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Complete Protein Seed: Quinoa',
      [Language.TH]: 'เมล็ดโปรตีนสมบูรณ์: คีนัว',
      [Language.ZH]: '完整蛋白质种子：藜麦',
    },
    description: {
      [Language.EN]: "Often mistaken for a grain, quinoa is actually a seed prized for being one of the few plant foods that contains all nine essential amino acids. Its mild, nutty flavor makes it a versatile ingredient.",
      [Language.TH]: 'มักถูกเข้าใจผิดว่าเป็นธัญพืช แต่จริงๆ แล้วคีนัวคือเมล็ดพืชที่ได้รับคำชมว่าเป็นหนึ่งในอาหารจากพืชไม่กี่ชนิดที่มีกรดอะมิโนจำเป็นครบทั้ง 9 ชนิด รสชาติอ่อนๆ คล้ายถั่วทำให้เป็นส่วนผสมที่หลากหลาย',
      [Language.ZH]: '藜麦常被误认为是一种谷物，但它实际上是一种种子，因其是少数含有全部九种必需氨基酸的植物性食物之一而备受珍视。其温和的坚果风味使其成为一种多功能配料。',
    },
    fact: {
      [Language.EN]: 'NASA scientists have considered quinoa as a potential crop to be grown in outer space on long-duration missions due to its high nutritional content and ease of growth.',
      [Language.TH]: 'นักวิทยาศาสตร์ของนาซ่าเคยพิจารณาคีนัวเป็นพืชที่มีศักยภาพในการปลูกในอวกาศในภารกิจระยะยาว เนื่องจากมีคุณค่าทางโภชนาการสูงและเติบโตง่าย',
      [Language.ZH]: '由于其高营养含量和易于生长，NASA的科学家曾考虑将藜麦作为长期太空任务中可能种植的作物。',
    },
    why: {
      [Language.EN]: "It's a powerhouse of protein, fiber, manganese, and magnesium. Its high fiber content aids digestion and helps maintain stable blood sugar levels, making it great for sustained energy.",
      [Language.TH]: 'เป็นขุมพลังของโปรตีน ไฟเบอร์ แมงกานีส และแมกนีเซียม ปริมาณไฟเบอร์สูงช่วยในการย่อยอาหารและช่วยรักษาระดับน้ำตาลในเลือดให้คงที่ ทำให้เหมาะสำหรับพลังงานที่ยั่งยืน',
      [Language.ZH]: '它是蛋白质、纤维、锰和镁的动力源。其高纤维含量有助于消化并帮助维持稳定的血糖水平，非常适合持续提供能量。',
    },
    tip: {
      [Language.EN]: 'Always rinse quinoa thoroughly before cooking to remove its natural bitter coating. Cooked and cooled quinoa can be added to smoothies for a protein and fiber boost without altering the flavor much.',
      [Language.TH]: 'ควรล้างคีนัวให้สะอาดทุกครั้งก่อนปรุงอาหารเพื่อขจัดสารเคลือบที่มีรสขมตามธรรมชาติ คีนัวที่ปรุงสุกและเย็นแล้วสามารถเติมลงในสมูทตี้เพื่อเพิ่มโปรตีนและไฟเบอร์โดยไม่เปลี่ยนรสชาติมากนัก',
      [Language.ZH]: '烹饪前务必彻底冲洗藜麦，以去除其天然的苦味涂层。煮熟并冷却的藜麦可以添加到冰沙中，以增加蛋白质和纤维，而不会太大改变风味。',
    },
  },
  {
    id: 'almonds',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Nutrient-Dense Nut: Almonds',
      [Language.TH]: 'ถั่วเปี่ยมคุณค่า: อัลมอนด์',
      [Language.ZH]: '营养密集的坚果：杏仁',
    },
    description: {
      [Language.EN]: 'Almonds are incredibly popular tree nuts. They are highly nutritious and rich in healthy fats, antioxidants, vitamins, and minerals. They add a creamy texture and nutty flavor to smoothies, especially as almond butter or milk.',
      [Language.TH]: 'อัลมอนด์เป็นถั่วต้นไม้ที่ได้รับความนิยมอย่างไม่น่าเชื่อ มีคุณค่าทางโภชนาการสูงและอุดมไปด้วยไขมันดี สารต้านอนุมูลอิสระ วิตามิน และแร่ธาตุ ช่วยเพิ่มเนื้อสัมผัสที่เนียนนุ่มและรสชาติคล้ายถั่วให้กับสมูทตี้ โดยเฉพาะในรูปของเนยอัลมอนด์หรือนมอัลมอนด์',
      [Language.ZH]: '杏仁是非常受欢迎的树生坚果。它们营养丰富，富含健康脂肪、抗氧化剂、维生素和矿物质。它们为冰沙增添了奶油般的质地和坚果风味，尤其是作为杏仁酱或杏仁奶时。',
    },
    fact: {
      [Language.EN]: 'The almond is technically a "drupe," not a true nut. It is the seed of the fruit of the almond tree, which is a close relative of the peach and cherry tree.',
      [Language.TH]: 'ตามหลักพฤกษศาสตร์ อัลมอนด์เป็น "ผลที่มีเมล็ดแข็ง" ไม่ใช่ถั่วแท้ เป็นเมล็ดของผลจากต้นอัลมอนด์ ซึ่งเป็นญาติใกล้ชิดกับต้นพีชและต้นเชอร์รี่',
      [Language.ZH]: '从技术上讲，杏仁是一种“核果”，而不是真正的坚果。它是杏树果实的种子，杏树是桃树和樱桃树的近亲。',
    },
    why: {
      [Language.EN]: 'They are loaded with antioxidants and are one of the world\'s best sources of Vitamin E, which supports skin health. They are also high in magnesium, a mineral that many people don\'t get enough of, which is vital for blood sugar control.',
      [Language.TH]: 'เต็มไปด้วยสารต้านอนุมูลอิสระและเป็นหนึ่งในแหล่งวิตามินอีที่ดีที่สุดในโลกซึ่งช่วยบำรุงผิว นอกจากนี้ยังมีแมกนีเซียมสูง ซึ่งเป็นแร่ธาตุที่หลายคนได้รับไม่เพียงพอและมีความสำคัญต่อการควบคุมระดับน้ำตาลในเลือด',
      [Language.ZH]: '它们富含抗氧化剂，是世界上最好的维生素E来源之一，有助于皮肤健康。它们还富含镁，这是许多人摄入不足的一种矿物质，对控制血糖至关重要。',
    },
    tip: {
      [Language.EN]: 'Use almond butter for an easy way to add creaminess and flavor. A tablespoon is usually enough. Soaking whole almonds overnight makes them easier to blend into a smooth consistency.',
      [Language.TH]: 'ใช้เนยอัลมอนด์เป็นวิธีง่ายๆ ในการเพิ่มความเนียนและรสชาติ โดยปกติหนึ่งช้อนโต๊ะก็เพียงพอแล้ว การแช่อัลมอนด์ทั้งเม็ดข้ามคืนจะทำให้ปั่นได้เนื้อเนียนละเอียดง่ายขึ้น',
      [Language.ZH]: '使用杏仁酱是增加奶油质感和风味的简单方法。一汤匙通常就足够了。将整颗杏仁浸泡过夜，可以使它们更容易搅打成顺滑的稠度。',
    },
  },
  {
    id: 'walnuts',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Brain-Boosting Nut: Walnuts',
      [Language.TH]: 'ถั่วบำรุงสมอง: วอลนัท',
      [Language.ZH]: '健脑坚果：核桃',
    },
    description: {
      [Language.EN]: 'Famous for their unique brain-like appearance, walnuts are exceptionally nutritious. They have a higher antioxidant and omega-3 fat content than any other common nut, making them a true superfood for brain and heart health.',
      [Language.TH]: 'วอลนัทมีชื่อเสียงในด้านลักษณะที่คล้ายสมองที่เป็นเอกลักษณ์และมีคุณค่าทางโภชนาการสูงเป็นพิเศษ มีสารต้านอนุมูลอิสระและไขมันโอเมก้า 3 สูงกว่าถั่วทั่วไปชนิดอื่นๆ ทำให้เป็นสุดยอดอาหารสำหรับสุขภาพสมองและหัวใจอย่างแท้จริง',
      [Language.ZH]: '核桃以其独特的类似大脑的外观而闻名，营养极其丰富。它们比任何其他常见坚果含有更高的抗氧化剂和欧米茄-3脂肪，使其成为真正的健脑和心脏健康的超级食品。',
    },
    fact: {
      [Language.EN]: 'Walnuts are one of the oldest tree foods known to man, dating back to 7000 B.C.',
      [Language.TH]: 'วอลนัทเป็นหนึ่งในอาหารจากต้นไม้ที่เก่าแก่ที่สุดที่มนุษย์รู้จัก ย้อนหลังไปถึง 7000 ปีก่อนคริสตกาล',
      [Language.ZH]: '核桃是人类已知的最古老的树生食物之一，可追溯到公元前7000年。',
    },
    why: {
      [Language.EN]: 'They are a fantastic source of plant-based omega-3 alpha-linolenic acid (ALA), which is crucial for reducing inflammation and supporting brain function. They also provide protein, fiber, and various minerals.',
      [Language.TH]: 'เป็นแหล่งกรดไขมันโอเมก้า 3 อัลฟ่า-ไลโนเลนิก (ALA) จากพืชที่ยอดเยี่ยม ซึ่งมีความสำคัญต่อการลดการอักเสบและสนับสนุนการทำงานของสมอง นอกจากนี้ยังให้โปรตีน ไฟเบอร์ และแร่ธาตุต่างๆ',
      [Language.ZH]: '它们是植物性欧米茄-3 α-亚麻酸（ALA）的绝佳来源，对于减少炎症和支持大脑功能至关重要。它们还提供蛋白质、纤维和各种矿物质。',
    },
    tip: {
      [Language.EN]: 'Walnuts have a slightly bitter skin. To reduce this, you can soak them in water for a few hours and then peel them. Add a few to a smoothie with banana and dates for a nutritious boost.',
      [Language.TH]: 'วอลนัทมีเปลือกที่ขมเล็กน้อย เพื่อลดความขมนี้ คุณสามารถแช่น้ำไว้สองสามชั่วโมงแล้วลอกเปลือกออกได้ เติมวอลนัทสองสามเม็ดลงในสมูทตี้กับกล้วยและอินทผลัมเพื่อเพิ่มคุณค่าทางโภชนาการ',
      [Language.ZH]: '核桃的表皮略带苦味。为了减少苦味，您可以将它们在水中浸泡几个小时然后去皮。在冰沙中加入几颗核桃、香蕉和枣子，可以增加营养。',
    },
  },
  {
    id: 'broccoli',
    type: 'vegetable',
    image: 'https://i.postimg.cc/25crWdfx/juice-me-image-place-holder-and-background-decorative-0010.jpg',
    title: {
      [Language.EN]: 'The Green Protector: Broccoli',
      [Language.TH]: 'ผู้พิทักษ์สีเขียว: บรอกโคลี',
      [Language.ZH]: '绿色保护者：西兰花',
    },
    description: {
      [Language.EN]: 'This cruciferous vegetable is a nutritional powerhouse, known for its dense clusters of green florets. It\'s packed with vitamins, minerals, fiber, and antioxidants that support overall health.',
      [Language.TH]: 'ผักตระกูลกะหล่ำนี้เป็นขุมพลังทางโภชนาการ เป็นที่รู้จักจากช่อดอกสีเขียวหนาแน่น เต็มไปด้วยวิตามิน แร่ธาตุ ไฟเบอร์ และสารต้านอนุมูลอิสระที่สนับสนุนสุขภาพโดยรวม',
      [Language.ZH]: '这种十字花科蔬菜是营养的动力源，以其密集的绿色小花而闻名。它富含维生素、矿物质、纤维和抗氧化剂，支持整体健康。',
    },
    fact: {
      [Language.EN]: 'Broccoli is a man-made vegetable, cultivated from a wild cabbage plant in the Mediterranean over 2,000 years ago.',
      [Language.TH]: 'บรอกโคลีเป็นผักที่มนุษย์สร้างขึ้น โดยได้รับการเพาะปลูกจากต้นกะหล่ำป่าในแถบเมดิเตอร์เรเนียนเมื่อกว่า 2,000 ปีที่แล้ว',
      [Language.ZH]: '西兰花是一种人造蔬菜，是2000多年前在地中海地区从野生卷心菜培育而来的。',
    },
    why: {
      [Language.EN]: 'It is exceptionally high in Vitamin C (a single cup has as much as an orange) and Vitamin K. It also contains sulforaphane, a potent compound studied for its cancer-fighting properties and detoxification support.',
      [Language.TH]: 'มีวิตามินซีสูงเป็นพิเศษ (หนึ่งถ้วยมีปริมาณเท่ากับส้มหนึ่งลูก) และวิตามินเค นอกจากนี้ยังมีซัลโฟราเฟน ซึ่งเป็นสารประกอบที่มีศักยภาพที่ศึกษาเกี่ยวกับคุณสมบัติต่อต้านมะเร็งและการสนับสนุนการล้างพิษ',
      [Language.ZH]: '它富含维生素C（一杯的含量与一个橙子相当）和维生素K。它还含有萝卜硫素，这是一种因其抗癌特性和支持排毒而受到研究的强效化合物。',
    },
    tip: {
      [Language.EN]: 'To use in smoothies, it\'s best to use frozen broccoli florets. This masks the strong flavor and creates a creamy texture. Pair it with sweet fruits like pineapple or mango to balance the taste.',
      [Language.TH]: 'ในการใช้ทำสมูทตี้ ควรใช้ดอกบรอกโคลีแช่แข็งจะดีที่สุด ซึ่งจะช่วยกลบรสชาติที่แรงและสร้างเนื้อสัมผัสที่เนียนนุ่ม จับคู่กับผลไม้รสหวาน เช่น สับปะรดหรือมะม่วงเพื่อปรับสมดุลรสชาติ',
      [Language.ZH]: '在冰沙中使用时，最好使用冷冻的西兰花小花。这可以掩盖其强烈的味道并创造出奶油般的质地。搭配菠萝或芒果等甜味水果来平衡味道。',
    },
  },
  {
    id: 'cauliflower',
    type: 'vegetable',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Creamy Camouflage: Cauliflower',
      [Language.TH]: 'ครีมมี่พรางตัว: กะหล่ำดอก',
      [Language.ZH]: '奶油伪装者：花椰菜',
    },
    description: {
      [Language.EN]: 'This versatile vegetable has a mild flavor that makes it a perfect secret ingredient in smoothies. It adds incredible creaminess, thickness, and a boost of nutrients without affecting the color or sweet taste.',
      [Language.TH]: 'ผักอเนกประสงค์นี้มีรสชาติอ่อนๆ ทำให้เป็นส่วนผสมลับที่สมบูรณ์แบบในสมูทตี้ ช่วยเพิ่มความเนียน ความข้น และสารอาหารโดยไม่กระทบต่อสีหรือรสชาติหวาน',
      [Language.ZH]: '这种多功能蔬菜味道温和，是冰沙中完美的秘密配料。它能增加令人难以置信的奶油质感、稠度和营养，而不会影响颜色或甜味。',
    },
    fact: {
      [Language.EN]: 'Though typically white, cauliflower also comes in other colors like orange, purple, and green. The purple variety is rich in the same antioxidant found in red wine and berries.',
      [Language.TH]: 'แม้ว่าโดยทั่วไปจะเป็นสีขาว แต่กะหล่ำดอกยังมีสีอื่นๆ เช่น สีส้ม สีม่วง และสีเขียว พันธุ์สีม่วงอุดมไปด้วยสารต้านอนุมูลอิสระชนิดเดียวกับที่พบในไวน์แดงและเบอร์รี่',
      [Language.ZH]: '虽然通常是白色的，但花椰菜也有橙色、紫色和绿色等其他颜色。紫色品种富含与红酒和浆果中相同的抗氧化剂。',
    },
    why: {
      [Language.EN]: 'Like broccoli, it\'s high in Vitamin C, Vitamin K, and fiber. It\'s also a good source of choline, a nutrient that is important for learning and memory. It provides these benefits with very few calories.',
      [Language.TH]: 'เช่นเดียวกับบรอกโคลี มันมีวิตามินซี วิตามินเค และไฟเบอร์สูง นอกจากนี้ยังเป็นแหล่งโคลีนที่ดี ซึ่งเป็นสารอาหารที่สำคัญต่อการเรียนรู้และความจำ ให้ประโยชน์เหล่านี้โดยมีแคลอรี่น้อยมาก',
      [Language.ZH]: '像西兰花一样，它富含维生素C、维生素K和纤维。它也是胆碱的良好来源，胆碱是学习和记忆的重要营养素。它以极低的热量提供这些好处。',
    },
    tip: {
      [Language.EN]: 'For the best results, use pre-steamed and then frozen cauliflower florets. This makes them easier to digest and creates a super thick, ice cream-like texture in smoothies. You won\'t even taste it!',
      [Language.TH]: 'เพื่อให้ได้ผลลัพธ์ที่ดีที่สุด ให้ใช้ดอกกะหล่ำที่นึ่งก่อนแล้วนำไปแช่แข็ง ซึ่งจะทำให้ย่อยง่ายขึ้นและสร้างเนื้อสัมผัสที่ข้นมากเหมือนไอศกรีมในสมูทตี้ คุณจะไม่ได้รสชาติของมันเลย!',
      [Language.ZH]: '为获得最佳效果，请使用预先蒸熟然后冷冻的花椰菜小花。这使它们更容易消化，并在冰沙中创造出超级浓稠、类似冰淇淋的质地。你甚至尝不出它的味道！',
    },
  },
  {
    id: 'bell_peppers',
    type: 'vegetable',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Vitamin C Star: Red Bell Pepper',
      [Language.TH]: 'ดาวเด่นวิตามินซี: พริกหยวกแดง',
      [Language.ZH]: '维生素C之星：红甜椒',
    },
    description: {
      [Language.EN]: 'Crisp, sweet, and incredibly vibrant, red bell peppers are the fully ripened version of green bell peppers. They offer a mild, sweet flavor that can add a refreshing and nutrient-dense element to juices.',
      [Language.TH]: 'พริกหยวกแดงกรอบ หวาน และมีสีสันสดใสอย่างไม่น่าเชื่อ เป็นพริกหยวกเขียวที่สุกเต็มที่ มีรสชาติอ่อนหวานที่สามารถเพิ่มความสดชื่นและคุณค่าทางอาหารให้กับน้ำผลไม้ได้',
      [Language.ZH]: '红甜椒清脆、甜美且色彩鲜艳，是完全成熟的青椒。它们提供温和、甜美的味道，可以为果汁增添清爽和营养丰富的元素。',
    },
    fact: {
      [Language.EN]: 'Red bell peppers contain more than twice the Vitamin C of an orange and are also packed with Vitamin A.',
      [Language.TH]: 'พริกหยวกแดงมีวิตามินซีมากกว่าส้มถึงสองเท่าและยังเต็มไปด้วยวิตามินเออีกด้วย',
      [Language.ZH]: '红甜椒的维生素C含量是橙子的两倍以上，并且富含维生素A。',
    },
    why: {
      [Language.EN]: 'They are an outstanding source of Vitamin C, which is essential for immune function and skin health. They also provide antioxidants like capsanthin, which is responsible for their brilliant red color and has powerful anti-inflammatory properties.',
      [Language.TH]: 'เป็นแหล่งวิตามินซีที่โดดเด่น ซึ่งจำเป็นต่อการทำงานของระบบภูมิคุ้มกันและสุขภาพผิว นอกจากนี้ยังมีสารต้านอนุมูลอิสระเช่นแคปแซนทิน ซึ่งรับผิดชอบสีแดงสดและมีคุณสมบัติต้านการอักเสบที่ทรงพลัง',
      [Language.ZH]: '它们是维生素C的杰出来源，对免疫功能和皮肤健康至关重要。它们还提供辣椒红素等抗氧化剂，这赋予了它们鲜艳的红色并具有强大的抗炎特性。',
    },
    tip: {
      [Language.EN]: 'In juices, red bell pepper pairs surprisingly well with fruits like strawberry, watermelon, and apple. The sweetness of the fruit balances the pepper\'s slight vegetal note.',
      [Language.TH]: 'ในน้ำผลไม้ พริกหยวกแดงเข้ากันได้ดีอย่างน่าประหลาดใจกับผลไม้อย่างสตรอว์เบอร์รี แตงโม และแอปเปิ้ล ความหวานของผลไม้จะช่วยปรับสมดุลรสชาติผักเล็กน้อยของพริก',
      [Language.ZH]: '在果汁中，红甜椒与草莓、西瓜和苹果等水果搭配得非常出色。水果的甜味平衡了甜椒的轻微植物味。',
    },
  },
  {
    id: 'tomato',
    type: 'fruit',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Lycopene King: Tomato',
      [Language.TH]: 'ราชาไลโคปีน: มะเขือเทศ',
      [Language.ZH]: '番茄红素之王：番茄',
    },
    description: {
      [Language.EN]: 'Though often used as a vegetable in cooking, the tomato is botanically a fruit. It\'s the major dietary source of the antioxidant lycopene, which has been linked to many health benefits.',
      [Language.TH]: 'แม้ว่ามักจะใช้เป็นผักในการทำอาหาร แต่มะเขือเทศตามหลักพฤกษศาสตร์เป็นผลไม้ เป็นแหล่งอาหารหลักของสารต้านอนุมูลอิสระไลโคปีน ซึ่งเชื่อมโยงกับประโยชน์ต่อสุขภาพมากมาย',
      [Language.ZH]: '虽然在烹饪中常被用作蔬菜，但番茄在植物学上是一种水果。它是抗氧化剂番茄红素的主要膳食来源，与许多健康益处有关。',
    },
    fact: {
      [Language.EN]: 'There are over 10,000 varieties of tomatoes, coming in a wide range of colors including red, yellow, orange, green, and purple.',
      [Language.TH]: 'มีมะเขือเทศกว่า 10,000 สายพันธุ์ ซึ่งมีสีสันหลากหลายทั้งแดง เหลือง ส้ม เขียว และม่วง',
      [Language.ZH]: '番茄有超过10,000个品种，颜色各异，包括红色、黄色、橙色、绿色和紫色。',
    },
    why: {
      [Language.EN]: 'Tomatoes are the champion of lycopene, a powerful antioxidant that supports heart health and may protect against certain types of cancer. They are also a great source of Vitamin C, potassium, and folate.',
      [Language.TH]: 'มะเขือเทศเป็นแชมป์ของไลโคปีน ซึ่งเป็นสารต้านอนุมูลอิสระที่มีประสิทธิภาพซึ่งสนับสนุนสุขภาพหัวใจและอาจป้องกันมะเร็งบางชนิด นอกจากนี้ยังเป็นแหล่งวิตามินซี โพแทสเซียม และโฟเลตที่ดีเยี่ยม',
      [Language.ZH]: '番茄是番茄红素的冠军，这是一种强大的抗氧化剂，支持心脏健康，并可能预防某些类型的癌症。它们也是维生素C、钾和叶酸的绝佳来源。',
    },
    tip: {
      [Language.EN]: 'For a savory juice, blend tomatoes with celery, cucumber, and a hint of lemon and black pepper. Cooking tomatoes actually increases the bioavailability of lycopene!',
      [Language.TH]: 'สำหรับน้ำผลไม้รสเค็ม ให้ปั่นมะเขือเทศกับขึ้นฉ่าย แตงกวา และมะนาวกับพริกไทยดำเล็กน้อย การปรุงมะเขือเทศยังช่วยเพิ่มการดูดซึมไลโคปีนได้อีกด้วย!',
      [Language.ZH]: '制作咸味果汁时，将番茄与芹菜、黄瓜以及少许柠檬和黑胡椒混合。烹饪番茄实际上会增加番茄红素的生物利用度！',
    },
  },
  {
    id: 'pumpkin_seeds',
    type: 'vegetable',
    image: 'https://i.postimg.cc/gk8z76vY/juice-me-image-place-holder-and-background-decorative-0015.jpg',
    title: {
      [Language.EN]: 'The Magnesium Marvel: Pumpkin Seeds',
      [Language.TH]: 'ความมหัศจรรย์แห่งแมกนีเซียม: เมล็ดฟักทอง',
      [Language.ZH]: '镁的奇迹：南瓜籽',
    },
    description: {
      [Language.EN]: 'Also known as pepitas, these flat, green seeds are nutritional gems. They are one of the best natural sources of magnesium, a mineral vital for over 300 biochemical reactions in the body.',
      [Language.TH]: 'หรือที่รู้จักกันในชื่อเปปิตัส เมล็ดแบนสีเขียวเหล่านี้เป็นอัญมณีทางโภชนาการ เป็นหนึ่งในแหล่งแมกนีเซียมธรรมชาติที่ดีที่สุด ซึ่งเป็นแร่ธาตุที่จำเป็นสำหรับปฏิกิริยาชีวเคมีกว่า 300 ชนิดในร่างกาย',
      [Language.ZH]: '南瓜籽，又称“pepitas”，这些扁平的绿色种子是营养的瑰宝。它们是镁的最佳天然来源之一，镁是身体300多种生化反应所必需的矿物质。',
    },
    fact: {
      [Language.EN]: 'Pumpkins and their seeds were a celebrated food among Native American tribes, who treasured them for both their dietary and medicinal properties.',
      [Language.TH]: 'ฟักทองและเมล็ดของมันเป็นอาหารที่ได้รับการยกย่องในหมู่ชนเผ่าพื้นเมืองอเมริกัน ซึ่งให้คุณค่าทั้งในด้านอาหารและสรรพคุณทางยา',
      [Language.ZH]: '南瓜及其种子是美洲原住民部落推崇的食物，他们因其饮食和药用价值而珍视它们。',
    },
    why: {
      [Language.EN]: 'Besides magnesium, they are rich in healthy fats, antioxidants, and zinc, which supports immune function. They also contain tryptophan, which can help promote restful sleep.',
      [Language.TH]: 'นอกจากแมกนีเซียมแล้ว ยังอุดมไปด้วยไขมันดี สารต้านอนุมูลอิสระ และสังกะสี ซึ่งช่วยสนับสนุนการทำงานของระบบภูมิคุ้มกัน นอกจากนี้ยังมีทริปโตเฟนซึ่งสามารถช่วยส่งเสริมการนอนหลับพักผ่อน',
      [Language.ZH]: '除了镁，它们还富含健康脂肪、抗氧化剂和锌，有助于支持免疫功能。它们还含有色氨酸，有助于促进宁静的睡眠。',
    },
    tip: {
      [Language.EN]: 'Use raw, shelled pumpkin seeds. Add a tablespoon or two to your smoothie for a boost of minerals and healthy fats. They pair well with banana, cinnamon, and dates.',
      [Language.TH]: 'ใช้เมล็ดฟักทองดิบที่แกะเปลือกแล้ว เติมหนึ่งหรือสองช้อนโต๊ะลงในสมูทตี้ของคุณเพื่อเพิ่มแร่ธาตุและไขมันดี เข้ากันได้ดีกับกล้วย อบเชย และอินทผลัม',
      [Language.ZH]: '使用生的、去壳的南瓜籽。在您的冰沙中加入一两汤匙，以增加矿物质和健康脂肪。它们与香蕉、肉桂和枣子搭配得很好。',
    },
  },
  {
    id: 'hemp_seeds',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Complete Plant Protein: Hemp Seeds',
      [Language.TH]: 'โปรตีนพืชสมบูรณ์แบบ: เมล็ดกัญชง',
      [Language.ZH]: '完整植物蛋白：火麻仁',
    },
    description: {
      [Language.EN]: 'Also known as hemp hearts, these soft, nutty-flavored seeds are exceptionally nutritious. They are a rare plant-based source of complete protein, containing all the essential amino acids.',
      [Language.TH]: 'หรือที่รู้จักกันในชื่อหัวใจกัญชง เมล็ดที่นุ่มและมีรสคล้ายถั่วเหล่านี้มีคุณค่าทางโภชนาการสูงเป็นพิเศษ เป็นแหล่งโปรตีนสมบูรณ์จากพืชที่หาได้ยากซึ่งมีกรดอะมิโนที่จำเป็นครบถ้วน',
      [Language.ZH]: '火麻仁，又称麻心，这些柔软、带坚果味的种子营养极其丰富。它们是罕见的植物性完整蛋白质来源，含有所有必需氨基酸。',
    },
    fact: {
      [Language.EN]: 'Hemp seeds come from the Cannabis sativa plant, but they contain only trace amounts of THC, the psychoactive compound in marijuana. They will not get you high.',
      [Language.TH]: 'เมล็ดกัญชงมาจากต้น Cannabis sativa แต่มีสาร THC ซึ่งเป็นสารออกฤทธิ์ต่อจิตประสาทในกัญชาในปริมาณที่น้อยมาก มันจะไม่ทำให้คุณเมา',
      [Language.ZH]: '火麻仁来自大麻植物，但它们只含有微量的THC（大麻中的精神活性化合物）。它们不会让你兴奋。',
    },
    why: {
      [Language.EN]: 'They have a perfect 3:1 ratio of omega-6 to omega-3 fatty acids, which is optimal for human health. They are also a great source of protein, Vitamin E, and minerals like phosphorus, potassium, and magnesium.',
      [Language.TH]: 'มีอัตราส่วนของกรดไขมันโอเมก้า 6 ต่อโอเมก้า 3 ที่ 3:1 ซึ่งเหมาะสมที่สุดสำหรับสุขภาพของมนุษย์ นอกจากนี้ยังเป็นแหล่งโปรตีน วิตามินอี และแร่ธาตุต่างๆ เช่น ฟอสฟอรัส โพแทสเซียม และแมกนีเซียม',
      [Language.ZH]: '它们具有完美的3:1的欧米茄-6与欧米茄-3脂肪酸比例，这对人体健康是最佳的。它们也是蛋白质、维生素E以及磷、钾和镁等矿物质的极佳来源。',
    },
    tip: {
      [Language.EN]: 'Add two to three tablespoons of hemp hearts to your smoothie for a significant protein boost. They have a mild flavor and blend easily, adding a creamy texture.',
      [Language.TH]: 'เพิ่มหัวใจกัญชงสองถึงสามช้อนโต๊ะลงในสมูทตี้ของคุณเพื่อเพิ่มโปรตีนอย่างมีนัยสำคัญ มีรสชาติอ่อนๆ และปั่นง่าย เพิ่มเนื้อสัมผัสที่เนียนนุ่ม',
      [Language.ZH]: '在您的冰沙中加入两到三汤匙的麻心，以显著增加蛋白质。它们味道温和，易于混合，增添了奶油般的质地。',
    },
  },
  {
    id: 'maca_root',
    type: 'vegetable',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Andean Energizer: Maca Root',
      [Language.TH]: 'ผู้ปลุกพลังแห่งแอนดีส: รากมาคา',
      [Language.ZH]: '安第斯能量源：玛卡根',
    },
    description: {
      [Language.EN]: 'Grown in the high Andes mountains of Peru, maca is a cruciferous vegetable related to broccoli and cauliflower. It\'s most commonly available as a powder and has an earthy, slightly nutty, butterscotch-like flavor.',
      [Language.TH]: 'มาคาปลูกบนเทือกเขาสูงแอนดีสในเปรู เป็นผักตระกูลกะหล่ำที่เกี่ยวข้องกับบรอกโคลีและกะหล่ำดอก โดยส่วนใหญ่มักมีจำหน่ายในรูปแบบผงและมีรสชาติคล้ายดิน ถั่วเล็กน้อย และบัตเตอร์สก็อตช์',
      [Language.ZH]: '玛卡生长在秘鲁的高安第斯山脉，是一种与西兰花和花椰菜有关的十字花科蔬菜。它最常见的形式是粉末，具有泥土味、微坚果味和类似奶油糖果的味道。',
    },
    fact: {
      [Language.EN]: 'Maca is an adaptogen, which means it helps the body naturally adapt to and resist physical, chemical, and biological stressors.',
      [Language.TH]: 'มาคาเป็นสารปรับสมดุล ซึ่งหมายความว่ามันช่วยให้ร่างกายปรับตัวและต่อต้านความเครียดทางกายภาพ เคมี และชีวภาพได้อย่างเป็นธรรมชาติ',
      [Language.ZH]: '玛卡是一种适应原，这意味着它能帮助身体自然适应和抵抗物理、化学和生物应激源。',
    },
    why: {
      [Language.EN]: 'It is known for its ability to boost energy, stamina, and libido. It is also rich in vitamins and minerals, including Vitamin C, copper, and iron, and contains numerous bioactive plant compounds.',
      [Language.TH]: 'เป็นที่รู้จักในด้านความสามารถในการเพิ่มพลังงาน ความแข็งแกร่ง และความต้องการทางเพศ นอกจากนี้ยังอุดมไปด้วยวิตามินและแร่ธาตุ รวมถึงวิตามินซี ทองแดง และเหล็ก และมีสารประกอบพืชที่ออกฤทธิ์ทางชีวภาพมากมาย',
      [Language.ZH]: '它以其增强能量、耐力和性欲的能力而闻名。它还富含维生素和矿物质，包括维生素C、铜和铁，并含有多种生物活性植物化合物。',
    },
    tip: {
      [Language.EN]: 'Start with a small amount (1 teaspoon) of maca powder in your smoothie, as its flavor can be potent. It pairs well with cacao, banana, nuts, and cinnamon.',
      [Language.TH]: 'เริ่มต้นด้วยผงมาคาปริมาณเล็กน้อย (1 ช้อนชา) ในสมูทตี้ของคุณ เนื่องจากรสชาติของมันอาจแรงได้ เข้ากันได้ดีกับคาเคา กล้วย ถั่ว และอบเชย',
      [Language.ZH]: '从少量（1茶匙）玛卡粉开始加入您的冰沙，因为它的味道可能很浓。它与可可、香蕉、坚果和肉桂搭配得很好。',
    },
  },
  {
    id: 'ashwagandha',
    type: 'vegetable',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Stress-Relief Root: Ashwagandha',
      [Language.TH]: 'รากคลายเครียด: อัชวากันธา (โสมอินเดีย)',
      [Language.ZH]: '减压之根：南非醉茄',
    },
    description: {
      [Language.EN]: 'One of the most important herbs in Ayurveda, ashwagandha is a powerful adaptogen that has been used for over 3,000 years to relieve stress, increase energy levels, and improve concentration.',
      [Language.TH]: 'หนึ่งในสมุนไพรที่สำคัญที่สุดในอายุรเวท อัชวากันธาเป็นสารปรับสมดุลที่มีประสิทธิภาพซึ่งถูกใช้มานานกว่า 3,000 ปีเพื่อบรรเทาความเครียด เพิ่มระดับพลังงาน และปรับปรุงสมาธิ',
      [Language.ZH]: '作为阿育吠陀中最重要的草药之一，南非醉茄是一种强大的适应原，已被用于缓解压力、增加能量水平和提高注意力超过3000年。',
    },
    fact: {
      [Language.EN]: 'The name "ashwagandha" is from the Sanskrit language and is a combination of the word ashva, meaning horse, and gandha, meaning smell, reflecting that the root has a strong, horse-like aroma.',
      [Language.TH]: 'ชื่อ "อัชวากันธา" มาจากภาษาสันสกฤตและเป็นการผสมผสานระหว่างคำว่า อัชวา แปลว่าม้า และ คันธา แปลว่ากลิ่น ซึ่งสะท้อนว่ารากมีกลิ่นแรงคล้ายม้า',
      [Language.ZH]: '“南非醉茄”这个名字来自梵语，是“ashva”（意为马）和“gandha”（意为气味）的组合，反映出其根部具有强烈的、类似马的气味。',
    },
    why: {
      [Language.EN]: 'It is best known for its ability to reduce cortisol levels, the body\'s primary stress hormone. Studies have shown it can reduce symptoms of stress and anxiety, improve brain function, and increase strength.',
      [Language.TH]: 'เป็นที่รู้จักกันดีในด้านความสามารถในการลดระดับคอร์ติซอล ซึ่งเป็นฮอร์โมนความเครียดหลักของร่างกาย การศึกษาแสดงให้เห็นว่าสามารถลดอาการของความเครียดและความวิตกกังวล ปรับปรุงการทำงานของสมอง และเพิ่มความแข็งแรง',
      [Language.ZH]: '它最著名的是其降低皮质醇水平的能力，皮质醇是身体的主要压力荷尔蒙。研究表明，它可以减轻压力和焦虑症状，改善大脑功能，并增加力量。',
    },
    tip: {
      [Language.EN]: 'Ashwagandha powder can be bitter. Start with 1/2 teaspoon in a smoothie and pair it with strong, sweet flavors like chocolate (cacao), banana, dates, and cinnamon to mask the taste.',
      [Language.TH]: 'ผงอัชวากันธาอาจมีรสขม เริ่มต้นด้วย 1/2 ช้อนชาในสมูทตี้และจับคู่กับรสชาติที่เข้มข้นและหวาน เช่น ช็อกโกแลต (คาเคา) กล้วย อินทผลัม และอบเชยเพื่อกลบรสชาติ',
      [Language.ZH]: '南非醉茄粉可能很苦。从1/2茶匙开始加入冰沙，并与巧克力（可可）、香蕉、枣子和肉桂等浓郁甜味搭配以掩盖其味道。',
    },
  },
  {
    id: 'kefir',
    type: 'vegetable',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Probiotic Powerhouse: Kefir',
      [Language.TH]: 'ขุมพลังโปรไบโอติก: คีเฟอร์',
      [Language.ZH]: '益生菌动力源：开菲尔',
    },
    description: {
      [Language.EN]: 'Kefir is a fermented milk drink, similar to a thin yogurt, that is made from "kefir grains". It has a tart, creamy flavor and is a fantastic source of a wide variety of beneficial probiotics.',
      [Language.TH]: 'คีเฟอร์เป็นนมหมักคล้ายโยเกิร์ตชนิดเหลวที่ทำจาก "เมล็ดคีเฟอร์" มีรสเปรี้ยว ครีมมี่ และเป็นแหล่งโปรไบโอติกที่มีประโยชน์หลากหลายชนิดที่ยอดเยี่ยม',
      [Language.ZH]: '开菲尔是一种发酵乳饮料，类似于稀酸奶，由“开菲尔粒”制成。它具有酸爽、奶油般的风味，是多种有益益生菌的绝佳来源。',
    },
    fact: {
      [Language.EN]: 'The word kefir is said to have originated from the Turkish word "keyif," which means "feeling good" after eating.',
      [Language.TH]: 'คำว่าคีเฟอร์กล่าวกันว่ามาจากคำในภาษาตุรกีว่า "keyif" ซึ่งหมายถึง "ความรู้สึกดี" หลังจากรับประทานอาหาร',
      [Language.ZH]: '据说“开菲尔”这个词起源于土耳其语单词“keyif”，意思是吃后“感觉良好”。',
    },
    why: {
      [Language.EN]: 'It is a more potent source of probiotics than yogurt, containing up to 61 different strains of bacteria and yeasts. These probiotics support digestive health, boost the immune system, and may even improve bone health.',
      [Language.TH]: 'เป็นแหล่งโปรไบโอติกที่มีประสิทธิภาพมากกว่าโยเกิร์ต โดยมีแบคทีเรียและยีสต์มากถึง 61 สายพันธุ์ โปรไบโอติกเหล่านี้ช่วยสนับสนุนสุขภาพทางเดินอาหาร เสริมสร้างระบบภูมิคุ้มกัน และอาจช่วยปรับปรุงสุขภาพกระดูก',
      [Language.ZH]: '它是比酸奶更有效的益生菌来源，含有多达61种不同的细菌和酵母菌株。这些益生菌支持消化健康，增强免疫系统，甚至可能改善骨骼健康。',
    },
    tip: {
      [Language.EN]: 'Use plain, unsweetened kefir as a liquid base for your smoothies instead of milk or yogurt. Its natural tartness pairs well with sweet fruits like berries, peaches, and bananas.',
      [Language.TH]: 'ใช้คีเฟอร์ธรรมดาที่ไม่หวานเป็นของเหลวพื้นฐานสำหรับสมูทตี้ของคุณแทนนมหรือโยเกิร์ต ความเปรี้ยวตามธรรมชาติของมันเข้ากันได้ดีกับผลไม้รสหวานเช่นเบอร์รี่ พีช และกล้วย',
      [Language.ZH]: '使用原味、无糖的开菲尔代替牛奶或酸奶作为冰沙的液体基底。其天然的酸味与浆果、桃子和香蕉等甜味水果搭配得很好。',
    },
  },
  {
    id: 'kimchi',
    type: 'vegetable',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Fermented Fire: Kimchi',
      [Language.TH]: 'ไฟหมักดอง: กิมจิ',
      [Language.ZH]: '发酵之火：泡菜',
    },
    description: {
      [Language.EN]: 'A staple in Korean cuisine, kimchi is a traditional side dish of salted and fermented vegetables, most commonly napa cabbage and Korean radishes, with a variety of seasonings including chili powder, scallions, garlic, and ginger.',
      [Language.TH]: 'เป็นอาหารหลักในอาหารเกาหลี กิมจิเป็นเครื่องเคียงแบบดั้งเดิมที่ทำจากผักเค็มและหมัก ซึ่งโดยส่วนใหญ่จะเป็นกะหล่ำปลีและหัวไชเท้าเกาหลี ปรุงรสด้วยเครื่องปรุงหลากหลายชนิดรวมถึงพริกป่น ต้นหอม กระเทียม และขิง',
      [Language.ZH]: '作为韩国料理的主食，泡菜是一种传统的配菜，由盐渍和发酵的蔬菜制成，最常见的是大白菜和韩国萝卜，配以各种调味料，包括辣椒粉、葱、大蒜和姜。',
    },
    fact: {
      [Language.EN]: 'There are hundreds of varieties of kimchi made with different vegetables as the main ingredients.',
      [Language.TH]: 'มีกิมจิหลายร้อยชนิดที่ทำจากผักต่างๆ เป็นส่วนผสมหลัก',
      [Language.ZH]: '泡菜有数百种，以不同的蔬菜为主要成分。',
    },
    why: {
      [Language.EN]: 'As a fermented food, kimchi is an excellent source of probiotics which support a healthy gut microbiome. It is also nutrient-dense, containing high levels of Vitamin K, Vitamin C, and various antioxidants.',
      [Language.TH]: 'ในฐานะอาหารหมักดอง กิมจิเป็นแหล่งโปรไบโอติกที่ดีเยี่ยมซึ่งสนับสนุนจุลินทรีย์ในลำไส้ที่แข็งแรง นอกจากนี้ยังมีสารอาหารหนาแน่นสูง มีวิตามินเค วิตามินซี และสารต้านอนุมูลอิสระต่างๆ ในระดับสูง',
      [Language.ZH]: '作为一种发酵食品，泡菜是支持健康肠道微生物群的益生菌的极佳来源。它还营养密集，含有高水平的维生素K、维生素C和各种抗氧化剂。',
    },
    tip: {
      [Language.EN]: 'While not for a typical sweet smoothie, the juice from kimchi (kimchi brine) can be used to create a savory, spicy, and probiotic-rich "juice shot" or blended with tomato for a Korean-style Bloody Mary.',
      [Language.TH]: 'แม้ว่าจะไม่เหมาะสำหรับสมูทตี้หวานทั่วไป แต่น้ำจากกิมจิ (น้ำกิมจิ) สามารถใช้สร้าง "ช็อตน้ำผลไม้" ที่มีรสเค็ม เผ็ด และอุดมด้วยโปรไบโอติก หรือปั่นกับมะเขือเทศเพื่อทำเป็นบลัดดี้แมรี่สไตล์เกาหลี',
      [Language.ZH]: '虽然不适用于典型的甜味冰沙，但泡菜汁（泡菜盐水）可用于制作咸味、辛辣且富含益生菌的“果汁”，或与番茄混合制成韩式血腥玛丽。',
    },
  },
  {
    id: 'longan',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Sweet Dragon\'s Eye: Longan',
      [Language.TH]: 'ดวงตามังกรหวานฉ่ำ: ลำไย',
      [Language.ZH]: '甜蜜龙眼：龙眼',
    },
    description: {
      [Language.EN]: 'A cousin to the lychee, longan offers small, translucent orbs of flesh with a musky, sweet flavor. It\'s a popular summer fruit in Thailand, prized for its refreshing juiciness and quick energy boost.',
      [Language.TH]: 'เป็นญาติกับลิ้นจี่ ลำไยมีเนื้อเป็นลูกกลมใสๆ ที่มีรสหวานหอม เป็นผลไม้ฤดูร้อนยอดนิยมในประเทศไทย ได้รับการยกย่องในด้านความฉ่ำชื่นใจและให้พลังงานอย่างรวดเร็ว',
      [Language.ZH]: '作为荔枝的近亲，龙眼提供带有麝香甜味的小透明果肉球。它是泰国一种流行的夏季水果，因其清爽多汁和快速补充能量而备受推崇。',
    },
    fact: {
      [Language.EN]: 'The name "longan" is from Chinese (龍眼 lóng yǎn), which literally means "dragon eye," a reference to how the fruit resembles an eyeball when shelled, with its black seed showing through the translucent flesh.',
      [Language.TH]: 'ชื่อ "ลำไย" (longan) มาจากภาษาจีน (龍眼 lóng yǎn) ซึ่งแปลตามตัวอักษรว่า "ตามังกร" ซึ่งหมายถึงลักษณะของผลไม้เมื่อปอกเปลือกแล้ว ที่มีเมล็ดสีดำมองเห็นผ่านเนื้อใสคล้ายลูกตา',
      [Language.ZH]: '“龙眼”这个名字来自中文（龍眼 lóng yǎn），字面意思是“龙的眼睛”，指的是去壳后水果的样子，黑色的种子透过半透明的果肉显现出来，就像一只眼球。',
    },
    why: {
      [Language.EN]: 'Rich in Vitamin C and potassium, longan is also used in traditional medicine to support calmness and reduce anxiety. It provides a quick burst of natural sugars for energy.',
      [Language.TH]: 'อุดมไปด้วยวิตามินซีและโพแทสเซียม ลำไยยังถูกใช้ในการแพทย์แผนโบราณเพื่อช่วยให้รู้สึกสงบและลดความวิตกกังวล ให้พลังงานจากน้ำตาลธรรมชาติอย่างรวดเร็ว',
      [Language.ZH]: '龙眼富含维生素C和钾，传统医学中也用它来帮助镇静和减轻焦虑。它能提供天然糖分，迅速补充能量。',
    },
    tip: {
      [Language.EN]: 'Pair with milder flavors like coconut water or pear to let its unique musky sweetness shine. Freeze them for a sorbet-like texture in smoothies.',
      [Language.TH]: 'จับคู่กับรสชาติที่อ่อนกว่าเช่นน้ำมะพร้าวหรือสาลี่เพื่อให้รสหวานหอมที่เป็นเอกลักษณ์โดดเด่น แช่แข็งเพื่อทำสมูทตี้ที่มีเนื้อสัมผัสคล้ายซอร์เบต์',
      [Language.ZH]: '与椰子水或梨等味道较温和的食物搭配，以凸显其独特的麝香甜味。将它们冷冻后放入冰沙中，可以获得类似果子露的质地。',
    },
  },
  {
    id: 'rose_apple',
    type: 'fruit',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Bell-Shaped Refresher: Rose Apple',
      [Language.TH]: 'ความสดชื่นรูประฆัง: ชมพู่',
      [Language.ZH]: '钟形提神器：莲雾',
    },
    description: {
      [Language.EN]: 'This unique, bell-shaped fruit has a crisp, watery texture similar to a pear but with a milder, slightly sweet flavor and a floral aroma. It\'s incredibly hydrating and refreshing, perfect for a light juice.',
      [Language.TH]: 'ผลไม้รูประฆังที่เป็นเอกลักษณ์นี้มีเนื้อสัมผัสที่กรอบและชุ่มน้ำคล้ายสาลี่ แต่มีรสชาติที่อ่อนกว่าและหวานเล็กน้อยพร้อมกลิ่นหอมของดอกไม้ ให้ความชุ่มชื้นและสดชื่นอย่างไม่น่าเชื่อ เหมาะสำหรับทำน้ำผลไม้เบาๆ',
      [Language.ZH]: '这种独特的钟形水果质地脆而多水，类似于梨，但味道更温和，略带甜味，并带有花香。它非常补水和清爽，非常适合制作清淡的果汁。',
    },
    fact: {
      [Language.EN]: 'Despite its name, the rose apple is not related to apples. The "rose" part refers to the fragrant, rose-like scent of its flowers.',
      [Language.TH]: 'แม้จะมีชื่อว่าชมพู่ (rose apple) แต่ก็ไม่ได้มีความเกี่ยวข้องกับแอปเปิ้ล ส่วนคำว่า "rose" หมายถึงกลิ่นหอมคล้ายกุหลาบของดอกไม้',
      [Language.ZH]: '尽管名字里有“苹果”，但莲雾与苹果无关。“玫瑰”部分指的是其花朵散发出的芬芳如玫瑰的香气。',
    },
    why: {
      [Language.EN]: 'With its high water content, it\'s excellent for hydration. It also provides dietary fiber and a good amount of Vitamin C, all with a very low calorie count, making it a guilt-free treat.',
      [Language.TH]: 'ด้วยปริมาณน้ำที่สูง จึงยอดเยี่ยมสำหรับการให้ความชุ่มชื้น นอกจากนี้ยังมีใยอาหารและวิตามินซีในปริมาณที่ดี ทั้งหมดนี้มีแคลอรี่ต่ำมาก ทำให้เป็นของว่างที่ไม่ต้องรู้สึกผิด',
      [Language.ZH]: '由于其含水量高，非常适合补水。它还提供膳食纤维和大量的维生素C，而且热量非常低，是一种无负担的享受。',
    },
    tip: {
      [Language.EN]: 'Juice it with cucumber and mint for an ultra-refreshing cooler. In smoothies, it adds a light, crisp texture without a strong flavor, making it a great hydrating filler.',
      [Language.TH]: 'คั้นน้ำร่วมกับแตงกวาและมินต์เพื่อเครื่องดื่มเย็นสุดสดชื่น ในสมูทตี้ มันช่วยเพิ่มเนื้อสัมผัสที่เบาและกรอบโดยไม่มีรสชาติแรง ทำให้เป็นส่วนผสมเพิ่มความชุ่มชื้นที่ยอดเยี่ยม',
      [Language.ZH]: '将其与黄瓜和薄荷一起榨汁，可制成超级清爽的冷却饮料。在冰沙中，它能增加清淡、酥脆的质地而没有浓烈的味道，是极好的补水填充物。',
    },
  },
  {
    id: 'tamarind',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Sweet & Sour Pod: Tamarind',
      [Language.TH]: 'ฝักเปรี้ยวอมหวาน: มะขาม',
      [Language.ZH]: '酸甜豆荚：罗望子',
    },
    description: {
      [Language.EN]: 'Tamarind grows in a pod and its pulp is intensely flavored - a unique combination of sweet and sour. It\'s a key ingredient in many Thai drinks and dishes for its distinctive tang.',
      [Language.TH]: 'มะขามเติบโตในฝักและเนื้อของมันมีรสชาติเข้มข้น - เป็นการผสมผสานที่ไม่เหมือนใครระหว่างความหวานและความเปรี้ยว เป็นส่วนผสมสำคัญในเครื่องดื่มและอาหารไทยหลายชนิดเนื่องจากรสเปรี้ยวที่เป็นเอกลักษณ์',
      [Language.ZH]: '罗望子生长在豆荚中，其果肉味道浓郁——是甜味和酸味的独特结合。因其独特的酸味，它是许多泰国饮料和菜肴的关键成分。',
    },
    fact: {
      [Language.EN]: 'Tamarind is a natural laxative and has been used for centuries in traditional medicine to treat digestive issues.',
      [Language.TH]: 'มะขามเป็นยาระบายตามธรรมชาติและถูกใช้มานานหลายศตวรรษในการแพทย์แผนโบราณเพื่อรักษาปัญหาทางเดินอาหาร',
      [Language.ZH]: '罗望子是一种天然的泻药，在传统医学中已使用了几个世纪来治疗消化问题。',
    },
    why: {
      [Language.EN]: 'It\'s a good source of antioxidants, particularly polyphenols, and contains tartaric acid, which aids digestion. It is also rich in essential minerals like magnesium and potassium.',
      [Language.TH]: 'เป็นแหล่งของสารต้านอนุมูลอิสระที่ดี โดยเฉพาะโพลีฟีนอล และมีกรดทาร์ทาริกซึ่งช่วยในการย่อยอาหาร นอกจากนี้ยังอุดมไปด้วยแร่ธาตุที่จำเป็นเช่นแมกนีเซียมและโพแทสเซียม',
      [Language.ZH]: '它是抗氧化剂（特别是多酚）的良好来源，并含有有助于消化的酒石酸。它还富含镁和钾等必需矿物质。',
    },
    tip: {
      [Language.EN]: 'Use tamarind paste (not the block concentrate) for easier blending. Its strong flavor needs balancing with sweet fruits like banana or mango for a delicious sweet and sour smoothie.',
      [Language.TH]: 'ใช้มะขามเปียก (ไม่ใช่มะขามก้อน) เพื่อให้ปั่นง่ายขึ้น รสชาติที่เข้มข้นของมันต้องสมดุลด้วยผลไม้รสหวานเช่นกล้วยหรือมะม่วงเพื่อทำสมูทตี้รสเปรี้ยวหวานแสนอร่อย',
      [Language.ZH]: '使用罗望子酱（而不是块状浓缩物）以便于混合。其浓烈的味道需要用香蕉或芒果等甜味水果来平衡，以制作出美味的酸甜冰沙。',
    },
  },
  {
    id: 'starfruit',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Celestial Star: Starfruit',
      [Language.TH]: 'ดาวจรัสฟ้า: มะเฟือง',
      [Language.ZH]: '天体之星：杨桃',
    },
    description: {
      [Language.EN]: 'When sliced crosswise, this fruit forms a perfect five-pointed star. It has a juicy, firm flesh with a complex flavor that can range from tart to sweet, often compared to a mix of apple, pear, and grape.',
      [Language.TH]: 'เมื่อหั่นตามขวาง ผลไม้ชนิดนี้จะกลายเป็นรูปดาวห้าแฉกที่สมบูรณ์แบบ มีเนื้อที่ชุ่มน้ำและแน่นพร้อมรสชาติที่ซับซ้อนซึ่งมีตั้งแต่เปรี้ยวไปจนถึงหวาน มักถูกเปรียบเทียบว่าเป็นการผสมผสานระหว่างแอปเปิ้ล สาลี่ และองุ่น',
      [Language.ZH]: '横切时，这种水果会形成一个完美的五角星。它有多汁、结实的果肉，味道复杂，可从酸到甜，常被比作苹果、梨和葡萄的混合体。',
    },
    fact: {
      [Language.EN]: 'Starfruit should be eaten in moderation by people with kidney problems due to its high oxalate content.',
      [Language.TH]: 'ผู้ที่มีปัญหาเกี่ยวกับไตควรรับประทานมะเฟืองในปริมาณที่พอเหมาะเนื่องจากมีปริมาณออกซาเลตสูง',
      [Language.ZH]: '由于草酸盐含量高，肾脏有问题的人应适量食用杨桃。',
    },
    why: {
      [Language.EN]: 'It\'s an excellent source of Vitamin C and antioxidants like quercetin and gallic acid. Its high fiber and water content supports digestive health and hydration.',
      [Language.TH]: 'เป็นแหล่งวิตามินซีและสารต้านอนุมูลอิสระที่ดีเยี่ยมเช่นเควอซิทินและกรดแกลลิก ปริมาณไฟเบอร์และน้ำที่สูงช่วยสนับสนุนสุขภาพทางเดินอาหารและการให้ความชุ่มชื้น',
      [Language.ZH]: '它是维生素C和槲皮素、没食子酸等抗氧化剂的极佳来源。其高纤维和水分含量有助于消化健康和补水。',
    },
    tip: {
      [Language.EN]: 'Its high water content makes it great for juicing. For a smoothie, pair its tartness with sweet banana or creamy yogurt to balance the flavor.',
      [Language.TH]: 'ปริมาณน้ำที่สูงทำให้เหมาะสำหรับการคั้นน้ำ สำหรับสมูทตี้ ให้จับคู่รสเปรี้ยวกับกล้วยหวานหรือโยเกิร์ตครีมมี่เพื่อปรับสมดุลรสชาติ',
      [Language.ZH]: '其高水分含量使其非常适合榨汁。对于冰沙，可将其酸味与甜香蕉或奶油酸奶搭配以平衡风味。',
    },
  },
  {
    id: 'pomelo',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Gentle Giant Citrus: Pomelo',
      [Language.TH]: 'ซิตรัสยักษ์ใหญ่ใจดี: ส้มโอ',
      [Language.ZH]: '温和的柑橘巨人：柚子',
    },
    description: {
      [Language.EN]: 'The largest of all citrus fruits, the pomelo has a very thick rind and a sweet, mild flesh that is less tart than a grapefruit. The texture is unique, with large juice vesicles that separate easily.',
      [Language.TH]: 'เป็นผลไม้ตระกูลส้มที่ใหญ่ที่สุด ส้มโอมีเปลือกที่หนามากและเนื้อที่หวานอ่อนๆ ซึ่งมีความเปรี้ยวน้อยกว่าเกรปฟรุต เนื้อสัมผัสเป็นเอกลักษณ์ด้วยถุงน้ำขนาดใหญ่ที่แยกออกจากกันได้ง่าย',
      [Language.ZH]: '作为所有柑橘类水果中最大的，柚子有非常厚的果皮和甜而温和的果肉，酸度低于葡萄柚。其质地独特，大大的果汁囊易于分离。',
    },
    fact: {
      [Language.EN]: 'The pomelo is one of the original, non-hybrid citrus fruits from which many others (like the common orange) were derived.',
      [Language.TH]: 'ส้มโอเป็นหนึ่งในผลไม้ตระกูลส้มดั้งเดิมที่ไม่ใช่ลูกผสม ซึ่งผลไม้ชนิดอื่นๆ (เช่น ส้มทั่วไป) ได้รับการพัฒนาสายพันธุ์มาจากส้มโอ',
      [Language.ZH]: '柚子是原始的、非杂交的柑橘类水果之一，许多其他柑橘（如普通橙子）都是由它衍生而来的。',
    },
    why: {
      [Language.EN]: 'Like other citrus, it is packed with Vitamin C, vital for the immune system. It\'s also a good source of potassium for heart health and fiber for digestion.',
      [Language.TH]: 'เช่นเดียวกับผลไม้ตระกูลส้มอื่นๆ ส้มโออุดมไปด้วยวิตามินซีซึ่งจำเป็นต่อระบบภูมิคุ้มกัน นอกจากนี้ยังเป็นแหล่งโพแทสเซียมที่ดีต่อสุขภาพหัวใจและไฟเบอร์ที่ดีต่อการย่อยอาหาร',
      [Language.ZH]: '像其他柑橘类水果一样，它富含对免疫系统至关重要的维生素C。它也是有益于心脏健康的钾和有助于消化的纤维的良好来源。',
    },
    tip: {
      [Language.EN]: 'Remove the tough membrane from each segment before blending. Its mild sweetness pairs well with berries or a zingy ginger for a refreshing and hydrating smoothie.',
      [Language.TH]: 'เอากเยื่อหุ้มที่แข็งออกจากแต่ละกลีบก่อนนำไปปั่น รสหวานอ่อนๆ ของมันเข้ากันได้ดีกับเบอร์รี่หรือขิงรสซ่าเพื่อทำสมูทตี้ที่สดชื่นและให้ความชุ่มชื้น',
      [Language.ZH]: '搅拌前，请去除每个果瓣上的坚韧薄膜。其温和的甜味与浆果或辛辣的姜搭配，可以制作出清爽补水的冰沙。',
    },
  },
  {
    id: 'sapodilla',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Brown Sugar Fruit: Sapodilla',
      [Language.TH]: 'ผลไม้รสน้ำตาลทรายแดง: ละมุด',
      [Language.ZH]: '红糖果：人心果',
    },
    description: {
      [Language.EN]: 'This fruit has a grainy, pear-like texture and an exceptionally sweet, malty flavor reminiscent of brown sugar or caramel. It\'s a true dessert fruit.',
      [Language.TH]: 'ผลไม้ชนิดนี้มีเนื้อสัมผัสคล้ายสาลี่และมีรสหวานจัดคล้ายมอลต์ที่ชวนให้นึกถึงน้ำตาลทรายแดงหรือคาราเมล เป็นผลไม้ของหวานอย่างแท้จริง',
      [Language.ZH]: '这种水果有类似梨的颗粒状质地和异常甜美的麦芽风味，让人联想到红糖或焦糖。它是一种真正的甜点水果。',
    },
    fact: {
      [Language.EN]: 'The tree\'s latex, known as chicle, was the original main ingredient in chewing gum before synthetic substitutes were created.',
      [Language.TH]: 'ยางของต้นที่เรียกว่า "ชิเคิล" (chicle) เคยเป็นส่วนผสมหลักดั้งเดิมของหมากฝรั่งก่อนที่จะมีการสร้างสารสังเคราะห์ขึ้นมาทดแทน',
      [Language.ZH]: '这种树的乳胶，称为“chicle”，是口香糖在合成替代品出现之前的主要原始成分。',
    },
    why: {
      [Language.EN]: 'It is rich in dietary fiber, which aids digestion, and contains tannins, a class of antioxidants with anti-inflammatory properties. It\'s also a good source of Vitamin C and A.',
      [Language.TH]: 'อุดมไปด้วยใยอาหารซึ่งช่วยในการย่อยอาหาร และมีสารแทนนินซึ่งเป็นกลุ่มของสารต้านอนุมูลอิสระที่มีคุณสมบัติต้านการอักเสบ นอกจากนี้ยังเป็นแหล่งวิตามินซีและเอที่ดี',
      [Language.ZH]: '它富含膳食纤维，有助于消化，并含有单宁，一类具有抗炎特性的抗氧化剂。它也是维生素C和A的良好来源。',
    },
    tip: {
      [Language.EN]: 'Ensure the sapodilla is very ripe and soft to get the best flavor. Its natural sweetness means no other sweeteners are needed. Blend with milk and a hint of cinnamon for a milkshake-like smoothie.',
      [Language.TH]: 'ต้องแน่ใจว่าละมุดสุกและนิ่มมากเพื่อให้ได้รสชาติที่ดีที่สุด ความหวานตามธรรมชาติของมันหมายความว่าไม่จำเป็นต้องใช้สารให้ความหวานอื่น ปั่นกับนมและอบเชยเล็กน้อยเพื่อทำสมูทตี้คล้ายมิลค์เชค',
      [Language.ZH]: '确保人心果非常成熟和柔软，以获得最佳风味。其天然的甜味意味着不需要其他甜味剂。与牛奶和少许肉桂混合，可以制作出奶昔般的冰沙。',
    },
  },
  {
    id: 'custard_apple',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Ice Cream Fruit: Custard Apple',
      [Language.TH]: 'ผลไม้ไอศกรีม: น้อยหน่า',
      [Language.ZH]: '冰淇淋果：释迦',
    },
    description: {
      [Language.EN]: 'With its bumpy green skin, the custard apple holds a treasure of creamy, fragrant, and sweet white pulp with a texture that truly resembles a rich custard or ice cream.',
      [Language.TH]: 'ด้วยเปลือกสีเขียวขรุขระ น้อยหน่าเก็บซ่อนสมบัติล้ำค่าของเนื้อสีขาวครีมมี่ หอมหวาน ที่มีเนื้อสัมผัสคล้ายคัสตาร์ดหรือไอศกรีมเข้มข้นอย่างแท้จริง',
      [Language.ZH]: '释迦果皮凹凸不平，呈绿色，里面是奶油状、芳香、甜美的白色果肉，其质地真正类似于浓郁的奶油冻或冰淇淋。',
    },
    fact: {
      [Language.EN]: 'Also known as sugar-apple or sweetsop, it belongs to the same family as soursop (Annona).',
      [Language.TH]: 'หรือที่รู้จักกันในชื่อ sugar-apple หรือ sweetsop มันอยู่ในวงศ์เดียวกับทุเรียนเทศ (Annona)',
      [Language.ZH]: '又名番荔枝或甜品，它与刺果番荔枝（Annona）属于同一科。',
    },
    why: {
      [Language.EN]: 'It\'s a good source of Vitamin C for immune support, Vitamin B6 for brain health, and minerals like potassium and magnesium.',
      [Language.TH]: 'เป็นแหล่งวิตามินซีที่ดีสำหรับสนับสนุนภูมิคุ้มกัน วิตามินบี 6 สำหรับสุขภาพสมอง และแร่ธาตุเช่นโพแทสเซียมและแมกนีเซียม',
      [Language.ZH]: '它是支持免疫的维生素C、有益大脑健康的维生素B6以及钾和镁等矿物质的良好来源。',
    },
    tip: {
      [Language.EN]: 'The seeds are inedible and must be carefully removed. The pulp is very delicate. Blend with a little milk and vanilla for a simple, dessert-like smoothie that highlights its unique texture and flavor.',
      [Language.TH]: 'เมล็ดไม่สามารถรับประทานได้และต้องเอาออกอย่างระมัดระวัง เนื้อมีความละเอียดอ่อนมาก ปั่นกับนมและวานิลลาเล็กน้อยเพื่อทำสมูทตี้ง่ายๆ คล้ายของหวานที่เน้นเนื้อสัมผัสและรสชาติที่เป็นเอกลักษณ์',
      [Language.ZH]: '种子不可食用，必须小心去除。果肉非常细腻。与少量牛奶和香草混合，可以制作出简单的甜点式冰沙，凸显其独特的质地和风味。',
    },
  },
  {
    id: 'lemongrass',
    type: 'vegetable',
    image: 'https://i.postimg.cc/WpDbMyzq/juice-me-image-place-holder-and-background-decorative-0019.jpg',
    title: {
      [Language.EN]: 'The Aromatic Healer: Lemongrass',
      [Language.TH]: 'สมุนไพรบำบัดกลิ่นหอม: ตะไคร้',
      [Language.ZH]: '芳香疗愈者：柠檬草',
    },
    description: {
      [Language.EN]: 'A quintessential Thai herb, lemongrass provides a complex, citrusy aroma and flavor without the harsh acidity of a lemon. It\'s widely used in cooking and herbal drinks for its refreshing and calming properties.',
      [Language.TH]: 'เป็นสมุนไพรไทยที่เป็นแก่นสาร ตะไคร้ให้กลิ่นหอมและรสชาติที่ซับซ้อนคล้ายซิตรัสโดยไม่มีความเป็นกรดที่รุนแรงของมะนาว ถูกใช้อย่างแพร่หลายในการทำอาหารและเครื่องดื่มสมุนไพรเนื่องจากคุณสมบัติที่สดชื่นและช่วยให้รู้สึกสงบ',
      [Language.ZH]: '作为一种典型的泰国草药，柠檬草提供复杂、柑橘般的香气和风味，而没有柠檬的刺激性酸味。因其清爽和镇静的特性，它被广泛用于烹饪和草药饮料中。',
    },
    fact: {
      [Language.EN]: 'Lemongrass oil is a popular and effective natural insect repellent due to its high citral content.',
      [Language.TH]: 'น้ำมันตะไคร้เป็นยากันยุงตามธรรมชาติที่ได้รับความนิยมและมีประสิทธิภาพเนื่องจากมีปริมาณซิทรัลสูง',
      [Language.ZH]: '由于柠檬醛含量高，柠檬草油是一种流行且有效的天然驱虫剂。',
    },
    why: {
      [Language.EN]: 'It contains several antioxidants, including chlorogenic acid and isoorientin. Traditionally, it\'s used in herbal medicine to relieve pain, reduce fever, and support digestive health.',
      [Language.TH]: 'ประกอบด้วยสารต้านอนุมูลอิสระหลายชนิด รวมถึงกรดคลอโรจีนิกและไอโซโอเรียนติน ในทางการแพทย์แผนโบราณมักใช้เพื่อบรรเทาอาการปวด ลดไข้ และสนับสนุนสุขภาพทางเดินอาหาร',
      [Language.ZH]: '它含有多种抗氧化剂，包括绿原酸和异荭草素。传统上，它在草药医学中用于缓解疼痛、退烧和支持消化健康。',
    },
    tip: {
      [Language.EN]: 'Use only the tender, lower, pale-yellow part of the stalk. Finely chop it before blending to ensure a smooth texture. It creates a wonderfully aromatic juice with pineapple and ginger.',
      [Language.TH]: 'ใช้เฉพาะส่วนล่างของลำต้นที่อ่อนและมีสีเหลืองอ่อน สับให้ละเอียดก่อนนำไปปั่นเพื่อให้ได้เนื้อเนียนละเอียด สร้างน้ำผลไม้ที่มีกลิ่นหอมอย่างน่าอัศจรรย์เมื่อผสมกับสับปะรดและขิง',
      [Language.ZH]: '只使用茎的嫩、下部、淡黄色的部分。在搅拌前将其切碎，以确保质地顺滑。它与菠萝和姜一起可以制作出香气扑鼻的果汁。',
    },
  },
  {
    id: 'marian_plum',
    type: 'fruit',
    image: 'https://i.postimg.cc/g0TbjYvS/juice-me-image-place-holder-and-background-decorative-001.jpg',
    title: {
      [Language.EN]: 'The Sweet & Sour Jewel: Marian Plum',
      [Language.TH]: 'อัญมณีเปรี้ยวหวาน: มะปราง',
      [Language.ZH]: '酸甜宝石：马里安李',
    },
    description: {
      [Language.EN]: 'A small, vibrant orange fruit native to Southeast Asia, the Marian plum (Maprang) offers a delightful balance of sweet and sour. It has smooth skin and juicy flesh, often eaten fresh as a seasonal treat.',
      [Language.TH]: 'ผลไม้สีส้มสดใสขนาดเล็กที่มีถิ่นกำเนิดในเอเชียตะวันออกเฉียงใต้ มะปรางให้ความสมดุลที่น่ารื่นรมย์ของรสหวานและเปรี้ยว มีเปลือกเรียบและเนื้อฉ่ำน้ำ มักรับประทานสดเป็นของว่างตามฤดูกาล',
      [Language.ZH]: '马里安李（Maprang）是东南亚特产的一种小而鲜艳的橙色水果，提供了甜味和酸味的愉悦平衡。它有光滑的果皮和多汁的果肉，通常作为季节性美食新鲜食用。',
    },
    fact: {
      [Language.EN]: 'There are two main types: "Maprang," which is sweeter, and "Mayong," which is larger and more sour. Both are highly anticipated when they come into season in Thailand.',
      [Language.TH]: 'มีสองชนิดหลักคือ "มะปราง" ซึ่งจะหวานกว่า และ "มะยง" ซึ่งจะใหญ่กว่าและเปรี้ยวกว่า ทั้งสองชนิดเป็นที่ตั้งตารอคอยอย่างมากเมื่อถึงฤดูกาลในประเทศไทย',
      [Language.ZH]: '主要有两种类型：“Maprang”较甜，“Mayong”较大且较酸。当它们在泰国上市时，都备受期待。',
    },
    why: {
      [Language.EN]: 'It is a good source of Vitamin C and beta-carotene (which the body converts to Vitamin A), supporting both the immune system and vision health. It also provides essential fiber.',
      [Language.TH]: 'เป็นแหล่งวิตามินซีและเบต้าแคโรทีนที่ดี (ซึ่งร่างกายจะเปลี่ยนเป็นวิตามินเอ) ซึ่งสนับสนุนทั้งระบบภูมิคุ้มกันและสุขภาพการมองเห็น นอกจากนี้ยังให้ใยอาหารที่จำเป็น',
      [Language.ZH]: '它是维生素C和β-胡萝卜素（身体会将其转化为维生素A）的良好来源，支持免疫系统和视力健康。它还提供必需的纤维。',
    },
    tip: {
      [Language.EN]: 'For a truly Thai-style smoothie, blend ripe Marian plums with a little coconut milk and ice. The sweet and sour tang is incredibly refreshing.',
      [Language.TH]: 'สำหรับสมูทตี้สไตล์ไทยแท้ๆ ให้ปั่นมะปรางสุกกับกะทิเล็กน้อยและน้ำแข็ง รสเปรี้ยวอมหวานนั้นสดชื่นอย่างไม่น่าเชื่อ',
      [Language.ZH]: '想要一杯真正的泰式冰沙，可以将成熟的马里安李与少许椰奶和冰块混合。酸甜的味道令人难以置信的清爽。',
    },
  },
  {
    id: 'langsat',
    type: 'fruit',
    image: 'https://i.postimg.cc/X7S397tt/juice-me-image-place-holder-and-background-decorative-006.jpg',
    title: {
      [Language.EN]: 'The Translucent Treat: Langsat',
      [Language.TH]: 'ของว่างโปร่งแสง: ลองกอง',
      [Language.ZH]: '半透明的款待：龙功果',
    },
    description: {
      [Language.EN]: 'Found in bunches, this small, round fruit has a thin, yellowish skin that peels away to reveal translucent, juicy segments. The flavor is a delicate balance of sweet and tangy, similar to a mild grapefruit.',
      [Language.TH]: 'พบเป็นพวง ผลไม้กลมเล็กนี้มีเปลือกบางสีเหลืองที่ลอกออกง่ายเพื่อเผยให้เห็นกลีบเนื้อโปร่งแสงฉ่ำน้ำ รสชาติเป็นความสมดุลที่ละเอียดอ่อนของความหวานและความเปรี้ยว คล้ายกับเกรปฟรุตที่อ่อนโยน',
      [Language.ZH]: '这种小而圆的水果成串出现，有薄薄的淡黄色果皮，剥开后露出半透明、多汁的果瓣。味道是甜与酸的微妙平衡，类似于温和的葡萄柚。',
    },
    fact: {
      [Language.EN]: 'Longkong is a specific cultivar of Langsat that is particularly popular in Thailand, known for having less sap and a sweeter taste.',
      [Language.TH]: 'ลองกองเป็นพันธุ์หนึ่งของลางสาดที่ได้รับความนิยมเป็นพิเศษในประเทศไทย ซึ่งเป็นที่รู้จักว่ามียางน้อยกว่าและมีรสชาติหวานกว่า',
      [Language.ZH]: '龙功果是龙萨果的一个特定栽培品种，在泰国特别受欢迎，以其汁液较少和味道更甜而闻名。',
    },
    why: {
      [Language.EN]: 'Langsat is a good source of fiber, which aids in digestion. It also contains various B-vitamins and antioxidants that contribute to overall well-being.',
      [Language.TH]: 'ลองกองเป็นแหล่งใยอาหารที่ดีซึ่งช่วยในการย่อยอาหาร นอกจากนี้ยังมีวิตามินบีต่างๆ และสารต้านอนุมูลอิสระที่ช่วยส่งเสริมสุขภาพโดยรวม',
      [Language.ZH]: '龙功果是纤维的良好来源，有助于消化。它还含有多种B族维生素和抗氧化剂，有助于整体健康。',
    },
    tip: {
      [Language.EN]: 'The seeds are very bitter and should be removed before blending. The subtle flavor of langsat is best appreciated in a simple smoothie with water or coconut water and perhaps a mild fruit like pear.',
      [Language.TH]: 'เมล็ดมีรสขมมากและควรเอาออกก่อนนำไปปั่น รสชาติที่ละเอียดอ่อนของลองกองจะดีที่สุดในสมูทตี้ง่ายๆ กับน้ำเปล่าหรือน้ำมะพร้าว และอาจจะผสมกับผลไม้รสอ่อนๆ อย่างสาลี่',
      [Language.ZH]: '种子非常苦，搅拌前应去除。龙功果的微妙风味最好在简单的冰沙中品味，搭配水或椰子水，或许再加一点像梨这样的温和水果。',
    },
  },
  {
    id: 'snake_fruit',
    type: 'fruit',
    image: 'https://i.postimg.cc/W1SvRmtP/juice-me-image-place-holder-and-background-decorative-003.jpg',
    title: {
      [Language.EN]: 'The Scaly Delight: Snake Fruit (Salak)',
      [Language.TH]: 'ความอร่อยใต้เกล็ด: สละ',
      [Language.ZH]: '鳞片下的美味：蛇皮果',
    },
    description: {
      [Language.EN]: 'Known for its reddish-brown, scaly skin that resembles snakeskin, Salak hides a sweet, crunchy, and slightly acidic pulp. It\'s a unique snack popular across Southeast Asia.',
      [Language.TH]: 'เป็นที่รู้จักจากเปลือกที่เป็นเกล็ดสีน้ำตาลแดงคล้ายหนังงู สละซ่อนเนื้อที่หวานกรอบและมีความเป็นกรดเล็กน้อยไว้ข้างใน เป็นของว่างที่มีเอกลักษณ์และเป็นที่นิยมทั่วเอเชียตะวันออกเฉียงใต้',
      [Language.ZH]: '蛇皮果以其类似蛇皮的红棕色鳞状外皮而闻名，果肉甜脆，略带酸味。它是东南亚一种独特而受欢迎的小吃。',
    },
    fact: {
      [Language.EN]: 'The texture is often compared to a crisp apple. There are many cultivars, with some being dry and crumbly and others moist and crunchy.',
      [Language.TH]: 'เนื้อสัมผัสของมันมักถูกเปรียบเทียบกับแอปเปิ้ลกรอบ มีหลายสายพันธุ์ บางพันธุ์เนื้อจะแห้งและร่วน ในขณะที่บางพันธุ์จะชุ่มฉ่ำและกรอบ',
      [Language.ZH]: '其质地常被比作脆苹果。蛇皮果有许多栽培品种，有的干燥易碎，有的则湿润松脆。',
    },
    why: {
      [Language.EN]: 'Salak is a good source of potassium and pectin. It also contains beta-carotene, an antioxidant that is good for eye health.',
      [Language.TH]: 'สละเป็นแหล่งโพแทสเซียมและเพคตินที่ดี นอกจากนี้ยังมีเบต้าแคโรทีนซึ่งเป็นสารต้านอนุมูลอิสระที่ดีต่อสุขภาพดวงตา',
      [Language.ZH]: '蛇皮果是钾和果胶的良好来源。它还含有β-胡萝卜素，一种有益于眼睛健康的抗氧化剂。',
    },
    tip: {
      [Language.EN]: 'Be careful of the sharp tip when peeling! The pulp is best enjoyed fresh. Its flavor can be enhanced with a pinch of salt.',
      [Language.TH]: 'ระวังปลายแหลมของมันตอนปอกเปลือก! เนื้อของมันอร่อยที่สุดเมื่อทานสดๆ สามารถเพิ่มรสชาติได้ด้วยการโรยเกลือเล็กน้อย',
      [Language.ZH]: '剥皮时要小心尖锐的顶端！果肉最好新鲜享用。撒上少许盐可以增强其风味。',
    },
  },
];