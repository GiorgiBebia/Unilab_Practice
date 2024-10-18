/* eslint-disable react/prop-types */
export function Info({ first, second }) {
  return (
    <div className="w-[517px] h-[42px] border-b border-b-[#EBEEEF] flex items-center">
      <h3 className="w-[194px] h-[26px] ml-[11px] font-SFProDisplay text-[14px] text-[#667479] content-center">
        {first}
      </h3>
      <h3 className="ml-[11px] font-SFProDisplay text-[14px] text-[#667479] content-center">
        : {second}
      </h3>
    </div>
  );
}
