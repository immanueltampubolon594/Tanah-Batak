import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import { isLoggedIn, logout } from "@/lib/auth";

const navLinks = [
  { path: "/", label: "Beranda" },
  { path: "/ulos", label: "Ulos" },
  { path: "/sejarah", label: "Sejarah" },
  { path: "/rumah-adat", label: "Rumah Adat" },
  { path: "/senjata", label: "Senjata" },
  { path: "/kuliner", label: "Kuliner" },
  { path: "/wisata", label: "Wisata" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLoggedIn(isLoggedIn());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-[#2A2018] shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A45C] to-[#8B1A1A] flex items-center justify-center font-bold text-[#0D0D0D] text-lg font-['Playfair_Display'] transition-transform group-hover:scale-110">
                B
              </div>
              <span className="text-xl font-bold font-['Playfair_Display'] text-gold-gradient hidden sm:block">
                Tanah Batak
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-[#C8A45C] bg-[#C8A45C]/10"
                      : "text-[#A89880] hover:text-[#F5F0E8] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Tombol Login/Logout */}
              {loggedIn ? (
                <button
                  onClick={handleLogout}
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-medium border border-[#C8A45C] text-[#C8A45C] hover:bg-[#C8A45C] hover:text-[#0D0D0D] transition-all duration-300"
                >
                  Keluar
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#C8A45C] text-[#0D0D0D] hover:bg-[#D4AF6A] transition-all duration-300"
                >
                  Masuk
                </Link>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#C8A45C] hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass border-t border-[#2A2018] px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "text-[#C8A45C] bg-[#C8A45C]/10"
                    : "text-[#A89880] hover:text-[#F5F0E8] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Login/Logout */}
            {loggedIn ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-[#C8A45C] border border-[#C8A45C]/30 hover:bg-[#C8A45C]/10 transition-all"
              >
                Keluar
              </button>
            ) : (
              <Link
                to="/auth"
                className="block px-4 py-3 rounded-lg text-sm font-medium bg-[#C8A45C] text-[#0D0D0D] text-center hover:bg-[#D4AF6A] transition-all"
              >
                Masuk
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="relative border-t border-[#2A2018] bg-[#0A0806]">
        <div className="gorga-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A45C] to-[#8B1A1A] flex items-center justify-center font-bold text-[#0D0D0D] text-lg font-['Playfair_Display']">
                  B
                </div>
                <span className="text-xl font-bold font-['Playfair_Display'] text-gold-gradient">
                  Tanah Batak
                </span>
              </div>
              <p className="text-[#A89880] text-sm leading-relaxed">
                Menjelajahi kekayaan budaya, sejarah, dan keindahan alam Tanah
                Batak. Dari Danau Toba hingga filosofi ulos yang mendalam.
              </p>
            </div>

            <div>
              <h4 className="text-[#C8A45C] font-semibold mb-4 text-sm uppercase tracking-wider font-['Inter']">
                Jelajahi
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-[#A89880] hover:text-[#C8A45C] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[#C8A45C] font-semibold mb-4 text-sm uppercase tracking-wider font-['Inter']">
                Pepatah Batak
              </h4>
              <blockquote className="text-[#D4A574] italic font-['Playfair_Display'] text-lg leading-relaxed">
                "Anakhon hi do hamoraon di ahu"
              </blockquote>
              <p className="text-[#A89880] text-sm mt-2">
                — Anak adalah harta yang paling berharga bagiku
              </p>
            </div>
          </div>

          <div className="gorga-divider-thin mt-12 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#A89880] text-xs">
              © 2026 Tanah Batak. Melestarikan warisan budaya Batak.
            </p>
            <p className="text-[#A89880] text-xs">Horas! 🙏</p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#C8A45C] text-[#0D0D0D] flex items-center justify-center shadow-lg shadow-[#C8A45C]/20 transition-all duration-300 hover:bg-[#D4A574] ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}