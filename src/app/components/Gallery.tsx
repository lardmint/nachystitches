import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

type Category = "all" | "skirt" | "tops" | "two-piece" | "trousers" | "gowns";

interface GalleryItem {
  id: number;
  category: Category[];
  image: string;
  name: string;
  price: string;
}

export function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: ["all", "gowns"],
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYW5rYXJhJTIwZ293bnxlbnwxfHx8fDE3Njc3MjE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Elegant Ankara Gown",
      price: "₦35,000"
    },
    {
      id: 2,
      category: ["all", "skirt"],
      image: "https://images.unsplash.com/photo-1710559056465-6a71e5089342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYW5rYXJhJTIwc2tpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzcyMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Stylish Ankara Skirt",
      price: "₦18,000"
    },
    {
      id: 3,
      category: ["all", "tops"],
      image: "https://images.unsplash.com/photo-1669197796946-c8229018ca74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYW5rYXJhJTIwdG9wJTIwYmxvdXNlfGVufDF8fHx8MTc2NzcyMTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Chic Ankara Top",
      price: "₦15,000"
    },
    {
      id: 4,
      category: ["all", "two-piece"],
      image: "https://images.unsplash.com/photo-1655102718560-19dd4971f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYW5rYXJhJTIwdHdvJTIwcGllY2V8ZW58MXx8fHwxNzY3NzIxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Modern Two-Piece Set",
      price: "₦32,000"
    },
    {
      id: 5,
      category: ["all", "trousers"],
      image: "https://images.unsplash.com/photo-1657357144487-9382bd7b627b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYW5rYXJhJTIwdHJvdXNlcnN8ZW58MXx8fHwxNzY3NzIxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Ankara Trousers",
      price: "₦22,000"
    },
    {
      id: 6,
      category: ["all", "gowns"],
      image: "https://images.unsplash.com/photo-1757140447779-9cffcc270104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9uJTIwYW5rYXJhfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Statement Ankara Dress",
      price: "₦38,000"
    },
    {
      id: 7,
      category: ["all", "two-piece"],
      image: "https://images.unsplash.com/photo-1602058746258-e012b1c1197c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwZWxlZ2FudCUyMGRyZXNzfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Classic Two-Piece",
      price: "₦30,000"
    },
    {
      id: 8,
      category: ["all", "tops"],
      image: "https://images.unsplash.com/photo-1763256293894-33a149cd9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJpbnQlMjBmYXNoaW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY3NzIwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Vibrant Ankara Top",
      price: "₦16,500"
    }
  ];

  const tabs: { id: Category; label: string }[] = [
    { id: "all", label: "All" },
    { id: "gowns", label: "Gowns" },
    { id: "two-piece", label: "Two-Piece" },
    { id: "skirt", label: "Skirts" },
    { id: "tops", label: "Tops" },
    { id: "trousers", label: "Trousers" }
  ];

  const filteredItems = galleryItems.filter(item => item.category.includes(activeTab));

  const handleOrderClick = (itemName: string, price: string) => {
    const message = `Hi NachyStitches! I'm interested in ordering: ${itemName} (${price})`;
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            Browse Our <span className="text-orange-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-700">
            Find your perfect Ankara outfit
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeTab === tab.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg text-gray-900">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl text-orange-600">
                    {item.price}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleOrderClick(item.name, item.price)}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
