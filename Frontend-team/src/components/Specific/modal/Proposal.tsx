import React from "react";
import frame from "../../../assets/images/Frame (40).png";
import elish from "../../../assets/images/Ellipse 5 (3).png";
import fram from "../../../assets/images/Frame (39).png";

const Proposal = () => {
  return (
    <div className="w-[850px] bg-[#101323] p-5 space-y-3 rounded-[26px]">
      <div className="space-y-10">
        <div>
          <span className="flex items-center gap-2">
            <img src={frame} alt="" className="w-[16px] h-[16px]  " />{" "}
            <p className="text-[#B3B8DB]">Back</p>
          </span>
          <span>
            <p className="text-[24px]">Proposal</p>
          </span>
        </div>
        <div className="w-[125px] h-[32px] bg-[#0D0F1C] flex items-center justify-center rounded-[26px] gap-3">
          <img src={elish} alt="" className="w-[24px]  h-[24px]" />
          <p className="text-[16px]">Noyi_24_7</p>
        </div>
        <div className="space-y-5">
          <p className="text-[24px]">How would you approach the project?</p>
          <input
            type="text"
            placeholder=""
            className="w-full h-[80px] rounded-[26px]  bg-[#FFFFFF0A] bg-opacity-50 border border-[#363F72] text-[#B3B8DB] placeholder-gray-500 p-4  outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-5">
          <p className="text-[24px]">Relevant Experience or Background</p>
          <input
            type="text"
            placeholder=""
            className="w-full h-[80px] rounded-[26px]  bg-[#FFFFFF0A] bg-opacity-50 border border-[#363F72] text-[#B3B8DB] placeholder-gray-500 p-4  outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="w-[134px] h-[40px] bg-white flex items-center justify-center rounded-[26px] gap-3 cursor-pointer">
          <p className="text-[16px] text-black">Assign Task</p>
          <img src={fram} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Proposal;
