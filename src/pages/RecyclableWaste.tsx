import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RecyclableWaste = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 py-16 text-center">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent mb-4">
          ♻️ Dry Waste — Recyclable Materials (Blue / Yellow Bin)
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Learn about dry waste that can be recycled and reused to protect our planet 🌏✨
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Plastic Items */}
          <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50/40 dark:bg-blue-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">🧴 Plastic Items</h2>
            <p className="text-muted-foreground">
              Bottles, containers, and wrappers that are <strong>clean and dry</strong> can be recycled.
              Avoid oily or food-stained plastics 🚫🍔
            </p>
          </div>

          {/* Paper Waste */}
          <div className="p-6 rounded-2xl border border-yellow-200 bg-yellow-50/40 dark:bg-yellow-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">📄 Paper Waste</h2>
            <p className="text-muted-foreground">
              Newspapers, books, magazines, and cardboard boxes — keep them <strong>flat and dry</strong> 
              to help recycling plants 📰📦
            </p>
          </div>

          {/* Glass Materials */}
          <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50/40 dark:bg-blue-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">🥤 Glass Materials</h2>
            <p className="text-muted-foreground">
              Bottles, jars, and other glass containers can be reused or melted to make new items. 
              Handle carefully to avoid breakage 🪟💚
            </p>
          </div>

          {/* Metal Cans */}
          <div className="p-6 rounded-2xl border border-yellow-200 bg-yellow-50/40 dark:bg-yellow-950/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">🥫 Metal Cans</h2>
            <p className="text-muted-foreground">
              Tin cans, aluminum foils, and soda cans are valuable recyclables — rinse and drop them 
              in the blue or yellow bin ⚙️🥇
            </p>
          </div>
        </div>

        {/* Eco Tip Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-blue-900/20 dark:to-yellow-800/10 rounded-2xl p-6 border border-blue-200 shadow-inner max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">💡 Eco Tip</h3>
          <p className="text-muted-foreground text-lg mb-6">
            Always rinse and dry your recyclables before tossing them in the blue or yellow bin 🩵💛. 
            Mixing wet waste with dry waste makes recycling difficult!
          </p>

        </div>
       {/* Embedded YouTube Video */}
<div className="flex justify-center my-12">
  <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg border border-blue-200">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/RJG_oM--Kyg?si=0rNxHw8MYZGLNZwD"
      title="Recycling Tutorial"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>


        <p className="mt-10 text-green-700 font-semibold text-lg">
          🌱 Every clean, dry item you recycle is a small step toward a cleaner, greener planet 🌎💚
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default RecyclableWaste;
