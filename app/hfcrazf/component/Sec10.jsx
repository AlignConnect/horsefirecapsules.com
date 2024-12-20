import React from "react";
import Image from "next/image";

const sec10 = () => {
  return (
    <div className="">
      <div className="relative ">
        <div className="relative z-10 py-5 sm:py-10 px-3 sm:px-0">
          <div className="max-w-[90rem] mx-auto">
            <div className="grid sm:grid-cols-12 items-center sm:gap-10">
              <div className="sm:col-span-5">
                <img
                  src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e04217d1-8c4a-4837-ebaf-fff505aae300/public"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className=""
                />
              </div>
              <div className="sm:col-span-6">
                <p className="text-2xl sm:text-5xl font-black !leading-relaxed">
                  <span className="text-red-600">इस ठंडी Horse Fire Capsule से इतना जोश और स्टैमिना बढ़ाएं</span> की
                  पार्टनर को पूरी रात गर्मी दें रजाई की जरुरत ही न पड़ें!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a4b42797-f534-4a48-829b-6568e79f4c00/public"
          fill
          loading="lazy"
          fetchPriority="high"
        />
      </div>
    </div>
  );
};

export default sec10;
