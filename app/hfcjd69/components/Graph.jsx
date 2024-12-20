import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const list = [
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/07dd55e8-d245-49f7-3816-aab442242e00/public',
        para: 'पाएं लम्बा और फौलादी लिंग'
    },
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/898c1f71-f84f-4d5a-ce84-5befe84c0400/public',
        para: 'लॉन्ग लास्टिंग सेक्स टाइमिंग'
    },
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/49be1623-bf7f-45fd-d2d2-115d37138d00/public',
        para: 'पाए सेक्स का असली मजा'
    },
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9296edb1-816d-4e98-7aad-2d291f18f800/public',
        para: 'हर बार पार्टनर को दें चरमसुख'
    }
]


const Graph = () => {
    return (
        <section>
            <div className="relative text-black">
                <div className="relative z-10 py-3 grid grid-cols-2 items-center px-1">
                    <div className=" border-r-2 text-end border-black pr-3 sm:pr-5">
                        <p className="fontPoppins text-[1.6rem] sm:text-5xl font-bold">HORSE FIRE</p>
                        <p className="fontPoppins text-xl sm:text-2xl">CAPSULE</p>
                    </div>
                    <div className="ps-3 sm:ps-5">
                        <p className=" text-xl sm:text-3xl font-bold">से वो सब पाएं जिसकी<br /> आप कल्पना करते है।</p>
                    </div>
                </div>

                <Image fill src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8625d00a-3cb0-43ad-e86d-15e3a41c4900/public" alt="pic" loading='lazy' />

            </div>
            <div className="my-5 sm:my-10 px-3 sm:px-10">
                <div className="grid grid-cols-2 gap-3 sm:gap-x-10 text-yellow-400 font-bold text-center">
                    {list.map((e, key) => {
                        return <div className="" key={key}>
                            <img src={e.img} alt="pic" loading='lazy' width='100%' height='100%' />
                            <p className="mt-2">{e.para}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="px-3 sm:px-10">
                <p className="my-5">अगर अपनी पार्टनर को धुआंधार सेक्स से हर बार गिला करना चाहते है और ऑर्गेज़्म तक उसका साथ देना चाहते है तो आप को ये सब चाहिए। इन सब के लिए एकमात्र असरदार और भरोसेमंद उत्पाद है Hose Fire Capsule, आज ही आजमाएं। </p>

                <FlipAmazon />

                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a6ac9735-accc-43f7-8da0-66c64f8f9200/public' alt="pic" loading='lazy' width='100%' height='100%' className='w-11/12 mx-auto mb-3' />
                <p className="">सर्वश्रेष्ठ यौनवर्धक <span className="text-yellow-500">Horse Fire Capsule</span> ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके इसके इस्तेमाल से असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है-</p>
            </div>
        </section >
    )
}

export default Graph