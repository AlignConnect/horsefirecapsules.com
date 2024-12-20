import dynamic from 'next/dynamic'
import React from 'react'
import { TfiHandPointDown } from "react-icons/tfi";


const YoutubeVideo = dynamic(() => import('./YoutubeVideo'))


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Sex_issue = () => {


    const sex_issue_content1 = [{
        title: "कम सेक्स व निराशा",
        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9c228311-2871-4a22-eded-aa6e7b056100/public"
    },
    {
        title: "छोटा-पतला लिंग",
        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8ea85b62-a114-49bf-1a27-41cabe314700/public"
    }]

    const sex_issue_content2 = [{
        title: "कमजोर इरेक्शन",
        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/da192336-bc26-4df2-9079-509d61739b00/public"
    },
    {
        title: "ऊर्जा की कमी",
        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0f8729c-e3ec-4271-92b7-ca11fedb2b00/public"
    }]

    const sex_solution1 = [{
        solution_title: "ज्यादा लम्बा सेक्स",
        solution_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f1740fd6-1706-4303-c842-f55c680a5e00/public"
    },
    {
        solution_title: "बड़ा फौलादी लिंग ",
        solution_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/33dba94e-38f2-4a9b-3411-e0fb526a3400/public"
    }]

    const sex_solution2 = [{
        solution_title: "चट्टान सी सख्ती ",
        solution_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1afeacbf-bb54-4949-a972-cf1ab6ea2b00/public"
    },
    {
        solution_title: "अद्भुत एनर्जी और पावर",
        solution_gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bd2e998e-539c-4253-d52d-640085f62200/public"
    }]


    return (
        <section>

            <div className="w-full max-w-3xl mx-auto">

                <div className="">

                    <div className="grid grid-cols-2 items-center justify-center gap-2 px-2  bg-gray-300">
                        {sex_issue_content1.map((e, key) => {
                            return <div className="flex flex-col my-2" key={key}>
                                <div className="w-full sm:h-[200px] h-[93px]">
                                    <img src={e.gif} alt="pic" className="object-contain w-full" loading="lazy" fetchPriority='high' />
                                </div>
                                <div className="fontNoto bg-title-hfc1best text-black text-xl sm:text-3xl text-center sm:pt-3 pt-2 font-extrabold">
                                    {e.title}
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="">

                        {sex_issue_content2.map((e, key) => {

                            return <div className="py-1 px-2 bg-gray-300" key={key}>
                                <div className="">
                                    <img src={e.gif} alt="pic" className="w-full sm:h-[300px] h-[150px]" loading="lazy" fetchPriority='high' />
                                </div>

                                <div className="fontNoto bg-title-hfc1best text-black text-xl sm:text-3xl text-center sm:pt-3 pt-2 font-extrabold">
                                    {e.title}
                                </div>

                            </div>
                        })}

                    </div>


                    <div className="bg-black text-center fontNoto text-white font-extrabold md:text-5xl text-[2rem] sm:pt-7 sm:pb-2 pt-5 px-1 leading-tight">
                        <span className='text-red-500'>हॉर्सफायर कैप्सूल <br /></span> खाने वाले पुरुष
                    </div>

                    <div className="grid grid-cols-2 items-center justify-center gap-2 px-2  bg-gray-300">
                        {sex_solution1.map((e, key) => {
                            return <div className="flex flex-col my-2" key={key}>
                                <div className="w-full sm:h-[200px] h-[80px]">
                                    <img src={e.solution_gif} alt="pic" className="object-contain w-full" loading="lazy" fetchPriority='high' />
                                </div>
                                <div className="fontNoto bg-title-hfc1best text-black text-xl sm:text-3xl text-center sm:pt-3 pt-2 font-extrabold">
                                    {e.solution_title}
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="">

                        {sex_solution2.map((e, key) => {

                            return <div className="py-1 px-2 bg-gray-300" key={key}>
                                <div className="">
                                    <img src={e.solution_gif} alt="pic" className="w-full sm:h-[300px] h-[150px]" loading="lazy" fetchPriority='high' />
                                </div>

                                <div className="fontNoto bg-title-hfc1best text-black text-xl sm:text-3xl text-center sm:pt-3 pt-2 font-extrabold">
                                    {e.solution_title}
                                </div>

                            </div>
                        })}

                    </div>

                    <div className="bg-black">

                        <div className=" text-center fontNoto text-red-600 font-extrabold md:text-5xl text-[2rem] px-1 pt-5 sm:pt-8 mx-auto leading-tight">
                            डॉक्टर्स<span className='text-white'> द्वारा प्रस्तावित</span>
                        </div>

                        <p className='fontNoto text-center text-[1rem] md:text-xl text-white px-2 py-3 '>
                            <span className='text-yellow-400 font-semibold'>Horsefire Capsule</span> एक क्रन्तिकारी प्रभाव के साथ उपलब्ध है जिसका काम है पुरुष कमजोरी को भगाना! इसे भारत के मशहूर सेक्सोलॉजिस्ट द्वारा सुझाया गया है, <span className='text-yellow-400'> निचे वीडियो देखें!</span>
                        </p>

                        <div className="pb-3">
                            <TfiHandPointDown size={40} color='white' style={{ width: "90%", margin: "auto" }} />
                        </div>


                        <div className="text-red-600">
                            <YoutubeVideo />
                        </div>

                        <FlipAmazon />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Sex_issue