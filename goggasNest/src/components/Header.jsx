import { Logo } from './helper/Logo'
import { Btn } from './helper/Btn'
import { AnimatedWord } from './helper/AnimatedWord'
import { MobileMenu } from './helper/MobileMenu'

import { IoMenuSharp } from "react-icons/io5"
import { useState } from 'react'


export function Header(){
    const [menuOpen, setMenuOpen ] = useState(false)
    const links = [
	    { id: 0, text: "Our Story", href: "#about" },
	    { id: 1, text: "Rooms", href: "#rooms" },
	    { id: 2, text: "Amenities", href: "#amenities" },
        { id: 3, text: "Gallery", href: "#gallery" },
	    { id: 4, text: "Contact", href: "#contact" },

	]



    return (

        <div className="flex justify-between items-center bg-white/90 backdrop-blur-lg px-3 md:px-10 w-11/12 rounded-2xl mx-auto py-2 gap-0">

            {/* LOGO */}
            <Logo name='Goggas Nest' textColor="text-black text-2xl" img='/logo3.svg'/>

            {/* MENU */}
            <div className="lg:hidden">
                <IoMenuSharp className='cursor-pointer md:hidden' onClick={()=>setMenuOpen(!menuOpen)}/>
                {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </div>

            {/* NAV LINKS */}
            <nav className="hidden md:flex md:space-x-10 lg:space-x-18 text-sm ">        
                {links.map((link,index)=>{
                    return (
                        <a  key={link.id} href={link.href} className={` flex gap-1.5 no-underline relative cursor-pointer text-black `}>
                            <AnimatedWord word={link.text} textColor='text-black' font='font-raleway' textSize="text-md"/>
                        </a>
                    )
                })}
            </nav> 

            {/* CTA */}
            <Btn text="Book Room"  textColor="hidden md:flex text-white hover:text-secondary text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='h-11 w-36'/>

        </div>
    )
}