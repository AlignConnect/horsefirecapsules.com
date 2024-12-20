import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});
const Sec1 = () => {

    const items = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0ef825a-5892-4468-77df-2169f365c300/public',
            title: 'ज्यादा ऊर्जा और स्टैमिना'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f111768b-619c-4caa-14ad-720a6e7b3300/public',
            title: 'ज्यादा सेक्स अवधि'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/91b2c1d5-250b-4bdf-16e0-4b81d0653000/public',
            title: 'ज्यादा सख्त व बड़ा लिंग'
        }
    ]

    return (
        <div className='my-5'>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e9db6c7f-5909-4073-7169-e7552700fa00/public" alt="pic" loading='lazy' width='100%' height='100%' className='w-11/12 sm:w-3/4 m-auto' />

            <p className="px-3 sm:px-5 my-5">सेक्सुअल एक्सपर्ट का मानना है की शीघ्रपतन से पीड़ित पुरुष महिलाओं के सामने शून्य होता है। उतने देर में वो उत्तेजित भी नहीं हो पाती है जितने देर में एक यौन कमजोर पुरुष का वीर्य स्खलित हो जाता है। इसलिए अपनी कमजोरी को अपनी पार्टनर के खुशियों में रूकावट न बनने दें। इसे जड़ से मिटायें, हॉर्सफायर कैप्सूल के साथ खुद को मजबूत बनाएं और पार्टनर पर प्यार बरसायें !</p>

            <div className="my-5 px-5 sm:px-16 text-yellow-500 font-bold text-center text-xl sm:text-3xl">
                {items.map((e, key) => {
                    return <div className="" key={key}>
                        <img src={e.image} alt="pic" loading='lazy' width='100%' height='100%' />
                        <p className="my-3">{e.title}</p>
                    </div>
                })}
            </div>
            <FlipAmazon/>

            <div className="text-[1.1rem] sm:text-xl  px-3 sm:px-8">
                <p className="text-center my-3">यदि प्रमिका/बीवी को खुश रखना है तो आपको ये सब चाहिए, इसके बिना आप एक नाकाम पुरुष के वर्ग में गिने जायेंगे। अगर आप इन सब खूबियों के साथ एक पावरफुल पति बनना चाहते है तो Horse Fire Capsule को अपने लाइफ में जरूर एड करें।</p>
                <p className="text-center my-3"><span className="text-yellow-500">हॉर्सफायर कैप्सूल</span> एक श्रेष्ठ आयुर्वेदिक उत्पाद है जिसे शोधित और चुनिंदा जड़ीबूटियों और भस्मो द्वारा तैयार किया जाता है। इसमें किसी प्रकार के केमिकल का प्रयोग नहीं होता है जिसकी वजह से यह पूर्ण रूप से दुष्प्रभाव मुक्त और सेवन के लिए सुरक्षित है। </p>
            </div>
        </div>
    )
}

export default Sec1