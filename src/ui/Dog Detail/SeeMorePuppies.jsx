/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Random4Puppies } from "./Random4Puppies";

export function SeeMorePuppies({ item }) {
  const getRandomItems = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const [randomPuppiesNumber, setRandomPuppiesNumber] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 414) {
      setRandomPuppiesNumber(6);
    }
    if (window.innerWidth > 414) {
      setRandomPuppiesNumber(4);
    }
  }, []);

  const randomPuppies = getRandomItems(item, randomPuppiesNumber);

  return (
    <div className="w-[1180px] mobile:w-[382px] h-[492px] mobile:h-[1100px] mt-[80px] mobile:mt-[20px] mx-auto flex flex-col">
      <div className="w-[197px] h-[62px] mobile:h-[36px]">
        <span className="font-SFProDisplay text-[16px] mobile:hidden">
          Whats new?
        </span>
        <h3 className="font-SFProDisplay font-bold text-[24px] text-[#003459]">
          See more puppies
        </h3>
      </div>
      <div className="flex flex-row gap-[20px] mobile:gap-[12px] mt-[28px] mobile:w-[382px] mobile:h-[975px] mobile:flex-wrap mobile:mb-[60px]">
        {randomPuppies.map((puppies, i) => (
          <Random4Puppies item={puppies} key={i} />
        ))}
      </div>
    </div>
  );
}
