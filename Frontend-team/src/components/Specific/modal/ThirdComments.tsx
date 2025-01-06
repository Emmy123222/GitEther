import React from "react";
import elish from "../../../assets/images/Ellipse 5 (3).png";
import elis2 from "../../../assets/images/Ellipse 6.png";
import frams from "../../../assets/images/Frame (37).png";
const ThirdComments = () => {
  return (
    <div className="bg-[#101323] w-[413px] h-[521px] rounded-[26px] p-5 space-y-6">
      <div className="">
        <p className="text-[18px]">Status</p>
        <p>To-Do</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-[18px]">Assigned Contributors</p>
          <p className="text-[#4E5BA6]">View all</p>
        </div>{" "}
      </div>
      <div className="flex -space-x-4  mt-3">
        <img src={elish} alt="" className="w-[32px] h-[32px] " />
        <img src={elis2} alt="" className="w-[32px] h-[32px]" />
        <img src={elish} alt="" className="w-[32px] h-[32px]" />
        <img src={elis2} alt="" className="w-[32px] h-[32px]" />
        <div className="flex items-center justify-center">
          <p className="mt-2 ml-6">17 Contributors</p>
        </div>
      </div>

      <div>
        <p className="text-[18px]"> Skills Level</p>

        <button className="text-sm w-fit text-white   rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
          Intermediate
        </button>
      </div>
      <div>
        <p className="text-[18px]"> Skills</p>
        <div className="flex flex-wrap  gap-2 ">
          <button className="text-sm w-fit text-white   rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            React
          </button>
          <button className="text-sm w-fit  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Security
          </button>
          <button className="text-sm w-fit  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Community
          </button>
          <button className="text-sm w-fit text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            UX Design
          </button>
          <button className="text-sm w-fit text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Solidity
          </button>
          <button className="text-sm w-fit text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Marketing
          </button>
        </div>
      </div>
      <hr className="border border-[#293056]" />
      <div className=" flex gap-3">
        <button className="flex items-center justify-center bg-white text-black w-[118px] h-[40px] rounded-[26px]">
          {" "}
          <img src={frams} alt="" />
          Edit Task
        </button>
        <button className="w-[128px] h-[40px] bg-[#0D0F1C] rounded-[26px] flex items-center justify-center">
          Add Rewards
        </button>
      </div>
    </div>
  );
};

export default ThirdComments;
