import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import '../Checkout.css'

const Material = () => {


    const [sell, setsell] = useState(70)

    useEffect(() => {

        setInterval(() => {
            const total = (new Date().getMinutes() * 60) + (new Date().getSeconds());
            setsell(() => {
                const log = Math.ceil((total * 87) / 3600)
                return log + 70
            })

        }, 1000);

        return () => {

            clearInterval();

        }

    }, [])



    return (

        <section className='px-2'>
            <div className='bg-[#eae09b] p-2 rounded-sm'>

                <div className='font-bold text-xl'>Offers</div>
                <ul className='list-disc save_extra'>
                    <li className='text-sm'>Save Extra 10% with Online Payment</li>
                    <li className='text-sm'>COD Available</li>
                </ul>

            </div>

            <section>
                <div className='text-center my-3 flex justify-center items-center'>
                    <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f4f5e12f-c83e-4528-fada-b87270d74100/public" alt="no" width={21} height={21} />
                    <div style={{ fontWeight: 700 }}>
                        &nbsp;{sell} People Ordered Online in Last 1 Hour
                    </div>
                </div>

                <div className='m-3'>
                    <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb6100ef-7663-42d5-d7a7-1fea080f5400/public" height={300} width={300} alt='no' className='mx-auto' />
                </div>



                <div className='mx-auto'>
                    <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e473c425-0d46-4b46-8483-f7bda68b7f00/public"} height={100} width={1000} alt='no' />
                </div>
            </section>


        </section>

    )



}

export default Material