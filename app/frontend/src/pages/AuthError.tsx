import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function AuthErrorPage() {
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const errorMessage =
    searchParams.get('msg') ||
    'Informasi autentikasi tidak valid atau sudah kedaluwarsa';

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F0A06] p-6 text-center">
      <div className="space-y-6 max-w-md bg-[#1C1410]/80 border border-[#2A2018] rounded-2xl p-10">
        
        {/* Icon */}
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-red-400" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold font-['Playfair_Display'] text-[#F5F0E8]">
          Autentikasi Gagal
        </h1>

        {/* Message */}
        <p className="text-[#A89880] text-sm leading-relaxed">
          {errorMessage}
        </p>

        {/* Countdown */}
        <p className="text-sm text-[#6B5A48]">
          {countdown > 0 ? (
            <>
              Kembali ke beranda dalam{' '}
              <span className="text-[#C8A45C] font-semibold text-base">
                {countdown}
              </span>{' '}
              detik
            </>
          ) : (
            'Mengalihkan...'
          )}
        </p>

        {/* Button */}
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-[#C8A45C] hover:bg-[#D4AF6A] text-[#0F0A06] font-semibold py-2.5 rounded-lg transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}