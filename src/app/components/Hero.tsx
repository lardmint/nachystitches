import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  const handleShopNow = () => {
    const message = "Hi NachyStitches! I'd like to browse your Ankara collection.";
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetStyled = () => {
    const message = "Hi NachyStitches! I need help choosing the perfect outfit. Can you style me up?";
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl tracking-tight text-gray-900">
                All Things Ankara.
                <br />
                <span className="text-orange-600">Ready to Wear.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0">
                Elegant, modern Ankara fashion delivered to your door. No waiting. No stress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleShopNow}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                onClick={handleGetStyled}
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full"
              >
                Get Styled
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ready-to-wear</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Nationwide delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your delivery time</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757140447779-9cffcc270104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9uJTIwYW5rYXJhfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautiful Ankara fashion by NachyStitches"
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="text-center">
                <p className="text-3xl text-orange-600">500+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}