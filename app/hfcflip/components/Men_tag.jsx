import React from 'react'

function Men_tag() {

    const hfc_satisfaction = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-3 border border-red-600 rounded-xl my-5 md:my-8 py-2 px-2 w-80 md:w-1/2 mx-auto ' key={key}>
                <img src={e.hfc_satisfaction_icon} className='w-16' alt='hfc_satisfaction_icon' />
                <div className='fontPoppins pt-2 md:text-xl text-xl font-semibold  text-white'>{e.hfc_satisfaction_title}</div>
            </div >
        })
    }


    return (
        <div>
            <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c28d2fb6-60c9-4b0f-00e5-9af5d706e200/public')] bg-cover">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 items-center">
                        <div className="col-span-6 bg-red-800 md:py-10 py-5">
                            <div className="fontSumana text-white text-xl md:text-4xl font-semibold text-justify px-2 !leading-normal italic">
                                "आपकी पार्टनर देगी असली मर्द का टैग,<br /> <span className="px-2"> जो मिलेगी बार-बार मिलने की चाहत करेंगी!"</span>
                            </div>
                            <div className="fontNoto text-5xl md:text-8xl text-yellow-400 font-extrabold text-center pt-6 md:pt-9">
                                हमारा लक्ष्य
                            </div>
                            <div className="fontSumana text-xl md:text-4xl text-justify text-white font-semibold px-2 !leading-normal">
                                "हम चाहते है प्रत्येक पुरुष दमदार यौन क्षमता वाला हो, ताकि वैवाहिक जीवन या लव रिलेशनशिप में रोमांच रहे। यौन असंतुष्टि की वजह से रिश्ते में कड़वाहट और दरार न आये!
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className=''>
                                {
                                    hfc_satisfaction([
                                        {
                                            hfc_satisfaction_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/111bef71-de4d-499c-e806-0f20241a7c00/public",
                                            hfc_satisfaction_title: "20 Lakh Happy Customer"
                                        },
                                        {
                                            hfc_satisfaction_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4cabebd2-9d6e-4f02-ec63-e04a74d5ed00/public",
                                            hfc_satisfaction_title: "10 Years of Experiance"
                                        },
                                        {
                                            hfc_satisfaction_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0abe6c7a-d6fc-4e15-e145-b171a6cddb00/public",
                                            hfc_satisfaction_title: "100% Customer Satisfaction"
                                        },
                                        {
                                            hfc_satisfaction_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f37eceba-fefb-44ca-9bcf-c5062a88d500/public",
                                            hfc_satisfaction_title: "0% Customer Side Effects"
                                        }
                                    ])
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Men_tag