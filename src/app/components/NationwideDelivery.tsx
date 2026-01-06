export function NationwideDelivery() {
  const locations = [
    "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano",
    "Benin City", "Enugu", "Jos", "Kaduna", "Calabar"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>

            <h2 className="text-4xl lg:text-5xl text-gray-900">
              We Deliver <span className="text-orange-600">Nationwide</span>
            </h2>
            <p className="text-xl text-gray-700">
              Wherever you are in Nigeria, we'll bring your outfit to you.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 lg:p-12 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{location}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-orange-200 space-y-4">
              <h3 className="text-xl text-gray-900">
                Delivery That Works For You
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Choose Your Time</h4>
                    <p className="text-gray-600">Pick the date and time that suits your schedule</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Safe & Secure</h4>
                    <p className="text-gray-600">Your order is handled with care from start to finish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
