import dynamic from 'next/dynamic';
import React from 'react'


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Bigbillion = dynamic(() => import('@/app/commonUse/bigbillion'));


const Header = () => {
    return (
        <section>

            <div className="">
                <div className="w-full max-w-3xl mx-auto">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/db780038-12a6-4948-2ccd-a42efdfc3a00/public" alt="" className='w-full' fetchPriority='high' />

                    <div className="bg-black">

                        <div className="bg-title-hfc1best text-center fontNoto text-black font-extrabold md:text-5xl text-[1.8rem] sm:pt-5 pt-2 px-1 w-[89%] mx-auto">
                            दमदार लिंग, शानदार सेक्स
                        </div>

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0411874a-9605-4f6e-42a7-0c1e7ebbea00/public" alt="" className='w-full sm:pt-20 pt-14 pl-5' fetchPriority='high' loading="lazy" />

                        <div className="text-center fontNoto text-red-600 font-extrabold md:text-6xl text-[1.8rem] px-1 py-2 mx-auto leading-tight">
                            बदले आपके <span className='text-white'>"सेक्स का अंदाज"</span>
                        </div>

                        <Bigbillion />




                        <div className="">

                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/98fc1996-e363-443c-b26c-f4f900c13b00/public" alt="" className='w-full' fetchPriority='high' loading="lazy" />
                            </div>

                            <div className="-mt-8 sm:-mt-14">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/71364c6e-3ac7-4f9a-ea60-f84a68beec00/public" alt="" className='w-full' fetchPriority='high' loading="lazy" />
                            </div>

                        </div>


                    </div>

                </div>
            </div>


        </section>
    )
}

export default Header