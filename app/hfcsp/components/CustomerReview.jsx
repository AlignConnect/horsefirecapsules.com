import React, { useState } from "react";
import Reviewdata from "../../reviews.json";
import dayjs from "dayjs";
import Image from "next/image";
import dynamic from "next/dynamic";

const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazonOrd'), {
    loading: () => <p>loader</p>
})



const Reviews = () => {
    const [current, setCurent] = useState(5);

    const reviewHandler = () => {
        setCurent(current + 3);
    };

    const formatDate = (index) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - index);
        return currentDate.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const newData = Reviewdata.map((item, index) => ({
        ...item,
        starimg: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/88c6eedd-2b08-41d8-008c-a53d9d57a100/public",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c2e4d7c7-809a-4473-94e7-605bae769700/public",
        date: formatDate(index), // Add the date property based on the index
    }));



    return (
        <div className="">

            <div className=" bg-[#3851a3]">
                <div className="md:w-10/12 mx-auto md:mt-7 px-4 mt-6">
                    <h1 className="text-center pb-3 pt-6 text-white font-bold font-noto text-3xl md:text-4xl leading-wide">Horse Fire Capsule पर कस्टमर की राय</h1>
                </div>
            </div>
            <div className="px-3 max-w-5xl mx-auto">
                <ul className={`space-y-3 fontPoppins pt-4`}>
                    {newData.slice(0, current).map((el, i) => {

                        return (<div className="" key={i}>
                            <li

                                className="border p-3 rounded-lg shadow-sm flex flex-col "
                            >
                                <div className="flex items-center">
                                    <div className="w-24 rounded-full overflow-hidden">
                                        <Image
                                            src={el.profile_photo}
                                            sizes="100vw"
                                            alt="pic"
                                            className="w-full h-full "
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="flex flex-col ml-2">
                                        <Image src={el.starimg} width={80} height={50} sizes="100vw" alt="pic" />
                                        <h1 className="text-zinc-900 text-xl md:text-3xl mt-2  font-semibold py-2">
                                            {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                                        </h1>
                                    </div>
                                </div>
                                <div className="ml-2 mt-2">
                                    <p className="md:text-xl text-justify"> {el.comment} </p>
                                    <p className="text-md text-gray-500 mt-2">{dayjs().subtract(i + 6, 'days').format("DD MMM YYYY")}</p>
                                </div>
                                <div className="w-full md:w-[20rem] m-auto text-center">
                                    {
                                        i === 1 &&
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/06ff6244-7678-4133-85d9-b32280c69200/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                                    }
                                    {

                                        i === 3 &&
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/daf47828-e8d3-4ad5-fa4a-9acb30d3cd00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                                    }

                                    {
                                        i === 5 &&
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/88eb9837-1ae0-423c-500c-712f26aa1a00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                                    }

                                    {
                                        i === 11 &&
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8ee11b42-966c-42cc-3a01-1c34fe950500/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                                    }


                                </div>
                            </li>
                            {i % 3 === 0 && <div className="pt-3">
                                <FlipAmazon />
                            </div>}
                        </div>
                        );
                    })}
                </ul>
                <FlipAmazon />
                <div className="flex justify-center items-center py-4">
                    <button
                        onClick={reviewHandler}
                        className={`fontPoppins text-white font-bold px-3 my-3 py-1 bg-[red] rounded-md`}
                    >
                        LOAD MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
