import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Scroll, Swords, UtensilsCrossed, MapPin, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

const HERO_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/bfec50a2-2197-4163-92b4-37796d8c16f2.png";
const ULOS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/6aff5ed5-070b-42f3-b3ed-fa18b597a5f9.png";
const RUMAH_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/749fecc5-9241-4305-b9fc-2470a4cb321c.png";
const TOBA_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/23586491-0415-4b41-a8ab-833b8574a3af.png";
const FOOD_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/a895b979-c5be-4ef7-b38d-537671b4b8d3.png";
const WARRIOR_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/80361f59-6e2a-4fe9-a4b8-cd94bc875a39.png";

const features = [
  {
    icon: Sparkles,
    title: "Filosofi Ulos",
    desc: "Kain tenun sakral dengan makna mendalam dalam setiap helainya",
    path: "/ulos",
    img: ULOS_IMG,
  },
  {
    icon: Scroll,
    title: "Sejarah Batak",
    desc: "Perjalanan peradaban dari Si Raja Batak hingga era modern",
    path: "/sejarah",
    img: HERO_IMG,
  },
  {
    icon: Landmark,
    title: "Rumah Adat",
    desc: "Arsitektur megah Rumah Bolon dengan filosofi kosmologis",
    path: "/rumah-adat",
    img: RUMAH_IMG,
  },
  {
    icon: Swords,
    title: "Senjata Tradisional",
    desc: "Piso Gaja Dompak dan senjata pusaka warisan leluhur",
    path: "/senjata",
    img: WARRIOR_IMG,
  },
  {
    icon: UtensilsCrossed,
    title: "Kuliner Batak",
    desc: "Saksang, Arsik, dan kekayaan cita rasa Tanah Batak",
    path: "/kuliner",
    img: FOOD_IMG,
  },
  {
    icon: MapPin,
    title: "Wisata",
    desc: "Danau Toba, Pulau Samosir, dan destinasi memukau lainnya",
    path: "/wisata",
    img: TOBA_IMG,
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".reveal");
      children.forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Index() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Danau Toba"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-[#C8A45C] text-sm sm:text-base uppercase tracking-[0.3em] mb-6 font-medium">
              Selamat Datang di
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-['Playfair_Display'] mb-6 leading-tight">
              <span className="text-gold-gradient">Tanah Batak</span>
            </h1>
            <p className="text-[#D4A574] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4 font-['Playfair_Display'] italic">
              "Horas! Menjelajahi kekayaan budaya, sejarah, dan keindahan alam
              warisan leluhur Batak"
            </p>
            <div className="gorga-divider max-w-xs mx-auto my-8" />
            <p className="text-[#A89880] text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Dari keagungan Danau Toba hingga filosofi ulos yang mendalam,
              temukan pesona budaya Batak yang telah bertahan ribuan tahun.
            </p>
          </div>

          <div className="animate-fade-in-up stagger-3 opacity-0">
            <Link
              to="/sejarah"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A45C] text-[#0D0D0D] rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#D4A574] transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A45C]/20"
            >
              Jelajahi Sekarang
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-[#C8A45C]/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-[#C8A45C] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal opacity-0">
            <p className="text-[#C8A45C] text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Warisan Budaya
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Playfair_Display'] mb-6">
              Mengenal Lebih Dekat{" "}
              <span className="text-gold-gradient">Suku Batak</span>
            </h2>
            <p className="text-[#A89880] max-w-2xl mx-auto leading-relaxed">
              Suku Batak adalah salah satu kelompok etnis terbesar di Indonesia,
              mendiami dataran tinggi Sumatera Utara. Dengan sejarah ribuan
              tahun, budaya Batak kaya akan tradisi, seni, dan filosofi hidup
              yang mendalam.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { num: "6", label: "Sub-Suku Batak" },
              { num: "2000+", label: "Tahun Sejarah" },
              { num: "1145m", label: "Danau Toba" },
              { num: "∞", label: "Warisan Budaya" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${i + 1} text-center p-6 rounded-xl border border-[#2A2018] bg-[#1C1410]/50 card-hover`}
              >
                <p className="text-3xl sm:text-4xl font-bold text-gold-gradient font-['Playfair_Display'] mb-2">
                  {stat.num}
                </p>
                <p className="text-[#A89880] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <Link
                key={feat.path}
                to={feat.path}
                className={`reveal opacity-0 stagger-${(i % 6) + 1} group relative rounded-2xl overflow-hidden border border-[#2A2018] bg-[#1C1410] card-hover`}
              >
                <div className="img-zoom h-48 relative">
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410] via-[#1C1410]/40 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#C8A45C]/10 flex items-center justify-center text-[#C8A45C] group-hover:bg-[#C8A45C]/20 transition-colors">
                      <feat.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#F5F0E8] group-hover:text-[#C8A45C] transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-[#A89880] text-sm leading-relaxed mb-4">
                    {feat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#C8A45C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Selengkapnya <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={TOBA_IMG}
            alt="Lake Toba"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-bold font-['Playfair_Display'] mb-6">
            <span className="text-gold-gradient">Horas!</span>
          </h2>
          <p className="text-[#D4A574] text-lg font-['Playfair_Display'] italic mb-8 leading-relaxed">
            "Hasangapon, Hagabeon, Hamoraon" — Kehormatan, Kebahagiaan,
            Kekayaan. Tiga pilar kehidupan masyarakat Batak.
          </p>
          <div className="gorga-divider max-w-xs mx-auto mb-8" />
          <Link
            to="/wisata"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C8A45C] text-[#C8A45C] rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#C8A45C] hover:text-[#0D0D0D] transition-all duration-300"
          >
            Rencanakan Perjalanan
            <MapPin size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}