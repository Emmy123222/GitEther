import React from "react";
import fram from "@/assets/images/Frame (36).png";
import SecondComments from "./SecondComments";

const FirstComments = () => {
  return (
    <div className="w-[839px] bg-[#101323] p-5 space-y-3 rounded-[26px]">
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
      <SecondComments />
    </div>
  );
};

export default FirstComments;
