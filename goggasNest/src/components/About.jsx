export function About() {

  return (
    <>
      <div className="flex px-10 py-20 gap-10">
				<div className="flex-1/2 ">
					<div className="flex flex-col gap-5 w-10/12 mx-auto mt-10">
						<div className="text-darkGreen/70 text-center text-xl w-11/12">Discover Your Serene Escape</div>
						<div className="text-darkGreen text-6xl text-center w-11/12 font-vibes">Goggas Nest</div>
						<div className="w-10/12 mx-auto">
							<img src="/area/view.jpg" alt="" className="w-full h-90" />
						</div>
						<div className="text-center text-darkGreen w-10/12 mx-auto mt-8">
							Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an experience that delights the senses while delivering visible results. Embrace a routine that celebrates both your skin and the planet.
						</div>
						<div className="bg-mainGreen border border-darkGreen hover:bg-bg transition-all duration-700 ease-in-out hover:text-black cursor-pointer px-3 py-2 text-white w-8/12 text-center mx-auto">
							Take Virtual Tour
						</div>
					</div>
				</div>
				<div className="flex-1/2">
					<img src="/area/viewBalcony.jpg" alt="" className="h-[100%]" />
				</div>
			</div>
    </>
  )
}