import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

const ULOS_IMG = "https://mgx-backend-cdn.metadl.com/generate/images/1058242/2026-04-01/6aff5ed5-070b-42f3-b3ed-fa18b597a5f9.png";

const ulosTypes = [
  {
    name: "Ulos Ragidup",
    meaning: "Ulos Kehidupan",
    img: "/images/Ulos/Ragi-Hidup.png",
    desc: "Ulos paling sakral dan berharga dalam budaya Batak. Hanya diberikan oleh orangtua kepada anak perempuan tertua saat pernikahan. Melambangkan kesuburan, kehidupan yang panjang, dan berkat dari Tuhan. Motifnya yang rumit menggambarkan siklus kehidupan manusia.",
    ceremony: "Pernikahan anak sulung perempuan",
    color: "Merah tua, hitam, putih dengan benang emas",
  },
  {
    name: "Ulos Sadum",
    meaning: "Ulos Kegembiraan",
    img: "/images/Ulos/Sadum.png",
    desc: "Dikenal dengan warna-warnanya yang cerah dan motif yang meriah. Ulos ini digunakan dalam acara-acara gembira seperti pesta pernikahan dan kelahiran. Melambangkan kebahagiaan, kemakmuran, dan harapan baik untuk masa depan.",
    ceremony: "Pesta adat, pernikahan, kelahiran",
    color: "Merah, kuning, hijau dengan motif geometris",
  },
  {
    name: "Ulos Ragi Hotang",
    meaning: "Ulos Kekuatan Rotan",
    img: "/images/Ulos/Ragi-Hotang.png",
    desc: "Dinamai dari kekuatan rotan yang lentur namun tidak mudah patah. Ulos ini melambangkan ketangguhan dan daya tahan dalam menghadapi cobaan hidup. Sering diberikan kepada orang yang sedang menghadapi masa sulit sebagai bentuk dukungan.",
    ceremony: "Pemberian semangat, dukungan moral",
    color: "Coklat tua, hitam dengan garis-garis tegas",
  },
  {
    name: "Ulos Sibolang",
    meaning: "Ulos Duka",
    img: "/images/Ulos/Sibolang.png",
    desc: "Ulos yang digunakan dalam upacara kematian dan duka cita. Warnanya yang gelap melambangkan kesedihan dan penghormatan terhadap yang telah tiada. Pemberian ulos ini menunjukkan rasa empati dan solidaritas komunitas Batak.",
    ceremony: "Upacara kematian, masa berkabung",
    color: "Hitam, biru tua dengan motif sederhana",
  },
  {
    name: "Ulos Mangiring",
    meaning: "Ulos Pengiring",
    img: "/images/Ulos/Mangiring.png",
    desc: "Diberikan kepada bayi yang baru lahir sebagai selimut pertama. Melambangkan perlindungan dan harapan agar anak tumbuh sehat. Motifnya yang berulang melambangkan harapan agar keluarga terus bertambah dan berkembang.",
    ceremony: "Kelahiran bayi, upacara marpangir",
    color: "Putih, merah muda dengan motif berulang",
  },
  {
    name: "Ulos Pinunsaan",
    meaning: "Ulos Penobatan",
    img: "/images/Ulos/Pinunsaan.png",
    desc: "Ulos yang diberikan dalam upacara pemberian marga atau penobatan raja. Melambangkan status sosial, kehormatan, dan tanggung jawab. Hanya dikenakan oleh orang-orang yang memiliki kedudukan tinggi dalam adat.",
    ceremony: "Penobatan raja, pemberian marga",
    color: "Merah, emas, hitam dengan motif gorga",
  },
  {
    name: "Ulos Antak-Antak",
    meaning: "Ulos Pemersatu",
    img: "/images/Ulos/Antak-Antak.png",
    desc: "Ulos dengan motif anyaman yang khas melambangkan persatuan dan kebersamaan dalam komunitas Batak. Digunakan dalam upacara adat yang melibatkan banyak keluarga dan marga sebagai simbol ikatan kekeluargaan yang kuat dan tidak terputus.",
    ceremony: "Upacara adat besar, pertemuan marga",
    color: "Hitam, putih dengan motif anyaman geometris",
  },
  {
    name: "Ulos Bintang Maratur",
    meaning: "Ulos Bintang Tersusun",
    img: "/images/Ulos/Bintang-Maratur.png",
    desc: "Dinamai dari motif bintang yang tersusun rapi dan teratur. Melambangkan harapan dan cita-cita yang terarah. Ulos ini diberikan kepada anak-anak muda sebagai doa agar perjalanan hidup mereka selalu teratur, terarah, dan bercahaya seperti bintang di langit.",
    ceremony: "Pemberian kepada pemuda, wisuda, pencapaian",
    color: "Biru tua, putih dengan motif bintang berulang",
  },
  {
    name: "Ulos Lobu-Lobu",
    meaning: "Ulos Penjaga Rumah",
    img: "/images/Ulos/Lobu-Lobu.png",
    desc: "Ulos yang melambangkan perlindungan terhadap rumah dan keluarga. Biasa digantung di pintu masuk rumah adat sebagai penangkal energi negatif dan sebagai doa agar seluruh penghuni rumah selalu dalam lindungan Tuhan Yang Maha Esa.",
    ceremony: "Peresmian rumah baru, perlindungan keluarga",
    color: "Merah, hitam dengan motif pelindung",
  },
  {
    name: "Ulos Suri-Suri",
    meaning: "Ulos Pelindung",
    img: "/images/Ulos/Suri-Suri.png",
    desc: "Ulos dengan motif sisir yang khas melambangkan kerapian dan keindahan hidup. Diberikan sebagai bentuk perlindungan dan doa agar penerimanya selalu terjaga dari hal-hal buruk. Biasa digunakan dalam upacara adat harian maupun perayaan keluarga.",
    ceremony: "Upacara adat harian, perayaan keluarga",
    color: "Merah, hitam dengan motif sisir berulang",
  },
  {
    name: "Ulos Tumtuman",
    meaning: "Ulos Petunjuk Jalan",
    img: "/images/Ulos/Tumtuman.png",
    desc: "Melambangkan bimbingan dan petunjuk dalam perjalanan hidup. Ulos ini diberikan kepada seseorang yang akan memulai babak baru dalam hidupnya — merantau, memulai usaha, atau menempuh pendidikan jauh dari kampung halaman sebagai doa dan restu dari keluarga.",
    ceremony: "Pelepasan merantau, memulai usaha baru",
    color: "Coklat, putih dengan motif garis terarah",
  },
  {
    name: "Ulos Sitolu Tuho",
    meaning: "Ulos Tiga Tonggak",
    img: "/images/Ulos/Ulos-Sitolu-Tuho.png",
    desc: "Dinamai dari tiga tonggak yang melambangkan filosofi Dalihan Na Tolu — tiga pilar utama hubungan kekerabatan Batak yaitu Hula-hula, Dongan Tubu, dan Boru. Ulos ini menjadi simbol keseimbangan dan harmoni dalam sistem sosial adat Batak yang telah berlangsung ribuan tahun.",
    ceremony: "Upacara Dalihan Na Tolu, musyawarah adat",
    color: "Merah, putih, hitam dengan tiga motif utama",
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

export default function UlosPhilosophy() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ULOS_IMG} alt="Ulos Batak" className="w-full h-full object-cover" />
          <div className="page-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C8A45C] text-sm uppercase tracking-[0.3em] mb-4">Warisan Tenun</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-gold-gradient">Filosofi Ulos</span>
          </h1>
          <p className="text-[#D4A574] font-['Playfair_Display'] italic text-lg">
            "Ijuk pengihot ni hodong, ulos pengihot ni holong"
          </p>
          <p className="text-[#A89880] text-sm mt-2">
            — Ijuk pengikat pelepah, ulos pengikat kasih sayang
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-6">
              Apa Itu <span className="text-gold-gradient">Ulos</span>?
            </h2>
            <p className="text-[#A89880] leading-relaxed mb-4">
              Ulos adalah kain tenun tradisional suku Batak yang memiliki makna sakral dan filosofis
              yang sangat mendalam. Lebih dari sekadar kain, ulos adalah simbol kasih sayang,
              perlindungan, dan ikatan sosial dalam masyarakat Batak.
            </p>
            <p className="text-[#A89880] leading-relaxed">
              Dalam budaya Batak, memberikan ulos (mangulosi) adalah salah satu tradisi
              terpenting yang menandai momen-momen besar dalam kehidupan — dari kelahiran
              hingga kematian. Setiap jenis ulos memiliki makna, fungsi, dan waktu
              penggunaan yang berbeda.
            </p>
          </div>

          <div className="gorga-divider max-w-md mx-auto mb-16" />

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Mangulosi",
                desc: "Tradisi pemberian ulos sebagai bentuk kasih sayang, restu, dan doa. Setiap pemberian memiliki makna dan aturan adat yang ketat.",
              },
              {
                title: "Tiga Warna Sakral",
                desc: "Merah (keberanian), Hitam (kekuatan), dan Putih (kesucian) — tiga warna dasar ulos yang melambangkan falsafah hidup Batak.",
              },
              {
                title: "Warisan Turun-Temurun",
                desc: "Teknik menenun ulos diwariskan dari ibu ke anak perempuan selama berabad-abad, menjadikannya salah satu tradisi tenun tertua di Nusantara.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${i + 1} p-8 rounded-2xl border border-[#2A2018] bg-[#1C1410]/50 card-hover text-center`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C8A45C]/20 to-[#8B1A1A]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-gradient font-['Playfair_Display']">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#F5F0E8] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#A89880] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ulos Types */}
          <div className="text-center mb-12 reveal opacity-0">
            <p className="text-[#C8A45C] text-sm uppercase tracking-[0.2em] mb-4">Koleksi</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']">
              Jenis-Jenis <span className="text-gold-gradient">Ulos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ulosTypes.map((ulos, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${(i % 6) + 1} rounded-2xl border border-[#2A2018] bg-[#1C1410]/50 card-hover overflow-hidden`}
              >
                {/* Gambar ulos */}
                <div className="h-48 w-full overflow-hidden bg-[#1C1410]">
                  <img
                    src={ulos.img}
                    alt={ulos.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Konten */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B1A1A] to-[#C8A45C] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#F5F0E8] font-bold text-sm">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#F5F0E8] mb-1">
                        {ulos.name}
                      </h3>
                      <p className="text-[#C8A45C] text-sm italic mb-3">{ulos.meaning}</p>
                      <p className="text-[#A89880] text-sm leading-relaxed mb-4">{ulos.desc}</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-[#C8A45C] text-xs font-semibold uppercase tracking-wider min-w-[80px]">
                            Upacara:
                          </span>
                          <span className="text-[#A89880] text-sm">{ulos.ceremony}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C8A45C] text-xs font-semibold uppercase tracking-wider min-w-[80px]">
                            Warna:
                          </span>
                          <span className="text-[#A89880] text-sm">{ulos.color}</span>
                        </div>
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