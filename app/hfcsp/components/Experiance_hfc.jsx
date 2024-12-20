import dynamic from 'next/dynamic';

const Ama = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazonOrd'), {
    loading: () => <p>loader</p>
});
function Experiance_hfc() {

    const Experiance_hfc_part1 = (arr) => {
        return arr?.map((e, key) => {
            return <div className='py-4 md:py-8' key={key}>
                <div className="w-36 h-36 overflow-hidden rounded-full mx-auto">
                    <img src={e.exp_icon} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>
                <div className='fontSumana pt-3 md:text-xl text-md font-semibold text-center  text-white px-1'>{e.exp_title}</div>
            </div >
        })
    }

    const Experiance_hfc_part2 = (arr) => {
        return arr?.map((e, key) => {
            return <div className='py-4 md:py-8' key={key}>
                <div className=" w-36 h-36 overflow-hidden rounded-full mx-auto">
                    <img src={e.exp_icon_part2} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>

                <div className='fontSumana pt-3 md:text-xl text-md font-semibold text-center  text-white px-1'>{e.exp_title_part2}</div>
            </div >
        })
    }

    return (
        <section>
            <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d3bee355-151d-4360-d228-9f48e253a400/public')] bg-cover" >
                <div className=" w-full max-w-7xl mx-auto py-3">
                    <div className="py-2 md:px-5">
                        <div className="fontNoto text-4xl md:text-5xl font-extrabold text-center text-yellow-400 py-5">
                            आजमाए और अनुभव करें
                        </div>

                        <div className="md:flex items-center gap-3">
                            <div className="flex md:grid">
                                {
                                    Experiance_hfc_part1([
                                        {
                                            exp_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a2e462ee-7dc2-4617-757b-53ef42e11600/public",
                                            exp_title: "लिंग के आकार और कड़कपन में वृद्धि"
                                        },
                                        {
                                            exp_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e3149507-cc8b-41de-13fa-d52d04577c00/public",
                                            exp_title: "15 दिनों के अंदर सेक्स अवधि में वृद्धि"
                                        }

                                    ])
                                }
                            </div>

                            <img
                                className='md:w-1/3 w-80 mx-auto py-2'
                                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/866e188b-1483-4898-5417-9a04843b8900/public"
                                alt='exp_women'
                            />

                            <div className="md:flex items-center gap-3">
                                <div className="flex md:grid">

                                    {
                                        Experiance_hfc_part2([
                                            {
                                                exp_icon_part2: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1fbc8c0b-7b8b-4fc5-c4d0-fb452132d800/public",
                                                exp_title_part2: "जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि"
                                            },
                                            {
                                                exp_icon_part2: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/08e635bc-6b3e-41b7-3e02-3fb3cea67e00/public",
                                                exp_title_part2: "कामेच्छा में वृद्धि, अन्य गुप्त रोग से राहत"
                                            }
                                        ])
                                    }
                                </div>
                            </div>

                        </div>

                    </div>


                    <Ama />

                </div>
            </div>


        </section>
    )
}

export default Experiance_hfc