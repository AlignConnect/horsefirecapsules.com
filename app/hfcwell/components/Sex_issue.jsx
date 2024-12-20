import dynamic from 'next/dynamic'
import Image from 'next/image';
import React from 'react'

const SubTitle = dynamic(() => import('./SubTitle'), {
    loading: () => <p>loader</p>
});



const Sex_issue = () => {

    return (
        <section>
            <SubTitle title='"समस्याएं" जिनकी वजह से लगता है "नामर्दी" का टैग' />


            <div className="relative">
                <div className="relative z-10 py-5 sm:py-10 px-3 ">


                    <div className="grid grid-cols-12 text-[1.1rem] sm:text-[1.15rem] text-center gap-5 sm:gap-0">
                        <div className="col-span-6 sm:col-span-3 order-2 sm:order-1">
                            <div className="grid justify-between h-full gap-5 sm:gap-0">
                                <div className="">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0e24b79e-a98a-4f51-944b-e59972cf1100/public" alt="pic" width='100%' height='100%' className='w-full' loading='lazy' />
                                    <p className="mt-2"> <span className="bgredC" >शीघ्रपतन-</span> 2 मिनट या 2 झटके में वीर्यपात </p>
                                </div>
                                <div className="">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c553c5cf-7fcd-429e-6531-7d4640ed2800/public" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />
                                    <p className="mt-2"><span className="bgredC">छोटा लिंग-</span> G-Spot को उत्तेजित करने में नाकाम</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 sm:col-span-6  order-1 sm:order-2">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0d879c12-a441-461c-bbf4-858f3e44b500/public" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />

                        </div>
                        <div className="col-span-6 sm:col-span-3  order-3">
                            <div className="grid justify-between h-full gap-5 sm:gap-0">
                                <div className="">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/44d02113-762a-4c77-6dfd-0eae4629da00/public" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />
                                    <p className="mt-2"><span className="bgredC">ढीला लिंग-</span> मजबूत सेक्स प्रदर्शन करने में असमर्थ</p>
                                </div>
                                <div className="">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2ab97671-6cc1-472d-a24d-bb37dc876900/public" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />
                                    <p className="mt-2"><span className="bgredC">लो एनर्जी-</span> कुछ झटको में ही सांस फूलना, थक जाना</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="pBorderSection p-3 pb-0 mt-5 leading-snug sm:leading-normal">
                        <div className="pBorderSideSection lDiv"></div>
                        <div className="pBorderSideSection rDiv"></div>
                            <p className="">बात सेक्स को एन्जॉय करने की हो तो, स्त्रीभोग का सुख वही पुरुष लूट सकता है, जो निरोग है, बलवान है, वीर्यवान और जिनके लिंग में दम है। जो रोगी है, बलहीन है, वीर्यक्षीण है, कमजोर लिंग वाला है,वह स्त्री-भोग का आनन्द नहीं उठा सकता। क्यों कि जो खुद को स्वस्थ रखेगा मैं सक्षम नहीं वो दूसरे को क्या सुख देगा !</p>
                            <p className="mt-5">परन्तु, अब हर पुरुष बड़े और मोटे लिंग के साथ घंटो तक नॉनस्टॉप सेक्स करके उठा पाएगा सेक्स का असली मजा गारंटीड! क्योंकि आ गया है यौन कमजोरी का सबसे असरदार इलाज <span className="text-blue-400">"हॉर्सफायर कैप्सूल"</span> यह भारत का सबसे ज्यादा बिकने वाला लिंगवर्धक और यौनवर्धक उत्पाद है। "हॉर्सफायर कैप्सूल" का सेक्स कमजोरी पर रिजल्ट एक्यूरेसी 100% है। अपने सकारात्मक प्रभाव और दुष्प्रभावमुक्त होने की वजह से हॉर्सफायर कैप्सूल भारतीय पुरुषों में अत्यंत लोकप्रिय बन गया है। </p>
                    </div>

                </div>
                <Image fill src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a85a88fa-50a3-4126-46f3-8d1f7a883600/public" alt="pic" loading='lazy' />

            </div>
          

        </section>
    )
}

export default Sex_issue