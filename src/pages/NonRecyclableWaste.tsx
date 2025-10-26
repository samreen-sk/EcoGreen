import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NonRecyclableWaste = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 py-16 text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
          🚫 Non-Recyclable / Hazardous Waste (Red Bin)
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          This type of waste cannot be recycled or composted and must be handled carefully ⚠️♻️
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Medical Waste */}
          <div className="p-6 rounded-2xl border border-red-200 bg-red-50/40 dark:bg-red-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-red-600 mb-2">💉 Medical Waste</h2>
            <p className="text-muted-foreground">
              Used masks, bandages, syringes, and sanitary napkins — wrap them securely before disposal 🩹🚮
            </p>
          </div>

          {/* Household Hazardous Items */}
          <div className="p-6 rounded-2xl border border-orange-200 bg-orange-50/40 dark:bg-orange-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">🧪 Household Hazardous Items</h2>
            <p className="text-muted-foreground">
              Paint cans, batteries, expired medicines, and chemical cleaners should be disposed of safely 🧴⚡
            </p>
          </div>

          {/* Soiled Items */}
          <div className="p-6 rounded-2xl border border-red-200 bg-red-50/40 dark:bg-red-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-red-600 mb-2">🍽️ Soiled Items</h2>
            <p className="text-muted-foreground">
              Oily food wrappers, chip packets, or greasy tissues should not go in recycling bins 🧻❌
            </p>
          </div>

          {/* Disposal Instruction */}
          <div className="p-6 rounded-2xl border border-orange-200 bg-orange-50/40 dark:bg-orange-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">🗑️ Disposal Instructions</h2>
            <p className="text-muted-foreground">
              Use a <strong>red bin ❤️</strong> for these wastes. Handle carefully and never burn them! 🔥🚫
            </p>
          </div>
        </div>

        {/* Eco Tip Section */}
        <div className="mt-12 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-800/10 rounded-2xl p-6 border border-red-200 shadow-inner max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-red-700 mb-2">💡 Eco Tip</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Reduce your hazardous waste by switching to eco-friendly cleaners, reusable cloths, and refillable containers 🌼♻️
          </p>
        </div>

        {/* Embedded YouTube Video */}
        <div className="flex justify-center my-12">
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/w0beNWKItik?si=27c7O7ItgHDGErrd"
              title="Hazardous Waste Management Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="mt-10 text-green-700 font-semibold text-lg">
          🌍 Let’s dispose responsibly — every safe action keeps our community healthy and pollution-free 🌿💚
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default NonRecyclableWaste;
