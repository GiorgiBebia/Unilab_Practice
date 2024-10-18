import { useState, useEffect } from "react";
import { Slider } from "./Slider";
import { SliderNav } from "./SliderNav";

export function LovelyCustomer() {
  const images = [
    "lovelyCostumer1.png",
    "lovelyCostumer2.png",
    "lovelyCostumer3.png",
    "lovelyCostumer4.png",
    "lovelyCostumer5.png",
    "lovelyCostumer5.png",
    "lovelyCostumer1.png",
    "lovelyCostumer2.png",
    "lovelyCostumer3.png",
    "lovelyCostumer4.png",
    "lovelyCostumer4.png",
    "lovelyCostumer5.png",
    "lovelyCostumer1.png",
    "lovelyCostumer2.png",
    "lovelyCostumer3.png",
    "lovelyCostumer3.png",
    "lovelyCostumer4.png",
    "lovelyCostumer5.png",
  ];
  const images2 = [
    "lovelyCostumer1.png",
    "lovelyCostumer2.png",
    "lovelyCostumer2.png",
    "lovelyCostumer3.png",
    "lovelyCostumer3.png",
    "lovelyCostumer4.png",
    "lovelyCostumer4.png",
    "lovelyCostumer5.png",
    "lovelyCostumer5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(5);
  const [mobileVersion, setMobileVersion] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 414) {
      setVisibleImages(2);
      setMobileVersion(true);
    }
    if (window.innerWidth > 414) {
      setVisibleImages(5);
      setMobileVersion(false);
    }
  }, [mobileVersion]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-[1180px] mobile:w-[414px] h-[471px] mt-[20px] mx-auto flex flex-col">
      <h3 className="font-SFProDisplay font-bold text-[24px] text-[#00171F] mt-[24px] ml-[31px]">
        Our lovely customers
      </h3>

      <Slider
        images={mobileVersion ? images2 : images}
        currentIndex={currentIndex}
        visibleImages={visibleImages}
        style={
          mobileVersion
            ? `hidden relative w-[396px] mobile:flex`
            : `relative w-[1149px] mobile:hidden`
        }
      />

      <SliderNav
        images={mobileVersion ? images2 : images}
        visibleImages={visibleImages}
        goToSlide={goToSlide}
        currentIndex={currentIndex}
      />
    </div>
  );
}
