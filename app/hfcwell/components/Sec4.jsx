import dynamic from 'next/dynamic'
import Image from 'next/image';
import React from 'react'

const SubTitle = dynamic(() => import('./SubTitle'), {
    loading: () => <p>loader</p>
});


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Sec4 = () => {
    return (
        <section>
            <SubTitle title='पुरुषों को हॉर्सफायर की जरुरत क्यों?' />

            <div className="relative">
                <div className="relative z-10 py-5 sm:py-10 px-3 sm:px-5">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/505d29aa-2b20-45db-69b8-52bf8652ce00/public" alt="pic" className='w-11/12 mx-auto mb-5 sm:mb-10' width='100%' height='100%' loading='lazy' />

                    <div className="pBorderSection p-3 pb-0 mt-5 leading-snug sm:leading-normal">
                        <div className="pBorderSideSection lDiv"></div>
                        <div className="pBorderSideSection rDiv"></div>
                        <p className="">क्योंकि एक महिला अपना कामुक रूप केवल उसी पुरुष को दिखाती है जिसके पास एक मजबूत लिंग होता है। जिसके लिंग से चुद कर उसे नारी होने का एहसास हो  जो अपने लिंग के घर्षण से उसके शरीर के अंगों को उत्तेजित कर दे और हर झटका चीखने पर मजबर कर दे। हॉर्सफायर एक सामान्य पुरुष को भी सेक्स में अल्ट्रा प्रो मैक्स बना देता है जिससे महिला पॉर्टनर उसपर जान छिड़कती है। </p>
                    </div>

                    <div className="border-2 border-dashed border-white my-3">
                        <h1 className="w-10/12 mx-auto text-center text-4xl sm:text-6xl font-bold pt-5 sm:pt-8 pb-2 "><span className="text-red-600">हॉर्स फायर</span> काम कैसे करता है</h1>
                    </div>
                    <div className="pBorderSection1 p-3 pb-1 leading-snug sm:leading-normal">
                        <div className="pBorderSideSection1 lDiv1"></div>
                        <div className="pBorderSideSection1 rDiv1"></div>
                        <p className="">यह कोई जादू नहीं बल्कि प्रकृति और विज्ञान का अनोखा संयोजन है जो जादू की तरह काम करके शीघ्रपतन, लिंग ढीलापन जैसी सभी यौन कमजोरियों को गायब कर देता है। इस्तेमाल के पहले दिन से ही यह समस्या की जड़ पर काम शुरू कर देता है। टेस्टोस्टेरोन हार्मोन का स्तर बढ़ाता है, लिंग की नसों में रक्त का बहाव तेज करता है जिससे ढीला लिंग भी मजबूती से खड़ा होने लगता है। वीर्य स्खलन में देरी लाता है जिससे सेक्स अवधि में बृद्धि होती है और नाकाम पुरुष भी महिला को हर बार संतुष्ट करने में सक्षम न जाते है।</p>
                    </div>
                </div>
                <Image fill src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a85a88fa-50a3-4126-46f3-8d1f7a883600/public" alt="pic" loading='lazy' />
            </div>
<FlipAmazon/>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8da71c96-1244-480a-a1ae-adbe96ce6300/public" alt="pic" className='w-full' width='100%' height='100%' loading='lazy' />

        </section >
    )
}

export default Sec4