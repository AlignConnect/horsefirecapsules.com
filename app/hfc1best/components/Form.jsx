"use client";
import { Poppins } from 'next/font/google';
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';


// const Loading = dynamic(() => import('@/app/commonUse/loader/Loading'))

const AmaFlipDialog = dynamic(() => import('@/app/commonUse/AmaFlipDialog/AmaFlipDialog'), {
    loading: () => <p>load</p>
});

const FormLoader = dynamic(() => import('@/app/commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});



const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Form = () => {
    const searchParams = useSearchParams();

    const searchParamss_tfhfc = searchParams.get("tfhfc");



    const { CustomerData, setCustomerData, checkoutDetail, setLoading, openPopup, loading } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error));
            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "Horsefirecapsules.com/HFC1BEST");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFC1BEST ?? "horsefirecapsules.com/hfc1best");

            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");
            const searchParamss_hfcadu = searchParams.get("hfcadu");
            const searchParamss_hfcmybid = searchParams.get("hfcmybid");


            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);
            searchParamss_hfcadu && formdata.append("hfcadu", searchParamss_hfcadu);
            searchParamss_hfcmybid && formdata.append("hfcmybid", searchParamss_hfcmybid);

            // tfhfc
            const searchParamss_tfhfc = searchParams.get("tfhfc");
            searchParamss_tfhfc && formdata.append('tfhfc', searchParamss_tfhfc);

            try {
                const form = await fetch(`https://horsefirecapsules.com/submitdata.php`, { body: formdata, method: "POST" });
                const data = await form.json();

                const blogWebId = data.blogWebId ?? null
                if (data.ok) {
                    setLoading(false);

                    openPopup();


                    // let destination = decodeURI(data.destination)
                    // let name = destination.split("?name=")[1].split("&")[0]
                    // let phone = destination.split("&phone=")[1].split("&")[0]
                    // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false);
                openPopup();

                // return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false);
                openPopup();
                // return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }



    return (

        <section className='w-full bg-black max-w-3xl mx-auto '>

            {
                loading && <FormLoader />
            }
            <div className="pt-3 pb-5 px-2 bg-black" id="form">

                <h1 className="text-2xl fontNoto text-white md:text-3xl text-center font-bold px-2 py-3 md:pt-10"><div className=" max-w-xl mx-auto">कॉल पर विशेषज्ञ डॉक्टरों से <br />मुफ्त सलाह के लिए फॉर्म भरें !</div></h1>

                <div className={`pb-4 fontPoppins text-black ${poppin.className}`} id='formcallhide'>
                    <div className="max-w-2xl md:mx-auto rounded-lg  bg-gray-100 p-3 border border-black ">
                        <div className="py-4">
                            <div className="text-center">
                                <h1 className=" text-3xl font-bold border-b mb-5 inline-block border-black"> Contact Us </h1>
                            </div>
                            <form className="space-y-3">

                                {CustomerDataValue?.map((data, key) => {
                                    return <div className="flex flex-col" key={key}>
                                        <label className="fontNoto font-semibold text-md pt-1">{data.label}</label>
                                        <div className="relative">
                                            <input {...data.inputValue} className={`p-1 py-3 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                            {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                        </div>
                                    </div>
                                })}

                                <div className="flex justify-center items-center pt-4 ">
                                    <button onClick={handleFormSubmit} type="button" className="bg-zinc-900 text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-md hover:bg-zinc-950 transition-colors text-white">
                                        SUBMIT
                                    </button>
                                </div>

                                <img
                                    className='mx-auto w-40'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0a4c12bc-82e2-4518-7a12-7cc53662a400/public"
                                    alt='pro3'
                                />
                            </form>
                        </div>
                    </div>
                </div>

                <AmaFlipDialog type="exo" />

            </div>
        </section>

    );
};

export default Form;
