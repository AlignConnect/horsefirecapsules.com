"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header Loading</p>
});

const SexProblemHeader = dynamic(() => import('./components/SexProblemHeader'), {
    loading: () => <p>loader</p>
});

const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});

const Hearbs = dynamic(() => import('./components/Hearbs'), {
    loading: () => <p>loader</p>
});

const HowItsWork = dynamic(() => import('./components/HowItsWork'), {
    loading: () => <p>loader</p>
});


const WhyChoose = dynamic(() => import('./components/WhyChoose'), {
    loading: () => <p>loader</p>
});



const Sevan_kese_kare = dynamic(() => import('./components/Sevan_kese_kare'), {
    loading: () => <p>loader</p>
});

const Customer_Experiance = dynamic(() => import('./components/Customer_Experiance'), {
    loading: () => <p>loader</p>
});


const Tab_Exp = dynamic(() => import('./components/Tab_Exp'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const Review = dynamic(() => import('@/app/hf01a/components/CustomerReview'), {
    loading: () => <p>loader</p>
});


const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Bigbillion = dynamic(() => import('@/app/commonUse/bigbillion'));




function page() {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hf69h")

    }, [])

    return (
        <div className=''>

            <Header />

            <SexProblemHeader />

            <Bigbillion />

            <Section1 />

            <Hearbs />
            <FlipAmazon />

            <HowItsWork />

            <FlipAmazon />


            <WhyChoose />
            <FlipAmazon />

            <Sevan_kese_kare />
            <FlipAmazon />

            <Customer_Experiance />
            <FlipAmazon />

            <Tab_Exp />

            <Form />

            <div className='w-full md:w-[768px] mx-auto'>
                <Review />
            </div>

            <Footer />

            <FooterP />



        </div >
    )
}

export default page