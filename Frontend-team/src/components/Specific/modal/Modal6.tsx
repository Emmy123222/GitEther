import right from "../../../assets/images/💜 Right Icon (2).png";
import Proposal from "./Proposal";

const Modal6 = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50  z-50 mt-20 ">
      <div className="  bg-[#FFFFFF0A] bg-opacity-50  p-5  border border-[#293056] w-[895px] rounded-[26px] container mx-auto mt-48 space-y-12">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black h-[48px] w-[48px] border-l border-r border-l-[#E8D07A] border-r-[#5312D6]   rounded-[26px] flex items-center justify-center"
          >
            <img
              src={right}
              alt=""
              className="  border border-transparent  rounded-[20px] custom-gradient-border"
            />
          </button>
        </div>
        <Proposal />
      </div>
    </div>
  );
};

export default Modal6;
