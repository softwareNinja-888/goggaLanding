import { Building2, Expand, BedDouble, ShowerHead } from "lucide-react";
import { Btn} from "./helper/Btn";

function RoomBtn({
	text = "Click Me",
  className = "", // Extra utility
  onClick = () => {},
  }){
	return(
    <div
      onClick={onClick}
      className={`flex justify-center items-center text-center flex text-white cursor-pointer transition-all duration-500 ease-in-out hover:rounded-xl hover:scale-105 hover:text-secondary text-sm mx-auto h-11 w-12/12 font-quickSand bg-secondary hover:bg-transparent border border-lightBlue`}>
      {text}
    </div>
  );
}
function formatCurrency(currency,number) {

      const fixedNumber = Number(number).toFixed(0)

      // Convert to string and handle decimal part if present
      const parts = fixedNumber.toString().split('.');
      const wholePart = parts[0];
      const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
      
      // Add spaces between thousands
      const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      
      // Return formatted number with R prefix
      return `${currency} ` + formattedWholePart + decimalPart;
}

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

	function roomAvailability(e){
		e.preventDefault()
		alert('Check Room Availabilty')
	}
	function roomTour(e){
		e.preventDefault()
		alert('Take Room Tour')
	}

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-8  `}>
      <img src={data.image} alt={data.name} className="w-full h-full md:h-full lg:h-94 object-cover rounded-md" />
      <div className="flex flex-col gap-5 ">
      	<div className="flex lg:flex-row flex-col justify-between">
      		<div className="font-vibes text-4xl">{data.name}</div>
      		<div className="font-playfair text-2xl">{formatCurrency('E',data.price)}</div>
      	</div>
      	<div className="font-raleway">{data.description}</div>
  		<div className="flex flex-col gap-5">
  			<RoomInfo info={`Rooms: ${data.rooms}`} Icon={Building2} />
  			<RoomInfo info={`Size: ${data.size} Sqm`} Icon={Expand} />
  			<RoomInfo info={`Beds: ${data.beds}`} Icon={BedDouble} />
  			<RoomInfo info={`Bathrooms: ${data.bathrooms}`} Icon={ShowerHead} />
  		</div>
  		<div className="flex flex-row w-12/12 lg:w-8/12 gap-5">

				<RoomBtn text="Check Availabilty" onClick={roomAvailability}/>

				<RoomBtn text="Take Virtual Tour" onClick={roomTour}/>
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
		      	return <RowCard key={data.id}  data={data}/>
		      })}
			</div>
		</>
	)
}
