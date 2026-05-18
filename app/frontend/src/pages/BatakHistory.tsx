import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

const HERO_IMG = "/images/sejarah/sejarah-1.png";

const timeline = [
  {
    era: "~2500 SM",
    title: "Asal Usul Proto-Batak",
    img: "/images/sejarah/sejarah-1.png",
    desc: "Nenek moyang suku Batak diperkirakan berasal dari migrasi bangsa Austronesia yang datang dari Taiwan dan Filipina. Mereka menetap di dataran tinggi Sumatera Utara, membentuk komunitas pertanian di sekitar Danau Toba.",
  },
  {
    era: "Abad ke-1 - 13",
    title: "Kerajaan Batak Kuno",
    img: "/images/sejarah/sejarah-2.png",
    desc: "Terbentuknya struktur masyarakat Batak dengan sistem marga (clan). Legenda Si Raja Batak menjadi asal muasal semua marga Batak. Masyarakat mengembangkan aksara Batak, sistem hukum adat, dan tradisi megalitik.",
  },
  {
    era: "Abad ke-14 - 16",
    title: "Era Kerajaan & Perdagangan",
    img: "/images/sejarah/sejarah-3.png",
    desc: "Munculnya kerajaan-kerajaan kecil di wilayah Batak. Kontak perdagangan dengan pedagang India, Arab, dan Cina. Produksi kapur barus menjadi komoditas penting yang diperdagangkan hingga ke Timur Tengah dan Eropa.",
  },
  {
    era: "1630 - 1907",
    title: "Dinasti Si Singamangaraja",
    img: "/images/sejarah/Sisingamangaraja.png",
    desc: "Dinasti raja-imam Si Singamangaraja memimpin masyarakat Batak Toba selama 12 generasi. Si Singamangaraja XII menjadi pahlawan nasional yang memimpin perlawanan heroik terhadap kolonialisme Belanda selama 30 tahun.",
  },
  {
    era: "1816 - 1850",
    title: "Ekspansi Wilayah Batak",
    img: "/images/sejarah/sejarah-4.png",
    desc: "Masyarakat Batak mengalami ekspansi wilayah dan pertumbuhan populasi yang signifikan. Sistem marga semakin berkembang dan hubungan antar sub-suku semakin terjalin erat melalui pernikahan adat dan perjanjian damai.",
  },
  {
    era: "1861 - 1864",
    title: "Perang Batak",
    img: "/images/sejarah/sejarah-5.png",
    desc: "Perlawanan sengit masyarakat Batak terhadap ekspedisi militer Belanda. Meskipun kalah secara militer, semangat perlawanan tidak pernah padam. Periode ini menandai awal masuknya pengaruh kolonial ke Tanah Batak.",
  },
  {
    era: "1862 - 1900an",
    title: "Masuknya Kekristenan",
    img: "/images/sejarah/sejarah-6.png",
    desc: "Misionaris Jerman Ludwig Ingwer Nommensen tiba di Tanah Batak pada 1862. Ia mendirikan gereja, sekolah, dan rumah sakit. Kekristenan diterima secara luas dan membawa perubahan besar dalam pendidikan masyarakat Batak.",
  },
  {
    era: "1907",
    title: "Gugurnya Si Singamangaraja XII",
    img: "/images/sejarah/sejarah-7.png",
    desc: "Pahlawan nasional Si Singamangaraja XII gugur dalam pertempuran melawan Belanda di Pakpak pada 17 Juni 1907. Pengorbanannya menjadi simbol keberanian dan patriotisme yang dikenang hingga kini.",
  },
  {
    era: "1908 - 1942",
    title: "Masa Kolonial & Kebangkitan",
    img: "/images/sejarah/sejarah-8.png",
    desc: "Meskipun berada di bawah penjajahan Belanda, semangat masyarakat Batak tidak padam. Pendidikan misi semakin berkembang dan melahirkan generasi terpelajar Batak yang mulai berperan dalam pergerakan nasional Indonesia.",
  },
  {
    era: "1942 - 1945",
    title: "Pendudukan Jepang",
    img: "/images/sejarah/sejarah-9.png",
    desc: "Masa pendudukan Jepang membawa perubahan besar di Tanah Batak. Masyarakat Batak dipaksa kerja romusha, namun semangat perlawanan tetap membara. Periode ini memperkuat tekad untuk meraih kemerdekaan.",
  },
  {
    era: "1945 - 1950",
    title: "Revolusi Kemerdekaan",
    img: "/images/sejarah/sejarah-10.png",
    desc: "Pemuda Batak tampil di garis terdepan perjuangan kemerdekaan Indonesia. Tokoh-tokoh Batak aktif dalam pemerintahan Republik Indonesia yang baru diproklamasikan.",
  },
  {
    era: "1950 - Sekarang",
    title: "Era Modern & Diaspora",
    img: "/images/sejarah/sejarah-11.png",
    desc: "Pasca kemerdekaan, masyarakat Batak tersebar ke seluruh Indonesia dan dunia. Dikenal sebagai perantau ulung, orang Batak membangun komunitas di mana-mana sambil tetap menjaga identitas budaya melalui marga dan adat istiadat.",
  },
  {
    era: "2000 - Sekarang",
    title: "Pelestarian Budaya Digital",
    img: "/images/sejarah/sejarah-12.png",
    desc: "Di era digital, generasi muda Batak aktif melestarikan budaya melalui media sosial, musik, dan seni. Aksara Batak kini dipelajari kembali, musik gondang dan tor-tor tampil di panggung internasional.",
  },
];

const subSuku = [
  { name: "Batak Toba", area: "Sekitar Danau Toba dan Pulau Samosir" },
  { name: "Batak Karo", area: "Dataran Tinggi Karo" },
  { name: "Batak Simalungun", area: "Kabupaten Simalungun" },
  { name: "Batak Pakpak/Dairi", area: "Kabupaten Dairi dan Pakpak Bharat" },
  { name: "Batak Angkola", area: "Tapanuli Selatan bagian utara" },
  { name: "Batak Mandailing", area: "Tapanuli Selatan bagian selatan" },
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

export default function BatakHistory() {
  const sectionRef = useInView();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Sejarah Batak" className="w-full h-full object-cover object-center" />
          <div className="page-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#C8A45C] text-sm uppercase tracking-[0.3em] mb-4">Perjalanan Waktu</p>
          <h1 className="text-4xl sm:text-6xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-gold-gradient">Sejarah Batak</span>
          </h1>
          <p className="text-[#D4A574] font-['Playfair_Display'] italic text-lg">
            Ribuan tahun peradaban yang membentuk identitas bangsa
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-pattern" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sub-suku */}
          <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display'] mb-6">
              Enam <span className="text-gold-gradient">Sub-Suku</span> Batak
            </h2>
            <p className="text-[#A89880] leading-relaxed mb-8">
              Suku Batak terdiri dari enam sub-suku yang memiliki bahasa, adat istiadat,
              dan wilayah masing-masing, namun tetap terikat oleh akar budaya yang sama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {subSuku.map((suku, i) => (
              <div
                key={i}
                className={`reveal opacity-0 stagger-${i + 1} p-5 rounded-xl border border-[#2A2018] bg-[#1C1410]/50 card-hover`}
              >
                <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#C8A45C] mb-1">
                  {suku.name}
                </h3>
                <p className="text-[#A89880] text-sm">{suku.area}</p>
              </div>
            ))}
          </div>

          <div className="gorga-divider max-w-md mx-auto mb-16" />

          {/* Si Singamangaraja XII */}
          <div className="reveal opacity-0 mb-20">
            <div className="rounded-2xl border border-[#C8A45C]/40 bg-gradient-to-br from-[#1C1410] to-[#0D0D0D] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-96 md:h-auto bg-[#0D0A06]">
                  <img
                    src="/images/sejarah/Sisingamangaraja.png"
                    alt="Si Singamangaraja XII"
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] text-xs font-semibold mb-4 w-fit">
                    Pahlawan Nasional
                  </span>
                  <h2 className="text-3xl font-bold font-['Playfair_Display'] text-[#F5F0E8] mb-4">
                    Si Singamangaraja XII
                  </h2>
                  <p className="text-[#A89880] text-sm leading-relaxed mb-4">
                    Lahir sekitar tahun 1849 dengan nama <span className="text-[#C8A45C]">Patuan Bosar Ompu Pulo Batu</span>,
                    Si Singamangaraja XII adalah raja dan imam tertinggi masyarakat Batak Toba.
                    Ia merupakan generasi ke-12 dari dinasti Si Singamangaraja yang telah memerintah sejak abad ke-17.
                  </p>
                  <p className="text-[#A89880] text-sm leading-relaxed mb-4">
                    Ketika Belanda mulai menginvasi Tanah Batak, ia memimpin perlawanan bersenjata
                    selama lebih dari <span className="text-[#C8A45C]">30 tahun (1877–1907)</span> —
                    salah satu perlawanan terlama di Nusantara. Dengan pasukan yang jauh lebih kecil,
                    ia menggunakan taktik gerilya di rimba Batak yang lebat.
                  </p>
                  <p className="text-[#A89880] text-sm leading-relaxed mb-4">
                    Pada <span className="text-[#C8A45C]">17 Juni 1907</span>, beliau gugur bersama
                    putrinya Lapan Boru dan putranya Sutan Nagari dalam pertempuran di Simsim, Pakpak.
                  </p>
                  <p className="text-[#A89880] text-sm leading-relaxed">
                    Pada tahun <span className="text-[#C8A45C]">1961</span>, pemerintah Indonesia
                    menetapkannya sebagai <strong className="text-[#F5F0E8]">Pahlawan Nasional</strong>.
                    Namanya diabadikan sebagai nama bandara di Sibolga serta berbagai jalan di Sumatera Utara.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="text-center mb-12 reveal opacity-0">
            <p className="text-[#C8A45C] text-sm uppercase tracking-[0.2em] mb-4">Linimasa</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']">
              Perjalanan <span className="text-gold-gradient">Sejarah</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`reveal opacity-0 relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C8A45C] border-4 border-[#0D0D0D] z-10 mt-6" />

                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="rounded-2xl border border-[#2A2018] bg-[#1C1410]/80 card-hover overflow-hidden">
                      
                      {/* Image container - fixed aspect ratio 4:3 */}
                      <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-contain bg-[#0D0A06] p-3 transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>

                      <div className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#C8A45C]/10 text-[#C8A45C] text-xs font-semibold mb-3">
                          {item.era}
                        </span>
                        <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#F5F0E8] mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[#A89880] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}