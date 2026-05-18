import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "@/lib/auth";

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "login") {
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password);
      }
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0A06] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-['Playfair_Display'] text-[#F5F0E8] mb-2">
            {mode === "login" ? "Selamat Datang" : "Daftar Akun"}
          </h1>
          <p className="text-[#A89880] text-sm">
            {mode === "login" ? "Masuk untuk melanjutkan" : "Bergabunglah bersama kami"}
          </p>
        </div>

        <div className="bg-[#1C1410]/80 border border-[#2A2018] rounded-2xl p-8">
          <div className="flex rounded-lg bg-[#0F0A06] p-1 mb-6">
            <button onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${mode === "login" ? "bg-[#C8A45C] text-[#0F0A06]" : "text-[#A89880] hover:text-[#F5F0E8]"}`}>
              Masuk
            </button>
            <button onClick={() => setMode("register")}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${mode === "register" ? "bg-[#C8A45C] text-[#0F0A06]" : "text-[#A89880] hover:text-[#F5F0E8]"}`}>
              Daftar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-[#A89880] text-sm mb-1">Nama Lengkap</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Nama kamu"
                  className="w-full bg-[#0F0A06] border border-[#2A2018] rounded-lg px-4 py-2.5 text-[#F5F0E8] placeholder-[#4A3C2E] focus:outline-none focus:border-[#C8A45C] transition-colors" />
              </div>
            )}
            <div>
              <label className="block text-[#A89880] text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="email@kamu.com"
                className="w-full bg-[#0F0A06] border border-[#2A2018] rounded-lg px-4 py-2.5 text-[#F5F0E8] placeholder-[#4A3C2E] focus:outline-none focus:border-[#C8A45C] transition-colors" />
            </div>
            <div>
              <label className="block text-[#A89880] text-sm mb-1">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} required
                placeholder={mode === "register" ? "Minimal 6 karakter" : "Password kamu"}
                className="w-full bg-[#0F0A06] border border-[#2A2018] rounded-lg px-4 py-2.5 text-[#F5F0E8] placeholder-[#4A3C2E] focus:outline-none focus:border-[#C8A45C] transition-colors" />
            </div>
            {error && (
              <p className="text-red-400 text-sm bg-red-900/20 border border-red-900/30 rounded-lg px-4 py-2">{error}</p>
            )}
            <button type="submit" disabled={loading}
              className="w-full bg-[#C8A45C] hover:bg-[#D4AF6A] disabled:opacity-50 text-[#0F0A06] font-semibold py-2.5 rounded-lg transition-colors mt-2">
              {loading ? "Memproses..." : mode === "login" ? "Masuk" : "Daftar Sekarang"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}