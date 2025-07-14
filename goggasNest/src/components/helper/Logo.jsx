import { IoBedOutline } from "react-icons/io5"

export function Logo({ name='WayPoint Media',textColor='text-white text-3xl',bg='bg-mainBg',border='border-black',width='w-55',img="/logo3.svg",iconOnly=false}){

    console.log(iconOnly)
    return (
        <>
            <a href='/' className={`flex justify-center items-center gap-4 cursor-pointer font-Cal_Sans ${textColor} `} >
                <div className={`md:block text-2xl md:text-3xl font-vibes ${iconOnly ? 'hidden' : ''}`}>{name}</div>
                <div>
                    <IoBedOutline className="w-7 h-7"/>
                </div>
            </a>  
        </>
    )
}