import dayjs from 'dayjs';
import React from 'react'






const Header = () => {
    return (
        <section>

            <div className='pt-2 ' style={{ background: '#ef4444' }}>
                <div className='flex justify-center items-center w-full text-[1rem] '>
                    <div className='ms-2 font-bold' >ATTENTION&nbsp;:&nbsp; </div>

                    <marquee direction="Left" className="text-black">
                        Due to the huge popularity of our product, our stocks are running out. At
                        &nbsp;
                        {
                            dayjs().add(1, 'day').format("YYYY-MM-DD")
                        }</marquee>
                </div>
            </div>
         


        </section>
    )
}

export default Header