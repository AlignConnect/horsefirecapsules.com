import dynamic from 'next/dynamic';
import React from 'react'

const CommonImg = dynamic(() => import("./CommonImg"), {
    loading: () => <p>Loading...</p>,
});

const HowitWork = () => {
    return (
        <div>
            <div className='max-w-xl mx-auto mt-4'>

                <h1 className='text-center bg-red-600 font-extrabold  text-3xl md:text-[2.5rem] py-3 pt-6 text-white'>
                    How It Works
                </h1>

                <div className='space-y-7 pt-6'>

                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb2987be-ceb4-480a-dc29-84f478f3a700/public" />
                        </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>प्रत्येक कैप्सूल शरीर में टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड का उत्पादन करता है जिससे रक्त वाहिकाएं चौड़ी होती है। </h1>

                    </div>


                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b5b8403d-a684-4217-0233-dc5a91bb9500/public" />
                        </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>लिंग की तंग चमड़ी खुलती है और नसों में रक्त तेजी से बहाव होता है, फलस्वरूप लिंग कड़कपन में सुधार होता है।  </h1>

                    </div>


                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4a9f55e0-0db3-4350-62b1-d51c8e130700/public" />
                        </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>इस्तेमाल के पहले दिन से इसके घटक समस्या की रिकवरी करने लगते है, और शरीर को कमजोरी मुक्त कर देते है।   </h1>

                    </div>



                    <div className='flex justify-center items-center'>

                        <div className='!w-28 mx-auto'>
                            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c1e7dca2-efc8-4ee5-ad17-fd230f5a8000/public" />  </div>
                        <h1 className='md:text-xl font-medium md:ml-3 ml-2'>जोश, उत्साह, एनर्जी, स्टैमिना बढ़ाने का कार्य करता है जिससे पुरुष बिना थके लम्बा सेक्स प्रदर्शन करने में सक्षम बनता है।  </h1>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default HowitWork