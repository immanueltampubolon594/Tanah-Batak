import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

const RUMAH_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/749fecc5-9241-4305-b9fc-2470a4cb321c.png";

const houses = [
  {
    name: "Rumah Bolon",
    subtitle: "Rumah Besar Raja",
    desc: "Rumah Bolon adalah rumah adat terbesar dan termegah dalam budaya Batak Toba. Dulunya merupakan kediaman raja (Parbaringin) dan pusat pemerintahan adat. Bangunan ini memiliki atap melengkung yang menjulang tinggi, melambangkan tanduk kerbau — hewan yang sangat dihormati dalam budaya Batak.",
    features: [
      "Atap melengkung tinggi berbentuk tanduk kerbau (singa-singa)",
      "Tiang-tiang kayu besar tanpa paku, menggunakan sistem pasak",
      "Ukiran Gorga dengan tiga warna: merah, hitam, putih",
      "Lantai ditinggikan dari tanah untuk perlindungan dan ventilasi",
      "Ruang bawah untuk ternak, ruang tengah untuk tinggal, loteng untuk penyimpanan",
    ],
    philosophy: "Struktur tiga tingkat melambangkan kosmologi Batak: Banua Ginjang (dunia atas/dewa), Banua Tonga (dunia tengah/manusia), dan Banua Toru (dunia bawah/roh).",
  },
  {
    name: "Jabu",
    subtitle: "Rumah Keluarga",
    desc: "Jabu adalah rumah tinggal keluarga Batak yang lebih sederhana dari Rumah Bolon namun tetap mengikuti prinsip arsitektur yang sama. Setiap keluarga inti memiliki jabu sendiri dalam satu kompleks huta (kampung). Pembagian ruang dalam jabu mengikuti aturan adat yang ketat.",
    features: [
      "Ukuran lebih kecil dari Rumah Bolon",
      "Pembagian ruang berdasarkan status dalam keluarga",
      "Dapur terletak di sudut tertentu sesuai adat",
      "Tangga masuk menghadap arah tertentu berdasarkan kosmologi",
      "Dinding kayu dengan ventilasi alami",
    ],
    philosophy: "Posisi tidur dan ruang dalam jabu ditentukan oleh status dalam keluarga dan marga, mencerminkan tatanan sosial Batak yang terstruktur.",
  },
  {
    name: "Sopo",
    subtitle: "Lumbung Padi & Balai Pertemuan",
    desc: "Sopo adalah bangunan serbaguna yang berfungsi sebagai lumbung padi sekaligus tempat pertemuan adat. Bangunan ini tidak memiliki dinding, hanya tiang dan atap, melambangkan keterbukaan dan transparansi dalam musyawarah adat Batak.",
    features: [
      "Struktur terbuka tanpa dinding",
      "Lantai atas untuk menyimpan padi",
      "Lantai bawah untuk pertemuan adat dan musyawarah",
      "Ukiran gorga pada tiang dan balok",
      "Posisi menghadap Rumah Bolon sebagai penghormatan",
    ],
    philosophy: "Keterbukaan Sopo melambangkan prinsip demokrasi dalam adat Batak — setiap keputusan harus diambil secara terbuka dan transparan di hadapan seluruh masyarakat.",
  },
];

const gorgaMotifs = [
  {
    name: "Gorga Ipon-ipon",
    meaning: "Melambangkan gigi, simbol kekuatan dan ketajaman pikiran",
  },
  {
    name: "Gorga Desa Na Ualu",
    meaning: "Delapan penjuru mata angin, simbol keseimbangan kosmis",
  },
  {
    name: "Gorga Simeol-eol",
    meaning: "Motif sulur tanaman, simbol kesuburan dan pertumbuhan",
  },
  {
    name: "Gorga Jorgom",
    meaning: "Motif cecak/kadal, simbol penjaga rumah dari roh jahat",
  },
  {
    name: "Gorga Adop-adop",
    meaning: "Motif payudara, simbol keibuan dan sumber kehidupan",
  },
  {
    name: "Gorga Hoda-hoda",
    meaning: "Motif kuda, simbol kekuatan, kecepatan, dan kebangsawanan",
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

export default function TraditionalHouses() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={RUMAH_IMG} alt="Rumah Bolon" className="w-full h-full object-cover" />
          <div className="page-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C8A45C] text-sm uppercase tracking-[0.3em] mb-4">Arsitektur Tradisional</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-gold-gradient">Rumah Adat Batak</span>
          </h1>
          <p className="text-[#D4A574] font-['Playfair_Display'] italic text-lg">
            Keagungan arsitektur yang menyatu dengan kosmologi dan alam
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-6">
              Filosofi <span className="text-gold-gradient">Tiga Dunia</span>
            </h2>
            <p className="text-[#A89880] leading-relaxed">
              Arsitektur rumah adat Batak bukan sekadar tempat tinggal, melainkan representasi
              kosmologi Batak yang membagi alam semesta menjadi tiga tingkatan: Banua Ginjang
              (dunia atas), Banua Tonga (dunia tengah), dan Banua Toru (dunia bawah).
              Setiap elemen bangunan memiliki makna simbolis yang mendalam.
            </p>
          </div>

          {/* Houses */}
          <div className="space-y-16 mb-20">
            {houses.map((house, i) => (
              <div
                key={i}
                className={`reveal opacity-0 rounded-2xl border border-[#2A2018] bg-[#1C1410]/50 overflow-hidden`}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#C8A45C] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#F5F0E8] font-bold text-xl font-['Playfair_Display']">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#F5F0E8]">
                        {house.name}
                      </h3>
                      <p className="text-[#C8A45C] text-sm italic">{house.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-[#A89880] leading-relaxed mb-6">{house.desc}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[#C8A45C] font-semibold text-sm uppercase tracking-wider mb-4 font-['Inter']">
                        Ciri Khas
                      </h4>
                      <ul className="space-y-3">
                        {house.features.map((feat, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-[#A89880]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45C] mt-2 flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-[#0D0D0D]/50 border border-[#2A2018]">
                      <h4 className="text-[#C8A45C] font-semibold text-sm uppercase tracking-wider mb-3 font-['Inter']">
                        Filosofi
                      </h4>
                      <p className="text-[#D4A574] font-['Playfair_Display'] italic leading-relaxed">
                        {house.philosophy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gorga-divider max-w-md mx-auto mb-16" />

          {/* Gorga Motifs */}
          <div className="text-center mb-12 reveal opacity-0">
            <p className="text-[#C8A45C] text-sm uppercase tracking-[0.2em] mb-4">Seni Ukir</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']">
              Motif <span className="text-gold-gradient">Gorga</span>
            </h2>
            <p className="text-[#A89880] mt-4 max-w-2xl mx-auto">
              Gorga adalah seni ukir khas Batak yang menghiasi rumah adat dengan tiga warna
              utama: merah (habiruan), hitam (lotung), dan putih (bontar).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gorgaMotifs.map((motif, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${i + 1} p-5 rounded-xl border border-[#2A2018] bg-[#1C1410]/50 card-hover`}
              >
                <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#F5F0E8] mb-2">
                  {motif.name}
                </h3>
                <p className="text-[#A89880] text-sm">{motif.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}