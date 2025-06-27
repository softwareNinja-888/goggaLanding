import { Btn } from "./Btn";
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function BookForm() {

    const [range, setRange] = useState({ from: undefined, to: undefined });
    const [showCalendar, setShowCalendar] = useState(false);    



    const formattedRange =
        range.from && range.to
        ? `${format(range.from, "MMM dd, yyyy")} - ${format(range.to, "MMM dd, yyyy")}`
        : "Select dates";

    return (
        <>
            <div className="relative bg-white/70 backdrop-blur-lg p-6 w-11/12 md:w-8/12 lg:w-12/12 mx-auto my-0 lg:my-20 flex flex-col gap-5">
                <form className="flex flex-wrap gap-4 items-end gap-3">
                    {/*<div className="flex flex-col gap-1 min-w-[250px]">
                        <label className="text-xs" htmlFor="checkInOut">Check-in and Check-out</label>
                        <input type="text" id="checkInOut" name="checkInOut" className="border border-black px-1 py-1 outline-none"/>
                    </div>*/}

                   <div className="relative">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="checkInOut">Check-in and Check-out</label>
                      <input
                        type="text"
                        id="checkInOut"
                        name="checkInOut"
                        readOnly
                        value={formattedRange}
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="w-full border  px-3 py-2 bg-transparent outline-none shadow-sm cursor-pointer"
                      />

                      {showCalendar && (
                        <div className="absolute z-10 mt-2 bg-white p-3  shadow border border-gray-200">
                          <DayPicker
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                            numberOfMonths={2}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1  min-w-[250px]">
                        <label className="text-xs" htmlFor="checkInOut">Room</label>
                            <select className="w-full border border-black outline-none px-3 py-2 bg-transparent ">
                                <option>Room 1</option>
                                <option>Room 2</option>
                                <option>Room 3</option>
                                <option>Room 4</option>
                                <option>Room 5</option>
                            </select>
                    </div>
                    <button type="submit">                        
                        <Btn text="Search Availability" textColor="hidden md:flex text-white hover:text-secondary text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 " font="font-Roboto" width='h-11 w-36'/>
                    </button>
                </form>
            </div>  
        </>
    );
}