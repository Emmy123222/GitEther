import React from "react";
import elish from "@/assets/images/Ellipse 6 (1).png";
import elishs from "@/assets/images/Ellipse 6 (2).png";
import fram from "@/assets/images/Frame (36).png";
import imag from "../../../assets/images/Ellipse 4(1).png";

const SecondComments = () => {
  return (
    <div className="mt-20 space-y-6">
      <h2 className="text-[24px]">Comments Section</h2>
      <div className="flex justify-between">
        <div className=" flex gap-4 items-center">
          <img src={elish} alt="" className="w-[32px] h-[32px]" />
          <p className="text-[#B3B8DB] text-[16px]"> Created this task</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={fram} alt="" />
          <p className="text-[14px] text-[#B3B8DB]">on 8th Nov</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <img src={elishs} alt="" className="w-[32px] h-[32px]" />
        </div>
        <div className="w-full bg-white bg-opacity-5 border border-[#293056] rounded-[26px] p-5 space-y-3">
          <span className="flex gap-3 items-center">
            <p className="text-[18px]">DeFi Protocol Enhancement</p>
            <p className="text-[#B3B8DB] text-[12px]"> 2 mins ago</p>
          </span>
          <p className="text-[#B3B8DB] text-[16px]">
            Let’s Wire and Shape our Community!
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <img src={elishs} alt="" className="w-[32px] h-[32px]" />
        </div>
        <div className="w-full bg-white bg-opacity-5 border border-[#293056] rounded-[26px] p-5 space-y-3">
          <span className="flex gap-3 items-center">
            <p className="text-[18px]">DeFi Protocol Enhancement</p>
            <p className="text-[#B3B8DB] text-[12px]"> 2 mins ago</p>
          </span>
          <p className="text-[#B3B8DB] text-[16px]">
            Let’s Wire and Shape our Community!
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <img src={elishs} alt="" className="w-[32px] h-[32px]" />
        </div>
        <div className="w-full bg-white bg-opacity-5 border border-[#293056] rounded-[26px] p-5 space-y-3">
          <span className="flex gap-3 items-center">
            <p className="text-[18px]">DeFi Protocol Enhancement</p>
            <p className="text-[#B3B8DB] text-[12px]"> 2 mins ago</p>
          </span>
          <p className="text-[#B3B8DB] text-[16px]">
            Let’s Wire and Shape our Community!
          </p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="rounded-[20px] border border-[#293056] w-[81px] h-[32px] bg-[#0D0F1C] p-1 flex items-center gap-2  ">
          <img src={elish} alt="" className="w-[16px] h-[16px]" />
          Vhee
        </div>
        <div className=" w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full h-[80px] rounded-[26px]  bg-gray-900 border border-[#363F72] text-gray-300 placeholder-gray-500 p-4  outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondComments;
