import dynamic from "next/dynamic";
import Image from "next/image";

const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});

const HeroSection = () => {
  return (
    <div className='relative text-white'>
      <div className="max-w-7xl mx-auto px-2 md:pt-10 relative z-10">
        <div className="flex md:flex-row flex-col md:items-center justify-center">
          <div>
            <div className='hidden text-black p-2 px-4 md:inline-block italic bg-gradient-to-r from-yellow-400 border-2 border-yellow-200 to-yellow-100 text-3xl fontOswald'>
              INDIA'S NO.1 MEN WELLNESS PRODUCT
            </div>
            <div className='md:text-6xl text-5xl font-bold  text-center md:text-start py-2  uppercase fontYoung'>
              Horse Fire Capsule
            </div>
            <div className='md:text-5xl mt-2 md:mt-4 fontPoppins italic font-bold text-3xl text-yellow-400'>
              10x Better Performance
            </div>
            <div className="text-3xl font-bold pt-2 ">
              नहीं थमेगा प्यार, जब लम्बा होगा औजार
            </div>
            <div className="text-xl pt-2 md:py-4">
              ज्यादातर महिलाएं सेक्स में संतुष्टि का दिखावा करती है ताकि रिश्ते
              को निभा सके ! क्योंकि पुरुष छोटे, ढीले लिंग या फिर शीघ्रपतन से
              परेशान है।
            </div>
            <div className="flex mt-3 md:mt-5 fontPoppins text-2xl gap-2">
              <div className="flex  items-center gap-2">
                <div className="w-1/4 ">
                  <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ec847d37-e24f-4322-b6dd-674ad1339c00/public" />
                </div>
                <span className=''>
                  Stamina
                </span>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="w-1/4 ">
                  <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6851209c-90e7-4d00-2e23-8e5b8e199800/public" />
                </div>
                <span className=''>
                  Strength
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8d87aa18-70a9-4e44-73ca-fb64a2eea100/public" />
          </div>
        </div>
      </div>

      <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5b87894-9324-4b9c-f53e-2c14e8224d00/public' alt='pic' fill sizes="100vw" />

    </div>
  );
};

export default HeroSection;
