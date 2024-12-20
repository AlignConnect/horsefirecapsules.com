import dynamic from 'next/dynamic'
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const YoutubeFrame = dynamic(() => import('../../commonUse/Youtubefile/YoutubeFrame'));


const Sec5 = () => {
    return (
        <section className='relative '>

            <div className="relative z-10 p-5 sm:px-10   ">
                <Carousel showStatus={false} infiniteLoop={true} autoPlay={false} showThumbs={false} showArrows={true} >

                    <div>
                        <YoutubeFrame vid={"ujD28KGF25c?si=MbBhOIeXpW8SSz9M"} />
                    </div>


                    <div>
                        <YoutubeFrame vid={"oUu_e5ufagQ?si=vi3N0ciF3YocrkAA"} />
                    </div>

                </Carousel>

            </div>



        </section >
    )
}

export default Sec5