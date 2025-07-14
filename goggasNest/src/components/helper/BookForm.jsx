import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Btn } from "./Btn";


export function BookForm(){

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [guests, setGuests] = useState('2');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!checkInDate) newErrors.checkIn = 'Check-in date is required';
    if (!checkOutDate) newErrors.checkOut = 'Check-out date is required';
    if (!selectedRoom) newErrors.room = 'Please select a room';
    
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkIn < today) {
        newErrors.checkIn = 'Check-In date cannot be in the past';
      }
      if (checkOut <= checkIn) {
        newErrors.checkOut = 'Check-Out must be after check-in';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // TODO: SEND DATA TO API FOR PROCCESSING:
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // TODO: GET DATA FROM DB
  const rooms = [
    { id: 'deluxe', name:'Mission Dolores Park', price: 'From E1500/night' },
    { id: 'suite', name:'The Castro', price: 'From E1200/night' },
    { id: 'cabin', name:'Haight & Ashbury', price: 'From E1000/night' },
    { id: 'presidential', name:'The Golden Gate', price: 'From E800/night' }
  ];

  return (
    <motion.div
      className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 w-full max-w-4xl mx-auto rounded-2xl shadow-lg border border-white/20"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="absolute inset-0 bg-emerald-600 text-white rounded-2xl flex items-center justify-center z-10"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Room Booked Check E-mail For Details</div>
              <div className="text-sm opacity-90">Finding your perfect stay...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {/* Check-in Date */}
        <motion.div className="flex flex-col gap-2" variants={fieldVariants}>
          <label className="text-sm font-semibold text-gray-700" htmlFor="checkIn">
            Check-in
          </label>
          <input
            type="date"
            id="checkIn"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className={`w-full border ${errors.checkIn ? 'border-red-500' : 'border-gray-300'} px-3 py-2.5 bg-white/50 outline-none rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200`}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.checkIn && (
            <motion.span
              className="text-red-500 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.checkIn}
            </motion.span>
          )}
        </motion.div>

        {/* Check-out Date */}
        <motion.div className="flex flex-col gap-2" variants={fieldVariants}>
          <label className="text-sm font-semibold text-gray-700" htmlFor="checkOut">
            Check-out
          </label>
          <input
            type="date"
            id="checkOut"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className={`w-full border ${errors.checkOut ? 'border-red-500' : 'border-gray-300'} px-3 py-2.5 bg-white/50 outline-none rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200`}
            min={checkInDate || new Date().toISOString().split('T')[0]}
          />
          {errors.checkOut && (
            <motion.span
              className="text-red-500 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.checkOut}
            </motion.span>
          )}
        </motion.div>

        {/* Room Selection */}
        <motion.div className="flex flex-col gap-2" variants={fieldVariants}>
          <label className="text-sm font-semibold text-gray-700" htmlFor="room">
            Room Type
          </label>
          <select
            id="room"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className={`w-full border ${errors.room ? 'border-red-500' : 'border-gray-300'} px-3 py-2.5 bg-white/50 outline-none rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200`}
          >
            <option value="">Select a room</option>
            {rooms.map(room => (
              <option key={room.id} value={room.id}>
                {room.name} - {room.price}
              </option>
            ))}
          </select>
          {errors.room && (
            <motion.span
              className="text-red-500 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errors.room}
            </motion.span>
          )}
        </motion.div>

        {/* Guests */}
        <motion.div className="flex flex-col gap-2" variants={fieldVariants}>
          <label className="text-sm font-semibold text-gray-700" htmlFor="guests">
            Guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2.5 bg-white/50 outline-none rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
          </select>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="w-full mt-4 md:mt-0 md:col-span-2 lg:col-span-4"
          variants={fieldVariants}
        >
          <Btn
            text={isLoading ? "Searching..." : "Search Availability"}
            textColor="text-white hover:text-secondary text-sm transition-all duration-500 hover:rounded-xl hover:scale-103"
            font="font-Roboto"
            width="h-12 w-full"
            onClick={handleSubmit}
            disabled={isLoading}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};