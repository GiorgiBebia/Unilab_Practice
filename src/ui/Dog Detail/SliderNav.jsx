/* eslint-disable react/prop-types */
export function SliderNav({ visibleImages, goToSlide, currentIndex, images }) {
  return (
    <div className="flex justify-center mt-[24px] gap-[6px]">
      {Array(Math.ceil(images.length / visibleImages))
        .fill()
        .map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index * visibleImages)}
            className={`w-[9px] h-[9px] rounded-full cursor-pointer ${
              currentIndex === index * visibleImages
                ? "bg-[#003459]"
                : "bg-[#CCD1D2]"
            }`}
          />
        ))}
    </div>
  );
}
