import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Sec4 = () => {

    const items = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fe698eac-f2e3-4b6e-edf3-0cf9d9ca2600/public',
            para: '100% मनी बैक गारंटी'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/724142e7-c223-4795-c98a-ea264d32ac00/public',
            para: '97.6% सफलता दर'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/949c74eb-4ee8-484f-89bf-514d33500b00/public',
            para: "India's No.1 उत्पाद"
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4604e0a8-dd1e-498e-5df5-60aa585b5b00/public',
            para: 'COD पेमेंट उपलब्ध '
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/454d79f0-bc62-46f2-e4f8-d356c53c9400/public',
            para: 'Flipkart, Amazon पर लिस्टेड'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4d4eab41-bb81-4d32-59a9-4f02b6182100/public',
            para: 'सभी लैब टेस्टिंग में सफल'
        },

    ]

    return (
        <section>

            <div className="relative">
                <div className="relative z-10 pt-5 sm:pt-10 px-3 sm:px-5">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5835ff09-aedd-4e61-3b07-6df983024c00/public" alt="pic" loading='lazy' width='100%' height='100%' className='w-11/12 sm:w-8/12 m-auto' />

                    <div className="grid grid-cols-2 items-center text-center my-5 sm:my-10">
                        {items.map((e, key) => {
                            return <div className="" key={key}>
                                <img src={e.image} alt="pic" loading='lazy' width='100%' height='100%' className='w-24 sm:w-32 m-auto' />
                                <p className="my-4">{e.para}</p>

                            </div>
                        })}
                    </div>
                </div>
                <Image fill src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c2f037d1-3691-4180-9fb8-8433baa1fc00/public" alt="pic" loading='lazy' />
            </div>
            <div className="mb-5">

                <FlipAmazon />
            </div>


            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/32f58d29-91b3-47f8-c63d-65b6ba861e00/public" alt="pic" loading='lazy' width='100%' height='100%' className='' />
        </section >
    )
}

export default Sec4