
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Play, 
  Star, 
  Clock, 
  Shield, 
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  Zap,
  Video,
  Monitor,
  Calendar,
  AlertTriangle,
  Users,
  MessageSquare
} from 'lucide-react';
import { getLocalizedModules, getLocalizedFeatures, TESTIMONIALS } from './constants';
import AICounselor from './components/AICounselor';
import LanguageSelector from './components/LanguageSelector';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const t = translations[lang] || translations.en;
  const modules = getLocalizedModules(lang);
  const features = getLocalizedFeatures(lang);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-amazon-orange/30 selection:text-white bg-black text-white overflow-x-hidden">
      <AICounselor lang={lang} />

      {/* Sticky Urgency Bar */}
      <div className="sticky top-0 z-50 orange-gradient text-white py-1.5 px-4 shadow-lg flex flex-wrap items-center justify-center gap-4 text-[11px] md:text-sm font-black uppercase tracking-tighter">
        <div className="flex items-center gap-1.5">
          <AlertTriangle size={14} fill="white" className="text-amazon-orange" />
          <span>{t.urgency.batch}</span>
          <div className="w-24 h-2 bg-black/20 rounded-full overflow-hidden inline-block mx-2">
            <div className="bg-white h-full w-[89%]"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{t.urgency.time}: <span className="bg-black text-amazon-orange px-2 py-0.5 rounded font-mono">{formatTime(timeLeft)}</span>{t.urgency.seconds}</span>
          <button onClick={() => scrollToSection('apply')} className="bg-white text-amazon-orange px-3 py-0.5 rounded-full hover:bg-black hover:text-white transition-all">
            GRAB SLOT
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="orange-gradient w-8 h-8 rounded-md flex items-center justify-center neon-border animate-pulse-orange">
              <Zap className="text-white w-5 h-5" fill="white" />
            </div>
            <span className="text-xl font-extrabold tracking-tighter uppercase italic">AMAZON<span className="text-amazon-orange">SEEKHO</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-black">
            <button onClick={() => scrollToSection('about')} className="hover:text-amazon-orange transition-colors">{t.nav.info}</button>
            <button onClick={() => scrollToSection('curriculum')} className="hover:text-amazon-orange transition-colors">{t.nav.syllabus}</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-amazon-orange transition-colors">{t.nav.reviews}</button>
            <LanguageSelector currentLang={lang} onLangChange={setLang} />
            <button 
              onClick={() => scrollToSection('apply')}
              className="orange-gradient text-white px-6 py-2.5 rounded shadow-xl shadow-amazon-orange/20 hover:scale-105 transition-transform"
            >
              {t.nav.apply}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageSelector currentLang={lang} onLangChange={setLang} />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 bg-white/5 rounded">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl font-black uppercase italic animate-in">
          <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}><X size={40} /></button>
          <button onClick={() => scrollToSection('about')}>{t.nav.info}</button>
          <button onClick={() => scrollToSection('curriculum')}>{t.nav.syllabus}</button>
          <button onClick={() => scrollToSection('reviews')}>{t.nav.reviews}</button>
          <button 
            onClick={() => scrollToSection('apply')}
            className="orange-gradient text-white px-10 py-5 rounded-md"
          >
            {t.nav.apply}
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-96 text-amazon-orange animate-wave" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="currentColor" className="opacity-40 animate-[move-forever_25s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="5" fill="currentColor" className="opacity-20 animate-[move-forever_15s_linear_infinite]" />
            </g>
          </svg>
        </div>
        
        <style>{`
          @keyframes move-forever {
            0% { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
          }
        `}</style>

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amazon-orange/10 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-amazon-orange/10 px-4 py-2 rounded border border-amazon-orange/20 text-amazon-orange text-[10px] font-black tracking-[0.3em] uppercase">
              <TrendingUp size={14} className="animate-pulse" />
              {t.hero.badge}
            </div>
            
            <h1 className="text-[40px] sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tighter uppercase italic">
              {t.hero.title}
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('apply')}
                className="w-full sm:w-auto px-12 py-6 orange-gradient text-white font-black text-2xl rounded shadow-[0_10px_60px_rgba(255,153,0,0.4)] transition-all transform hover:-translate-y-2 hover:brightness-110 uppercase italic"
              >
                {t.hero.cta}
              </button>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Masterclass Fee</span>
                <span className="text-sm font-bold text-green-500 animate-pulse">LOCKED AT ₹99 TODAY</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center text-[11px] text-gray-400 font-black uppercase tracking-widest">
              {t.hero.benefits.map((benefit: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amazon-orange" /> {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-amazon-orange/20 rounded-full blur-[120px]"></div>
            <div className="relative glass-card rounded-[2rem] p-4 shadow-3xl">
              <div className="bg-black rounded-xl overflow-hidden aspect-video relative group">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Amazon Training"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="space-y-4">
                    <div className="w-24 h-24 orange-gradient rounded-full mx-auto flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-2xl shadow-amazon-orange/40 animate-pulse-orange">
                      <Play fill="white" size={40} className="ml-1" />
                    </div>
                    <p className="text-white font-black uppercase italic text-sm">Preview Masterclass Content</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                   <span className="bg-amazon-orange text-black px-3 py-1 rounded text-[10px] font-black uppercase italic">2 Hours Intensive</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Business Setup</p>
                  <p className="text-2xl font-black text-amazon-orange italic">Done Live</p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Expert Q&A</p>
                  <p className="text-2xl font-black text-amazon-orange italic">Included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="about" className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="glass-card p-12 rounded-[3rem] border-amazon-orange/20 bg-gradient-to-br from-amazon-orange/5 to-transparent">
              <Zap size={60} className="text-amazon-orange mb-8" />
              <h2 className="text-[40px] sm:text-4xl font-black uppercase italic mb-6">The Full Blueprint <br/><span className="text-amazon-orange">For Just ₹99.</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                In just 2 hours, we cut through the noise. We show you how to find products that sell, how to source them locally, and how to get your first order on Amazon.
              </p>
              <ul className="space-y-4">
                {[
                  'Live Step-by-Step Business Setup',
                  'Winning Product Selection Framework',
                  'Live Q&A with Senior Mentors',
                  'Supplier Lists & Sourcing Hacks'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 size={18} className="text-amazon-orange shrink-0" /> {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="space-y-8">
              <div className="text-amazon-orange text-[10px] font-black tracking-[0.4em] uppercase">What you get for ₹99</div>
              <h2 className="text-[40px] sm:text-5xl font-black uppercase italic leading-none">{t.about.title}</h2>
              <p className="text-gray-400 text-lg">{t.about.subtitle}</p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                 {features.slice(0, 4).map((f, i) => (
                   <div key={i} className="space-y-3">
                      <div className="w-12 h-12 glass-card flex items-center justify-center rounded-xl text-amazon-orange">{f.icon}</div>
                      <p className="font-bold text-sm uppercase">{f.title}</p>
                   </div>
                 ))}
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <MessageSquare className="text-amazon-orange" size={24} />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 italic">BONUS SESSION</p>
                  <p className="text-sm font-bold">30-Min Live Q&A at the end of Masterclass</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-10">
              <div className="space-y-4">
                <h2 className="text-[40px] sm:text-5xl md:text-6xl font-black leading-tight uppercase italic whitespace-normal break-words">{t.curriculum.title}</h2>
                <p className="text-gray-400 text-lg">{t.curriculum.subtitle}</p>
              </div>
              
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-2xl group hover:border-amazon-orange/50 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amazon-orange/10 rounded-full flex items-center justify-center text-amazon-orange"><Monitor /></div>
                    <div>
                      <span className="block font-black uppercase text-sm tracking-tighter">{t.curriculum.live}</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">{t.curriculum.sunday}</span>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amazon-orange/10 rounded-full flex items-center justify-center text-amazon-orange"><Clock /></div>
                    <div>
                      <span className="block font-black uppercase text-sm tracking-tighter">{t.curriculum.recorded}</span>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">Watch any time after live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, idx) => (
                <div key={idx} className="glass-card p-10 rounded-[2rem] hover:bg-amazon-orange/5 transition-all border-white/5 relative group">
                  <span className="absolute top-6 right-10 text-8xl font-black text-white/5 group-hover:text-amazon-orange/10 transition-colors italic leading-none">{idx + 1}</span>
                  <h4 className="text-2xl font-black uppercase italic mb-8 relative z-10">{module.title}</h4>
                  <ul className="space-y-4 relative z-10">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-gray-400 text-sm flex items-start gap-3 font-medium">
                        <ArrowRight size={14} className="mt-1 text-amazon-orange shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 flex justify-center lg:justify-end">
            <button 
              onClick={() => scrollToSection('apply')}
              className="px-12 py-5 orange-gradient text-white font-black text-xl rounded-2xl shadow-xl shadow-amazon-orange/20 hover:scale-105 transition-transform flex items-center gap-3 uppercase italic"
            >
              Start Learning Now For ₹99
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amazon-orange/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-amazon-orange font-black tracking-[0.4em] uppercase text-xs">Testimonials</h3>
            <h2 className="text-[40px] sm:text-7xl font-black uppercase italic leading-none">{t.nav.reviews}</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm italic">Join 50,000+ Indians who started their journey with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-amazon-orange/30 transition-all group flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="flex gap-1 text-amazon-orange">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <div className="relative">
                    <p className="text-gray-300 italic leading-relaxed relative z-10 text-lg">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/5">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-amazon-orange/20"
                  />
                  <div>
                    <p className="font-black text-white uppercase italic tracking-tighter">{testimonial.name}</p>
                    <p className="text-[10px] font-black text-amazon-orange uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-xs font-black uppercase tracking-widest">
              <Users size={16} className="text-amazon-orange" />
              Verified Amazon Seller Community
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section id="proof" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-amazon-orange font-black tracking-[0.4em] uppercase text-xs">Real Results</h3>
            <h2 className="text-[40px] sm:text-7xl font-black uppercase italic leading-none">{t.proof.title}</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm italic max-w-3xl mx-auto">{t.proof.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border-amazon-orange/20 flex flex-col items-center text-center space-y-4 transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Sales Snapshot</span>
              <p className="text-5xl font-black text-amazon-orange italic">₹66,11,148</p>
              <p className="text-lg font-bold text-white">Ordered Product Sales</p>
              <div className="w-full border-t border-white/10 my-4"></div>
              <div className="flex justify-around w-full">
                <div>
                  <p className="text-3xl font-bold">33,071</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Units Ordered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">29,218</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Total Items</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-600 font-bold uppercase pt-4">From A Single Account</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-amazon-orange/20 flex flex-col items-center text-center space-y-4 md:mt-12 transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Global Snapshot</span>
              <p className="text-5xl font-black text-amazon-orange italic">₹28,291.00</p>
              <p className="text-lg font-bold text-white">Sales Today So Far</p>
              <div className="w-full border-t border-white/10 my-4"></div>
              <div className="flex justify-around w-full">
                <div>
                  <p className="text-3xl font-bold">45</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Open Orders</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Featured Offer %</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-600 font-bold uppercase pt-4">Daily Performance Metrics</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-amazon-orange/20 flex flex-col items-center text-center space-y-4 transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-xs font-black uppercase tracking-widest text-gray-500">Product Performance</span>
              <p className="text-5xl font-black text-amazon-orange italic">₹19,99,938</p>
              <p className="text-lg font-bold text-white">Top Product (30 Days)</p>
              <div className="w-full border-t border-white/10 my-4"></div>
              <div className="flex justify-around w-full">
                <div>
                  <p className="text-3xl font-bold">13,164</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Units Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98,725</p>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Page Views</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-600 font-bold uppercase pt-4">Just One Of Many Winning Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <div className="inline-block glass-card p-8 md:p-24 rounded-[3rem] md:rounded-[5rem] border-amazon-orange/30 relative w-full shadow-[0_30px_100px_rgba(255,153,0,0.2)]">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-amazon-orange/20 rounded-full blur-[100px]"></div>
                
                <h2 className="text-[40px] sm:text-6xl md:text-8xl font-black text-white uppercase italic leading-none mb-6 md:mb-12">
                  {t.ctaSection.title}
                </h2>
                <p className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto mb-10 md:mb-20">
                  {t.ctaSection.subtitle}
                </p>

                {/* Container for the form - overflow removed to support sticky child */}
                <div className="bg-black border border-white/10 p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] max-w-5xl mx-auto space-y-10 md:space-y-14 shadow-2xl relative z-10">
                  <div className="flex justify-between items-center text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-gray-500 px-2">
                    <span>{t.ctaSection.fee}</span>
                    <span className="text-amazon-orange">{t.ctaSection.lifetime}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-8 md:pb-12 gap-4">
                    <span className="text-5xl sm:text-7xl md:text-[10rem] font-black text-white italic leading-none">₹99</span>
                    <span className="text-lg sm:text-3xl md:text-5xl text-gray-600 line-through italic opacity-50">₹4,999</span>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6 md:space-y-10">
                    <div className="relative group">
                      <input 
                        type="tel" 
                        placeholder={t.ctaSection.placeholder} 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-[2.5rem] py-6 md:py-12 px-6 md:px-16 text-white text-xl md:text-5xl font-black placeholder-gray-700 focus:ring-4 focus:ring-amazon-orange/30 outline-none transition-all text-center tracking-normal md:tracking-widest"
                        required
                      />
                    </div>
                    {/* Sticky Button Implementation */}
                    <button 
                      type="submit" 
                      className="w-full orange-gradient text-white py-6 md:py-10 rounded-2xl md:rounded-[2.5rem] font-black text-xl md:text-4xl uppercase italic shadow-2xl shadow-amazon-orange/50 hover:scale-[1.01] active:scale-95 transition-all sticky bottom-4 md:bottom-8 z-30"
                    >
                      {t.ctaSection.enroll}
                    </button>
                  </form>
                  <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 text-[10px] md:text-sm font-black text-gray-600 uppercase tracking-widest pt-4 md:pt-8">
                    <div className="flex items-center gap-2 md:gap-3"><Shield size={18} className="text-amazon-orange" /> {t.ctaSection.gateway}</div>
                    <div className="flex items-center gap-2 md:gap-3"><TrendingUp size={18} className="text-amazon-orange" /> {t.ctaSection.slots}</div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-amazon-orange" fill="currentColor" size={32} />
            <span className="text-3xl font-black tracking-tighter uppercase italic">AMAZON<span className="text-amazon-orange">SEEKHO</span></span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto text-sm font-medium mb-12 uppercase tracking-tight">
            The mission of AmazonSeekho is to empower 1 Million Indians to start their own businesses with zero risk and absolute schedule flexibility.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-12">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Course</button>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Contact Support</button>
          </div>
          <div className="text-[10px] text-gray-700 font-black uppercase tracking-[0.5em]">
            &copy; 2024 AMAZONSEEKHO.COM | PURE BLACK EDITION
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
