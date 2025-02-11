import { ChevronDown } from "lucide-react";
import right from "@/assets/images/💜 Right Icon (1).png";
import profilePic from "@/assets/images/Ellipse 5 (3).png";
import frams from "@/assets/images/Frame (35).png";

const Modal1 = ({ onclose }: any) => {
  return (
    <div className="w-full  p-5 bg-white   rounded-[26px]">
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">2/3</p>
        <button
          className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:border-purple-500"
          onClick={onclose}
        >
          <img src={right} alt="" />
        </button>
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-black">
        Which Repositories will you need?
      </h2>
      <p className="text-gray-600 mb-6">
        Only repositories from organisations where GitHub is installed are
        listed.
      </p>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search repository"
          className="w-full p-3 pr-10 border border-gray-200 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>

      {/* Repository List */}
      <div className="border border-gray-200 rounded-[20px] space-y-4  p-4">
        <div className=" flex items-center justify-between">
          <div className="flex items-center justify-start space-x-3 sm:mr-4 font-kern rounded-full border border-customBorder w-fit p-1 bg-[#0D0F1C]">
            {/* Profile Picture */}
            <img src={profilePic} /> <p>Noyi24_7</p>
          </div>
          <div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="border border-gray-200 rounded-[20px] p-5 divide-y">
          <div className="flex justify-between">
            <div>
              <p className="text-black text-[18px] font-medium">Repo</p>
              <p className="text-black text-[16px] leading-[22.4px] tracking-tight">
                This repo has no description.
              </p>
            </div>
            <div className="border rounded-[26px] flex items-center w-[32px] h-[32px] justify-center">
              <img src={frams} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Missing Repositories */}
      <div className="mt-6 p-4 border border-gray-200 rounded-[26px] gap-4 w-[600px]">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium text-[16px] text-black">
              Missing repositories?
            </h4>
            <p className="text-sm text-gray-500">
              Make sure they are public and the GitHub app is granted
            </p>
            <p className="text-gray-500">on all of them.</p>
          </div>
          <div>
            <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-[26px] hover:bg-gray-800 transition-colors">
              Manage on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
