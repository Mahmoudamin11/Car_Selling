import car from '../assets/bmw-car-png-2088.png';
const FirstPage = () => {
  return (
    <div className="w-[90%] lg:w-[85%] relative mx-auto grid grid-cols-[70%,30%] max-sm:grid-cols-1 max-sm:place-content-center place-items-center sm:my-32 max-sm:my-20">
        <div id="left-side" className='z-10'>
            <article>
                <h2 className="max-sm:text-[44px] max-sm:leading-tight max-sm:w-[105%] max-sm:ml-[-5px]  text-4xl 783:text-5xl max-sm:text-center lg:text-6xl xl:text-7xl font-bold mb-8 leading-snug xl:leading-tight">
                    The Easiest Way To Find The Most Suitable Car For Yourself
                </h2>
                <p className="text-gray w-full max-sm:text-center mb-8 text-lg  md:w-[70%] sm:w-[70%] hover:text-black transition leading-8">
                    If You Are Searching For A PowerFul Car That Covers All Your Needs And Comforts You, You Have Came To The Right Place. 
                </p>
            </article>
            <section id="buttons" className='max-sm:text-center max-sm:flex max-sm:flex-col-reverse '>
                <button className="mr-8 hover:transform hover:translate-y-[-3px] max-sm:mr-0  border-[1px]  border-solid border-main-blue text-main-blue hover:border-main-blue hover:bg-zinc-50  px-5 py-3 rounded-md transition">Book Your Ride</button>
                <button className="border-[1px] hover:transform hover:translate-y-[-3px] max-sm:mb-8 border-solid  border-white bg-main-blue text-white px-5 py-3 rounded-md hover:opacity-[90%] transition">Sell Your Car</button>
            </section>
        </div>
        <div id="img" className=' absolute max-sm:animate-opac w-[55%] max-sm:w-[70%] max-[500px]:w-[100%] sm:top-14 sm:w-[60%] sm:-right-14 md:top-14 md:-right-16 sm:z-10 -z-10 max-sm:opacity-[10%]  xl:-right-32 xl:top-8 '>
            <img src={car} className='' alt="" />
        </div>
    </div>
  )
}

export default FirstPage;


// w-[50%] -right-10
// w-[55%] -right-20 top-1  => 5xl