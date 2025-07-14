import { Btn } from './helper/Btn'

export function About() {
  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 py-10 gap-10 lg:gap-20" id="about">
      
      {/* Left Column */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-5 w-full sm:w-11/12 mx-auto mt-4">
          
          {/* Title */}
          <div className="text-darkGreen/70 text-center text-lg sm:text-xl font-playfair">
            Discover Your Serene Escape
          </div>

          {/* Subtitle */}
          <div className="text-darkGreen text-4xl sm:text-5xl lg:text-6xl text-center font-vibes">
            Goggas Nest
          </div>

          {/* Image */}
          <div className="w-full sm:w-10/12 mx-auto">
            <img src="/area/view.avif" alt="Garden View" className="w-full h-auto rounded-xl shadow" loading="lazy" />
          </div>

          {/* Paragraph */}
          <div className="text-center text-darkGreen w-full sm:w-10/12 mx-auto mt-6 font-raleway text-sm sm:text-base leading-relaxed">
            Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an experience that delights the senses while delivering visible results. Embrace a routine that celebrates both your skin and the planet.
          </div>

          {/* CTA Button */}
          <Btn
            text="Take Virtual Tour"
            textColor="text-white hover:text-secondary text-sm transition-all duration-500 hover:rounded-xl hover:scale-103 mx-auto"
            font="font-Roboto"
            width="h-11 w-10/12 sm:w-8/12"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2">
        <img src="/area/viewBalcony.avif" alt="Balcony View" className="w-full h-auto rounded-xl shadow hidden lg:block" loading="lazy" />
      </div>
    </div>
  );
}
