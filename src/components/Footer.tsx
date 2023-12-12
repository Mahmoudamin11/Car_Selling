import { useState } from "react";
const Footer = () => {
    const phoneNumber = '01228050484';
    const email = 'MyEmail';
    const workingHours = '09:00-06:00';
    const satWorkingHours = '09:00-04:00';
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => { 
      setWidth(window.innerWidth);
    });
  return (
    <div className="bg-footer relative max-sm:py-6 py-28 px-5 bg-center bg-cover gap-5 w-full grid grid-cols-3  max-sm:grid-cols-1 place-items-start  place-content-center">
        <div className="z-20 ">
            {/* sm:text-2xl text-3xl lg:text-4xl */}
            <h1 className="mb-4 max-sm:mb-1 max-sm:mt-0 max-sm:text-2xl text-4xl  -mt-[5px] text-white font-bold">RIDE IT</h1>
            <p className="text-gray max-sm:text-xs relative max-lg:text-sm">Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nulla aliquet porttitor lacus luctus. Interdum varius sit amet Vel quam elementum pulvinar etiam non quam</p>
        </div>

        {width > 640 &&<div className="text-gray  m-auto max-sm:m-0  max-lg:text-sm z-20 ">
            <h4 className="mb-4 max-sm:mb-2    text-white font-bold">Contact Info</h4>
            <div className=" max-sm:text-xs">
                <p className="relative mb-1 z-20 ">Dev Number: <span className="text-white">{phoneNumber}</span></p>
                <p className="relative mb-1 z-20">My Links: <a className=" text-white transition-all duration-150 hover:text-gray mr-2" target="_blank" href="https://github.com/Mahmoudamin11">Githup</a> <a className=" text-white transition-all duration-150 hover:text-gray" target="_blank" href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></p>
                <p className="relative  z-20">Email: <a className=" text-white transition-all duration-150 hover:text-gray" target="_blank" href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&pli=1">{email}</a></p>
            </div>
        </div>}
        {width > 640 &&<div className="text-gray m-auto max-sm:m-0 max-lg:text-sm z-20  ">
            <h4 className="mb-4 max-sm:mb-2    text-white font-bold">Service Hour</h4>
            <div className=" max-sm:text-xs">
                <p className="relative mb-1 z-20">Monday-Friday: <span className="text-white">{workingHours}</span></p>
                <p className="relative mb-1 z-20">Saturday: <span className="text-white">{satWorkingHours}</span></p>
                <p className="relative  z-20">Sunday: <span className="text-white">Closed</span></p>
            </div>
        </div>}

        {width <= 640 && <div className="max-sm:flex max-sm:justify-evenly max-500:justify-between max-sm:w-full">
            <div className="text-gray sm:m-auto   max-lg:text-sm z-20 ">
                <h4 className="mb-4 max-sm:mb-1    text-white font-bold">Contact Info</h4>
                <div className=" max-sm:text-xs">
                    <p className="relative mb-1 z-20">Dev Number: {phoneNumber}</p>
                    <p className="relative mb-1 z-20">My Links: <a className=" text-white transition-all duration-150 hover:text-gray mr-2" target="_blank" href="https://github.com/Mahmoudamin11">Githup</a> <a className=" text-white transition-all duration-150 hover:text-gray" target="_blank" href="https://www.linkedin.com/in/mahmoud-amin-15023025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></p>
                    <p className="relative  z-20">Email: <a className=" text-white transition-all duration-150 hover:text-gray" target="_blank" href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&pli=1">{email}</a></p>
                </div>
            </div>
            <div className="text-gray sm:m-auto  max-lg:text-sm z-20  ">
                <h4 className="mb-4 max-sm:mb-1    text-white font-bold">Service Hour</h4>
                <div className=" max-sm:text-xs">
                    <p className="relative mb-1 z-20">Monday-Friday: <span className="text-white">{workingHours}</span></p>
                    <p className="relative mb-1 z-20">Saturday: <span className="text-white">{satWorkingHours}</span></p>
                    <p className="relative  z-20">Sunday: <span className="text-white">Closed</span></p>
                </div>
            </div>
        </div>}
        
        <div className=" absolute w-full h-full top-0 left-0 bg-black opacity-70 z-10"></div>
    </div>
  )
}

export default Footer