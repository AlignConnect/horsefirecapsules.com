import Image from "next/image"

const Footer = () => {
    return (

        <section>
            <div className="pt-3">
                <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/17554022-8633-4549-8c43-fc8450a47300/public"} width={200} height={200} alt="notfound" className="mx-auto" />
            </div>

            <div className="py-3">
                <p className="font-bold text-center py-1 text-sm">AR Ayurveda Private Limited</p>
                <p className="text-xs text-center">FF 14, Ujala Avenue, Sarkhej Road,Vishala,<br /> Ahmedabad Gujarat ( INDIA ) – 380055</p>
            </div>

        </section>

    )
}

export default Footer