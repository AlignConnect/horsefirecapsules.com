import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FlipAmazon = () => {

    return (
        <section className={`${noto.className} w-full max-w-2xl  mx-auto`}>

            <div className="p-0 bg-white w-100">

                <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">HORSEFIRE CAPSULE खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 py-1">
                    <div className="">
                        <a href="https://bit.ly/4bb8PiG" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/396483eb-217c-4d1a-f24c-0807db836400/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' width='100%' height='100%' />
                        </a>
                    </div>
                    <div className="">
                        <a href="https://amzn.to/4dQAY0t" className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d13cfc90-ffe6-4afa-deea-63ed486a3900/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                        </a>
                    </div>
                </div>


            </div>

        </section>
    )
}
export default FlipAmazon;