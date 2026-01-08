
export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'bn';

export const languages: { code: Language; name: string; native: string }[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
];

export const translations: Record<Language, any> = {
  en: {
    nav: { info: 'Course Info', syllabus: 'Syllabus', reviews: 'Reviews', apply: 'Enroll ₹99' },
    urgency: { batch: 'Batch 89% Full', time: 'Closing in', seconds: 's' },
    hero: {
      badge: 'Step-by-Step Business Roadmap',
      title: 'Launch Your Amazon Business In Just 2 Hours.',
      subtitle: 'Master product research, sourcing, and scaling with our live intensive masterclass + Q&A. Start your journey for just ₹99.',
      cta: 'Enroll Now at ₹99',
      benefits: ['Full Business Roadmap', 'Live Q&A Session', '₹99 One-Time Fee'],
      meta: 'Instant Access to Live Session + Recordings'
    },
    about: {
      badge: 'Open for Everyone',
      title: 'No Matter Your Background, You Can Enroll.',
      subtitle: "Whether you are a student, homemaker, or a working professional, this 2-hour session is designed for you to start earning."
    },
    curriculum: {
      title: 'Masterclass Syllabus',
      subtitle: 'A high-speed roadmap to your first sale on Amazon.',
      live: 'Live Interactive Session',
      recorded: 'Lifetime Access',
      timing: 'Live Q&A Included',
      sunday: 'Clear your doubts live with experts!'
    },
    proof: {
      title: "The Proof is in the Payouts",
      subtitle: "Our students aren't just learning, they're earning. Real dashboards, real results from people who started just like you.",
    },
    ctaSection: {
      title: 'Start Your Business This Sunday.',
      subtitle: 'Get the full roadmap, the supplier lists, and the Q&A support for just ₹99.',
      fee: 'Launch Price',
      lifetime: 'LIFETIME ACCESS',
      enroll: 'Enroll Now at ₹99',
      placeholder: 'Enter WhatsApp Number',
      gateway: 'SECURE CHECKOUT',
      slots: '11 SLOTS LEFT'
    }
  },
  hi: {
    nav: { info: 'कोर्स जानकारी', syllabus: 'सिलेबस', reviews: 'सफलता', apply: '₹99 नामांकन' },
    urgency: { batch: 'बैच 89% फुल', time: 'समाप्त होगा', seconds: 's' },
    hero: {
      badge: 'स्टेप-बाय-स्टेप बिजनेस रोडमैप',
      title: 'सिर्फ 2 घंटे में अपना अमेज़न बिजनेस शुरू करें।',
      subtitle: 'हमारे लाइव मास्टरक्लास + Q&A के साथ उत्पाद अनुसंधान, सोर्सिंग और स्केलिंग में महारत हासिल करें। मात्र ₹99 में अपनी यात्रा शुरू करें।',
      cta: 'Enroll Now at ₹99',
      benefits: ['पूर्ण बिजनेस रोडमैप', 'लाइव प्रश्नोत्तर सत्र', '₹99 एक बार शुल्क'],
      meta: 'लाइव सत्र + रिकॉर्डिंग तक तुरंत पहुंच'
    },
    about: {
      badge: 'सबके लिए खुला',
      title: 'आपका बैकग्राउंड चाहे जो भी हो, आप नामांकन कर सकते हैं।',
      subtitle: "चाहे आप छात्र हों, गृहिणी हों, या कामकाजी पेशेवर, यह 2 घंटे का सत्र आपके लिए ही बना है।"
    },
    curriculum: {
      title: 'मास्टरक्लास सिलेबस',
      subtitle: 'अमेज़न पर आपकी पहली बिक्री के लिए एक हाई-स्पीड रोडमैप।',
      live: 'लाइव इंटरएक्टिव सेशन',
      recorded: 'लाइफटाइम एक्सेस',
      timing: 'लाइव Q&A शामिल',
      sunday: 'विशेषज्ञों के साथ लाइव अपनी शंकाओं को दूर करें!'
    },
    proof: {
      title: "सबूत भुगतान में है",
      subtitle: "हमारे छात्र सिर्फ सीख नहीं रहे हैं, वे कमा रहे हैं। आपकी तरह ही शुरुआत करने वाले लोगों के असली डैशबोर्ड, असली परिणाम।",
    },
    ctaSection: {
      title: 'इस रविवार अपना बिजनेस शुरू करें।',
      subtitle: 'मात्र ₹99 में पूर्ण रोडमैप, आपूर्तिकर्ता सूची और Q&A समर्थन प्राप्त करें।',
      fee: 'लॉन्च प्राइस',
      lifetime: 'लाइफटाइम एक्सेस',
      enroll: 'Enroll Now at ₹99',
      placeholder: 'व्हाट्सएप नंबर दर्ज करें',
      gateway: 'सुरक्षित चेकआउट',
      slots: '11 सीटें बची हैं'
    }
  },
  mr: {
    nav: { info: 'माहिती', syllabus: 'अभ्यासक्रम', reviews: 'यश', apply: '₹99 प्रवेश' },
    urgency: { batch: 'बॅच 89% फुल', time: 'वेळ शिल्लक', seconds: 's' },
    hero: {
      badge: 'स्टेप-बाय-स्टेप बिझनेस रोडमॅप',
      title: 'फक्त २ तासांत तुमचा ॲमेझॉन बिझनेस सुरू करा.',
      subtitle: 'आमच्या लाइव्ह मास्टरक्लाससह प्रॉडक्ट रिसर्च आणि सोर्सिंग शिका. फक्त ₹९९ मध्ये तुमचा प्रवास सुरू करा.',
      cta: 'Enroll Now at ₹99',
      benefits: ['पूर्ण बिझनेस रोडमॅप', 'लाइव्ह Q&A सेशन', '₹९९ वन-टाइम फी'],
      meta: 'लाइव्ह सेशन + रेकॉर्डिंगमध्ये त्वरित प्रवेश'
    },
    about: {
      badge: 'सर्वांसाठी खुले',
      title: 'तुमची पार्श्वभूमी काहीही असो, तुम्ही प्रवेश घेऊ शकता.',
      subtitle: "तुम्ही विद्यार्थी असाल, गृहिणी असाल किंवा नोकरी करत असाल, हे २ तासांचे सत्र तुमच्यासाठीच आहे."
    },
    curriculum: {
      title: 'मास्टरक्लास अभ्यासक्रम',
      subtitle: 'तुमच्या पहिल्या विक्रीसाठी वेगवान रोडमॅप.',
      live: 'लाइव्ह इंटरएक्टिव्ह सेशन',
      recorded: 'लाइफटाइम एक्सेस',
      timing: 'लाइव्ह Q&A समाविष्ट',
      sunday: 'तज्ञांसह तुमच्या शंकांचे निरसन करा!'
    },
    proof: {
      title: "पुरावा पेआउटमध्ये आहे",
      subtitle: "आमचे विद्यार्थी फक्त शिकत नाहीत, तर ते कमाई करत आहेत. तुमच्यासारखीच सुरुवात केलेल्या लोकांचे खरे डॅशबोर्ड, खरे परिणाम.",
    },
    ctaSection: {
      title: 'या रविवारी तुमचा व्यवसाय सुरू करा.',
      subtitle: 'केवळ ₹९९ मध्ये पूर्ण रोडमॅप आणि Q&A सपोर्ट मिळवा.',
      fee: 'प्रवेश शुल्क',
      lifetime: 'लाइफटाइम एक्सेस',
      enroll: 'Enroll Now at ₹99',
      placeholder: 'व्हॉट्सॲप नंबर टाका',
      gateway: 'सुरक्षित पेमेंट',
      slots: '11 जागा शिल्लक'
    }
  },
  bn: {
    nav: { info: 'তথ্য', syllabus: 'সিলেবাস', reviews: 'সাফল্য', apply: '₹৯৯-এ শুরু' },
    urgency: { batch: 'ব্যাচ ৮৯% ফুল', time: 'বাকি সময়', seconds: 's' },
    hero: {
      badge: 'ধাপে ধাপে বিজনেস রোডম্যাপ',
      title: 'মাত্র ২ ঘন্টায় আপনার অ্যামাজন ব্যবসা শুরু করুন।',
      subtitle: 'আমাদের লাইভ মাস্টারক্লাস এবং Q&A সেশনের মাধ্যমে অ্যামাজনে সফল হওয়ার কৌশল শিখুন। মাত্র ₹৯৯-এ।',
      cta: 'Enroll Now at ₹99',
      benefits: ['সম্পূর্ণ বিজনেস রোডম্যাপ', 'লাইভ প্রশ্ন-উত্তর সেশন', '₹৯৯ এককালীন ফি'],
      meta: 'লাইভ সেশন + রেকর্ডিং-এ তাৎক্ষণিক অ্যাক্সেস'
    },
    about: {
      badge: 'সবার জন্য উন্মুক্ত',
      title: 'আপনার ব্যাকগ্রাউন্ড যাই হোক না কেন, আপনি যোগ দিতে পারেন।',
      subtitle: "আপনি ছাত্র, গৃহিণী বা চাকরিজীবী হোন না কেন, এই ২ ঘন্টার সেশনটি আপনার জন্য।"
    },
    curriculum: {
      title: 'মাস্টারক্লাস সিলেবাস',
      subtitle: 'আপনার প্রথম বিক্রির জন্য একটি দ্রুত রোডম্যাপ।',
      live: 'লাইভ সেশন',
      recorded: 'লাইফটাইম অ্যাক্সেস',
      timing: 'লাইভ Q&A অন্তর্ভুক্ত',
      sunday: 'বিশেষজ্ঞদের সাথে লাইভ কথা বলুন!'
    },
    proof: {
      title: "প্রমাণটি অর্থপ্রদানে রয়েছে",
      subtitle: "আমাদের ছাত্ররা শুধু শিখছে না, তারা উপার্জন করছে। আপনার মতো শুরু করা লোকেদের কাছ থেকে আসল ড্যাশবোর্ড, আসল ফলাফল।",
    },
    ctaSection: {
      title: 'এই রবিবার ব্যবসা শুরু করুন।',
      subtitle: 'মাত্র ₹৯৯-এ সম্পূর্ণ রোডম্যাপ, সাপ্লায়ার লিস্ট এবং সাপোর্ট পান।',
      fee: 'লঞ্চ প্রাইস',
      lifetime: 'লাইফটাইম অ্যাক্সেস',
      enroll: 'Enroll Now at ₹99',
      placeholder: ' হোয়াটসঅ্যাপ নম্বর দিন',
      gateway: 'নিরাপদ পেমেন্ট',
      slots: '১১টি আসন বাকি'
    }
  },
  ta: {
    nav: { info: 'தகவல்', syllabus: 'பாடத்திட்டம்', reviews: 'வெற்றி', apply: '₹99-க்கு சேருங்கள்' },
    urgency: { batch: 'பேட்ச் 89% முடிந்தது', time: 'முடிவடைய', seconds: 's' },
    hero: {
      badge: 'படிப்படியான பிசினஸ் ரோடுமேப்',
      title: 'வெறும் 2 மணிநேரத்தில் உங்கள் அமேசான் பிசினஸைத் தொடங்குங்கள்.',
      subtitle: 'எங்கள் நேரடி மாஸ்டர் கிளாஸ் மூலம் தயாரிப்பு ஆராய்ச்சி மற்றும் விற்பனையில் தேர்ச்சி பெறுங்கள். வெறும் ₹99-க்கு.',
      cta: 'Enroll Now at ₹99',
      benefits: ['முழு பிசினஸ் ரோடுமேப்', 'நேரடி கேள்வி-பதில் அமர்வு', '₹99 ஒரு முறை கட்டணம்'],
      meta: 'நேரடி அமர்வு + பதிவுகளுக்கான உடனடி அணுகல்'
    },
    about: {
      badge: 'அனைவருக்கும் அனுமதி',
      title: 'உங்கள் பின்னணி எதுவாக இருந்தாலும் நீங்கள் சேரலாம்.',
      subtitle: "நீங்கள் ஒரு மாணவராகவோ, இல்லத்தரசியாகவோ அல்லது வேலை செய்பவராகவோ இருந்தாலும், இந்த 2 மணிநேர பயிற்சி உங்களுக்கானது."
    },
    curriculum: {
      title: 'மாஸ்டர் கிளாஸ் பாடத்திட்டம்',
      subtitle: 'உங்கள் முதல் விற்பனைக்கான வேகமான வழிகாட்டி.',
      live: 'நேரடி அமர்வு',
      recorded: 'வாழ்நாள் அணுகல்',
      timing: 'நேரடி கேள்வி-பதில்',
      sunday: 'நிபுணர்களுடன் நேரடி கலந்துரையாடல்!'
    },
    proof: {
      title: "சான்று பணம் செலுத்துவதில் உள்ளது",
      subtitle: "எங்கள் மாணவர்கள் கற்றுக்கொள்வது மட்டுமல்ல, அவர்கள் சம்பாதிக்கிறார்கள். உங்களைப் போலவே தொடங்கியவர்களிடமிருந்து உண்மையான டாஷ்போர்டுகள், உண்மையான முடிவுகள்.",
    },
    ctaSection: {
      title: 'இந்த ஞாயிறு உங்கள் பிசினஸைத் தொடங்குங்கள்.',
      subtitle: 'வெறும் ₹99-க்கு முழு ரோடுமேப் மற்றும் நிபுணர் ஆலோசனையைப் பெறுங்கள்.',
      fee: 'அறிமுக விலை',
      lifetime: 'வாழ்நாள் அணுகல்',
      enroll: 'Enroll Now at ₹99',
      placeholder: 'வாட்ஸ்அப் எண்ணை உள்ளிடவும்',
      gateway: 'பாதுகாப்பான கட்டணம்',
      slots: '11 இடங்கள் மட்டுமே'
    }
  },
  te: {
    nav: { info: 'సమాచారం', syllabus: 'సిలబస్', reviews: 'విజయాలు', apply: '₹99 కే చేరండి' },
    urgency: { batch: 'బ్యాచ్ 89% ఫుల్', time: 'ముగిసే సమయం', seconds: 's' },
    hero: {
      badge: 'స్టెప్-బై-స్టెప్ బిజినెస్ రోడ్‌మ్యాప్',
      title: 'కేవలం 2 గంటల్లో మీ అమెజాన్ బిజినెస్ మొదలుపెట్టండి.',
      subtitle: 'మా లైవ్ మాస్టర్ క్లాస్ + Q&A ద్వారా అమెజాన్ సెల్లింగ్‌లో నైపుణ్యం సాధించండి. కేవలం ₹99 కే.',
      cta: 'Enroll Now at ₹99',
      benefits: ['పూర్తి బిజినెస్ రోడ్‌మ్యాప్', 'లైవ్ ప్రశ్నోత్తరాల సెషన్', '₹99 ఒకేసారి ఫీజు'],
      meta: 'లైవ్ సెషన్ మరియు రికార్డింగ్‌లకు తక్షణ యాక్సెస్'
    },
    about: {
      badge: 'కంప్లీట్ సెటప్ గైడ్',
      title: 'మీ బ్యాక్‌గ్రౌండ్ ఏదైనా సరే, మీరు చేరవచ్చు.',
      subtitle: "మీరు విద్యార్థి అయినా, గృహిణి అయినా లేదా ఉద్యోగి అయినా, ఈ 2 గంటల సెషన్ మీకు అనుకూలంగా ఉంటుంది."
    },
    curriculum: {
      title: 'మాస్టర్ క్లాస్ సిలబస్',
      subtitle: 'మీ మొదటి అమ్మకం కోసం వేగవంతమైన రోడ్‌మ్యాప్.',
      live: 'లైవ్ ఇంటరాక్టివ్ సెషన్',
      recorded: 'లైఫ్ టైమ్ యాక్సెస్',
      timing: 'లైవ్ Q&A కూడా ఉంది',
      sunday: 'నిపుణులతో మీ సందేహాలను లైవ్‌లో తీర్చుకోండి!'
    },
    proof: {
      title: "చెల్లింపులలో రుజువు ఉంది",
      subtitle: "మా విద్యార్థులు కేవలం నేర్చుకోవడం లేదు, వారు సంపాదిస్తున్నారు. మీలాగే ప్రారంభించిన వ్యక్తుల నుండి నిజమైన డాష్‌బోర్డ్‌లు, నిజమైన ఫలితాలు.",
    },
    ctaSection: {
      title: 'ఈ ఆదివారం మీ బిజినెస్ మొదలుపెట్టండి.',
      subtitle: 'కేవలం ₹99 కే పూర్తి రోడ్‌మ్యాప్ మరియు Q&A సపోర్ట్ పొందండి.',
      fee: 'లంచ్ ప్రైస్',
      lifetime: 'లైఫ్ టైమ్ యాక్సెస్',
      enroll: 'Enroll Now at ₹99',
      placeholder: 'వాట్సాప్ నంబర్ ఇవ్వండి',
      gateway: 'సురక్షిత పేమెంట్',
      slots: '11 సీట్లు మాత్రమే'
    }
  }
};
