import dynamic from 'next/dynamic'
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});


const Sec5 = () => {
    return (
        <section>


            <div className=" py-5 sm:py-10 px-3 sm:px-5 sm:leading-relaxed leading-snug">

                <p className="">"हॉर्सफायर कैप्सूल" वे पुरुष अवश्य आजमाए जिनके लिंग में ढीलापन है, या फिर फर्स्ट राउंड सेक्स के बाद लिंग में इरेक्शन नहीं मिलती है। अगर कोई पुरुष 2  मिनट या उससे भी कम समय में स्खलित हो जाता है यानि वीर्य डिस्चार्ज हो जाता है तो मात्र 30 दिनों तक यानी एक पैक नियमित गुनगने दूध के साथ सेवन करके अंतर खुद देख लें। अगला पैक आप खुद आर्डर करेंगे साथ ही 3-4 महीने नियमित सेवन करने पर आपकी यौन कमजोरी जड़ से खत्म हो जाएगी और आपको किसी भी यौनवर्धक दवा की जरुरत नहीं पड़ेगी।</p>
                <div className="-mx-3 sm:-mx-5 mt-5">
                    <div className="text-[#17df43] fontPoppins font-extrabold text-2xl sm:text-3xl text-center">
                        WHY TRUST US?
                    </div>

                    <div className="text-white  fontNoto font-extrabold text-xl sm:text-2xl text-center py-2 px-2">
                        भारतीय पुरुष भरोसा करते है क्योंकि हम देते है-
                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5e61cf7b-a60a-411a-03b2-73d974e81600/public" alt="pic" className='w-full sm:w-3/4 mx-auto px-3 py-2' width='100%' height='100%' loading="lazy" />

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b61f9900-00f8-4dce-d659-f83490e02c00/public" alt="pic" className='w-full py-4' width='100%' height='100%' loading="lazy" />


                    < FlipAmazon />

                </div>

                <div className="border-2 border-dashed border-white mt-5 sm:mt-10">
                    <p className="px-3 sm:px-10 mx-auto text-center text-3xl sm:text-[2.4rem] font-bold pt-5 sm:pt-8 pb-2 sm:leading-snug ">सोचना छोड़े ! दिन की सुने, सर्वश्रेष्ठ चुने और खुशहाली <span className="text-red-600">भरे सेक्स लाइफ की तरफ कदम बढ़ाये।</span></p>
                </div>

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b6fb63c1-22f2-4648-f287-c23d031be000/public" alt="pic" className='w-full sm:w-96 mx-auto mt-8 sm:mt-10' width='100%' height='100%' loading='lazy' />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/440c7eef-8772-4465-2d44-75d066400200/public" alt="pic" className='w-full sm:w-10/12 mx-auto mt-3 sm:mt-5 ' width='100%' height='100%' loading='lazy' />
                <div className="bg-white rounded-md px-3 py-2 mt-5">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/47adf491-426c-4850-0777-3ea3b8023f00/public" alt="pic" className='w-full sm:w-96 mx-auto ' width='100%' height='100%' loading='lazy' />
                </div>


            </div>

        </section >
    )
}

export default Sec5