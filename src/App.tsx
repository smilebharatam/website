import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { 
  Stethoscope, 
  TrendingUp, 
  ShieldCheck, 
  Microscope, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Smile, 
  Briefcase, 
  DollarSign, 
  Zap,
  Globe,
  BarChart3,
  Cpu,
  Target,
  Rocket,
  Lock,
  Search,
  ChevronLeft,
  Instagram
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-navy/5" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-navy rounded-2xl flex items-center justify-center text-white shadow-lg shadow-navy/20 group-hover:scale-105 transition-transform duration-300">
            <Smile size={26} className="text-saffron" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className={`text-2xl font-display font-black tracking-tighter ${isScrolled ? "text-navy" : "text-white"}`}>
              SMILE <span className="text-saffron">BHARATHAM</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mt-1 ${isScrolled ? "text-navy/60" : "text-white/60"}`}>
              Dental Infrastructure
            </span>
          </div>
        </button>
        
        <div className={`hidden lg:flex items-center gap-10 font-medium text-sm uppercase tracking-widest ${isScrolled ? "text-navy/80" : "text-white/90"}`}>
          <button onClick={() => scrollToSection('about')} className="hover:text-saffron transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('vision')} className="hover:text-saffron transition-colors relative group">
            Vision
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('models')} className="hover:text-saffron transition-colors relative group">
            Models
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('patients')} className="hover:text-saffron transition-colors relative group">
            Patients
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-navy text-white px-8 py-3 rounded-full hover:bg-navy/90 transition-all shadow-xl shadow-navy/20 font-bold text-xs"
          >
            PARTNER WITH US
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background with Dental Clinic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Dental Infrastructure" 
          className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/80 to-navy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-navy/40 to-navy/90"></div>
        
        {/* Rotating Mandala Background */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] opacity-10 animate-spin-slow pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full text-saffron fill-current">
            <path d="M100 0 A100 100 0 0 1 200 100 A100 100 0 0 1 100 200 A100 100 0 0 1 0 100 A100 100 0 0 1 100 0 M100 20 A80 80 0 0 0 20 100 A80 80 0 0 0 100 180 A80 80 0 0 0 180 100 A80 80 0 0 0 100 20" opacity="0.5" />
            <circle cx="100" cy="100" r="10" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
              <g key={deg} transform={`rotate(${deg} 100 100)`}>
                <path d="M100 20 L110 50 L90 50 Z" />
                <circle cx="100" cy="70" r="5" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 text-saffron text-xs font-black tracking-[0.2em] uppercase mb-8 border border-white/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-saffron animate-pulse"></div>
            India's Premier Dental Infrastructure
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter">
            THE FUTURE OF <br />
            <span className="text-saffron relative inline-block">
              DENTAL CARE
              <span className="absolute -top-2 -right-4 w-4 h-4 bg-white rounded-full blur-sm animate-sparkle opacity-0 group-hover:opacity-100"></span>
            </span> <br />
            IS HERE.
          </h1>
          <p className="text-xl text-white/60 mb-12 max-w-xl leading-relaxed font-light tracking-wide">
            Smile Bharatham is architecting India’s most <span className="text-white font-medium italic serif-italic">structured, technology-integrated</span>, and investment-ready dental healthcare network.
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-saffron text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-500 flex items-center gap-3 group shadow-2xl shadow-saffron/20"
            >
              Explore Models <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => document.getElementById('patients')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-500"
            >
              Patient Portal
            </button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <p className="text-3xl font-display font-black text-white">30%</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">Cost Reduction</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white">100+</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">Partner Clinics</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white">24/7</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">Digital Support</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 p-2 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm shadow-2xl">
            <div className="overflow-hidden rounded-[2.8rem] relative group">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental Professional" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Dental Scan Line */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent shadow-[0_0_15px_rgba(242,125,38,0.8)] animate-scan pointer-events-none"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-navy/5 max-w-[260px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-india-green/10 text-india-green rounded-2xl flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-2xl font-display font-black text-navy leading-none">ROI</p>
                  <p className="text-[10px] text-navy/40 uppercase tracking-widest font-bold">Optimized</p>
                </div>
              </div>
              <p className="text-xs text-navy/60 leading-relaxed font-medium">Transforming independent practices into scalable, highly profitable ecosystems.</p>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-saffron/10 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-navy/20 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-saffron"></div>
                <h2 className="text-xs font-black text-saffron uppercase tracking-[0.4em]">Our Vision</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-display font-black text-navy leading-[1.1] tracking-tighter">
                ARCHITECTING THE <br />
                <span className="text-gold italic serif-italic">Future of Smiles.</span>
              </h3>
              <p className="mt-8 text-lg text-navy/60 leading-relaxed font-light max-w-lg">
                To build India’s most trusted, profitable, and technology-integrated dental network, setting a global benchmark in healthcare infrastructure.
              </p>
            </div>
            
            <div className="p-10 bg-white rounded-[2.5rem] shadow-2xl shadow-navy/5 border border-navy/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-india-green/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <h2 className="text-xs font-black text-india-green uppercase tracking-[0.4em] mb-8 relative z-10">Our Mission</h2>
              <ul className="space-y-8 relative z-10">
                {[
                  { text: "Reduce operating costs by up to 30%", icon: <TrendingUp size={18} /> },
                  { text: "Increase clinic profitability & conversion", icon: <BarChart3 size={18} /> },
                  { text: "Create structured investment opportunities", icon: <Briefcase size={18} /> },
                  { text: "Standardize quality dental care nationally", icon: <Globe size={18} /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 group/item">
                    <div className="w-10 h-10 bg-india-green/5 text-india-green rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-india-green group-hover/item:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-navy/80 font-bold tracking-tight text-lg">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] bg-white rounded-[4rem] shadow-2xl overflow-hidden border-[12px] border-white relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-saffron rounded-[3rem] -z-10 animate-float"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Lotus Motif */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-5 text-navy animate-spin-slow pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                  <path key={deg} transform={`rotate(${deg} 50 50)`} d="M50 50 Q60 20 50 10 Q40 20 50 50" />
                ))}
              </svg>
            </div>
            
            <div className="absolute top-1/2 -right-12 translate-y-[-50%] z-20 hidden xl:block">
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 vertical-rl flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/40">ESTABLISHED 2024</span>
                <div className="w-1 h-12 bg-saffron rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessModels = () => {
  const models = [
    {
      id: "01",
      title: "Clinic Transformation",
      subtitle: "Non-Equity Upgrade",
      target: "Independent Clinic Owners",
      objective: "Increase profitability without ownership dilution.",
      provides: [
        "25–30% reduction in lab expenses",
        "Bulk consumable procurement",
        "Specialist referral network",
        "Branding & marketing support",
        "Operational SOP support"
      ],
      benefits: ["Higher margins", "Stronger brand", "Retention"],
      color: "bg-navy",
      textColor: "text-white",
      icon: <Zap size={32} />
    },
    {
      id: "02",
      title: "New Clinic Setup",
      subtitle: "Franchise Model",
      target: "Young & NRI Dentists",
      objective: "Doctor-Owned, System-Driven Model.",
      provides: [
        "Location feasibility analysis",
        "Interior design & execution",
        "Equipment procurement",
        "Marketing launch strategy",
        "Centralized lab integration"
      ],
      benefits: ["Lower risk", "Faster stabilization", "Mentorship"],
      color: "bg-saffron",
      textColor: "text-white",
      icon: <Rocket size={32} />
    },
    {
      id: "03",
      title: "Investor-Backed",
      subtitle: "Investment Opportunity",
      target: "HNIs & Real Estate Owners",
      objective: "Non-Doctor Healthcare Investment.",
      provides: [
        "Investor funds clinic setup",
        "Smile Bharatham manages ops",
        "Salaried dentist operates",
        "Centralized procurement",
        "Financial reporting & audits"
      ],
      benefits: ["Asset-backed", "Cash-based model", "Resilient"],
      color: "bg-india-green",
      textColor: "text-white",
      icon: <DollarSign size={32} />
    }
  ];

  return (
    <section id="models" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-saffron"></div>
              <h2 className="text-xs font-black text-saffron uppercase tracking-[0.4em]">Business Models</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-display font-black text-navy leading-none tracking-tighter">
              STRATEGIC <br />
              <span className="text-gold italic serif-italic">Partnerships.</span>
            </h3>
          </div>
          <p className="text-lg text-navy/60 max-w-sm leading-relaxed font-light">
            Tailored solutions for existing practitioners, new clinic owners, and visionary healthcare investors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {models.map((model, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -15 }}
              className={`${model.color} ${model.textColor} rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group min-h-[600px] flex flex-col`}
            >
              <div className="absolute top-10 right-10 text-8xl font-display font-black opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                {model.id}
              </div>
              
              <div className="mb-10 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                {model.icon}
              </div>

              <div className="flex-grow">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-3 opacity-60">{model.subtitle}</h4>
                <h5 className="text-3xl font-display font-black mb-8 leading-tight">{model.title}</h5>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Target Audience</p>
                    <p className="font-bold text-lg leading-tight">{model.target}</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">Core Provisions</p>
                    <ul className="space-y-4">
                      {model.provides.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-medium opacity-80">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {model.benefits.map((b, idx) => (
                    <span key={idx} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OperationalAdvantage = () => {
  const advantages = [
    { title: "Centralized Procurement", desc: "Bulk purchasing power reduces material costs by up to 30% for all network partners.", icon: <Zap size={28} /> },
    { title: "Digital Workflow", desc: "Fully integrated EMR and patient management systems for seamless clinic operations.", icon: <Cpu size={28} /> },
    { title: "Marketing Engine", desc: "National brand presence and hyper-local digital marketing driving patient footfall.", icon: <TrendingUp size={28} /> },
    { title: "Quality Assurance", desc: "Standardized clinical protocols and regular audits ensuring premier care delivery.", icon: <ShieldCheck size={28} /> }
  ];

  return (
    <section id="advantage" className="py-32 bg-navy relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(242,125,38,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(52,168,83,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-saffron"></div>
              <h2 className="text-xs font-black text-saffron uppercase tracking-[0.5em]">The Edge</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-display font-black text-white mb-10 leading-[0.9] tracking-tighter">
              OPERATIONAL <br />
              <span className="text-saffron italic serif-italic">Superiority.</span>
            </h3>
            <p className="text-white/60 text-xl mb-12 leading-relaxed font-light">
              We provide the backbone for your success. Our integrated systems allow you to focus on clinical excellence while we handle the business complexity.
            </p>
            
            <div className="space-y-6">
              {["Cost Efficiency", "Revenue Growth", "Quality Standards", "Live Analytics"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/90 font-bold tracking-tight group cursor-default">
                  <div className="w-6 h-6 bg-saffron/20 text-saffron rounded-full flex items-center justify-center shrink-0 group-hover:bg-saffron group-hover:text-navy transition-all duration-300">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 hover:border-saffron/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/5 rounded-full -mr-16 -mt-16 group-hover:bg-saffron/10 transition-colors"></div>
                <div className="w-16 h-16 bg-white/5 text-saffron rounded-2xl flex items-center justify-center mb-10 group-hover:bg-saffron group-hover:text-navy transition-all duration-500 shadow-xl shadow-black/20">
                  {adv.icon}
                </div>
                <h4 className="text-2xl font-display font-black text-white mb-4 tracking-tight">{adv.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PatientSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/patient-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const err = await response.json();
        setError(err.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="patients" className="py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-india-green"></div>
              <h2 className="text-xs font-black text-india-green uppercase tracking-[0.4em]">Patient Care</h2>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-navy mb-10 leading-[0.9] tracking-tighter">
              QUALITY CARE <br />
              <span className="text-india-green italic serif-italic relative inline-block">
                At Your Fingertips.
                <span className="absolute top-0 right-0 w-2 h-2 bg-saffron rounded-full animate-sparkle"></span>
              </span>
            </h1>
            <p className="text-navy/60 text-xl mb-16 leading-relaxed font-light max-w-2xl">
              Smile Bharatham brings standardized, high-quality dental treatments to your neighborhood. Our network ensures you get the best care at transparent prices.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { title: "Transparent Pricing", desc: "Know the cost upfront. No surprises.", icon: <DollarSign className="text-saffron" /> },
                { title: "Top Specialists", desc: "Access to the best dental consultants.", icon: <Users className="text-india-green" /> },
                { title: "Advanced Tech", desc: "Modern digital diagnostics for precision.", icon: <Cpu className="text-navy" /> },
                { title: "Hygiene Standards", desc: "Strict sterilization protocols nationally.", icon: <ShieldCheck className="text-india-green" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white rounded-[2.5rem] shadow-xl shadow-navy/5 border border-navy/5 group hover:bg-navy hover:text-white transition-all duration-500">
                  <div className="w-14 h-14 bg-paper rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-display font-black mb-2 tracking-tight">{item.title}</h5>
                    <p className="text-navy/40 text-xs leading-relaxed font-medium group-hover:text-white/60 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl border border-navy/5 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/5 rounded-full -mr-16 -mt-16"></div>
            <h4 className="text-4xl font-display font-black text-navy mb-3 tracking-tighter">Book Visit</h4>
            <p className="text-navy/40 text-sm mb-10 font-medium">Inquire about prices, services, or book your visit.</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-bold animate-shake">
                {error}
              </div>
            )}

            {success ? (
              <div className="bg-india-green/5 border border-india-green/10 p-12 rounded-[3rem] text-center">
                <div className="w-24 h-24 bg-india-green text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-india-green/20">
                  <CheckCircle2 size={48} />
                </div>
                <h5 className="text-3xl font-display font-black text-navy mb-4 tracking-tight">Request Received!</h5>
                <p className="text-navy/60 text-sm mb-10 leading-relaxed">Our care coordinator will call you within 24 hours to confirm your appointment.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="bg-navy text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-navy/90 transition-all shadow-xl shadow-navy/20"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Full Name</label>
                  <input name="name" type="text" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-india-green transition-all outline-none font-medium text-navy shadow-inner" placeholder="Enter your name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Phone Number</label>
                    <input name="phone" type="tel" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-india-green transition-all outline-none font-medium text-navy shadow-inner" placeholder="Your Phone" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Service</label>
                    <select name="service" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-india-green transition-all outline-none font-medium text-navy shadow-inner appearance-none">
                      <option>General Consultation</option>
                      <option>Dental Implants</option>
                      <option>Braces / Aligners</option>
                      <option>Root Canal Treatment</option>
                      <option>Teeth Whitening</option>
                      <option>Pediatric Dentistry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Email Address</label>
                  <input name="email" type="email" className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-india-green transition-all outline-none font-medium text-navy shadow-inner" placeholder="email@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Message / Inquiry</label>
                  <textarea name="message" rows={4} className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-india-green transition-all outline-none font-medium text-navy shadow-inner resize-none" placeholder="Ask about price, timing, or specific concerns..."></textarea>
                </div>
                <button 
                  disabled={loading || sent}
                  type="submit" 
                  className="w-full bg-india-green text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all shadow-2xl shadow-india-green/20 disabled:opacity-50"
                >
                  {loading ? "Processing..." : sent ? "Sent!" : "Submit Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const WhyDifferent = () => {
  const points = [
    { title: "Dental Ecosystem", icon: <Globe size={24} /> },
    { title: "Cost Optimization", icon: <Zap size={24} /> },
    { title: "Revenue Platform", icon: <TrendingUp size={24} /> },
    { title: "Investment Model", icon: <Briefcase size={24} /> },
    { title: "Scalable Network", icon: <Rocket size={24} /> }
  ];

  return (
    <section className="py-32 bg-india-green text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
        
        {/* Ashoka Chakra Motif */}
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] opacity-20 animate-spin-slow pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[0.5]">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="5" fill="white" />
            {[...Array(24)].map((_, i) => (
              <line key={i} x1="50" y1="50" x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)} y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)} />
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white/40"></div>
              <h2 className="text-xs font-black text-white/60 uppercase tracking-[0.5em]">The Philosophy</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[0.9] tracking-tighter">
              BEYOND <br />
              <span className="text-white/60 italic serif-italic">Traditional Clinics.</span>
            </h3>
            <p className="text-white/70 text-xl mb-12 leading-relaxed font-light max-w-xl">
              "We are not building clinics. We are building dental infrastructure." — This core belief drives every decision we make.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all cursor-default group">
                  <div className="text-white/60 group-hover:text-white transition-colors shrink-0">{p.icon}</div>
                  <span className="font-black text-xs uppercase tracking-widest">{p.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-16 bg-white rounded-[4rem] shadow-2xl text-navy relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-india-green/5 rounded-full -mr-20 -mt-20"></div>
              <h4 className="text-xs font-black text-india-green uppercase tracking-[0.4em] mb-10">Future Integration</h4>
              <ul className="space-y-10">
                {[
                  { title: "Digital Clinic Management", desc: "Live performance dashboards and referral tracking for complete visibility.", icon: <Cpu size={24} /> },
                  { title: "Inventory Analytics", desc: "AI-assisted case planning and supply chain optimization to reduce waste.", icon: <BarChart3 size={24} /> },
                  { title: "Technology Advantage", desc: "Long-term edge through integrated digital systems and shared innovation.", icon: <Zap size={24} /> }
                ].map((item, i) => (
                  <li key={i} className="flex gap-8 group">
                    <div className="w-14 h-14 bg-india-green/5 text-india-green rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-india-green group-hover:text-white transition-all duration-500 shadow-lg shadow-india-green/5">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-display font-black mb-2 tracking-tight">{item.title}</h5>
                      <p className="text-navy/40 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      interest: formData.get('interest'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const err = await response.json();
        setError(err.error || 'Failed to send inquiry');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-paper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-navy"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-navy/5">
          <div className="lg:w-2/5 bg-navy p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(242,125,38,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-saffron"></div>
                <h2 className="text-xs font-black text-saffron uppercase tracking-[0.5em]">Connect</h2>
              </div>
              <h3 className="text-5xl font-display font-black mb-10 leading-[0.9] tracking-tighter">
                PARTNER <br />
                <span className="text-saffron italic serif-italic">With Us.</span>
              </h3>
              <p className="text-white/60 text-lg mb-16 leading-relaxed font-light">
                Join India's most structured dental healthcare network. Whether you're a doctor or an investor, we have a model for you.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-white/5 text-saffron rounded-3xl flex items-center justify-center group-hover:bg-saffron group-hover:text-navy transition-all duration-500 shadow-xl shadow-black/20">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-black mb-1">Email Us</p>
                    <p className="text-xl font-display font-black tracking-tight">support@smilebharatham.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-white/5 text-saffron rounded-3xl flex items-center justify-center group-hover:bg-saffron group-hover:text-navy transition-all duration-500 shadow-xl shadow-black/20">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-black mb-1">Call Us</p>
                    <p className="text-xl font-display font-black tracking-tight">+91 96001 96088</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-12 md:p-20 bg-white">
            {error && (
              <div className="mb-8 p-5 bg-red-50 border border-red-100 text-red-600 rounded-3xl text-sm font-bold">
                {error}
              </div>
            )}
            
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 bg-saffron text-white rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-saffron/30">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-4xl font-display font-black text-navy mb-4 tracking-tight">Inquiry Sent!</h4>
                <p className="text-navy/40 text-lg mb-12 max-w-sm font-medium">Thank you for your interest. Our partnership team will review your details and contact you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="bg-navy text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-navy/90 transition-all shadow-xl shadow-navy/20"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Full Name</label>
                    <input name="name" type="text" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-saffron transition-all outline-none font-medium text-navy shadow-inner" placeholder="Enter Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Interest</label>
                    <select name="interest" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-saffron transition-all outline-none font-medium text-navy shadow-inner appearance-none">
                      <option>Existing Clinic Upgrade</option>
                      <option>New Franchise</option>
                      <option>Investor Model</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Phone Number</label>
                    <input name="phone" type="tel" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-saffron transition-all outline-none font-medium text-navy shadow-inner" placeholder="Phone Number" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Email Address</label>
                    <input name="email" type="email" required className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-saffron transition-all outline-none font-medium text-navy shadow-inner" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] ml-4">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-paper border-transparent rounded-2xl px-8 py-5 focus:bg-white focus:ring-2 focus:ring-saffron transition-all outline-none font-medium text-navy shadow-inner resize-none" placeholder="How can we collaborate?"></textarea>
                </div>
                <button 
                  disabled={loading || sent}
                  type="submit" 
                  className="w-full bg-saffron text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl shadow-saffron/20 disabled:opacity-50"
                >
                  {loading ? "Processing..." : sent ? "Sent!" : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy pt-32 pb-16 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-saffron rounded-2xl flex items-center justify-center text-white shadow-lg shadow-saffron/20">
                <Smile size={28} />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter">
                Smile <span className="text-saffron italic serif-italic">Bharatham</span>
              </span>
            </div>
            <p className="text-white/40 text-lg mb-12 max-w-md leading-relaxed font-medium">
              Building India’s most trusted, profitable, and technology-integrated dental network. Empowering doctors, serving patients.
            </p>
            <div className="flex gap-6">
              <a href="https://wa.me/919600196088" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-500 shadow-xl">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/smilebharatam?igsh=ZmR3c3Y1b2VmZG5o" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-saffron hover:text-navy transition-all duration-500 shadow-xl">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mb-10">Explore</h4>
            <ul className="space-y-6 text-white/60 font-medium">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-saffron transition-colors">Vision & Mission</button></li>
              <li><button onClick={() => scrollToSection('models')} className="hover:text-saffron transition-colors">Business Models</button></li>
              <li><button onClick={() => scrollToSection('advantage')} className="hover:text-saffron transition-colors">The Edge</button></li>
              <li><button onClick={() => scrollToSection('patients')} className="hover:text-saffron transition-colors">Patient Portal</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mb-10">Support</h4>
            <ul className="space-y-6 text-white/60 font-medium">
              <li><a href="#" className="hover:text-saffron transition-colors">Partner Login</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Clinical Support</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mb-10">Headquarters</h4>
            <ul className="space-y-6 text-white/60 font-medium">
              <li className="flex gap-4">
                <div className="w-5 h-5 text-saffron shrink-0"><Globe size={18} /></div>
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex gap-4">
                <div className="w-5 h-5 text-saffron shrink-0"><Mail size={18} /></div>
                <span>support@smilebharatham.com</span>
              </li>
              <li className="flex gap-4">
                <div className="w-5 h-5 text-saffron shrink-0"><Phone size={18} /></div>
                <span>+91 96001 96088</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 Smile Bharatham. Premier Dental Infrastructure.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


const FloatingWhatsApp = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center shadow-2xl hover:bg-saffron hover:text-white transition-all duration-300 border border-navy/5 group"
    >
      <ChevronLeft size={24} className="rotate-90 group-hover:-translate-y-1 transition-transform" />
    </button>
    <a 
      href="https://wa.me/919600196088" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-saffron selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <BusinessModels />
        <OperationalAdvantage />
        <PatientSection />
        <WhyDifferent />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
