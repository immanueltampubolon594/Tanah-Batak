import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";
import { MapPin, Mountain, Waves, TreePine, Camera } from "lucide-react";

const TOBA_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/23586491-0415-4b41-a8ab-833b8574a3af.png";
const HERO_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/bfec50a2-2197-4163-92b4-37796d8c16f2.png";
const RUMAH_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/749fecc5-9241-4305-b9fc-2470a4cb321c.png";

const Landmark = MapPin;

const destinations = [
  {
    name: "Danau Toba",
    location: "Sumatera Utara",
    icon: Waves,
    img: "/images/Wisata/Danau.png",
    desc: "Danau vulkanik terbesar di dunia dengan luas 1.145 km² dan kedalaman hingga 450 meter. Terbentuk dari letusan supervolcano sekitar 74.000 tahun lalu. Keindahan alamnya yang memukau dengan air biru jernih dikelilingi pegunungan hijau menjadikannya destinasi wisata utama Sumatera Utara.",
    highlights: ["Pemandangan sunrise & sunset spektakuler", "Berenang di air danau yang jernih", "Wisata perahu tradisional", "Spot foto ikonik"],
  },
  {
    name: "Pulau Samosir",
    location: "Di tengah Danau Toba",
    icon: Mountain,
    img: "/images/Wisata/Samosir.png",
    desc: "Pulau vulkanik di tengah Danau Toba yang merupakan jantung budaya Batak Toba. Pulau seluas 630 km² ini menyimpan kekayaan sejarah dan budaya yang luar biasa. Di sinilah banyak desa tradisional Batak masih mempertahankan cara hidup dan arsitektur asli mereka.",
    highlights: ["Desa tradisional Tomok & Ambarita", "Makam Raja Sidabutar", "Pemandangan alam yang menakjubkan", "Budaya Batak yang masih hidup"],
  },
  {
    name: "Air Terjun Sipiso-piso",
    location: "Kabupaten Karo",
    icon: Waves,
    img: "/images/Wisata/Sipiso.png",
    desc: "Air terjun tertinggi di Indonesia dengan ketinggian 120 meter yang jatuh langsung ke Danau Toba. Terletak di tepi kaldera Danau Toba, air terjun ini menawarkan pemandangan yang sangat dramatis — air yang jatuh dari tebing tinggi dengan latar belakang Danau Toba yang membentang luas.",
    highlights: ["Air terjun tertinggi di Indonesia", "Pemandangan Danau Toba dari ketinggian", "Trekking menuju dasar air terjun", "Spot foto yang menakjubkan"],
  },
  {
    name: "Bukit Holbung",
    location: "Kabupaten Samosir",
    icon: Mountain,
    img: "/images/Wisata/Holbung.png",
    desc: "Bukit savana yang indah di Pulau Samosir dengan pemandangan 360 derajat Danau Toba yang luar biasa. Dikenal juga sebagai 'Bukit Teletubbies' karena padang rumput hijau yang bergelombang. Tempat terbaik untuk menikmati sunrise dan sunset yang spektakuler di atas awan.",
    highlights: ["Panorama 360 derajat Danau Toba", "Padang savana hijau yang indah", "Spot sunrise & sunset terbaik", "Trekking ringan yang menyenangkan"],
  },
  {
    name: "Lembah Bakkara",
    location: "Kabupaten Humbang Hasundutan",
    icon: TreePine,
    img: "/images/Wisata/Lembah-Bakkara.png",
    desc: "Lembah subur yang dikelilingi pegunungan hijau dan hamparan sawah yang menakjubkan di tepi Danau Toba. Lembah Bakkara adalah tanah leluhur Raja Sisingamangaraja XII, pahlawan nasional dari tanah Batak. Pemandangan alamnya yang dramatis menjadikannya salah satu lembah terindah di Sumatera.",
    highlights: ["Tanah leluhur Raja Sisingamangaraja", "Hamparan sawah yang memukau", "Pemandangan danau dari lembah", "Wisata sejarah dan budaya"],
  },
  {
    name: "Menara Pandang Tele",
    location: "Kabupaten Samosir",
    icon: Camera,
    img: "/images/Wisata/Menara-pandang-Tele.png",
    desc: "Menara observasi yang berdiri di ketinggian perbukitan dengan pemandangan Danau Toba dan Pulau Samosir yang luar biasa. Dari puncak menara, pengunjung dapat menikmati panorama danau yang membentang luas dengan latar pegunungan yang mengelilinginya. Salah satu spot foto paling ikonik di kawasan Danau Toba.",
    highlights: ["Panorama Danau Toba dari ketinggian", "Menara observasi tiga lantai", "Spot foto paling ikonik", "Pemandangan Pulau Samosir"],
  },
  {
    name: "Pusuk Buhit",
    location: "Kabupaten Samosir",
    icon: Mountain,
    img: "/images/Wisata/pusuk-buhit.png",
    desc: "Gunung berapi purba yang dianggap sakral oleh masyarakat Batak sebagai tempat asal-usul nenek moyang suku Batak. Dengan ketinggian 1.971 mdpl, Pusuk Buhit menawarkan trekking yang menantang dengan pemandangan Danau Toba yang menakjubkan. Di sinilah Si Raja Batak dipercaya pertama kali menginjakkan kaki.",
    highlights: ["Gunung sakral suku Batak", "Trekking menantang 1.971 mdpl", "Pemandangan Danau Toba dari puncak", "Situs asal-usul nenek moyang Batak"],
  },
  {
    name: "Gereja Sibea-bea",
    location: "Kabupaten Samosir",
    icon: Landmark,
    img: "/images/Wisata/Sibea-bea.png",
    desc: "Gereja Katolik megah yang berdiri di puncak bukit dengan arsitektur unik bergaya Eropa yang berpadu dengan ornamen Batak. Dikenal sebagai 'Vatikan-nya Samosir', gereja ini menawarkan pemandangan Danau Toba yang spektakuler dari ketinggian. Menjadi salah satu ikon religi sekaligus wisata di Pulau Samosir.",
    highlights: ["Arsitektur megah bergaya Eropa-Batak", "Pemandangan Danau Toba dari puncak", "Ikon religi Pulau Samosir", "Patung Bunda Maria raksasa"],
  },
  {
    name: "Danau Sidihoni",
    location: "Pulau Samosir",
    icon: Waves,
    img: "/images/Wisata/Sidihoni.png",
    desc: "Danau unik yang berada di atas Pulau Samosir — danau di dalam danau yang sangat langka di dunia. Dikelilingi bukit hijau dan hutan pinus yang asri, Danau Sidihoni menawarkan ketenangan dan keindahan alam yang berbeda dari Danau Toba. Lokasinya yang tersembunyi menjadikannya permata tersembunyi Samosir.",
    highlights: ["Danau di dalam danau yang langka", "Dikelilingi hutan pinus asri", "Spot camping yang tenang", "Pemandangan alam yang eksotis"],
  },
  {
    name: "Batu Kursi Raja Ambarita",
    location: "Pulau Samosir",
    icon: Landmark,
    img: "/images/Wisata/Siallagan.png",
    desc: "Situs bersejarah berupa kursi-kursi batu yang digunakan oleh raja-raja Batak untuk mengadili perkara dan mengadakan musyawarah adat. Kompleks batu ini terdiri dari meja dan kursi batu yang dipahat dari batu alam, termasuk batu eksekusi untuk hukuman mati.",
    highlights: ["Kursi batu raja berusia ratusan tahun", "Meja pengadilan adat", "Batu eksekusi bersejarah", "Pemandu wisata lokal"],
  },
  {
    name: "Museum Huta Bolon Simanindo",
    location: "Simanindo, Samosir",
    icon: Camera,
    img: "/images/Wisata/Museum-Huta-Bolon-Simanindo.png",
    desc: "Museum etnografi yang menyimpan koleksi artefak budaya Batak Toba dalam kompleks rumah adat tradisional. Setiap hari diadakan pertunjukan tari Tor-Tor dan musik gondang yang memukau. Museum ini adalah jendela terbaik untuk menyelami kehidupan dan tradisi masyarakat Batak Toba.",
    highlights: ["Pertunjukan Tor-Tor setiap hari", "Koleksi artefak Batak lengkap", "Kompleks rumah adat asli", "Pertunjukan musik gondang"],
  },
  {
    name: "Makam Raja Sidabutar Tomok",
    location: "Desa Tomok, Samosir",
    icon: Landmark,
    img: "/images/Wisata/Makam-Raja-Sidabutar-Tomok.png",
    desc: "Kompleks pemakaman raja-raja Batak dari marga Sidabutar yang dipahat dari batu utuh berusia lebih dari 500 tahun. Makam batu monolitik ini dihiasi ukiran khas Batak yang masih terjaga dengan baik. Di dekatnya terdapat patung Sigale-gale yang terkenal dan pasar kerajinan tradisional Batak.",
    highlights: ["Makam batu monolitik berusia 500 tahun", "Ukiran Batak yang masih asli", "Patung Sigale-gale bersejarah", "Pusat kerajinan Batak"],
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

export default function Tourism() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={TOBA_IMG} alt="Danau Toba" className="w-full h-full object-cover" />
          <div className="page-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C8A45C] text-sm uppercase tracking-[0.3em] mb-4">Destinasi Wisata</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-gold-gradient">Wisata Tanah Batak</span>
          </h1>
          <p className="text-[#D4A574] font-['Playfair_Display'] italic text-lg">
            Keindahan alam dan kekayaan budaya yang menanti untuk dijelajahi
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-6">
              Destinasi <span className="text-gold-gradient">Unggulan</span>
            </h2>
            <p className="text-[#A89880] leading-relaxed">
              Tanah Batak menawarkan perpaduan sempurna antara keindahan alam yang memukau
              dan kekayaan budaya yang mendalam. Dari Danau Toba yang legendaris hingga
              desa-desa tradisional yang masih mempertahankan keasliannya.
            </p>
          </div>

          {/* Destinations */}
          <div className="space-y-10">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="reveal opacity-0 rounded-2xl border border-[#2A2018] bg-[#1C1410]/50 overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className={`img-zoom lg:col-span-2 h-64 lg:h-auto ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-3 p-6 lg:p-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C8A45C]/10 flex items-center justify-center text-[#C8A45C]">
                        <dest.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#F5F0E8]">
                          {dest.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[#C8A45C] text-sm">
                          <MapPin size={12} />
                          {dest.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-[#A89880] text-sm leading-relaxed mb-6">{dest.desc}</p>

                    <div>
                      <h4 className="text-[#C8A45C] font-semibold text-xs uppercase tracking-wider mb-3 font-['Inter']">
                        Daya Tarik
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dest.highlights.map((hl, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-[#A89880]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45C] flex-shrink-0" />
                            {hl}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Travel Tips */}
          <div className="gorga-divider max-w-md mx-auto my-16" />

          <div className="reveal opacity-0 text-center mb-12">
            <p className="text-[#C8A45C] text-sm uppercase tracking-[0.2em] mb-4">Tips</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']">
              Tips <span className="text-gold-gradient">Perjalanan</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Waktu Terbaik",
                desc: "Juni - September adalah musim kemarau, ideal untuk wisata outdoor dan menikmati pemandangan tanpa hujan.",
              },
              {
                title: "Transportasi",
                desc: "Terbang ke Bandara Silangit atau Kualanamu. Sewa mobil atau gunakan transportasi lokal untuk menjelajah.",
              },
              {
                title: "Penginapan",
                desc: "Banyak pilihan dari homestay tradisional hingga hotel modern di sekitar Parapat dan Pulau Samosir.",
              },
              {
                title: "Etika Wisata",
                desc: "Hormati adat istiadat lokal, minta izin sebelum memotret, dan jaga kebersihan lingkungan.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${i + 1} p-6 rounded-xl border border-[#2A2018] bg-[#1C1410]/50 card-hover text-center`}
              >
                <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#C8A45C] mb-3">
                  {tip.title}
                </h3>
                <p className="text-[#A89880] text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}