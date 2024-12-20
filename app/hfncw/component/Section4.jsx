import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Ordernow = dynamic(() => import('./OrderNow'));



const Section4 = () => {
    return (
        <section className={noto.className}>

            <div className="w-full md:w-[600px] mx-auto p-3">

                <div className='flex justify-around items-center border border-2 border-[#41556d] border-dashed w-[90%] mx-auto font-black py-3 text-xl rounded-tl-[30px] rounded-br-[30px]'>
                    <div>
                        Before
                    </div>
                    <div>
                        After
                    </div>
                </div>


                <div className='grid grid-cols-12 px-3 my-5'>

                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ab87c245-abbb-4fcc-795b-5a6ec343a900/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> छोटा और ढीला लिंग</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d05e14f3-ca86-4119-7909-62aec31d7300/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> बड़ा और सख्त लिंग </p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/52ad0d23-89c8-4f87-0ca3-d48815b15300/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">शीघ्रपतन, कम सेक्स अवधि</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e17dec5a-e4db-46bc-77be-5c02f7979b00/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">
                            नॉनस्टॉप +45 मिनट सेक्स

                            {/* 

                       */}
                        </p>


                    </div>



                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e6e3e4d7-9647-4a00-a764-d0abc8356e00/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> पहले- सेक्स के दौरान थकान</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ecce7ff3-7a7f-422e-e5c5-1b23c0795300/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">बाद में- उच्च एनर्जी और स्टैमिना</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/038617f8-3c96-42c4-793c-aa9071511500/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">   पहले- पानी जैसा पतला वीर्य
                        </p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/406ba916-2c07-43ad-2546-8665bd718700/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">बाद में- गाढा और उर्वरक वीर्य</p>
                    </div>


                </div>

                <Ordernow />


                <div className="bg-black text-white p-3 text-[17px] pt-2">


                    <div className="flex flex-col justify-end items-start my-2">
                        <div className="menu-line top"></div>
                        <div className="menu-line middle"></div>
                        <div className="menu-line bottom"></div>
                    </div>

                    सोचना छोड़े ! दिन की सुने, सर्वश्रेष्ठ चुने और खुशहाली भरे सेक्स लाइफ की तरफ कदम बढ़ाये। हॉर्सफायर के इस्तेमाल से 10 लाख से ज्यादा खुशहाल पुरुषों में शामिल हो जाये और अपने महिला पार्टनर को वह सेक्स सुख दें जो वह हमेशा से चाहती है।

                    <div className="flex flex-col justify-end items-end">
                        <div className="menu-line top"></div>
                        <div className="menu-line middle"></div>
                        <div className="menu-line bottom"></div>
                    </div>
                </div>


                <section>

                    <h1 className={`${poppin.className} uppercase font-bold text-2xl text-center py-3`}>Why Men Trust Us!</h1>

                    <div className="">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/739179a6-593d-460b-ff10-106469e54500/public" alt="dff" loading="lazy" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 justify-center items-center my-3">
                        <div className="bg-[#9db0bf]  pt-2  font-bold md:text-lg text-center">#1 यौन श्रेणी में विक्रेता </div>
                        <div className="bg-[#9db0bf]  pt-2  font-bold md:text-lg text-center">10 दिनों की मनी बैक गारंटी</div>
                        <div className="bg-[#9db0bf]  pt-2 px-2 font-bold md:text-lg text-center">COD यानि डिलीवरी पर भुगतान</div>
                        <div className="bg-[#9db0bf]  pt-2 px-2 font-bold md:text-lg text-center">प्रीपेड आर्डर पर 10% अतिरिक्त बचत</div>
                    </div>

                    {/* <div className="font-bold text-center text-xl pt-4">
                        Flipkart,  Amazon पर उपलब्ध
                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/02cdba3c-7acd-40ff-5394-a610bb9c9800/public" alt="asdfdsf" className="w-[80px] mx-auto" loading="lazy" /> */}

                </section>
                


            </div>
        </section>
    )
}

export default Section4