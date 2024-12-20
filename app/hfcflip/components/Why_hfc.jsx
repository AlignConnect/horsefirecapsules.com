import React from 'react'
import { FaRegCircle } from 'react-icons/fa6'

function Why_hfc() {

    const why_horsefire_capsule = (arr) => {
        return arr?.map((e, key) => {
            return <div className='' key={key}>
                <img src={e.why_hfc_icon} className='mx-auto md:w-full w-full px-1 rounded-t-xl' alt='why_hfc_icon' />
                <div className='fontNoto pt-3 pb-1  md:text-2xl text-[1rem] font-semibold text-center text-white bg-red-800 mx-1 rounded-b-xl px-1'>{e.why_hfc_title}</div>
            </div >
        })
    }


    return (
        <section>
            <div className="bg-black">
                <div className="w-full max-w-7xl mx-auto py-3 md:py-5">
                    <div className="fontPoppins text-xl md:text-3xl text-white py-3 md:py-6 text-center px-2">
                        <FaRegCircle className='text-red-600 inline-block ' /> Work Process
                    </div>

                    <div className="fontNoto text-3xl md:text-5xl text-yellow-400 font-extrabold py-3 md:py-5 text-center ">
                        Horsefire Capsule क्यों?
                    </div>

                    <p className='fontNoto text-[1.4rem] py-3 text-center text-white'>
                        "इसकी जरुरत आपको भी है अगर आपका लिंग छोटा, ढीला, पतला और सेक्स अवधि कम है। वरना आपको लाइफ में बड़े दुःख और निराशा का सामना करना पड़ सकता है"
                    </p>

                    <div className='grid md:grid-cols-4 gap-2 grid-cols-2 py-5'>
                        {
                            why_horsefire_capsule([
                                {
                                    why_hfc_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/203cda44-4c33-4267-a4d5-d81d2bb24500/public",
                                    why_hfc_title: "क्योंकि 93% महिलाएं बड़ा और मोटा लिंग पसंद करती है "
                                },
                                {
                                    why_hfc_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cab2f4ee-98bd-4b4a-b6cf-8187546a7600/public",
                                    why_hfc_title: "क्योंकि महिलाओं को 27 मिनट नॉनस्टॉप सेक्स चाहिए"
                                },
                                {
                                    why_hfc_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de958159-d78e-4954-af75-9021294a7b00/public",
                                    why_hfc_title: "क्योंकि महिलाएं कमजोर पुरुषों को पसंद नहीं करती है "
                                },
                                {
                                    why_hfc_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8f394896-caf9-46ce-8dfe-55fd3e8fab00/public",
                                    why_hfc_title: "क्योंकि पार्टनर की इच्छाएं आप पूरी नहीं कर पाते "
                                }
                            ])
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_hfc