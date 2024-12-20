
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0e050053-4a1f-44d4-a964-e072a4695e00/public" alt="asd" loading='eager' fetchPriority="high" className="w-full" />

                <div className="grid grid-cols-12 gap-5 p-5 items-center text-center">
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/921072eb-2a80-47ff-8407-cd2a305c7500/public" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">टेस्टोस्टेरोन का स्तर बढाए</p>
                    </div>


                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0edcd9ab-ecb9-4ee7-3462-c07868ab6500/public" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">लिंग बड़ा व सख्त बनाए</p>
                    </div>


                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b6900db3-68e9-46c3-f7bd-236f3a31d700/public" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">जोश जगाए, अवधि बढाए </p>
                    </div>

                </div>

            </section>
        </section>
    )
}

export default Header