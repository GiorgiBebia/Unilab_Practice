/* eslint-disable react/prop-types */
import { TbPointFilled } from "react-icons/tb";

export function OurProductDiv({ items }) {
  return (
    <div className="w-[280px] h-[446px] bg-white rounded-[12px]">
      <img
        className="w-[264px] h-[264px] rounded-[10px] m-[8px]"
        src={items.img}
        alt={items.name}
      />

      <h2 className="font-SFProDisplay font-bold text-[16px] mt-[8px] mr-[16px] mb-[4px] ml-[16px]">
        {items.name}
      </h2>

      <div className="flex gap-[4px] ml-[16px] items-center">
        <h3 className="font-SFProDisplay text-[12px] text-[#667479]">
          Product: <span className="font-bold">{items.product}</span>
        </h3>
        {items.size && (
          <>
            <TbPointFilled className="text-[12px] text-[#667479]" />

            <h3 className="font-SFProDisplay text-[12px] text-[#667479]">
              Size: <span className="font-bold">{items.size}</span>
            </h3>
          </>
        )}
      </div>

      <h3 className="font-SFProDisplay text-[14px] font-bold ml-[16px] mt-[4px]">
        {items.price.toLocaleString()} VND
      </h3>

      <div className="w-[248px] h-[34px] bg-[#FCEED5] rounded-[8px] mt-[10px] mx-auto flex gap-[8px] pl-[10px] items-center">
        <img className="w-[20px] h-[20px]" src="gift.png" alt="Gift" />
        <TbPointFilled className="text-[12px] text-[#667479]" />
        <span className="font-SFProDisplay font-bold text-[14px] text-[#002A48]">
          {items.gift}
        </span>
      </div>
    </div>
  );
}
