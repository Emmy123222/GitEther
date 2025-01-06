import React from "react";
import fram from "@/assets/images/Frame (36).png";
import elish from "../../../assets/images/Ellipse 5 (3).png";
import frams from "../../../assets/images/Frame (38).png";
import frame from "../../../assets/images/Frame (39).png";

const Applicants = () => {
  return (
    <div className="w-[850px] bg-[#101323] p-5 space-y-3 rounded-[26px]">
      <h2 className="text-[24px]">Wireshape Platform dApp Section</h2>
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Intermediate
          </button>
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            React
          </button>
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Security
          </button>
          <button className="text-sm  text-white  rounded-[8px] border border-[#363F72] hover:opacity-80 bg-white bg-opacity-5  p-[8px_16px]">
            Community
          </button>
        </div>
        <div className="flex items-center gap-2 ">
          <img src={fram} alt="" className="w-[16px] h-[16px]" />
          <p className="text-[#B3B8DB] text-[14px]">Due by 8th Nov</p>
        </div>
      </div>
      <div>
        <p className="text-[#B3B8DB]">
          Help improve the security and scalability of a cutting-edge
          decentralized finance protocol. Collaborate
        </p>

        <p className="text-[#B3B8DB]">
          with experienced developers to optimize smart contracts and create
          robust security measures.
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-[24px]">Applicants</p>
        <div className="flex gap-8 items-center ">
          <div className="w-[390px] h-[177px] bg-[#FFFFFF0A] bg-opacity-50 rounded-[26px] p-4 space-y-5">
            <div className="w-[125px] h-[32px] bg-[#0D0F1C] flex items-center justify-center rounded-[26px] gap-3">
              <img src={elish} alt="" className="w-[24px]  h-[24px]" />
              <p className="text-[16px]">Noyi_24_7</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <img src={frams} alt="" />
              </span>
              <p className="text-[#B3B8DB] flex text-[14px]">
                Application Date:<p className="text-white"> Nov 15</p>
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button className="w-[134px] h-[40px] bg-[#0D0F1C] flex items-center justify-center rounded-[26px] gap-3  cursor-pointer">
                <p className="text-[16px]">View Proposal</p>
              </button>
              <button className="w-[134px] h-[40px] bg-white flex items-center justify-center rounded-[26px] gap-3 cursor-pointer">
                <p className="text-[16px] text-black">Assign Task</p>
                <img src={frame} alt="" />
              </button>
            </div>
          </div>
          <div className="w-[390px] h-[177px] bg-[#FFFFFF0A] bg-opacity-50 rounded-[26px] p-4 space-y-5">
            <div className="w-[125px] h-[32px] bg-[#0D0F1C] flex items-center justify-center rounded-[26px] gap-3">
              <img src={elish} alt="" className="w-[24px]  h-[24px]" />
              <p className="text-[16px]">Noyi_24_7</p>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <img src={frams} alt="" />
              </span>
              <p className="text-[#B3B8DB] flex text-[14px]">
                Application Date:<p className="text-white"> Nov 15</p>
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button className="w-[134px] h-[40px] bg-[#0D0F1C] flex items-center justify-center rounded-[26px] gap-3 cursor-pointer">
                <p className="text-[16px]">View Proposal</p>
              </button>
              <button className="w-[134px] h-[40px] bg-white flex items-center justify-center rounded-[26px] gap-3 cursor-pointer">
                <p className="text-[16px] text-black">Assign Task</p>
                <img src={frame} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicants;
