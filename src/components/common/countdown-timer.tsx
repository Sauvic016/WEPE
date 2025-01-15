"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Update countdown logic here
      setTime((prevTime) => ({
        ...prevTime,
        seconds: prevTime.seconds > 0 ? prevTime.seconds - 1 : 59,
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center my-4">
      <div className="text-center">
        <div className="bg-white rounded-lg p-2 min-w-[60px] relative">
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/counter_bg.svg" className="absolute" alt="" />
          <span className="text-xl font-bold relative top-2">{time.days}</span>
        </div>
        <div className="text-sm mt-1">Days</div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-lg p-2 min-w-[60px] relative">
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/counter_bg.svg" className="absolute" alt="" />
          <span className="text-xl font-bold relative top-2">{time.hours}</span>
        </div>
        <div className="text-sm mt-1">Hours</div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-lg p-2 min-w-[60px] relative">
          <img src="https://wallstreetpepe.com/assets/images/svg-icons/counter_bg.svg" className="absolute" alt="" />
          <span className="text-xl font-bold relative top-2">{time.minutes}</span>
        </div>
        <div className="text-sm mt-1">Minutes</div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-lg p-2 min-w-[60px] relative">
          <img
            src="https://wallstreetpepe.com/assets/images/svg-icons/counter_bg.svg"
            className="absolute "
            alt="time-in-seconds-left"
          />
          <span className="text-xl font-bold relative top-2">{time.seconds}</span>
        </div>
        <div className="text-sm mt-1">Seconds</div>
      </div>
    </div>
  );
}
