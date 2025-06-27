import { ArrowBigRight } from "lucide-react";
import { GiPartyFlags } from "react-icons/gi";


function Card({img='/area/view.jpg',name="Coast Villa"}){
	return(
		<>
			<div className="relative group ">
                <div className="overflow-hidden aspect-w-1 aspect-h-1 h-120 w-full group-hover:rounded-2xl transition-all duration-500 ease-in-out">
                    <img className="object-cover w-100 h-120 transition-all duration-300 hover:scale-125" src={img} alt={`${name} image`} loading='lazy' />
                </div>
                <div className="flex items-center justify-between bg-transparent py-2 text-xl font-Cal_Sans absolute bottom-0 w-12/12 h-20 px-5 mx-auto right-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                    <div className='font-bold text-white font-bold font-raleway'>
                        {name}
                    </div>
                </div>
           </div>
   		</>
	)
}
export function Highlights(){
    return (
        <>
            <div>
	            <div className="pt-0 pb-10 uppercase font-playfair text-5xl text-center ">Highlights</div>
            	<div className="overflow-hidden w-full pt-20">
                <div className="flex gap-20 w-max animate-[marquee_30s_linear_infinite]">
                    <Card img="/area/bar1.jpg" name="Bar Area"/>
                    <Card img="/area/viewBalcony.jpg" name="Great Views"/>
                    <Card img="/area/wedding.jpg" name="Hosted Wedding"/>
                    <Card img="/area/view4.jpg"/>
                    <Card img="/area/bar.jpg" name="Bar" />
                    <Card img="/area/viewNight.jpg" name="Night View"/>



                    {/* DUPLICATE OF ABOVE */}
					<Card img="/area/bar1.jpg" name="Bar Area"/>
                    <Card img="/area/viewBalcony.jpg" name="Great Views"/>
                    <Card img="/area/wedding.jpg" name="Hosted Wedding"/>
                    <Card img="/area/view4.jpg"/>
                    <Card img="/area/bar.jpg" name="Bar" />
                    <Card img="/area/viewNight.jpg" name="Night View"/>
                </div>
            </div>
            </div>
        </>
    )
}