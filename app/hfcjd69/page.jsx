"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Sex_issue = dynamic(() => import('./components/Sex_issue'), {
    loading: () => <p>loader</p>
});

const FlipAmazon = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>loader</p>
});

const Sec1 = dynamic(() => import('./components/Sec1'), {
    loading: () => <p>loader</p>
});

const Graph = dynamic(() => import('./components/Graph'), {
    loading: () => <p>loader</p>
});

const Sec4 = dynamic(() => import('./components/Sec4'), {
    loading: () => <p>loader</p>
});

const Sec5 = dynamic(() => import('./components/Sec5'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loading</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loading</p>
});


const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/hfcjd69")

    }, [])


    return (
        <div className="bg-zinc-100 ">
            <section className={`w-full max-w-2xl mx-auto bg-black text-xl sm:text-2xl text-white  text-justify fontNoto`}>

                <Header />

                <Sec1 />

                <Sec4 />

                <Sex_issue />

                <Graph />

                <Sec5 />

                <Form />

                <CustomerReview />

                <Footer />

            </section>
            <FooterP />
        </div>
    )
}

export default page