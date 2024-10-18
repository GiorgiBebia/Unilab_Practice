/* eslint-disable react/prop-types */
export function Information({ first, second }) {
  return (
    <div className="w-[382px] h-[42px] border-b border-b-[#EBEEEF] flex items-center mx-auto">
      <h3 className="w-[194px] h-[26px] font-SFProDisplay text-[14px] text-[#667479] content-center">
        {first}
      </h3>
      <h3 className="font-SFProDisplay text-[14px] text-[#667479] content-center">
        : {second}
      </h3>
    </div>
  );
}
