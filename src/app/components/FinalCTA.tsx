import { Button } from "./ui/button";

export function FinalCTA() {
  const handleShopNow = () => {
    const message = "Hi NachyStitches! I'm ready to order. Can you help me?";
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactUs = () => {
    const message = "Hi NachyStitches! I have some questions about your products.";
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl">
            Ready to Look <span className="text-orange-400">Amazing?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join hundreds of stylish women who trust NachyStitches for their Ankara fashion needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              onClick={handleShopNow}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 text-lg rounded-full shadow-xl"
            >
              Shop Now
            </Button>
            <Button 
              size="lg"
              onClick={handleContactUs}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap gap-8 justify-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Personal Styling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}