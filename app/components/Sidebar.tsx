import Link from "next/link";
import React from "react";

const Sidebar = ({
  formType,
  isClicked,
}: {
  formType: string;
  isClicked: boolean;
}) => {
  return (
    <div className="bg-black rounded-3xl flex flex-col items-center w-full  justify-between h-full">
      <div className="w-full">
        <h3 className="text-center text-white font-bold"> Select Template </h3>

        <Link href="/simpleform">
          <div className="p-4 text-center font-bold">Simple Form</div>
        </Link>
        <div className="bg-white w-full h-px"></div>
        <Link href="/floatingform" className="text-center text-white p-4">
          <div className="p-4 text-center  font-bold">Floating Form </div>
        </Link>
        <div className="bg-white w-full h-px"></div>
        <Link href="/emailform" className="text-center text-white p-4">
          <div className="p-4 text-center  font-bold">Email Form </div>
        </Link>
        <div className="bg-white w-full h-px"></div>
        <Link href="/extendedform" className="text-center text-white p-4">
          <div className="p-4 text-center  font-bold">Extended Form </div>
        </Link>
        <div className="bg-white w-full h-px"></div>
      </div>
      <div className="text-white text-center bg-green-600 flex-end p-4 mb-6 w-36 rounded-2xl">
        Select Template
      </div>
    </div>
  );
};

export default Sidebar;
