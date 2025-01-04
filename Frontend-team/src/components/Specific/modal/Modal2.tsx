import React from "react";
import right from "@/assets/images/💜 Right Icon (1).png";
import feature from "@/assets/images/Featured icon.png";
import plus from "@/assets/images/plus.png";
import { ChevronDown } from "lucide-react";
import vector from "@/assets/images/Vector (3).png";
import usdt from "@/assets/images/usdt.png";
const Modal2 = ({ onclose }: any) => {
  return (
    <div className="w-full  p-5 bg-white   rounded-[26px]">
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">3/3</p>
        <button
          className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:border-purple-500"
          onClick={onclose}
        >
          <img src={right} alt="" />
        </button>
      </div>
      <div>
        <h2 className="text-black font-medium text-[28px]">
          Tell us About Your Project
        </h2>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-gray-400">Project Name</p>

            <input
              type="text"
              placeholder="Search repository"
              className="w-full p-3 pr-10 border border-gray-200 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
          </div>
          <div className="space-y-2">
            <p className="text-gray-400">Short Description</p>

            <input
              type="text"
              placeholder="Shortly describe your project "
              className="w-full p-3 pr-10 border border-gray-200 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
          </div>
          <div className="space-y-2">
            <p className="text-gray-400">Long Description</p>

            <input
              type="text"
              placeholder="Elaborate on your project "
              className="w-full h-[120px] p-3 pr-10 border align-text-top border-gray-200 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
          </div>
          <div className="space-y-2">
            <p className="text-gray-400">Project Visual</p>

            <div className="w-full h-[120px] border border-gray-200 rounded-[20px]   ">
              <div className="mt-4">
                <div className="flex justify-center items-center">
                  <img src={feature} alt="" />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-gray-400">
                    <strong className="text-black">Click to upload</strong> or
                    drag and drop
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-gray-400">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Links</p>
              <div className="flex gap-4">
                <div className="w-full h-[56px] border border-gray-200 rounded-[20px] p-4  ">
                  <p className="text-gray-400">
                    Add links to your socials or website
                  </p>
                </div>
                <div className="w-[56px] h-[56px] flex items-center justify-center border rounded-full">
                  <img src={plus} alt="" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">Project Leads</p>

              <div className="w-full h-[56px] border border-gray-200 rounded-[20px] p-4  ">
                <div className="flex justify-between">
                  <p className="text-gray-400">
                    Pick a contributor or type in Github handle
                  </p>
                  <div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-black">Choose your Preferred Skill</p>

                <div className="w-full h-[56px] border border-gray-200 rounded-[20px] p-3  ">
                  <div className="flex justify-between ">
                    <p className="w-[84px] h-[34px] text-black flex items-center border border-white bg-[#F2F4F7] rounded-full p-1 justify-center gap-2">
                      Design
                      <img src={vector} alt="" className="" />
                    </p>
                    <div>
                      <img src={plus} alt="" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400">Skills Category</p>

                  <div className="w-full h-[56px] border border-gray-200 rounded-[20px] p-4  ">
                    <div className="flex justify-between">
                      <p className="text-gray-400">Select</p>
                      <div>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400">Skill Levels</p>

                  <div className="w-full h-[56px] border border-gray-200 rounded-[20px] p-4  ">
                    <div className="flex justify-between">
                      <p className="text-black">Expert</p>
                      <div>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-black">Add Funds</p>

                  <div className="w-full h-[56px] border border-gray-200 rounded-[20px] p-4  ">
                    <div className="flex justify-between">
                      <div className=" flex gap-2 ">
                        <img src={usdt} alt="" />
                        <p className="text-black">Enter Amount</p>
                      </div>
                      <div>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className=" w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-[26px] hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
