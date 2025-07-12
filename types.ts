export enum Language {
  TH = 'th',
  EN = 'en',
  ZH = 'zh'
}

export type Page = 'landing' | 'builder' | 'cold-pressed-info' | 'menu';

// New types for the menu page structure
export interface AddOnItem {
  name: { [key in Language]: string };
  price: number;
}
export interface MenuItem {
  name: { [key in Language]: string };
  price?: number;
  ingredients?: { [key in Language]: string };
  description?: { [key in Language]: string };
}

export interface MenuCategory {
  id: string;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  priceNote?: { [key in Language]: string };
  image: string;
  items: MenuItem[];
  addOns?: {
    title: { [key in Language]: string };
    items: AddOnItem[];
  };
}

export interface CartItem {
  id: string; // Unique ID for the cart item, e.g., menuItemId-addon1Id-addon2Id
  menuItem: MenuItem;
  quantity: number;
  selectedAddOns: AddOnItem[];
  itemPrice: number; // Price of ONE item with its addons
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
}


export interface Ingredient {
  id: string;
  names: { [key in Language]: string };
  emoji: string;
  benefits: { [key in Language]: string[] }; // Expecting this array to be significantly larger for "20 writings"
}

export interface RecipeDetails {
  name: string; // In selected language
  ingredientsText: string; // List of ingredients, names ALWAYS in Thai
  benefitsText: string; // In selected language
  offlineCaption?: string; // Locally generated story about ingredients, now the primary description
  imageUrl?: string; // Will now point to a pre-created local image
  price?: number; // In selected language
  selectedFruits: Ingredient[]; 
  selectedAddOns: Ingredient[];
  sweetness?: number; // Percentage, e.g., 25, 50, 75, 100
  purchaseTimestamp?: number; // Added to store purchase time
  orderSequenceNumber: string; // 5-digit sequence number for the day, e.g., "01688"
}

export interface SuperfoodSpotlight {
  id: string;
  type: 'fruit' | 'mixed-fruits' | 'vegetable';
  image: string;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  fact: { [key in Language]: string };
  why: { [key in Language]: string };
  tip: { [key in Language]: string };
}

export interface UITexts {
  appTitle: string;
  appSubtitle: string;
  selectFruitsTitle: string;
  selectAddOnsTitle: string;
  generateButton: string;
  clearButton: string;
  outputTitle: string;
  ingredientsLabel: string;
  benefitsLabel: string;
  alertMaxFruits: string;
  alertMinOneFruit: string;
  alertMaxFruitItems: string;
  alertMaxAddOnItemsPerType: string;
  creativeNameRecipePrefix: string;
  benefitSeparator: string;
  languageSwitcherLabel: string;
  adjectives: string[];
  nouns: string[];
  offlineRecipeStoryTitle: string;
  priceLabel: string; 
  currency: string;
  prepareShareButton: string; 
  shareModalTitle: string; 
  downloadImageButton: string; 
  shareableIngredientsLabel: string; 
  shareableOfflineStoryTitle: string;
  shareableBenefitsLabel: string; 
  selectSweetnessTitle: string; 
  sweetnessLabel: string; 
  purchaseTimeLabel: string; 

  // Admin Hub and Password Modal Texts
  passwordModalTitle: string;
  passwordLabel: string;
  submitPasswordButton: string;
  passwordModalCloseLabel: string;
  incorrectPasswordMessage: string;
  adminHubTitle: string;
  adminHubCloseButton: string;
  adminManageFruitsTitle: string; 

  // SEO Meta Texts
  metaTitleLanding: string;
  metaDescriptionLanding: string;
  metaTitleBuilder: string;
  metaDescriptionBuilder: string;
  metaTitleColdPressed: string;
  metaDescriptionColdPressed: string;
  metaTitleMenu: string;
  metaDescriptionMenu: string;
  metaDescriptionDefault: string;

  // New Website Landing Page Texts
  navHome: string;
  navMenu: string;
  navLearn: string;
  navBible: string;
  navColdPressed: string;
  navBuilder: string;
  navContact: string;
  navShop: string;
  navShopAll: string;
  navShopCleanses: string;
  navShopBuild: string;
  navShopSubscribe: string;
  navWhyUs: string;
  navOurStory: string;
  navWhyColdPressed: string;
  navOurIngredients: string;
  navReviews: string;
  navBlog: string;
  navFAQ: string;
  navAccount: string;
  navShopNowCTA: string;


  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;

  problemPromiseTitle: string;
  problemPromiseBody: string;

  valuePropTitle: string;
  valuePropDesc: string;
  valuePropPillar1Title: string;
  valuePropPillar1Desc: string;
  valuePropPillar2Title: string;
  valuePropPillar2Desc: string;
  valuePropPillar3Title: string;
  valuePropPillar3Desc: string;
  valuePropPillar4Title: string;
  valuePropPillar4Desc: string;

  socialProofTitle: string;
  testimonial1Quote: string;
  testimonial1Author: string;
  testimonial2Quote: string;
  testimonial2Author: string;
  testimonial3Quote: string;
  testimonial3Author: string;

  productShowcaseTitle: string;
  productShowcaseBestseller: string;
  productShowcaseShopNow: string;
  product1Name: string;
  product1Desc: string;
  product2Name: string;
  product2Desc: string;
  product3Name: string;
  product3Desc: string;

  finalCtaTitle: string;
  finalCtaButton: string;
  
  coldPressedTitle: string;
  coldPressedSummary: string;
  coldPressedCTA: string;
  coldPressedFullContent: string;

  contactTitle: string;
  contactAddress: string;
  contactHours: string;
  contactPhone: string;
  contactPrice: string;
  contactPlusCode: string;
  footerRights: string;

  backToHome: string;

  // Texts for pages/components that are no longer on the main landing page but still exist
  bibleTitle: string;
  bibleDescription: string;
  bibleTab2Title: string;
  bibleTab2Heading: string;
  bibleTab2LayeringTitle: string;
  bibleTab2LayeringStep1: string;
  bibleTab2LayeringStep2: string;
  bibleTab2LayeringStep3: string;
  bibleTab2LayeringStep4: string;
  bibleTab2FlavorTitle: string;
  bibleTab2FlavorBland: string;
  bibleTab2FlavorSweet: string;
  bibleTab2FlavorBitter: string;
  bibleTab2FlavorSour: string;
  bibleTab3Title: string;
  bibleTab3Heading: string;
  bibleTab3FreezerTip: string;
  bibleTab3PacksTip: string;

  treasuryTitle: string;
  treasuryDescription: string;
  treasuryCTA: string;

  spotlightTitle: string;
  spotlightDescription: string;

  toolsTitle: string;
  toolsDescription: string;
  toolsQuizTitle: string;
  toolsQuizDescription: string;
  toolsFridgeTitle: string;
  toolsFridgeDescription: string;

  testimonialsTitle: string;
  testimonial1Text: string;
  testimonial2Text: string;
  testimonial3Text: string;

  faqTitle: string;
  faqDescription: string;
  faqReadMore: string;

  // Menu & Ordering
  menuHeroTitle: string;
  menuHeroSubtitle: string;
  menuIntroMessage: string;
  menuAddOns: string;
  menuExtraIceBlending: string;
  addToCart: string;
  quantity: string;
  cartTitle: string;
  emptyCart: string;
  subtotal: string;
  total: string;
  checkout: string;
  
  // Checkout Page
  checkoutTitle: string;
  customerInfo: string;
  fullNameLabel: string;
  phoneLabel: string;
  addressLabel: string;
  orderSummary: string;
  paymentInfo: string;
  paymentInstructions: string;
  confirmOrder: string;
  continueShopping: string;
  captureSummaryTitle: string;
  captureSummaryInstruction: string;
  captureSummaryButton: string;
  captureSummaryPreview: string;
  downloadCapturedImage: string;

  // Confirmation Page
  orderConfirmedTitle: string;
  backToMenu: string;
  confirmationStep1Title: string;
  confirmationStep1Instruction: string;
  confirmationStep2Title: string;
  confirmationStep2Instruction: string;
  confirmationStep2InboxLink: string;
  confirmationStep2Includes: string;
  confirmationStep2IncludeSlip: string;
  confirmationStep2IncludeSummaryImage: string;
  confirmationStep2IncludeDetails: string;
  confirmationStep3Title: string;
  confirmationStep3Instruction: string;
  confirmationCallToAction: string;
  confirmationThankYou: string;

  // Local SEO and Schema data
  geoCoordinates: {
    latitude: string;
    longitude: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

export type Translations = {
  [key in Language]: UITexts;
};