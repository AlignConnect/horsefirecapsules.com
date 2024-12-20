import { useGlobalContext } from '@/app/statemanage/context';
import '@/app/commonUse/bottompopup/bottomPopup.css';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
    weight: ['200', '300', '400', '500', '600', '700']
});

const bottomPopupCall = () => {
    const { callDetail } = useGlobalContext();

    return (
        <div className='w-full'>
            <div className={`text-black ${oswald.className} bg-[#1b1b1b]`} >
                <a href={`tel:+91${callDetail.phoneNumber}`} className="relative inline-block" id='hfkCall' >
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/af31a0c6-825f-464b-e6ef-471888ae7800/public" alt="pic" loading='lazy' className='min-w-[360px] max-w-full' width='100%' height='100%' />
                    <div className="absolute top-0 left-36 text-[2.5rem] md:text-[2.6rem] font-bold">{callDetail.phoneNumber}</div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ad340f3d-80ba-48ad-898b-b3c8c5849e00/public" alt="pic" className='callicon faa-ring animated' loading='lazy' />
                </a>
            </div>
        </div>
    )
}
export default bottomPopupCall;