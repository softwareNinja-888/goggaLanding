import { Logo } from './helper/Logo'
import { Btn } from './helper/Btn'
import { AnimatedWord } from './helper/AnimatedWord'
import { MobileMenu } from './helper/MobileMenu'
import { IoMenuSharp } from "react-icons/io5"
import { useState } from 'react'
import { Menu, X } from 'lucide-react';


function smoothClick(e, sec) {
  e.preventDefault();
  const section = document.querySelector(`#${sec}`);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: 0, text: "Our Story", href: "about" },
    { id: 1, text: "Rooms", href: "rooms" },
    { id: 2, text: "Amenities", href: "amenities" },
    { id: 3, text: "Gallery", href: "gallery" },
    { id: 4, text: "Contact", href: "contact" },
  ];

  return (
    <header className="w-11/12 rounded-3xl mx-auto bg-white/90 backdrop-blur-lg px-4 sm:px-6 md:px-10 py-3 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[95%] mx-auto flex flex-col gap-4">
        {/* Top bar: Logo + desktop nav + CTA */}
        <div className="hidden w-full lg:flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo name="Goggas Nest" textColor="text-black text-xl sm:text-2xl" img="/logo3.svg"  />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-10 text-sm">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.href}`}
                onClick={(e) => smoothClick(e, link.href)}
                className="relative cursor-pointer text-black"
              >
                <AnimatedWord
                  word={link.text}
                  textColor="text-black"
                  font="font-raleway"
                  textSize="text-md"
                />
              </a>
            ))}
          </nav>

          {/* CTA Button - visible on desktop */}
          <div className="hidden lg:block">
            <Btn
              text="Book Room"
              textColor="text-white hover:text-secondary text-sm transition-all duration-500 hover:rounded-xl hover:scale-103"
              font="font-Roboto"
              width="h-11 w-36"
            />
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between px-2 py-2">
          <Logo name="Goggas Nest" textColor="text-black text-xl sm:text-2xl" img="/logo3.svg" iconOnly={true} />
          <button
            onClick={toggleMenu}
            className="text-black hover:text-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden w-full bg-white border-t border-white/20 z-50">
            <nav className="flex flex-col py-4 ">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.href}`}
                  className="uppercase font-raleway transition-all duration-300 text-black/80 hover:text-black/50 text-sm md:text-lg cursor-pointer px-6 py-3 hover:bg-black/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

