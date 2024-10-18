import { useState, useEffect } from "react";

export function BigSummerEvent() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-11-01T00:00:00");
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[1180px] h-[312px] mx-auto mt-[27px] mb-[71px] mobile:hidden">
      <h2 className="font-notoSans font-bold text-[48px] text-[#003459]">
        Big Summer Event
      </h2>
      <div className="w-[1180px] h-[199px] mt-[48px] flex justify-between">
        <div className="w-[267.89px] h-[199px] bg-[#003459] rounded-[22px] content-center text-center">
          <h3 className="font-poppins font-black text-[64px] text-white">
            {timeLeft.days || 0}
          </h3>
          <h3 className="font-poppins font-light text-[16px] text-white">
            DAYS
          </h3>
        </div>
        <div className="w-[267.89px] h-[199px] bg-[#003459] rounded-[22px] content-center text-center">
          <h3 className="font-poppins font-black text-[64px] text-white">
            {timeLeft.hours || 0}
          </h3>
          <h3 className="font-poppins font-light text-[16px] text-white">
            HOURS
          </h3>
        </div>
        <div className="w-[267.89px] h-[199px] bg-[#003459] rounded-[22px] content-center text-center">
          <h3 className="font-poppins font-black text-[64px] text-white">
            {timeLeft.minutes || 0}
          </h3>
          <h3 className="font-poppins font-light text-[16px] text-white">
            MINUTES
          </h3>
        </div>
        <div className="w-[267.89px] h-[199px] bg-[#003459] rounded-[22px] content-center text-center">
          <h3 className="font-poppins font-black text-[64px] text-white">
            {timeLeft.seconds || 0}
          </h3>
          <h3 className="font-poppins font-light text-[16px] text-white">
            SECONDS
          </h3>
        </div>
      </div>
    </div>
  );
}
