import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed block bottom-5 right-5 p-3 rounded bg-secondary text-white shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 lg:hidden"
      }`}
    >
      <FaArrowUp size={26} />
    </button>
  );
};