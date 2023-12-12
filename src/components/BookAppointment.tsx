
const BookAppointment = () => {
  return (
    <div className='relative w-full mb-24 bg-appointment bg-center  bg-cover  max-sm:mb-20 p-10 440:p-14 585:p-20 830:p-32 xl:p-36'>
        <div className=' absolute bg-black w-full h-full top-0 left-0 opacity-[70%] z-10'></div>
        <h1 className='text-white z-20 relative font-bold mb-5 xl:mb-8 text-2xl 440:text-3xl 760:text-3xl 955:text-4xl xl:text-5xl'>No Advance, No Waiting. Instant Delivery!</h1>
        <p className=' text-white opacity-80 transition-all duration-150 hover:opacity-100 z-20 relative w-full max-500:w-[80%] 500:w-[80%] 760:w-[70%] xl:w-[60%] lg:text-lg mb-5 xl:mb-8'>You don't have to wait while you are dealing with us beacuse we are considered the best company  and the fastest delivery in the whole world! </p>
        <button className='text-white py-2 relative px-3 z-20 cursor-pointer bg-main-blue transition-all duration-150 transform hover:shadow-xl hover:-translate-y-1 rounded-md'>Book Appointment</button>
    </div>
  )
}

export default BookAppointment;