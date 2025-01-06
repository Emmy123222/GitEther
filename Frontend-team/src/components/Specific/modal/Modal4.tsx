import right from "../../../assets/images/💜 Right Icon (2).png";
import fram from "@/assets/images/Frame (36).png";
import FirstComments from "./FirstComments";
import ThirdComments from "./ThirdComments";

const Modal4 = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50  z-50 mt-20 ">
      <div className="  bg-[#FFFFFF0A] bg-opacity-50  p-5  border border-[#293056] w-full rounded-[26px] space-y-12">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black h-[48px] w-[48px] border-l border-r border-l-[#E8D07A] border-r-[#5312D6]   rounded-[26px] flex items-center justify-center"
          >
            <img
              src={right}
              alt=""
              className="  border border-transparent  rounded-[20px] custom-gradient-border text-black"
            />
          </button>
        </div>
        <div className="flex gap-4">
          <FirstComments />
          <ThirdComments />
        </div>
      </div>
    </div>
  );
};

export default Modal4;
