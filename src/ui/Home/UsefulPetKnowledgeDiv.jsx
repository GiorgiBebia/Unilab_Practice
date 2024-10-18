/* eslint-disable react/prop-types */
export function UsefulPetKnowledgeDiv({ item }) {
  const truncateParagraph = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="w-[380px] h-[424px] bg-white rounded-[12px]">
      <img
        className="w-[364px] h-[243px] rounded-[10px] m-[8px]"
        src={item.img}
        alt={item.title}
      />
      <div className="w-[88px] h-[20px] bg-[#00A7E7] rounded-[28px] font-SFProDisplay font-bold text-[10px] text-white content-center text-center mt-[8px] ml-[16px]">
        Pet knowledge
      </div>
      <h3 className="font-SFProDisplay font-bold text-[#00171F] text-[16px] mt-[10px] mx-[16px] mb-[6px]">
        {item.title}
      </h3>
      <p className="font-SFProDisplay text-[14px] text-[#242B33] mx-[16px]">
        {truncateParagraph(item.paragraph, 229)}
      </p>
    </div>
  );
}
