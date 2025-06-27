import { Building2, Expand, BedDouble, ShowerHead } from "lucide-react";
import { Btn} from "./helper/Btn";


const RoomInfo = ({info,Icon})=>{
	return(
		<>
			<div className="flex gap-2">
				{/*<Building2/>*/}
				<Icon/>
				<div className="font-raleway">{info}</div>
			</div>
		</>		
	)
}

const RowCard = ({ title, text, image, invert }) => {
	console.log('Check:',invert)
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-8 ${invert ? 'md:flex-row-reverse' : ''}`}>
      <img src={image} alt={title} className="w-full h-94 object-cover rounded-md" />
      <div className="flex flex-col gap-3 ">
      	<div className="font-vibes text-4xl">{title}</div>
      	<div className="font-raleway">{text}</div>
  		<div className="flex flex-col gap-5">
  			<RoomInfo info="Rooms: 1-2" Icon={Building2} />
  			<RoomInfo info="Rooms: 150 Sqm" Icon={Expand} />
  			<RoomInfo info="Beds: 1 King,2 Singles" Icon={BedDouble} />
  			<RoomInfo info="Bathrooms: 1-2" Icon={ShowerHead} />
  		</div>
  		<div className="flex flex-row w-8/12 gap-5">

			<Btn text="Check Availabilty" textColor="hidden md:flex text-white hover:text-secondary text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 mx-auto " font="font-Roboto" width='h-11 w-12/12'/>

			<Btn text="Take Virtual Tour" textColor="hidden md:flex text-white hover:text-secondary text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 mx-auto " font="font-Roboto" width='h-11 w-12/12'/>
   		</div>
      </div>
    </div>
  );
};


export function Rooms(){

	const text = 'Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an'
	return(
		<>
			<div className="grid grid-cols-1 mx-auto px-4 py-0 w-11/12" id="rooms">
		      <RowCard 
		        title="Mission Dolores Park"
		        text={text}
		        image="/room/room.jpg"
		        invert={false}
		      />
		      <RowCard 
		        title="The Castro"
		        text={text}
		        image="/room/room1.jpg"
		        invert={true}
		      />
		      <RowCard 
		        title="Haight & Ashbury"
		        text={text}
		        image="/room/room2.jpg"
		        invert={false}
		      />
		      <RowCard 
		        title="Golden Gate Bridge"
		        text={text}
		        image="/room/room3.jpg"
		        invert={true}
		      />
			</div>
		</>
	)
}
