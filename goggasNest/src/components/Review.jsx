import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "Fantastic food...fantastic atmosphere...amazing hosts!",
    author: "— Jane Doe",
  },
  {
    text: "Amazing place! Very peaceful and clean. Loved every moment. I will definitely come back again next summer with my family!",
    author: "— John Smith",
  },
  {
    text: "Exceptional hospitality and beautiful scenery. Will return!",
    author: "— Sarah Lee",
  },
];

export function Review() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <img
        loading="lazy"
        src="/area/garden.avif"
        alt="Review Background"
        className="opacity-0 md:opacity-100 w-full h-auto object-cover rounded-lg"
      />

      {/* Overlay Carousel Card */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative bg-white bg-opacity-90 rounded-xl shadow-lg p-8 w-[350px] h-[300px] sm:w-[500px] sm:h-[320px] text-center flex flex-col justify-between">
          <div>
            <div className="font-playfair text-2xl uppercase mb-4">Guest Reviews</div>
            <Quote className="mx-auto text-secondary mb-4" />
            <div className="overflow-y-auto max-h-32 px-10 text-base font-playfair text-gray-700 mb-2">
              {reviews[index].text}
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-500">{reviews[index].author}</p>

          {/* Arrows */}
          <button
            aria-label="previous review"
            onClick={prev}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="next review"
            onClick={next}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

