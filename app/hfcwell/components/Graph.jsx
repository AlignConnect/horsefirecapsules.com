import dynamic from 'next/dynamic'
import Image from 'next/image';
import React from 'react'

const SubTitle = dynamic(() => import('./SubTitle'), {
    loading: () => <p>loader</p>
});


const list = [
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/95e9589c-059c-487e-9a73-97bc6c23d300/public',
        title: '+1-2 घंटे टाइमिंग बढ़ाए',
        para: 'टाइमिंग के निम्नतम स्तर को उच्चतम स्तर पर ले जाये'
    },
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6a1e30b7-b175-4bcc-da1d-af584e3c9100/public',
        title: 'लिंग साइज बढ़ाए',
        para: 'छटे लिंग को 8-9 इंच लम्बा-मोटा और फौलादी बनाए'
    },
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4137bab6-dc2d-42b8-ee29-ec43eadbab00/public',
        title: 'लिंग को कड़क बनाये',
        para: 'स्खलन पश्चात ढीले लिंग को रॉड सा कड़क बनाए'
    },
    {
        img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f74c44be-4523-4c89-1811-bdcf4270a600/public',
        title: 'एनर्जी और पावर बढ़ाए',
        para: 'कमजोरी मिटाकर शरीर को एक्टिव व जोशीला बनाए'
    }
]


const Graph = () => {
    return (
        <section>
            <SubTitle title='हॉर्सफायर: भारत का No.1 सेक्सवर्धक' />


            <div className="relative">
                <div className="relative z-10 py-5 sm:py-10 px-3 sm:px-5">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2248a756-895e-491c-75d8-3f62b684f500/public" alt="pic" className='w-11/12 mx-auto mb-5 sm:mb-10' width='100%' height='100%' loading='lazy' />

                    <div className="grid gap-5 sm:gap-10">
                        {
                            list.map((e, key) => {
                                return <div className="border-white border-2 border-dashed p-3 sm:p-5" key={key}>
                                    <div className="grid grid-cols-12 gap-5 items-center">
                                        <div className="col-span-4">
                                            <img src={e.img} alt="pic"  width='100%' height='100%' loading='lazy' />

                                        </div>
                                        <div className="col-span-8">
                                            <h1 className="text-[1.4rem] sm:text-[2.7rem] font-bold text-yellow-500">{e.title}</h1>
                                            <p className="sm:mt-3 text-xl sm:text-3xl">{e.para}</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
                <Image fill src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/55fe544f-f8bf-4f49-82e3-39988d542b00/public" alt="pic" loading='lazy' />

            </div>

        </section >
    )
}

export default Graph