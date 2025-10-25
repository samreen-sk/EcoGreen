import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WasteStore from "@/components/WasteStore";
import { ShoppingCart } from "lucide-react";

const EcoStore = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />

      {/* 🛒 Store Header Section */}
      <div className="flex justify-between items-center px-10 py-6 mt-20 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-green-700">Eco Store</h1>
      </div>

      <div className="pt-10">
        <WasteStore />
      </div>

      <Footer />
    </div>
  );
};

export default EcoStore;
