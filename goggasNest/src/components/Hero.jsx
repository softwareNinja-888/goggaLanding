import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Btn } from "./helper/Btn";
import { Logo } from "./helper/Logo";
import { BookForm } from "./helper/BookForm";


export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="relative bg-white/30 backdrop-blur-lg px-4 py-6 sm:px-6 md:px-10 lg:px-16 w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[65%] 2xl:max-w-[60%] mx-auto rounded-3xl md:rounded-4xl my-8 md:my-16 lg:my-24 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex justify-center items-center"
                variants={logoVariants}
            >
                <Logo name="Goggas Nest" textColor="text-black text-xl sm:text-2xl md:text-3xl" />
            </motion.div>

            <motion.div
                className="text-center text-lg sm:text-2xl md:text-3xl font-playfair"
                variants={itemVariants}
            >
                Your Lakeside Hideaway Awaits
            </motion.div>

            <motion.div
                className="text-center font-quickSand text-sm sm:text-base md:text-lg w-full md:w-11/12 mx-auto leading-relaxed"
                variants={itemVariants}
            >
                A stay at Goggas Nest Boutique will be a moment of true escape, not just a room for the night. Our menus are crafted from hand-picked, garden-fresh produce and local specialties, offering a dining experience that nourishes both body and soul.
            </motion.div>

            <motion.div
                className="mt-4 sm:mt-2 md:mt-0"
                variants={itemVariants}
            >
                <BookForm />
            </motion.div>
        </motion.div>
    );
}





