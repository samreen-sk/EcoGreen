import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudyCleanliness from "./pages/StudyCleanliness";
import EcoStore from "./pages/EcoStore";
import CommunityConnect from "./pages/CommunityConnect";
import RewardsPage from "./pages/RewardsPage";
import GradingPage from "./pages/GradingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study" element={<StudyCleanliness />} />
          <Route path="/store" element={<EcoStore />} />
          <Route path="/community" element={<CommunityConnect />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/grading" element={<GradingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
