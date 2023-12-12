import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
const BookOrExchange = () => {
  return (
    <div className="w-full relative  bg-buyOrExcahnge bg-cover bg-bottom  mb-24  max-[640px]:mb-20 p-20 flex justify-center items-center">
        <div className="flex  gap-5 min-[975px]:gap-2 xl:gap-8  w-full xl:w-3/4 max-[906px]:justify-center max-[906px]:items-center max-[906px]:flex-col  min-[906px]:justify-around z-20 text-white">
            <div className="flex w-[150%] min-[440px]:w-[120%]  sm:w-[80%] md:w-[60%] min-[970px]:w-[45%] items-center relative py-5 px-3 bg-white">
              <div className="w-6 h-6 p-8 mr-3 flex items-center justify-center rounded-full bg-main-blue text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
              </div>
              <article className=" flex flex-col">
                <h4 className=" font-bold text-lg max-[530px]:text-sm  text-black ">Looking for a new car?</h4>
                <p className=" text-gray max-[530px]:text-xs w-[85%]">We have the greatest collection of new cars </p>
              </article>
              <div className=" absolute h-full group cursor-pointer hover:opacity-[80%] transition-all duration-150  w-1/12 flex items-center justify-center right-0 top-0 bg-main-blue text-white">
                <FontAwesomeIcon icon={faAngleRight} className=" group-hover:animate-shake" size="xl" />
              </div>
            </div>
            <div className="flex w-[150%] min-[440px]:w-[120%]  sm:w-[80%] md:w-[60%] min-[970px]:w-[45%] items-center relative py-5 px-3 bg-white">
              <div className="w-6 h-6 p-8 mr-3 flex items-center justify-center rounded-full bg-main-blue text-white">
              <FontAwesomeIcon icon={faArrowRightArrowLeft} size="xl" />
              </div>
              <article className=" flex flex-col">
                <h4 className=" font-bold text-lg max-[530px]:text-sm  text-black ">Want to exchange an old car?</h4>
                <p className=" text-gray max-[530px]:text-xs w-[85%]">You change your old car with a new one with little money</p>
              </article>
              <div className=" absolute h-full group cursor-pointer hover:opacity-[80%] transition-all duration-150  w-1/12 flex items-center justify-center right-0 top-0 bg-gray text-white">
                <FontAwesomeIcon icon={faAngleRight} className=" group-hover:animate-shake" size="xl" />
              </div>
            </div>
        </div>
            <div className=" absolute w-full h-full top-0 left-0 bg-black bg-opacity-[70%] z-10"></div>
    </div>
  )
}
{/* <FontAwesomeIcon icon={faArrowRightArrowLeft} size="xl" /> */}
export default BookOrExchange;