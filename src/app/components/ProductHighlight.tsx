import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function ProductHighlight() {
  const handleShopAll = () => {
    const message = "Hi NachyStitches! I'd like to see all your collections.";
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const products = [
    {
      name: "Ankara Dresses",
      description: "Elegant designs for every occasion",
      image: "https://images.unsplash.com/photo-1602058746258-e012b1c1197c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwZWxlZ2FudCUyMGRyZXNzfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Ankara Sets",
      description: "Coordinated styles, effortless look",
      image: "https://images.unsplash.com/photo-1763256293894-33a149cd9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJpbnQlMjBmYXNoaW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY3NzIwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Statement Pieces",
      description: "Bold prints, unforgettable style",
      image: "https://images.unsplash.com/photo-1759893362613-8bb8bb057af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBlbGVnYW50fGVufDF8fHx8MTc2NzcyMDcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            Our <span className="text-orange-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Every piece tells a story. Find yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-[500px] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-200 mb-4">
                  {product.description}
                </p>
                <Button 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-orange-600"
                >
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={handleShopAll}
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg rounded-full shadow-lg"
          >
            Shop All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}