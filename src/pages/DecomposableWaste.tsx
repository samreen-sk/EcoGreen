import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DecomposableWaste = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 py-16 text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent mb-4">
          🍃 Wet Waste — Decomposable Materials (Green Bin)
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Wet waste is organic waste that naturally breaks down and becomes compost 🌿💧
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Kitchen Waste */}
          <div className="p-6 rounded-2xl border border-green-200 bg-green-50/40 dark:bg-green-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-green-600 mb-2">🍎 Kitchen Waste</h2>
            <p className="text-muted-foreground">
              Fruit peels, vegetable scraps, leftover food, tea leaves, and eggshells all belong here 🍌🥕
            </p>
          </div>

          {/* Garden Waste */}
          <div className="p-6 rounded-2xl border border-green-200 bg-green-50/40 dark:bg-green-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-green-600 mb-2">🌾 Garden Waste</h2>
            <p className="text-muted-foreground">
              Fallen leaves, flowers, and small branches can also be composted 🌻🍃
            </p>
          </div>

          {/* Do's */}
          <div className="p-6 rounded-2xl border border-green-200 bg-green-50/40 dark:bg-green-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-green-600 mb-2">☕ Do’s</h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>Keep wet waste separate from plastics and glass 🪣</li>
              <li>Use a green bin 💚</li>
              <li>Turn it into compost to grow your own plants! 🌼</li>
            </ul>
          </div>

          {/* Don’ts */}
          <div className="p-6 rounded-2xl border border-green-200 bg-green-50/40 dark:bg-green-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-green-600 mb-2">🚫 Don’ts</h2>
            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>Don’t mix wet waste with dry waste — it ruins recyclables 😢</li>
              <li>Avoid adding plastics or sanitary items here</li>
            </ul>
          </div>
        </div>

        {/* Eco Tip Section */}
        <div className="mt-12 bg-gradient-to-r from-green-100 to-green-100 dark:from-green-900/20 dark:to-green-800/10 rounded-2xl p-6 border border-green-200 shadow-inner max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">💡 Eco Tip</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Composting your wet waste reduces landfill waste and gives back nutrients to the Earth 🌍🌱
          </p>
        </div>

        {/* Embedded YouTube Video */}
        <div className="flex justify-center my-12">
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg border border-green-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YpQu_k1weD8?si=Dk8lnbXd-xmkQhJy"
              title="Composting Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <p className="mt-10 text-green-700 font-semibold text-lg">
          🌱 Every bit of composted waste helps create a cleaner, greener world 🌎💚
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default DecomposableWaste;
