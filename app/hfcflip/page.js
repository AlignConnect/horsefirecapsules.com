"use client";
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/Home.css'

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});


const Powerfull_men = dynamic(() => import('./components/Powerfull_men'), {
    loading: () => <p>loader</p>
});

const Requirement = dynamic(() => import('./components/Requirement'), {
    loading: () => <p>loader</p>
});

const Men_tag = dynamic(() => import('./components/Men_tag'), {
    loading: () => <p>loader</p>
});


const Why_hfc = dynamic(() => import('./components/Why_hfc'), {
    loading: () => <p>loader</p>
});


const Trusted_brand = dynamic(() => import('./components/Trusted_brand'), {
    loading: () => <p>loader</p>
});

const Experiance_hfc = dynamic(() => import('./components/Experiance_hfc'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const ReviewCustomer = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const Ama = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>loader</p>
})

const YoutubeVideo = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeVideo'))

const Bigbillion = dynamic(() => import('@/app/commonUse/bigbillion'));



function page() {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfcflip");
    }, []);


    return (
        <div>

            <Header />

            <Bigbillion />

            <Powerfull_men />

            <Ama />

            <Requirement />

            <Ama />

            <Men_tag />

            <Ama />

            <Why_hfc />

            <Ama />


            <Trusted_brand />

            <div className='max-w-xl mx-auto'>
                <YoutubeVideo />
            </div>

            <Ama />


            <Experiance_hfc />

            <Ama />


            <Form />

            <ReviewCustomer />

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page