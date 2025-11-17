import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FoodLibrary from "./pages/FoodLibrary";
import FoodDetail from "./pages/FoodDetail";
import SolarTermDetail from "./pages/SolarTermDetail";
import PersonalizedRecommendation from "./pages/PersonalizedRecommendation";
import Favorites from "./pages/Favorites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/food-library" element={<FoodLibrary />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/solar-term/:id" element={<SolarTermDetail />} />
          <Route path="/personalized" element={<PersonalizedRecommendation />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
