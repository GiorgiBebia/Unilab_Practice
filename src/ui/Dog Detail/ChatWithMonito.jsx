import { BsChatLeftDots } from "react-icons/bs";

export function ChatWithMonito() {
  return (
    <div className="w-[233px] h-[48px] border-[2px] border-[#002A48] rounded-[57px] flex gap-[10px] items-center justify-center">
      <BsChatLeftDots className="text-[#002A48] w-[18px] h-[18px]" />
      <span className="font-SFProDisplay font-bold text-[16px] text-[#002A48]">
        Chat with Monito
      </span>
    </div>
  );
}
