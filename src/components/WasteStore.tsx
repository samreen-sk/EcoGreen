import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  ShoppingCart,
  Trash2,
  Leaf,
  Sparkles,
  Shield,
  XCircle,
} from "lucide-react";

/**
 * NOTE:
 * - Put product images in `public/assets/` (NOT src). Example:
 *   public/assets/bins3in1.jpg
 *   public/assets/bluebin.jpg
 *   ...
 * - In code use "/assets/yourfile.jpg" (Vite serves `public` at root).
 */

type Product = {
  id: number;
  name: string;
  price: string; // e.g. "₹399"
  description: string;
  icon: any;
  badge: string;
  image: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const WasteStore: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]); // ✅ FIXED
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [checkoutData, setCheckoutData] = useState({
    name: "",
    address: "",
    pincode: "",
  });

  const handleOrderSubmit = () => {
    if (!checkoutData.name || !checkoutData.address || !checkoutData.pincode) {
      alert("⚠️ Please fill all fields before placing the order!");
      return;
    }

    setShowCheckout(false);
    setIsCartOpen(false);
    setCart([]);
    setShowSuccess(true);
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Color-Coded Dustbin Set",
      price: "₹999",
      description:
        "Complete 3-bin set with blue, green, and red bins for proper segregation",
      icon: Trash2,
      badge: "Bestseller",
      image: "/assets/bins3in1.jpg",
    },
    {
      id: 2,
      name: "Blue DustBin for Recyclables",
      price: "₹399",
      description: "Durable bin specifically for recyclable waste",
      icon: Leaf,
      badge: "Eco-Friendly",
      image: "/assets/bluebin.jpg",
    },
    {
      id: 3,
      name: "Blue & Green bin Combo with Cleaning kit",
      price: "₹1299",
      description:
        "Includes blue and green bins along with a cleaning kit for maintenance",
      icon: Sparkles,
      badge: "Bestseller",
      image: "/assets/cleanerandbin.jpg",
    },
    {
      id: 4,
      name: "Green DustBin for Organic Waste",
      price: "₹399",
      description: "Sturdy bin designed for compostable and organic waste",
      icon: Shield,
      badge: "Essential",
      image: "/assets/greenbin.jpg",
    },
    {
      id: 5,
      name: "Red DustBin For Hazardous Waste",
      price: "₹399",
      description: "Safe bin for disposing of hazardous and non-recyclable waste",
      icon: Leaf,
      badge: "New Arrival",
      image: "/assets/redbin.jpg",
    },
    {
      id: 6,
      name: "Classic Red Dustbin",
      price: "₹599",
      description: "Durable red dustbin suitable for various waste types",
      icon: Leaf,
      badge: "Popular",
      image: "/assets/redbin2.jpg",
    },
    {
      id: 7,
      name: "Garbage Disposable Bags",
      price: "₹299",
      description: "Strong and eco-friendly garbage bags for everyday use",
      icon: Leaf,
      badge: "Bestseller",
      image: "/assets/blackbag.jpg",
    },
    {
      id: 8,
      name: "Green Disposable Bags",
      price: "₹399",
      description: "Eco-safe bags made from natural materials",
      icon: Leaf,
      badge: "Essential",
      image: "/assets/greenbag.jpg",
    },
    {
      id: 9,
      name: "Green Disposable Bags-180 Bags",
      price: "₹499",
      description: "Eco-safe bags made from natural materials",
      icon: Leaf,
      badge: "New Arrival",
      image: "/assets/greenbags2.jpg",
    },
    {
      id: 10,
      name: "Cleaner with brush set",
      price: "₹551",
      description: "Good quality cleaner with brush set for dustbin cleaning",
      icon: Leaf,
      badge: "Popular",
      image: "/assets/product1.jpg",
    },
    {
      id: 11,
      name: "Cleaner",
      price: "₹199",
      description: "To clean your dustbins easily",
      icon: Leaf,
      badge: "Bestseller",
      image: "/assets/product2.jpg",
    },
    {
      id: 12,
      name: "Blue Mask",
      price: "₹699",
      description: "To prevent dust and pollution",
      icon: Leaf,
      badge: "Popular",
      image: "/assets/bluemask.jpg",
    },
    {
      id: 13,
      name: "Green Mask",
      price: "₹459",
      description: "To prevent dust and pollution High Quality",
      icon: Leaf,
      badge: "Bestseller",
      image: "/assets/greenmask.jpg",
    },
    {
      id: 14,
      name: "White Mask",
      price: "₹554",
      description: "To be hygienic from dust and pollution",
      icon: Leaf,
      badge: "New Arrival",
      image: "/assets/whitemask.jpg",
    },
    {
      id: 15,
      name: "Dust Cleanser Cloth",
      price: "₹799",
      description: "To clean dustbins easily",
      icon: Leaf,
      badge: "Bestseller",
      image: "/assets/clothclean.jpg",
    },
    {
      id: 16,
      name: "Dust Cleanser Cloth - Large",
      price: "₹399",
      description: "Effective cloth for cleaning larger surfaces",
      icon: Leaf,
      badge: "New Arrival",
      image: "/assets/clothclean2.jpg",
    },
    {
      id: 17,
      name: "Dust cleaning cloth - 10 sets",
      price: "₹299",
      description: "Best quality towel to clean dustbins",
      icon: Leaf,
      badge: "Essential",
      image: "/assets/towel6.jpg",
    },
    {
      id: 18,
      name: "Hand Sanitizer Cleanser 5L",
      price: "₹1010",
      description: "To keep your hands clean and germ-free",
      icon: Leaf,
      badge: "New Arrival",
      image: "/assets/handcleanser.jpg",
    },
    {
      id: 19,
      name: "Hand Glove",
      price: "₹199",
      description: "Protective gloves for safe waste handling",
      icon: Leaf,
      badge: "Popular",
      image: "/assets/handgloves.jpg",
    },
    {
      id: 20,
      name: "Hand Gloves -4 sets",
      price: "₹699",
      description: "Protective gloves for safe waste handling",
      icon: Leaf,
      badge: "New Arrival",
      image: "/assets/handgloves4.jpg",
    },
    {
      id: 21,
      name: "One time Hand Gloves -100 pieces",
      price: "₹759",
      description: "One time use protective gloves for safe waste handling",
      icon: Leaf,
      badge: "Bestseller",
      image: "/assets/handgloves100.jpg",
    },
  ];

  const visibleProducts = showAll ? products : products.slice(0, 4);

  const parsePrice = (priceStr: string) =>
    parseInt(priceStr.replace(/[₹,]/g, "").trim(), 10) || 0;

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: parsePrice(product.price), quantity: 1 },
      ];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section id="store" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Waste Utility{" "}
              <span className="bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
                Store
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get all the tools you need for effective home waste management
            </p>
          </div>

          {/* Cart Button */}
          <Button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
          >
            <ShoppingCart className="w-4 h-4" />
            My Cart ({cart.reduce((c, it) => c + it.quantity, 0)})
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <Card
              key={product.id}
              className="group p-6 bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    {product.badge}
                  </span>
                </div>

                <div className="w-full aspect-square rounded-xl overflow-hidden border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-2xl font-bold text-green-700">
                    {product.price}
                  </span>
                  <Button size="sm" onClick={() => addToCart(product)}>
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Products"}
          </Button>
        </div>
      </div>

      {/* 🛒 Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsCartOpen(false)} />
          <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">My Cart</h3>
              <Button variant="ghost" onClick={() => setIsCartOpen(false)}>
                <XCircle className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 mt-10 text-center">Your cart is empty 🛒</p>
            ) : (
              <>
                <ul className="divide-y divide-gray-200">
                  {cart.map((it) => (
                    <li key={it.id} className="flex items-start justify-between py-3">
                      <div>
                        <p className="font-medium">{it.name}</p>
                        <p className="text-sm text-gray-500">
                          ₹{it.price} × {it.quantity}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-right font-semibold">₹{it.price * it.quantity}</div>
                        <Button variant="ghost" size="sm" onClick={() => removeFromCart(it.id)}>
                          <XCircle className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-green-700">₹{totalAmount}</span>
                  </div>

                  <div className="text-center mt-4">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setShowCheckout(true)}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 💳 Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[60]">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h2 className="text-xl font-bold mb-4 text-green-700">Checkout</h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                value={checkoutData.name}
                onChange={(e) =>
                  setCheckoutData({ ...checkoutData, name: e.target.value })
                }
              />
              <textarea
                placeholder="Delivery Address"
                className="w-full p-2 border rounded"
                value={checkoutData.address}
                onChange={(e) =>
                  setCheckoutData({ ...checkoutData, address: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Pincode"
                className="w-full p-2 border rounded"
                value={checkoutData.pincode}
                onChange={(e) =>
                  setCheckoutData({ ...checkoutData, pincode: e.target.value })
                }
              />

              <div className="flex items-center space-x-2">
                <input type="radio" id="cod" name="payment" checked readOnly />
                <label htmlFor="cod">Cash on Delivery (COD)</label>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <Button variant="outline" onClick={() => setShowCheckout(false)}>
                Cancel
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleOrderSubmit}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[70]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              🎉 Order Placed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your eco-friendly order has been placed successfully!
            </p>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => setShowSuccess(false)}
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WasteStore;
