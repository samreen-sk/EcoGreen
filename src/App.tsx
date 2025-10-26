import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudyCleanliness from "./pages/StudyCleanliness";
import EcoStore from "./pages/EcoStore";
import CommunityConnect from "./pages/CommunityConnect";
import RewardsPage from "./pages/RewardsPage";
import RecyclableWaste from "./pages/RecyclableWaste";
import DecomposableWaste from "./pages/DecomposableWaste";
import NonRecyclableWaste from "./pages/NonRecyclableWaste";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/study" element={<StudyCleanliness />} />
        <Route path="/store" element={<EcoStore />} />
        <Route path="/community" element={<CommunityConnect />} />
        <Route path="/rewards" element={<RewardsPage />} />

        {/* Study subpages */}
        <Route path="/study/recyclable" element={<RecyclableWaste />} />
        <Route path="/study/decomposable" element={<DecomposableWaste />} />
        <Route path="/study/non-recyclable" element={<NonRecyclableWaste />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
