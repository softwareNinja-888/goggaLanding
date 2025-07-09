// import { Quote } from "lucide-react";

// export function Review() {
//     return (
//         <>
//              <div className="py-0 relative mx-auto">
//                 <div className="flex flex-col gap-4 absolute w-90 h-80 bg-white left-[35%] top-[30%] py-6 px-6">
//                     <div className="uppercase font-playfair text-2xl text-center">Guest Reviews</div>
//                     <Quote className="mx-auto text-center mt-5"/>
//                     <div className="text-center text-base font-playfair">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti quasi alias, iste fuga.</div>
//                 </div>
//                 <img src="/area/garden.jpg" alt="hero image" className="" />
//             </div>
//         </>
//     );
// }
// import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// const reviews = [
//   {
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti quasi alias, iste fuga.",
//     author: "— Jane Doe",
//   },
//   {
//     text: "Amazing place! Very peaceful and clean. Loved every moment.",
//     author: "— John Smith",
//   },
//   {
//     text: "Exceptional hospitality and beautiful scenery. Will return!",
//     author: "— Sarah Lee",
//   },
// ];

// export function Review() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, clientWidth } = scrollRef.current;
//     const scrollAmount = clientWidth * 0.9; // almost a full card
//     scrollRef.current.scrollTo({
//       left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="relative w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Background Image */}
//       <img
//         src="/area/garden.jpg"
//         alt="hero image"
//         className="w-full h-auto object-cover rounded-lg"
//       />

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex items-center justify-center px-4">
//         <div className="relative bg-white bg-opacity-90 rounded-lg shadow-lg p-6 max-w-full w-full sm:max-w-2xl">
//           <div className="text-center font-playfair text-2xl uppercase mb-4">
//             Guest Reviews
//           </div>
//           <Quote className="mx-auto text-secondary mb-4" />

//           {/* Arrows */}
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100 transition"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100 transition"
//           >
//             <ChevronRight />
//           </button>

//           {/* Swipable Reviews */}
//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-2"
//           >
//             {reviews.map((review, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-full snap-center text-center px-4"
//               >
//                 <p className="text-base font-playfair text-gray-700 mb-2">
//                   {review.text}
//                 </p>
//                 <p className="text-sm font-semibold text-gray-500">
//                   {review.author}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, deleniti quasi alias, iste fuga.",
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
        src="/area/garden.jpg"
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
            onClick={prev}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
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

