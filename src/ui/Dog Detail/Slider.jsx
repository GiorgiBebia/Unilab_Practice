/* eslint-disable react/prop-types */
export function Slider({ images, currentIndex, visibleImages, style }) {
  return (
    <div
      className={`${style} h-[340px] mt-[12px] flex gap-[12px] overflow-hidden mx-auto`}
    >
      {images
        .slice(currentIndex, currentIndex + visibleImages)
        .map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Customer"
            className="w-[248px] h-[340px] object-cover rounded-[10px]"
          />
        ))}
    </div>
  );
}
