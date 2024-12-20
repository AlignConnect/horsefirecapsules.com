import dynamic from 'next/dynamic'
import Image from 'next/image';
import React from 'react'

const YoutubeFrame = dynamic(() => import('./YoutubeVideo'), {
    loading: () => <p>loader</p>
});
const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});


const Sex_issue = () => {

    return (
        <section>
            <div className="text-[1.1rem] sm:text-xl p-3 sm:px-16 sm:py-6 text-center" style={{
                backgroundColor: "#0c0c0e",
                backgroundImage: "linear-gradient(#43480e, #0c0c0e, #43480e)"
            }}>
                <p className="">ये कोई चमत्कार नही बल्कि प्रकृति की शक्ति है! <span className="text-yellow-500 uppercase font-bold">Horse Fire Capsule</span> की प्रत्येक गोली शुद्धता और शक्तिवर्धक क्षमता से भरपूर है जिसकी वजह से इसकी मांग प्रतिदिन बढ़ती जा रही है।</p>
            </div>

            <div className="pb-5" style={{
                backgroundColor: "#0c0c0e",
                backgroundImage: "linear-gradient(#0c0e0d, #0b2a3c)"
            }}>

                <div className='col-span-8 text-start py-4 mx-auto'>
                    <div className='md:flex  items-center gap-3 py-4 justify-center text-center'>
                        <h1 className='text-4xl fontPoppins'><span className='font-bold '>HORSE FIRE</span> CAPSULE</h1>
                        <h2 className='text-3xl text-center bg-[#005e9e] text-white inline-block pt-3 px-3'>पर एक्सपर्ट की राय</h2>
                    </div>

                    <h4 className='text-white my-3 text-3xl font-bold fontPoppins text-center px-3 '>Dr. 𝐌𝐚𝐲𝐮𝐫 𝐒𝐚𝐧𝐤𝐡𝐞 </h4>

                    <div className='text-center'>
                        <div className='fontPoppins inline-block px-3 border-r-2 border-white'>

                            <span className='text-[#005e9e]'> <span className='text-lg md:text-4xl font-bold'>23</span> years</span> <br />

                            <p className='text-[12px] sm:text-lg'>Experience</p>

                        </div>
                        <div className='inline-block fontPoppins px-2 text-[13px] sm:text-lg'>
                            Sexologist <br />
                            (B.A.M.S)
                        </div>
                    </div>
                </div>

                <div className="mx-2 sm:mx-10">

                    <YoutubeFrame />
                </div>

                <FlipAmazon/>

            </div>



        </section>
    )
}

export default Sex_issue