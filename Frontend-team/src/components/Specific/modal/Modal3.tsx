import right from "@/assets/images/💜 Right Icon (1).png";

const Modal3 = ({ onclose }: any) => {
  return (
    <div className="w-full  p-5 bg-white   rounded-[26px]">
      <div className="flex justify-between mb-4">
        <div className="">
          <h2 className="text-gray-600 text-[28px]">Give Feedback</h2>
          <p className="text-black  text-[16px]">
            Tell them why they were rejected
          </p>
        </div>
        <button
          className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full hover:border-purple-500"
          onClick={onclose}
        >
          <img src={right} alt="" />
        </button>
      </div>
      <div>
        <p className="text-gray-600">Give feedback</p>
        <div className="w-full h-[120px] border rounded-[24px] p-4">
          <p className="text-gray-600">Tell them why...</p>
        </div>
      </div>
      <button className=" w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded-[26px] hover:bg-gray-800 transition-colors">
        Send
      </button>
    </div>
  );
};

export default Modal3;
