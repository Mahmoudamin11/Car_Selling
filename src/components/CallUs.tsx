
const CallUs = () => {
  return (
    <div className=" w-full relative bg-callUs bg-cover h-full xl:py-36 md:py-28 sm:py-20 min-[450px]:py-12 py-8 bg-center flex flex-col sm:gap-y-8 gap-y-8 justify-center items-center mb-24  max-[640px]:mb-20">
        <h1 className="text-white font-bold   sm:text-4xl md:text-5xl max-[750px]:text-4xl max-[530px]:text-3xl max-[450px]:text-2xl z-30">With +100 Service Locations</h1>
        <p className="w-3/4 min-[530]:w-[65%] max-[530px]:text-sm min-[750px]:w-3/4 xl:w-1/2 text-white opacity-75 z-30 relative hover:opacity-100 transition-all duration-150 mx-auto text-center">We serve from toom nay different places in too many different countries all over the whole world as we are an international company. We also provide really high quality that you can't miss so call us now </p>
        <button className="py-2 z-30 px-3 text-white bg-main-blue transition-all duration-150 transform hover:-translate-y-2 rounded-md hover:opacity-75">Call Us Now</button>
        <div className=" absolute w-full h-full bg-black opacity-70 top-0 left-0 z-10"></div>
    </div>
  )
}

export default CallUs;