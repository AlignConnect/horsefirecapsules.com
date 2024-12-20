import Image from "next/image";

const Section4 = () => {
    return (
        <section className=' w-full'>
            <div className="relative fontPoppins text-white">
                <div className="relative z-10 max-w-6xl mx-auto px-3 py-5">
                    <h1 className="text-xl md:text-4xl text-center font-semibold !leading-normal">
                        अगर आपको ये सब चाहिए तो आजमाए <span style={{ color: "yellow" }}>"Horse Fire Capsule"</span> और अपने सेक्स प्रदर्शन में पाए अद्भुत वृद्धि।
                    </h1>
                </div>
                <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9ab555cf-2956-446d-760e-2546b4facf00/public' fill className="w-full absolute top-0" />
            </div>
            <div className="w-full bg-black">
                <div className="max-w-6xl mx-auto">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a343c078-93de-4f9e-0563-f9342c933400/public" alt="pic" className="w-full h-full  md:block hidden" loading="lazy" />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f2fbc96e-1797-4f9b-282e-bf6424880d00/public" alt="pic" className="w-full h-full block md:hidden" loading="lazy" />
                </div>
            </div>
        </section>
    )
}
export default Section4;