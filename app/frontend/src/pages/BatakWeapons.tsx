import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

const HERO_IMG = "/images/Senjata/foto-prajurit.png";

const weapons = [
  {
    name: "Piso Gaja Dompak",
    type: "Pisau Seremonial",
    img: "/images/Senjata/Piso-Gaja-Dompak.png",
    desc: "Piso Gaja Dompak adalah senjata paling prestisius dalam budaya Batak. Pisau besar ini memiliki gagang yang dihiasi ukiran kepala gajah (gaja) dan kaki yang kokoh (dompak). Senjata ini bukan hanya alat perang, tetapi juga simbol kekuasaan, status sosial, dan pusaka keluarga yang diwariskan turun-temurun.",
    significance: "Simbol kekuasaan raja dan pemimpin adat. Digunakan dalam upacara penobatan dan ritual penting.",
    material: "Besi tempa, kayu pilihan, kuningan, dan terkadang emas untuk gagang",
  },
  {
    name: "Piso Surit",
    type: "Pisau Tradisional",
    img: "/images/Senjata/Piso-Surit.png",
    desc: "Piso Surit adalah pisau khas Batak Karo dengan bilah yang tipis dan tajam. Nama 'surit' berasal dari burung surit yang melambangkan keanggunan. Pisau ini sering digunakan dalam upacara adat dan sebagai simbol keindahan seni ukir Batak.",
    significance: "Simbol keanggunan dan seni budaya Batak Karo. Dipakai dalam upacara adat penting.",
    material: "Besi tempa halus dengan gagang kayu berukir dan sarung kulit",
  },
  {
    name: "Piso Halasan",
    type: "Pisau Serbaguna",
    img: "/images/Senjata/Piso-Halasan.png",
    desc: "Piso Halasan adalah pisau serbaguna yang selalu dibawa oleh pria Batak di pinggang mereka. Selain sebagai alat sehari-hari untuk memotong dan membersihkan, pisau ini juga berfungsi sebagai senjata pertahanan diri dan simbol kejantanan.",
    significance: "Perlengkapan wajib pria Batak dewasa. Melambangkan kesiapan dan kemandirian.",
    material: "Besi tempa dengan gagang tanduk kerbau atau kayu",
  },
  {
    name: "Piso Tumbuk Lada",
    type: "Pisau Khas",
    img: "/images/Senjata/Piso-Tumbuk-Lada.png",
    desc: "Piso Tumbuk Lada adalah pisau dengan ujung yang membulat menyerupai alat penumbuk lada. Bentuknya yang unik menjadikannya mudah dikenali. Pisau ini banyak digunakan di wilayah pesisir Sumatera Utara dan memiliki nilai seni yang tinggi.",
    significance: "Senjata pertahanan diri dan alat kebutuhan sehari-hari masyarakat pesisir Batak.",
    material: "Besi tempa dengan gagang kayu atau tanduk dan sarung kulit",
  },
  {
    name: "Piso Gading",
    type: "Pisau Gading",
    img: "/images/Senjata/Piso-Gading.png",
    desc: "Piso Gading adalah pisau mewah yang gagangnya terbuat dari gading gajah. Senjata ini hanya dimiliki oleh kalangan bangsawan dan pemimpin Batak karena nilai dan kelangkaannya. Ukiran pada gading mencerminkan status dan kekayaan pemiliknya.",
    significance: "Simbol kemewahan dan status bangsawan Batak. Pusaka keluarga yang sangat berharga.",
    material: "Bilah besi tempa berkualitas tinggi dengan gagang gading gajah berukir",
  },
  {
    name: "Tombak",
    type: "Tombak Perang",
    img: "/images/Senjata/Tombak.png",
    desc: "Tombak adalah senjata perang utama prajurit Batak. Dengan tangkai panjang dan mata besi yang tajam, tombak efektif digunakan dalam pertempuran jarak jauh maupun dekat. Beberapa tombak dihiasi ukiran dan diyakini memiliki kekuatan magis.",
    significance: "Senjata perang dan berburu utama. Tombak tertentu dianggap memiliki kekuatan supranatural.",
    material: "Besi tempa untuk mata tombak, kayu keras untuk tangkai, tali rotan untuk pengikat",
  },
  {
    name: "Tunggal Panaluan",
    type: "Tongkat Sakral",
    img: "/images/Senjata/Tunggal-Panaluan1.png",
    desc: "Tunggal Panaluan adalah tongkat sakral yang digunakan oleh datu (dukun/imam) Batak. Tongkat ini diukir dengan figur-figur manusia dan hewan yang bertumpuk, melambangkan hierarki spiritual. Diyakini memiliki kekuatan magis untuk menyembuhkan penyakit dan mengusir roh jahat.",
    significance: "Alat spiritual datu Batak. Digunakan dalam ritual penyembuhan, ramalan, dan upacara keagamaan.",
    material: "Kayu pilihan yang diukir rumit, sering dilumuri ramuan khusus",
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

export default function BatakWeapons() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Prajurit Batak" className="w-full h-full object-cover object-top" />
          <div className="page-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C8A45C] text-sm uppercase tracking-[0.3em] mb-4">Pusaka Leluhur</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-gold-gradient">Senjata Tradisional</span>
          </h1>
          <p className="text-[#D4A574] font-['Playfair_Display'] italic text-lg">
            Warisan keberanian dan kehormatan para pejuang Batak
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-6">
              Senjata & <span className="text-gold-gradient">Pusaka</span>
            </h2>
            <p className="text-[#A89880] leading-relaxed">
              Senjata tradisional Batak bukan hanya alat perang, tetapi juga simbol status sosial,
              kekuatan spiritual, dan warisan budaya. Setiap senjata memiliki cerita, makna,
              dan fungsi seremonial yang penting dalam kehidupan masyarakat Batak.
            </p>
          </div>

          <div className="space-y-8">
            {weapons.map((weapon, i) => (
              <div
                key={i}
                className="reveal opacity-0 rounded-2xl border border-[#2A2018] bg-[#1C1410]/50 overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                  {/* Gambar senjata */}
                  <div className="relative bg-[#0D0A06]" style={{ minHeight: "260px" }}>
                    <img
                      src={weapon.img}
                      alt={weapon.name}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Konten */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#C8A45C] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#F5F0E8] font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#F5F0E8]">
                          {weapon.name}
                        </h3>
                        <span className="text-[#C8A45C] text-sm">{weapon.type}</span>
                      </div>
                    </div>

                    <p className="text-[#A89880] leading-relaxed mb-6">{weapon.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#0D0D0D]/50 border border-[#2A2018]">
                        <h4 className="text-[#C8A45C] font-semibold text-xs uppercase tracking-wider mb-2">
                          Makna & Fungsi
                        </h4>
                        <p className="text-[#A89880] text-sm">{weapon.significance}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#0D0D0D]/50 border border-[#2A2018]">
                        <h4 className="text-[#C8A45C] font-semibold text-xs uppercase tracking-wider mb-2">
                          Bahan
                        </h4>
                        <p className="text-[#A89880] text-sm">{weapon.material}</p>
                      </div>
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