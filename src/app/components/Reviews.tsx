import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Amaka Okafor",
      location: "Lagos",
      rating: 5,
      review: "The quality is amazing! My dress arrived on time and fits perfectly. NachyStitches has become my go-to for Ankara fashion.",
      image: "https://images.unsplash.com/photo-1756588534346-e8899364757b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzcyMTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Blessing Adeyemi",
      location: "Abuja",
      rating: 5,
      review: "I love that I don't have to wait for a tailor anymore. The ready-to-wear pieces are stylish and well-made. Highly recommend!",
      image: "https://images.unsplash.com/photo-1533518280131-f16fb5540413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBoYXBweSUyMGN1c3RvbWVyfGVufDF8fHx8MTc2NzcyMTg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Chioma Nwosu",
      location: "Port Harcourt",
      rating: 5,
      review: "Beautiful designs and excellent customer service. The styling advice they gave me was spot on. I received so many compliments!",
      image: "https://images.unsplash.com/photo-1757140447779-9cffcc270104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9uJTIwYW5rYXJhfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      name: "Funmi Bakare",
      location: "Ibadan",
      rating: 5,
      review: "Fast delivery and beautiful packaging. The outfit was exactly as shown. NachyStitches never disappoints!",
      image: "https://images.unsplash.com/photo-1602058746258-e012b1c1197c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwZWxlZ2FudCUyMGRyZXNzfGVufDF8fHx8MTc2NzcyMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      name: "Ada Eze",
      location: "Enugu",
      rating: 5,
      review: "The best Ankara shopping experience! No stress, just great fashion. I've ordered three times already.",
      image: "https://images.unsplash.com/photo-1763256293894-33a149cd9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcHJpbnQlMjBmYXNoaW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY3NzIwNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      name: "Nneka Johnson",
      location: "Lagos",
      rating: 5,
      review: "Quality fabric, perfect tailoring, and modern designs. This is exactly what I've been looking for!",
      image: "https://images.unsplash.com/photo-1759893362613-8bb8bb057af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBlbGVnYW50fGVufDF8fHx8MTc2NzcyMDcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            What Our <span className="text-orange-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-700">
            Join hundreds of happy customers across Nigeria
          </p>
        </div>
      </div>

      <div className="review-slider">
        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id} className="px-3">
              <div className="bg-white rounded-2xl p-8 shadow-md h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
