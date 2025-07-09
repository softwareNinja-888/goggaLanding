import { Btn } from "./Btn";
import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function BookForm() {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef(null);
  const inputRef = useRef(null);

  const formattedRange =
    range.from && range.to
      ? `${format(range.from, "MMM dd, yyyy")} - ${format(range.to, "MMM dd, yyyy")}`
      : "Select dates";

  // Detect click outside to close calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative bg-white/70 backdrop-blur-lg p-4 sm:p-6 w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[70%] mx-auto rounded-2xl shadow-md">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end relative">
        {/* Check-in / Check-out */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-medium text-gray-700" htmlFor="checkInOut">
            Check-in and Check-out
          </label>
          <input
            ref={inputRef}
            type="text"
            id="checkInOut"
            name="checkInOut"
            readOnly
            value={formattedRange}
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full border border-black px-3 py-2 bg-transparent outline-none shadow-sm cursor-pointer rounded-md"
          />

          {showCalendar && (
            <div
              ref={calendarRef}
              className="absolute z-20 top-full left-0 mt-2 bg-white p-3 shadow border border-gray-200 rounded-md max-w-[90vw] sm:max-w-none"
            >
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={window.innerWidth < 640 ? 1 : 2}
                defaultMonth={range?.from}
              />
            </div>
          )}
        </div>

        {/* Room Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="roomSelect">
            Room
          </label>
          <select
            id="roomSelect"
            className="w-full border border-black outline-none px-3 py-2 bg-transparent rounded-md"
          >
            <option>Room 1</option>
            <option>Room 2</option>
            <option>Room 3</option>
            <option>Room 4</option>
            <option>Room 5</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="w-full mt-3">
          <button type="submit" className="w-full h-full">
            <Btn
              text="Search Availability"
              textColor="text-white hover:text-secondary text-sm transition-all duration-500 hover:rounded-xl hover:scale-103"
              font="font-Roboto"
              width="h-11 w-full"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
