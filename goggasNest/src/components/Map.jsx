import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Map() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

    return (
        <>
           <div>
            <div className="pt-0 pb-10 uppercase font-playfair text-5xl text-center ">Visit Us</div>
            <section ref={ref} className="bg-[linear-gradient(to_bottom,_#F4F1E7_0%,_#F4F1E7_50%,_#fff_50%,_#fff_100%)] z-50 ">
                {/* Map */}
                <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="flex justify-center mx-auto relative  h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md w-7/12 ">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.783770954265!2d31.3758116123585!3d-26.502311939190427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eef4f67e7fd6e5b%3A0xb357b3fc18f0616c!2sThe%20Beauty%20Spot%20SZ!5e0!3m2!1sen!2s!4v1744881839034!5m2!1sen!2s"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </section>
           </div>
        </>
    );
}