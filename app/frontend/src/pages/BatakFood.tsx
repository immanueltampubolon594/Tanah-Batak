import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

const FOOD_HERO_IMG = "/images/Kuliner/Saksang.png";

const dishes = [
  {
    name: "Saksang",
    category: "Hidangan Utama",
    img: "/images/Kuliner/Saksang.png",
    desc: "Saksang adalah hidangan paling ikonik dari budaya Batak. Terbuat dari daging babi (atau kerbau) yang dimasak dengan darahnya sendiri, dibumbui dengan andaliman (merica Batak), lengkuas, serai, daun jeruk, dan rempah-rempah lainnya.",
    taste: "Gurih, pedas, dengan aroma rempah yang kuat dan sedikit pahit dari darah",
    occasion: "Wajib ada di setiap pesta adat, pernikahan, dan upacara besar",
  },
  {
    name: "Arsik (Dekke Na Niarsik)",
    category: "Hidangan Ikan",
    img: "/images/Kuliner/Arsik.png",
    desc: "Arsik adalah masakan ikan mas yang dimasak dengan bumbu kuning khas Batak. Ikan mas utuh dimasak dengan kunyit, andaliman, bawang, kemiri, dan asam cikala.",
    taste: "Gurih, asam segar, dengan sensasi andaliman yang membuat lidah bergetar",
    occasion: "Hidangan wajib dalam upacara adat, terutama pesta pernikahan",
  },
  {
    name: "Naniura",
    category: "Hidangan Mentah",
    img: "/images/Kuliner/Naniura.png",
    desc: "Naniura adalah 'sashimi' versi Batak — ikan mas segar yang dimarinasi dengan jeruk nipis dan bumbu rempah tanpa dimasak. Proses marinasi dengan asam jeruk 'memasak' ikan secara kimiawi.",
    taste: "Segar, asam, dengan bumbu rempah yang meresap sempurna",
    occasion: "Hidangan istimewa untuk tamu kehormatan dan acara spesial",
  },
  {
    name: "Babi Panggang Karo (BPK)",
    category: "Hidangan Panggang",
    img: "/images/Kuliner/BPK.png",
    desc: "Babi panggang khas Batak Karo yang dimasak di atas bara api dengan bumbu sederhana namun menghasilkan rasa yang luar biasa. Kulit renyah dan daging juicy.",
    taste: "Smoky, juicy, dengan kulit renyah dan bumbu yang meresap",
    occasion: "Hidangan favorit sehari-hari dan pesta",
  },
  {
    name: "Na Tinombur",
    category: "Sambal & Pelengkap",
    img: "/images/Kuliner/Na-Tinombur.png",
    desc: "Na Tinombur adalah sambal khas Batak yang terbuat dari andaliman yang ditumbuk kasar dengan cabai, bawang, dan garam. Memberikan sensasi unik yang khas.",
    taste: "Pedas unik dengan sensasi numbing dari andaliman",
    occasion: "Pelengkap wajib setiap hidangan Batak",
  },
  {
    name: "Dali Ni Horbo",
    category: "Hidangan Susu",
    img: "/images/Kuliner/Dali-Ni-Horbo.png",
    desc: "Dali Ni Horbo adalah tahu susu kerbau khas Batak Toba. Susu kerbau segar digumpalkan secara alami lalu dimasak dengan bumbu khas. Teksturnya lembut seperti tofu.",
    taste: "Gurih lembut, creamy dengan aroma susu kerbau yang khas",
    occasion: "Hidangan istimewa dalam pesta adat dan acara keluarga",
  },
  {
    name: "Daun Ubi Tumbuk",
    category: "Hidangan Sayuran",
    img: "/images/Kuliner/Daun-Ubi-Tumbuk.png",
    desc: "Daun singkong muda yang ditumbuk dan dimasak dengan santan, andaliman, dan bumbu rempah. Salah satu sayuran paling ikonik dalam masakan Batak.",
    taste: "Gurih, creamy dari santan, dengan aroma rempah",
    occasion: "Pendamping hidangan utama dalam setiap jamuan",
  },
  {
    name: "Mie Gomak",
    category: "Hidangan Mie",
    img: "/images/Kuliner/Mie-Gomak.png",
    desc: "Mie Gomak adalah 'spaghetti' ala Batak — mie lidi tebal yang dimasak dengan bumbu kuning khas Batak, andaliman, dan santan. Nama 'gomak' berarti digenggam tangan.",
    taste: "Gurih, pedas ringan, dengan aroma andaliman yang khas",
    occasion: "Sarapan favorit dan hidangan sehari-hari di Tanah Batak",
  },
  {
    name: "Napinadar",
    category: "Hidangan Ayam",
    img: "/images/Kuliner/Napinadar.png",
    desc: "Napinadar adalah ayam panggang dengan bumbu darah dan rempah khas Batak. Ayam dipanggang lalu dilumuri bumbu kental yang kaya rasa.",
    taste: "Smoky, gurih kaya rempah, dengan sentuhan pahit yang khas",
    occasion: "Hidangan adat dalam upacara dan pesta besar",
  },
  {
    name: "Lappet",
    category: "Kue Tradisional",
    img: "/images/Kuliner/Lappet.png",
    desc: "Lappet adalah kue tradisional Batak yang terbuat dari tepung beras, kelapa parut, dan gula aren, dibungkus daun pisang lalu dikukus. Manis dan harum.",
    taste: "Manis legit, harum daun pisang, dengan tekstur kenyal",
    occasion: "Camilan adat dan oleh-oleh khas Tanah Batak",
  },
  {
    name: "Itak Gurgur",
    category: "Kue Tradisional",
    img: "/images/Kuliner/Itak-Gurgur.png",
    desc: "Itak Gurgur adalah kue tradisional dari tepung beras yang dicampur kelapa dan gula aren. Nama 'gurgur' berarti panas/bergairah, melambangkan semangat.",
    taste: "Manis, gurih kelapa, dengan tekstur padat dan mengenyangkan",
    occasion: "Kue ritual dalam upacara adat Batak",
  },
  {
    name: "Tombur",
    category: "Hidangan Babi",
    img: "/images/Kuliner/Tombur.png",
    desc: "Tombur adalah masakan babi rebus khas Batak yang dimasak dengan bumbu sederhana namun kaya rasa. Kuah bening dengan aroma rempah yang segar.",
    taste: "Gurih segar, dengan kuah bening yang kaya kolagen",
    occasion: "Hidangan pesta dan acara keluarga besar",
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
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function BatakFood() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={FOOD_HERO_IMG} alt="Kuliner Batak" className="w-full h-full object-cover" />
          <div className="page-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C8A45C] text-sm uppercase tracking-[0.3em] mb-4">Cita Rasa Nusantara</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-gold-gradient">Kuliner Batak</span>
          </h1>
          <p className="text-[#D4A574] font-['Playfair_Display'] italic text-lg">
            Kekayaan rasa yang lahir dari rempah-rempah Tanah Batak
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-6">
              Rempah & <span className="text-gold-gradient">Andaliman</span>
            </h2>
            <p className="text-[#A89880] leading-relaxed">
              Kuliner Batak terkenal dengan cita rasanya yang kuat dan kaya rempah. Bumbu khas
              seperti andaliman (Sichuan pepper lokal), asam cikala, dan daun salam menjadi
              fondasi dari hampir semua masakan Batak.
            </p>
          </div>

          {/* Andaliman highlight */}
          <div className="reveal opacity-0 p-8 rounded-2xl border border-[#C8A45C]/30 bg-gradient-to-br from-[#1C1410] to-[#0D0D0D] mb-16 animate-pulse-glow">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-['Playfair_Display'] text-gold-gradient mb-4">
                ✦ Andaliman — Roh Kuliner Batak ✦
              </h3>
              <p className="text-[#A89880] leading-relaxed max-w-2xl mx-auto">
                Andaliman (Zanthoxylum acanthopodium) adalah rempah endemik dataran tinggi Toba
                yang memberikan sensasi unik — pedas, sedikit pahit, dan membuat lidah bergetar
                (numbing). Tanpa andaliman, masakan Batak kehilangan jiwanya.
              </p>
            </div>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dishes.map((dish, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${(i % 6) + 1} rounded-2xl border border-[#2A2018] bg-[#1C1410]/50 overflow-hidden card-hover`}
              >
                {/* Gambar */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/Kuliner/Saksang.png";
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B1A1A] to-[#C8A45C] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#F5F0E8] font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#F5F0E8]">
                        {dish.name}
                      </h3>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] text-xs mt-1">
                        {dish.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#A89880] text-sm leading-relaxed mb-4">{dish.desc}</p>

                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#0D0D0D]/50 border border-[#2A2018]">
                      <span className="text-[#C8A45C] text-xs font-semibold uppercase tracking-wider">Rasa: </span>
                      <span className="text-[#A89880] text-sm">{dish.taste}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0D0D0D]/50 border border-[#2A2018]">
                      <span className="text-[#C8A45C] text-xs font-semibold uppercase tracking-wider">Penyajian: </span>
                      <span className="text-[#A89880] text-sm">{dish.occasion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}