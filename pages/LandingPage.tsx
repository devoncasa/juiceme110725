import React, { useState, useEffect } from 'react';
import { UITexts, Page, Language } from '../types.ts';
import { playCuteClickSound } from '../utils/audio.ts';
import { BlenderBibleSection } from '../components/BlenderBibleSection.tsx';
import SuperfoodSpotlightSection from '../components/SuperfoodSpotlightSection.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { heroImageUrls } from '../data/heroImages.ts';
import { menuData } from '../data/menu.ts';

// --- Sub-components for the new landing page structure ---

const HeroSection: React.FC<{ uiTexts: UITexts }> = ({ uiTexts }) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        // Select a random image from the collection on component mount
        const randomImage = heroImageUrls[Math.floor(Math.random() * heroImageUrls.length)];
        setBackgroundImage(randomImage);
    }, []); // Empty dependency array ensures this runs only once per page load

    const handleCTAClick = () => {
        playCuteClickSound();
        document.querySelector('#bestsellers')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section 
            id="home" 
            className="relative text-white py-24 sm:py-40 px-4 flex items-center justify-center text-center bg-cover bg-center transition-all duration-1000"
            style={{
                backgroundImage: backgroundImage 
                    ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`
                    : 'none',
                backgroundColor: '#a87c7c' // A fallback color similar to the images
            }}
        >
             <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4" style={{ textShadow: '2px 3px 6px rgba(0,0,0,0.5)' }}>
                    {uiTexts.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
                    {uiTexts.heroSubtitle}
                </p>
                <button
                    onClick={handleCTAClick}
                    className="inline-block px-10 py-4 bg-rose-400 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-rose-500 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-rose-300 focus:ring-opacity-75"
                >
                    {uiTexts.heroCTA}
                </button>
            </div>
        </section>
    );
};

const ProblemPromiseSection: React.FC<{ uiTexts: UITexts }> = ({ uiTexts }) => {
    return (
        <section 
            id="our-story" 
            className="py-20 sm:py-24 relative bg-cover bg-center"
            style={{ backgroundImage: 'url(https://i.postimg.cc/4yHMmVJn/juice-me-image-place-holder-and-background-decorative-0020.jpg)' }}
        >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
            <div className="relative max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.problemPromiseTitle}</h2>
                <p className="mt-4 text-lg text-slate-700 leading-relaxed">{uiTexts.problemPromiseBody}</p>
            </div>
        </section>
    );
}

const ValuePropositionSection: React.FC<{ uiTexts: UITexts, navigateTo: (page: Page, anchor?: string) => void }> = ({ uiTexts, navigateTo }) => {
    const pillars = [
        { title: uiTexts.valuePropPillar1Title, description: uiTexts.valuePropPillar1Desc, iconUrl: 'https://i.postimg.cc/pVs3kV9s/100.webp', alt: 'Icon of fresh organic vegetables' },
        { title: uiTexts.valuePropPillar2Title, description: uiTexts.valuePropPillar2Desc, iconUrl: 'https://i.postimg.cc/V6YHB2zy/image.webp', alt: 'Icon of a droplet representing nutrient extraction' },
        { title: uiTexts.valuePropPillar3Title, description: uiTexts.valuePropPillar3Desc, iconUrl: 'https://i.postimg.cc/R0xYqN8Z/image.webp', alt: 'Icon of a smiling fruit representing authentic flavor' },
        { title: uiTexts.valuePropPillar4Title, description: uiTexts.valuePropPillar4Desc, iconUrl: 'https://i.postimg.cc/nLKPmnbY/image.webp', alt: 'Icon of a calendar page showing daily freshness' },
    ];
    
    return (
        <section id="why-us" className="py-20 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.valuePropTitle}</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{uiTexts.valuePropDesc}</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="text-center">
                            <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 bg-teal-100/70 rounded-full overflow-hidden shadow-md">
                                <img src={pillar.iconUrl} alt={pillar.alt} className="w-full h-full object-cover content-image" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-700 mb-2">{pillar.title}</h3>
                            <p className="text-slate-600">{pillar.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-20 text-center bg-teal-50/60 p-8 rounded-2xl">
                     <h3 className="text-2xl font-bold text-teal-800">{uiTexts.coldPressedTitle}</h3>
                     <p className="text-slate-700 mt-2 max-w-2xl mx-auto">{uiTexts.coldPressedSummary}</p>
                     <button
                        onClick={() => navigateTo('cold-pressed-info')}
                        className="mt-4 font-semibold text-teal-600 hover:text-teal-800 transition-colors duration-300 group"
                    >
                        {uiTexts.coldPressedCTA}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        &nbsp;→
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

const SocialProofSection: React.FC<{ uiTexts: UITexts }> = ({ uiTexts }) => {
    const testimonials = [
        { quote: uiTexts.testimonial1Quote, author: uiTexts.testimonial1Author, color: 'rose', image: 'https://i.postimg.cc/zfXq3t4B/juice-me-image-place-holder-and-background-decorative-0011.jpg' },
        { quote: uiTexts.testimonial2Quote, author: uiTexts.testimonial2Author, color: 'teal', image: 'https://i.postimg.cc/y8TV14Qt/juice-me-image-place-holder-and-background-decorative-0012.jpg' },
        { quote: uiTexts.testimonial3Quote, author: uiTexts.testimonial3Author, color: 'purple', image: 'https://i.postimg.cc/t4bqGC5F/juice-me-image-place-holder-and-background-decorative-0013.jpg' },
    ];
    const StarRating = () => (
        <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
        </div>
    );
    return (
         <section 
            id="reviews" 
            className="py-20 sm:py-24 decorative-background-fade" 
            style={{backgroundImage: 'url(https://i.postimg.cc/nLztnsQ9/juice-me-image-place-holder-and-background-decorative-002.jpg)'}}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.socialProofTitle}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col border border-slate-200/50">
                           <div className="flex-grow">
                             <StarRating />
                             <p className="text-slate-700 mt-4 mb-6">"{t.quote}"</p>
                           </div>
                           <div className="flex items-center mt-auto">
                                <img src={t.image} alt={`Testimonial from ${t.author}`} className="w-12 h-12 rounded-full object-cover content-image" />
                                <p className={`ml-4 font-bold text-slate-700`}>{t.author}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface ShowcasedProduct {
    name: string;
    desc: string;
    image: string;
    price: number;
    alt: string;
    categoryId: string;
}

const ProductShowcaseSection: React.FC<{ uiTexts: UITexts, navigateTo: (page: Page, anchor?: string) => void, currentLanguage: Language }> = ({ uiTexts, navigateTo, currentLanguage }) => {
    const [products, setProducts] = useState<ShowcasedProduct[]>([]);

    useEffect(() => {
        // 1. Flatten all items from all categories
        const allItems = menuData.flatMap(category => 
            category.items.map(item => ({
                item,
                category
            }))
        );

        // 2. Shuffle the flattened list
        const shuffled = [...allItems].sort(() => 0.5 - Math.random());

        // 3. Take the first 3 and format them for display
        const selectedProducts = shuffled.slice(0, 3).map(({ item, category }) => {
            const price = item.price ?? parseInt(category.priceNote?.[currentLanguage].match(/\d+/)?.[0] || '50', 10);
            return {
                name: item.name[currentLanguage],
                desc: item.ingredients?.[currentLanguage] || item.description?.[currentLanguage] || '',
                image: category.image,
                price: price,
                alt: `A delicious-looking ${item.name[currentLanguage]} from Juice Me`,
                categoryId: category.id
            };
        });

        setProducts(selectedProducts);
    }, [currentLanguage]); // Reruns when language changes to get correct text
        
    return (
        <section id="bestsellers" className="py-20 sm:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{uiTexts.productShowcaseTitle}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((p, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col">
                            <div className="relative">
                                <img src={p.image} alt={p.alt} className="w-full h-64 object-cover content-image" />
                                <div className="absolute top-4 right-4 bg-amber-300 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{uiTexts.productShowcaseBestseller}</div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-800">{p.name}</h3>
                                <p className="text-slate-600 mt-2 mb-4 flex-grow min-h-[4rem]">{p.desc}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <p className="text-2xl font-bold text-rose-500">{p.price} {uiTexts.currency}</p>
                                    <button onClick={() => navigateTo('menu', `#${p.categoryId}`)} className="px-6 py-2 bg-rose-400 text-white font-semibold rounded-full hover:bg-rose-500 transition-colors">
                                        {uiTexts.productShowcaseShopNow}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCtaSection: React.FC<{ uiTexts: UITexts, navigateTo: (page: Page, anchor?: string) => void }> = ({ uiTexts, navigateTo }) => {
    return (
        <section className="bg-teal-500">
            <div className="max-w-4xl mx-auto text-center py-16 sm:py-20 px-4">
                 <h2 className="text-4xl font-bold text-white mb-6">{uiTexts.finalCtaTitle}</h2>
                 <button
                    onClick={() => navigateTo('builder')}
                    className="inline-block px-10 py-4 bg-white text-teal-600 font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
                >
                    {uiTexts.finalCtaButton}
                </button>
            </div>
        </section>
    );
}

const Footer: React.FC<{ uiTexts: UITexts, navigateTo: (page: Page, anchor?: string) => void, currentLanguage: Language }> = ({ uiTexts, navigateTo, currentLanguage }) => {
    
    const handleFooterLinkClick = (page: Page, anchor?: string) => {
        navigateTo(page, anchor);
    };

    const sitemapLinks = {
        shop: [
            { text: uiTexts.navShopAll, action: () => handleFooterLinkClick('menu') },
            { text: uiTexts.navShopCleanses, action: () => handleFooterLinkClick('menu', '#cold-pressed') },
            { text: uiTexts.navShopBuild, action: () => handleFooterLinkClick('builder') },
        ],
        whyUs: [
            { text: uiTexts.navOurStory, action: () => handleFooterLinkClick('landing', '#our-story') },
            { text: uiTexts.navWhyColdPressed, action: () => handleFooterLinkClick('cold-pressed-info') },
            { text: uiTexts.navOurIngredients, action: () => handleFooterLinkClick('landing', '#why-us') },
            { text: uiTexts.navReviews, action: () => handleFooterLinkClick('landing', '#reviews') },
        ],
        learn: [
            { text: uiTexts.navBible, action: () => handleFooterLinkClick('landing', '#bible') },
            { text: uiTexts.navFAQ, action: () => handleFooterLinkClick('landing', '#faq') },
            { text: uiTexts.navBlog, action: () => {} },
        ]
    };

    return (
        <footer id="contact" className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Sitemap Columns */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{uiTexts.navShop}</h3>
                            <ul className="mt-4 space-y-4">
                                {sitemapLinks.shop.map(link => (
                                    <li key={link.text}><button onClick={link.action} className="text-base text-slate-600 hover:text-rose-500 transition-colors">{link.text}</button></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{uiTexts.navWhyUs}</h3>
                            <ul className="mt-4 space-y-4">
                                {sitemapLinks.whyUs.map(link => (
                                    <li key={link.text}><button onClick={link.action} className="text-base text-slate-600 hover:text-rose-500 transition-colors">{link.text}</button></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8">
                         <div>
                            <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{uiTexts.navLearn}</h3>
                            <ul className="mt-4 space-y-4">
                                {sitemapLinks.learn.map(link => (
                                    <li key={link.text}>
                                        <button 
                                            onClick={link.action} 
                                            className={`text-base text-slate-600 ${link.text === uiTexts.navBlog ? 'opacity-50 cursor-not-allowed' : 'hover:text-rose-500'} transition-colors`}
                                            disabled={Boolean(link.text === uiTexts.navBlog)}
                                        >
                                            {link.text} {link.text === uiTexts.navBlog ? `(${currentLanguage === Language.TH ? 'เร็วๆ นี้' : 'Soon'})` : ''}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-4 text-slate-600">
                        <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{uiTexts.contactTitle}</h3>
                        <p>{uiTexts.contactAddress}</p>
                        <p>{uiTexts.contactHours}</p>
                        <p>{uiTexts.contactPhone}</p>
                        <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-slate-200 aspect-[5/3]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.1452722909276!2d99.82631827515648!3d17.01654288380875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de553697cf7d19%3A0x383e271ceb95f64b!2sJuice%20Me!5e0!3m2!1sen!2sth!4v1752245409795!5m2!1sen!2sth"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Juice Me Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                         <div className="flex items-center">
                            <img src="https://i.postimg.cc/xCK6YWWc/juice-me-logo-color.png" alt="Juice Me Company Logo" className="h-10 w-10 content-image" />
                            <span className="ml-3 text-xl font-bold text-rose-500">Juice Me</span>
                        </div>
                        <p className="mt-4 md:mt-0 text-base text-slate-500">
                            &copy; {new Date().getFullYear()} Juice Me. {uiTexts.footerRights}.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};


interface LandingPageProps {
  uiTexts: UITexts;
  navigateTo: (page: Page, anchor?: string) => void;
  currentLanguage: Language;
}

export const LandingPage: React.FC<LandingPageProps> = ({ uiTexts, navigateTo, currentLanguage }) => {
    return (
        <div className="bg-white">
            <HeroSection uiTexts={uiTexts} />
            <main>
                <div className="fade-in-section">
                    <SuperfoodSpotlightSection uiTexts={uiTexts} currentLanguage={currentLanguage} />
                </div>
                <div className="fade-in-section">
                    <ProblemPromiseSection uiTexts={uiTexts} />
                </div>
                <div className="fade-in-section">
                    <ValuePropositionSection uiTexts={uiTexts} navigateTo={navigateTo}/>
                </div>
                <div className="fade-in-section">
                    <SocialProofSection uiTexts={uiTexts} />
                </div>
                <div className="fade-in-section">
                    <ProductShowcaseSection uiTexts={uiTexts} navigateTo={navigateTo} currentLanguage={currentLanguage} />
                </div>
                <div className="fade-in-section">
                    <BlenderBibleSection uiTexts={uiTexts} />
                </div>
                <div className="fade-in-section">
                    <FaqSection uiTexts={uiTexts} currentLanguage={currentLanguage} />
                </div>
                <div className="fade-in-section">
                    <FinalCtaSection uiTexts={uiTexts} navigateTo={navigateTo} />
                </div>
            </main>
            <Footer uiTexts={uiTexts} navigateTo={navigateTo} currentLanguage={currentLanguage} />
        </div>
    );
};
