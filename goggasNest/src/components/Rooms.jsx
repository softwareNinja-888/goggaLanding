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

const RowCard = ({data}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-8 `}>
      <img src={data.image} alt={data.name} className="w-full h-94 object-cover rounded-md" />
      <div className="flex flex-col gap-3 ">
      	<div className="flex flex-row justify-between">
      		<div className="font-vibes text-4xl">{data.name}</div>
      		<div className="font-playfair text-2xl">E {data.price}</div>
      	</div>
      	<div className="font-raleway">{data.description}</div>
  		<div className="flex flex-col gap-5">
  			<RoomInfo info={`Rooms: ${data.rooms}`} Icon={Building2} />
  			<RoomInfo info={`Size: ${data.size} Sqm`} Icon={Expand} />
  			<RoomInfo info={`Beds: ${data.beds}`} Icon={BedDouble} />
  			<RoomInfo info={`Bathrooms: ${data.bathrooms}`} Icon={ShowerHead} />
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

	const roomData = [
		{id:0, name:'Mission Dolores Park',description:'Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an',price:'1500',rooms:'4',size:'150',beds:'2 king, 4 Singles',bathrooms:'2',image:"/room/room.jpg"},
		{id:1, name:'The Castro',description:'Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an',price:'1200',rooms:'4',size:'150',beds:'2 king, 4 Singles',bathrooms:'2',image:"/room/room6.jpg"},
		{id:2, name:'Haight & Ashbury',description:'Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an',price:'1000',rooms:'2',size:'130',beds:'2 king, 4 Singles',bathrooms:'2',image:"/room/room2.jpg"},
		{id:3, name:'The Golden Gate',description:'Skincare should be a moment of self-care, not a compromise. Our products blend luxurious textures with powerful natural ingredients, creating an',price:'800',rooms:'2',size:'120',beds:'2 king, 4 Singles',bathrooms:'2',image:"/room/room3.jpg"},
	]
	return(
		<>
			<div className="grid grid-cols-1 mx-auto px-4 py-0 w-11/12" id="rooms">
          <div className="text-5xl font-playfair uppercase text-center mb-16">Our Rooms</div>
          {/* GET DATA FROM BACKEND AND LOOP OVER */}

		      {roomData.map(data=>{
		      	return <RowCard data={data}/>
		      })}
			</div>
		</>
	)
}
