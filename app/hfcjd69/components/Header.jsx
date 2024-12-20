import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Header = () => {
    return (
        <section>

            <div className="bg-[#fdec06]">

                <div className="text-white bg-[red] font-extrabold pt-2 text-center sm:text-2xl text-[1.1rem] border border-dashed px-2 border-yellow-400 sm:w-52 w-48  mx-auto ">
                    नक्कालों से सावधान
                </div>

                <marquee className='text-black text-center pt-2 sm:text-[1rem] text-[1rem]'>
                    <span className='text-[red] font-semibold fontPoppins'>Horsefire Capsule</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className='text-[red] font-semibold fontPoppins'>AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें!
                </marquee>
            </div>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d08e57d3-0ace-436f-b168-1f8c1b248700/public" alt="pic" fetchPriority='high' width='100%' height='100%' />

            <div className="grid grid-cols-2 py-2 rounded-xl m-4 text-center text-yellow-400 font-bold" style={{ boxShadow: "rgba(255, 255, 255, 0.35) 0px 5px 15px" }}>
                <div className="border-r border-dashed  border-white ">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/57a012cd-7bf7-49de-6741-522106223700/public" alt="pic" loading='lazy' width='100rem' height='100%' className='m-auto' />
                    <p className="mt-2">20 लाख+ संतुष्ट ग्राहक</p>
                </div>
                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/85d17415-4878-4d99-a1e0-c3c31c979600/public" alt="pic" loading='lazy' width='100rem' height='100%' className='m-auto' />
                    <p className="mt-2">प्रीपेड पर 10% अतिरिक्त बचत</p>
                </div>
            </div>

            <FlipAmazon/>
        </section>
    )
}

export default Header