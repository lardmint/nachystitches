import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function ShopLocation() {
  const handleGetDirections = () => {
    // Replace with actual coordinates
    const mapsUrl = "https://maps.google.com/?q=Lagos+Nigeria";
    window.open(mapsUrl, '_blank');
  };

  const handleWhatsAppContact = () => {
    const message = "Hi NachyStitches! I'd like to visit your shop. What are your opening hours?";
    const whatsappUrl = `https://wa.me/234XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            Visit Our <span className="text-orange-600">Shop</span>
          </h2>
          <p className="text-xl text-gray-700">
            Come see our collection in person
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Shop Image */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc3MDkzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NachyStitches boutique interior"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1757140447779-9cffcc270104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9uJTIwYW5rYXJhfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ankara collection display"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763256293894-33a149cd9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJpbnQlMjBmYXNoaW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY3NzIwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fashion showcase"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Shop Details */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Fashion Avenue, Lekki Phase 1,<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 12:00 PM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Contact</h3>
                  <p className="text-gray-600">
                    Phone: +234 XXX XXX XXXX<br />
                    Email: hello@nachystitches.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <Button
                size="lg"
                onClick={handleGetDirections}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                variant="outline"
                className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </Button>
            </div>

            <div className="bg-orange-50 rounded-xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Note:</strong> You can shop online and have your outfit delivered, or visit our shop to browse our collection in person. Walk-ins are welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
