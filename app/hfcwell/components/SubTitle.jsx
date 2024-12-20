import Image from 'next/image'
import React from 'react'

const SubTitle = ({ title }) => {
    return (
        <div className="relative">
            <div className='relative z-10 pt-5 sm:pt-7 pb-2'>
                <h1 className="font-bold mx-3 text-center sm:mx-10 text-2xl sm:text-4xl leading-tight sm:leading-snug">
                    {title}
                </h1>
            </div>
            <Image fill src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ec0b1fa4-09ea-4b0b-a008-4df9c3307e00/public" alt="pic"  loading='lazy'/>
        </div>
    )
}

export default SubTitle