import React, { useState } from "react";

interface Entry {
  label: string;
  page: any;
}

interface VerticalTabsProps {
  entries: Entry[];
  defaultSelectedIndex?: number;
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({
  entries,
  defaultSelectedIndex = 0,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  const handleTabClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-1/4 border-r">
        {entries.map((entry, index) => (
          <div
            key={entry.label}
            className={`p-2 cursor-pointer ${
              selectedIndex === index ? "bg-gray-100" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {entry.label}
          </div>
        ))}
      </div>
      <div className="flex-grow p-2">{entries[selectedIndex].page}</div>
    </div>
  );
};

export default VerticalTabs;
