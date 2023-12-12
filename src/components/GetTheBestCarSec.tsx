import img from '../assets/get the best car img.png';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
const GetTheBestCarSec = () => { 
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => { 
      setWidth(window.innerWidth);
    });
    return (
    <div className="w-full bg-secondary-white mb-24  max-[640px]:mb-20 py-5 max-[750px]:px-2">
        <div className='grid grid-cols-2 gap-2  place-content-center'>
            <img src={img} alt="best car sec img" className=' max-[890px]:my-auto max-[750px]:my-0' />
            <article className='flex flex-col h-full justify-center  max-[750px]:text-left'>
                <p className='mb-3 max-[400px]:text-xs min-[1193px]:mb-5 font-bold max-[1193px]:text-sm'>World's Best Online Dealer</p>
                <h1 className='font-bold max-[750px]:ml-1 max-[400px]:mb-0 text-lg min-[400px]:text-2xl min-[435px]:text-3xl min-[900px]:text-4xl mb-3 min-[1193px]:mb-5 min-[1193px]:text-5xl'>Get The Best Car Especially Hand Picked For You</h1>
                {width >= 750 && <p className='mb-3 min-[1193px]:mb-5 w-[85%] opacity-[90%] transition hover:opacity-100 max-[975px]:w-[95%] max-[975px]:text-sm'>Our Company Provides The Best Powerful Cars From Trustful Companies Like Mercedes-Benz, Bmw, Audi & Toyota.
                    We Also Provide A 5 Years Guarantee That Ensures Any Problem With The Car Is On Us And Car Will Be Replaced Or Take Your Money Back If you Want.
                </p>}
                
                {width >= 750 && <div id="features" className='flex flex-col'>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black font-semiBold'>Best High Class Cars</p>
                    </div>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black font-semiBold'>Fast And Comfortable Trips</p>
                    </div>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black font-semiBold'>Oil Saving Car</p>
                    </div>
                    <div className='flex '>
                        <span id='Icon' className='text-main-blue mr-2 mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black font-semiBold'>Electricity Charging Cars</p>
                    </div>
                </div>}
            </article>

            {width < 750 && <div className='w-full  flex justify-start col-span-2'>
                <p className=' w-[50%] text-center text-sm max-[500px]:text-xs opacity-[85%] hover:opacity-1 transition hover:opacity-100'>Our Company Provides The Best Powerful Cars From Trustful Companies Like Mercedes-Benz, Bmw, Audi & Toyota.
                    We Also Provide A 5 Years Guarantee That Ensures Any Problem With The Car Is On Us And Car Will Be Replaced Or Take Your Money Back If you Want.
                </p>
                
                {<div id="features" className='flex flex-col ml-2 max-[400px]:mt-2'>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 min-[400px]:mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black max-[400px]:text-sm font-semiBold'>Best High Class Cars</p>
                    </div>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 min-[400px]:mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black max-[400px]:text-sm font-semiBold'>Fast And Comfortable Trips</p>
                    </div>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 min-[400px]:mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black max-[400px]:text-sm font-semiBold'>Oil Saving Car</p>
                    </div>
                    <div className='flex mb-1 min-[1193px]:mb-2'>
                        <span id='Icon' className='text-main-blue mr-2 min-[400px]:mt-[1px]'><FontAwesomeIcon icon={faCircleCheck} /></span>
                        <p className=' text-black max-[400px]:text-sm font-semiBold'>Electricity Charging Cars</p>
                    </div>
                </div>}
            </div>}
        </div>
    </div>
  )
}

export default GetTheBestCarSec;