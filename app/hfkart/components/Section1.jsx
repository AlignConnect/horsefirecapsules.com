import Image from 'next/image';
import '../hkart.css';
import { IoMdMenu } from 'react-icons/io';

const Section1 = () => {
    return (
        <div className='w-full relative '>


            <div className="w-full md:w-[90%] relative z-10 grid md:grid-cols-2 mr-auto md:gap-4 items-center pb-6 md:pb-0">

                <div className="flex items-center justify-between px-3 md:hidden my-4">
                    <a href="#form" ><IoMdMenu className='text-2xl text-white' /></a>
                    <a href="#form" ><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/89052c07-ba63-47e8-9f54-513ba73e4b00/public" alt="piC" className='w-8' loading="lazy" /></a>
                </div>

                <div className="md:pt-10">
                    <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/85f055ed-b147-4a69-ca6f-447c1880bb00/public' className='w-full h-full  hidden md:block' alt='pic' loading='lazy' />
                    <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4cfe24f4-4f62-4468-3057-b698eda12c00/public' className='w-full h-full block md:hidden' alt='pic' loading='lazy' />
                </div>
                <div className="text-white  px-3 md:px-0 text-center md:text-left">
                    <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23667b99-8e86-484d-3384-2f7112e02700/public' className='w-full h-full  hidden md:block' alt='pic' loading='lazy' />

                    <div className="md:mt-6 fontPoppins ">
                        <p className=" text-xl xl:text-4xl font-bold text-bold ">मात्र 30 दिनों के अंदर बढ़ाएं सेक्स<br /> अवधि और लिंग की मजबूती</p>

                        <p className="text-xl xl:text-4xl border border-white  inline-block w-1/2 text-center rounded-lg py-2 mt-4 xl:mt-6"><a href="#form" className="text-inherit">KNOW MORE</a></p>
                    </div>

                    <p className="mt-4 xl:mt-6 font-semibold text-xl xl:text-2xl hidden md:block">सर्वे के आंकड़ों के मुताबिक 80- 84% भारतीय महिलाएं<br /> सेक्स के दौरान चरम सुख नहीं पाती !</p>
                </div>
            </div>

            <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/be0e7b84-f663-4cc4-7a59-27e980d12000/public' fill alt='pic' className='absolute top-0 z-0' />
        </div>
    )
}
export default Section1;