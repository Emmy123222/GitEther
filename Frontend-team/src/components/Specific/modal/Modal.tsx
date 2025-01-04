import right from "@/assets/images/💜 Right Icon (1).png";
import contain from "@/assets/images/Container (47).png";
import fram from "@/assets/images/Frame (33).png";
import { useState } from "react";

// Define a type for organizations
type Organization = {
  id: number;
  name: string;
  avatar: string;
};

const Modal = ({ onClose }: { onClose: () => void }) => {
  // Explicitly type the state variables
  const [availableOrgs, setAvailableOrgs] = useState<Organization[]>([
    { id: 1, name: "Noyi24_7", avatar: contain },
  ]);
  const [installedOrgs, setInstalledOrgs] = useState<Organization[]>([]);

  const handleInstall = (org: Organization) => {
    setAvailableOrgs((prev) => prev.filter((item) => item.id !== org.id));
    setInstalledOrgs((prev) => [...prev, org]);
  };

  return (
    <div>
      <div className="bg-white w-[640px] mx-auto container p-4 rounded-[26px]">
        {/* Header */}
        <div className="flex justify-between mt-2">
          <p className="text-black">1/3</p>
          <div
            className="w-[48px] h-[48px] rounded-full border flex items-center justify-center border-to-r from-[#E8D07A] to-[#5312D6]"
            onClick={onClose}
          >
            <img src={right} alt="Close" />
          </div>
        </div>

        {/* Title */}
        <div className="mb-5">
          <p className="text-[28px] font-kern text-black">
            Choose Github Organisations
          </p>
          <p className="text-[16px] text-black">
            Create an organisation on github containing the repositories you
            want to add
          </p>
        </div>

        {/* Available Organizations */}
        <div className="space-y-4">
          <p className="text-[22px] text-black">Available Organisations</p>
          {availableOrgs.length > 0 ? (
            availableOrgs.map((org) => (
              <div
                key={org.id}
                className="w-[576px] h-[104px] border rounded-[24px] p-5"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img src={org.avatar} alt={org.name} />
                    <p className="text-black text-[22px]">{org.name}</p>
                  </div>
                  <div
                    className="w-[20px] h-[20px] border rounded-full cursor-pointer flex items-center justify-center"
                    onClick={() => handleInstall(org)}
                  >
                    <img src={fram} alt="Add" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-[576px] h-[62px] border border-[#EAECF5] rounded-full p-3 flex items-center">
              <p className="text-black text-[16px]">
                You have no organization available.
              </p>
            </div>
          )}
        </div>

        {/* Installed Organizations */}
        <div className="space-y-4 mt-4">
          <p className="text-black text-[22px]">
            Installed on these Organisations
          </p>
          {installedOrgs.length > 0 ? (
            installedOrgs.map((org) => (
              <div
                key={org.id}
                className="w-[576px] h-[104px] border rounded-[24px] p-5 "
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img src={org.avatar} alt={org.name} />
                    <p className="text-white text-[22px]">{org.name}</p>
                  </div>
                  <div className="w-[20px] h-[20px] bg-white rounded-full text-black border flex items-center justify-center">
                    ✓
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-[576px] h-[62px] border border-[#EAECF5] rounded-full p-3 flex items-center">
              <p className="text-black text-[16px]">
                You have no organization available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
