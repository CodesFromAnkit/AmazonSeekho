import React from 'react';
import { Package, Search, Truck, TrendingUp, DollarSign, ShieldCheck, Video, Users } from 'lucide-react';
import { Module, Testimonial } from './types';
import { Language } from './translations';

export const getLocalizedModules = (lang: Language): Module[] => {
  const content: Record<Language, Module[]> = {
    en: [
      { title: "Quick Start: The Amazon Model", topics: ["FBA vs FBM: Choosing your path", "Registration roadmap", "Market potential in India"] },
      { title: "The 30-Min Product Hunt", topics: ["Finding winning products", "Analyzing demand", "Profit calculation"] },
      { title: "Supplier & Logistics Blitz", topics: ["Local Indian hubs", "Shipping to Amazon", "Packaging"] },
      { title: "Sales Injection", topics: ["Listing optimization", "PPC basics", "Getting reviews"] }
    ],
    hi: [
      { title: "त्वरित शुरुआत: अमेज़न मॉडल", topics: ["FBA बनाम FBM: अपना रास्ता चुनना", "पंजीकरण रोडमैप", "भारत में बाजार की क्षमता"] },
      { title: "30-मिनट का उत्पाद हंट", topics: ["विजेता उत्पाद ढूँढना", "मांग का विश्लेषण", "लाभ गणना"] },
      { title: "आपूर्तिकर्ता और रसद ब्लिट्ज", topics: ["स्थानीय भारतीय केंद्र", "अमेज़न को शिपिंग", "पैकेजिंग"] },
      { title: "बिक्री इंजेक्शन", topics: ["लिस्टिंग अनुकूलन", "पीपीसी मूल बातें", "समीक्षा प्राप्त करना"] }
    ],
    mr: [
      { title: "त्वरित सुरुवात: ॲमेझॉन मॉडेल", topics: ["FBA वि FBM: तुमचा मार्ग निवडणे", "नोंदणी रोडमॅप", "भारतातील बाजारपेठ"] },
      { title: "30-मिनिटांचा प्रॉडक्ट हंट", topics: ["विजेता उत्पादने शोधणे", "मागणीचे विश्लेषण", "नफा गणना"] },
      { title: "पुरवठादार आणि रसद", topics: ["स्थानिक भारतीय हब", "ॲमेझॉनला शिपिंग", "पॅकेजिंग"] },
      { title: "विक्री वाढवा", topics: ["लिस्टिंग ऑप्टिमायझेशन", "पीपीसी बेसिक्स", "रिव्ह्यू मिळवणे"] }
    ],
    bn: [
      { title: "কুইক স্টার্ট: অ্যামাজন মডেল", topics: ["FBA বনাম FBM: আপনার পথ নির্বাচন", "রেজিস্ট্রেশন রোডম্যাপ", "ভারতের বাজারের সম্ভাবনা"] },
      { title: "৩০-মিনিটের প্রোডাক্ট হান্ট", topics: ["উইনিং প্রোডাক্ট খোঁজা", "চাহিদা বিশ্লেষণ", "লাভ গণনা"] },
      { title: "সরবরাহকারী এবং লজিস্টিকস", topics: ["স্থানীয় ভারতীয় কেন্দ্র", "অ্যামাজনে শিপিং", "প্যাকেজিং"] },
      { title: "সেলস ইনজেকশন", topics: ["লিস্টিং অপ্টিমাইজেশান", "পিপিসি বেসিকস", "রিভিউ পাওয়া"] }
    ],
    ta: [
      { title: "விரைவு தொடக்கம்: அமேசான் மாடல்", topics: ["FBA vs FBM: உங்கள் பாதையைத் தேர்ந்தெடுப்பது", "பதிவு வழிகாட்டி", "இந்திய சந்தை திறன்"] },
      { title: "30-நிமிட தயாரிப்பு வேட்டை", topics: ["வெற்றிபெறும் தயாரிப்புகளைக் கண்டறிதல்", "தேவை பகுப்பாய்வு", "லாபக் கணக்கீடு"] },
      { title: "சப்ளையர் & லாஜிஸ்டிக்ஸ்", topics: ["உள்ளூர் இந்திய மையங்கள்", "அமேசானுக்கு அனுப்புதல்", "பேக்கேஜிங்"] },
      { title: "விற்பனை அதிகரிப்பு", topics: ["பட்டியல் மேம்படுத்தல்", "பிபிசி அடிப்படைகள்", "மதிப்புரைகளைப் பெறுதல்"] }
    ],
    te: [
      { title: "త్వరిత ప్రారంభం: అమెజాన్ మోడల్", topics: ["FBA vs FBM: మీ మార్గాన్ని ఎంచుకోవడం", "రిజిస్ట్రేషన్ రోడ్‌మ్యాప్", "భారత మార్కెట్ సామర్థ్యం"] },
      { title: "30-నిమిషాల ఉత్పత్తి వేట", topics: ["గెలుపొందే ఉత్పత్తులను కనుగొనడం", "డిమాండ్ విశ్లేషణ", "లాభాల గణన"] },
      { title: "సరఫరాదారు మరియు లాజిస్టిక్స్", topics: ["స్థానిక భారతీయ కేంద్రాలు", "అమెజాన్‌కు షిప్పింగ్", "ప్యాకేజింగ్"] },
      { title: "సేల్స్ ఇంజెక్షన్", topics: ["లిస్టింగ్ ఆప్టిమైజేషన్", "PPC బేసిక్స్", "రివ్యూలు పొందడం"] }
    ]
  };
  return content[lang] || content.en;
};

export const getLocalizedFeatures = (lang: Language) => {
  const titles: Record<Language, string[]> = {
    en: ["2-Hour Live Intensive", "Recorded Access", "Zero Background Needed", "Start Earning Fast", "Investment: ₹99", "Vendor List Included"],
    hi: ["2-घंटे का लाइव इंटेंसिव", "रिकॉर्डेड एक्सेस", "शून्य बैकग्राउंड आवश्यक", "तेजी से कमाई शुरू करें", "निवेश: ₹99", "विक्रेता सूची शामिल"],
    mr: ["2-तासांचा लाइव्ह कोर्स", "रेकॉर्डेड एक्सेस", "पार्श्वभूमीची गरज नाही", "लवकर कमाई सुरू करा", "गुंतवणूक: ₹99", "विक्रेता सूची समाविष्ट"],
    bn: ["২-ঘন্টার লাইভ ক্লাস", "রেকর্ডিং সুবিধা", "কোনো অভিজ্ঞতার প্রয়োজন নেই", "দ্রুত আয় শুরু করুন", "বিনিয়োগ: ₹৯৯", "সাপ্লায়ার লিস্ট"],
    ta: ["2-மணிநேர நேரடி பயிற்சி", "பதிவு செய்யப்பட்ட அணுகல்", "முன்னறிவு தேவல்லையா", "விரைவாக சம்பாதிக்கவும்", "முதலீடு: ₹99", "சப்ளையர் பட்டியல்"],
    te: ["2-గంటల లైవ్ ఇంటెన్సివ్", "రికార్డెడ్ యాక్సెస్", "ముందస్తు జ్ఞానం అక్కర్లేదు", "వేగంగా సంపాదించండి", "పెట్టుబాటు: ₹99", "సప్లయర్ లిస్ట్"]
  };
  const icons = [<Video />, <ShieldCheck />, <Users />, <TrendingUp />, <DollarSign />, <Package />];
  const list = titles[lang] || titles.en;
  return list.map((title, i) => ({
    // FIX: Cast element to React.ReactElement<any> to allow passing the className prop
    icon: React.cloneElement(icons[i] as React.ReactElement<any>, { className: "w-8 h-8 text-amazon-orange" }),
    title,
    description: "" // Simplified for translation purposes
  }));
};

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Arjun Mehta", role: "College Student", content: "I'm just a student with no business background. This 2-hour masterclass gave me the exact blueprint. Made ₹12k in my first month!", image: "https://i.pravatar.cc/150?u=arjun" },
  { id: 2, name: "Priya Sharma", role: "Homemaker", content: "The best part is the recorded access. I watched it while the kids were at school. Now I run a successful home-decor store on Amazon.", image: "https://i.pravatar.cc/150?u=priya" },
  { id: 3, name: "Karan Singh", role: "Working Professional", content: "For ₹99, the value is insane. The live session was packed with 'no-fluff' information. Highly recommended for side-hustlers.", image: "https://i.pravatar.cc/150?u=karan" }
];