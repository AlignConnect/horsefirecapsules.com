import dynamic from "next/dynamic";
import React from "react";

const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});

const Hftpro = () => {
  return (
    <div className="bg-red-600 ">
      <div className="max-w-3xl mx-auto relative mt-[5rem] md:mt-[12rem]">
        <div className={`flex flex-col md:text-4xl items-end mr-4 uppercase text-white fontPoppins py-5`}>
          <h1 className="font-bold"> upto 50% off </h1>
          <p className=""> Limited offer !!! </p>
        </div>
        <div>
          <div className="absolute bottom-0 w-2/4">
            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c395b4aa-8392-46d2-6e07-c04d8c77ca00/public" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hftpro;
