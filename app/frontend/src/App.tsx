import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import UlosPhilosophy from './pages/UlosPhilosophy';
import BatakHistory from './pages/BatakHistory';
import TraditionalHouses from './pages/TraditionalHouses';
import BatakWeapons from './pages/BatakWeapons';
import BatakFood from './pages/BatakFood';
import Tourism from './pages/Tourism';
import AuthCallback from './pages/AuthCallback';
import AuthError from './pages/AuthError';
import AuthPage from './pages/AuthPage';
// MODULE_IMPORTS_START
// MODULE_IMPORTS_END

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* MODULE_PROVIDERS_START */}
    {/* MODULE_PROVIDERS_END */}
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ulos" element={<UlosPhilosophy />} />
          <Route path="/sejarah" element={<BatakHistory />} />
          <Route path="/rumah-adat" element={<TraditionalHouses />} />
          <Route path="/senjata" element={<BatakWeapons />} />
          <Route path="/kuliner" element={<BatakFood />} />
          <Route path="/wisata" element={<Tourism />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/auth/error" element={<AuthError />} />
          {/* MODULE_ROUTES_START */}
          {/* MODULE_ROUTES_END */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    {/* MODULE_PROVIDERS_CLOSE */}
  </QueryClientProvider>
);

export default App;