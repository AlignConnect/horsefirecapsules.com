import dynamic from 'next/dynamic';
import React from 'react'
const OrderBtn = dynamic(() => import('@/app/commonUse/OrderBtn/OrderBtn'), {
    loading: () => <p>loader</p>
});
function Hearbs() {
    return (
        <div className='bg-white'>
            <div className=' w-full max-w-6xl mx-auto'>

                <div className="">
                    <img
                        className='mx-auto  w-full md:w-[60%] py-5'
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ba1a32a8-4a15-47b5-5b7a-aa0c30121200/public"
                        alt='hearbs'
                    />


                    <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-4 px-2">
                        इसीलिए शिलाजीत, अश्वगंधा गोखरू, केसर, सफ़ेद मूसली, जायफल, शतावरी, विदारी, और अकरकरा जैसी 17 शक्तिशाली और यौनवर्धक जड़ीबूटियों और वांग, एवं अभ्रक जैसे दिव्य भस्मों के निर्माण से तैयार किया गया है Horse Fire Capsule जो बिल्कुल प्राकृतिक तरीके से पुरुष सेक्स हॉर्मोन बढ़ाता है, शक्ति और उत्तेजना में बृद्धि करता है और उदासी भरे सेक्स लाइफ को रोमांचक बनाने का काम करता है।
                    </div>

                    <img
                        className='mx-auto   w-full md:w-[90%] py-5'
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12e52074-cfa7-47e0-ff77-ae3f74552900/public"
                        alt='wellness'
                    />

                    <OrderBtn />

                    <div className="fontNoto text-3xl mt-2 md:text-5xl font-extrabold px-2 py-4 text-center">
                        <span className="text-[#d51515]">&#x201C;हॉर्सफायर का अटूट वादा,</span> फायदा हमेशा ज्यादा"
                    </div>

                    <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-2 px-2">
                        Horse Fire Capsule भारत का श्रेष्ठ सेक्सुअल वेलनेस प्रोडक्ट है। भारतीय पुरुष इसके इस्तेमाल से लिंग आकार, सेक्स स्टैमिना और सेक्स अवधि बढ़ाकर यौन अनुभव बेहतर बना रहे है। Horse Fire Capsule कस्टमर सटिस्फैक्शन पर कार्य करता है। इसके निर्माण पश्चात तमाम लैब रीसर्च इसे सिद्ध करते है और पुरुष इसके लाभ से संतुष्ट होते है।
                    </div>

                    <div className="bg-[#ffff71] text-[#d51515] my-4 fontNoto text-3xl md:text-5xl font-extrabold px-2 pt-5 md:pt-7 text-center">
                        "हॉर्सफायर के सेवन पश्चात बेड पर करें जन्नत का एहसास"
                    </div>

                    <img
                        className='mx-auto w-full md:w-[65%] py-5'
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c8a54227-fa5e-414e-790a-e2bcef6f8500/public"
                        alt='couple_hft'
                    />


                </div>
            </div>


        </div>
    )
}

export default Hearbs