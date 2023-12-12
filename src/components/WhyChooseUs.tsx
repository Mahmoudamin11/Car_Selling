import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => { // 960
  const [elements, setElements] = useState([
    {'img': <FontAwesomeIcon icon={faCar} size="xl" />,'title':'A Variety Of Options', 'p':"We will provide you multiple options that you can't get tired of looking for cars anymore and just come here"},
    {'img': <FontAwesomeIcon icon={faLightbulb} size="xl" />,'title':'Useful Suggestions', 'p':'We will provide you multiple great suggestions and good ideas that are inspiring, amazing and useful'},
    {'img': <FontAwesomeIcon icon={faCoins} size="xl" />,'title':'Money Rate Saving', 'p':'We will provide you the best rate of prices in the market because of our endless discounts'},
    {'img': <FontAwesomeIcon icon={faMedal} size="xl" />,'title':'Quality Assurance', 'p':'We will provide you the best quality  with a formal guarantee that the car lasts +5 years than others'},
    {'img': <FontAwesomeIcon icon={faFilePen} size="xl" />,'title':'Match Needs', 'p':'We will provide you the car of your dreams with everything you wish and the lowest price you wish'},
    {'img': <FontAwesomeIcon icon={faPercent} size="xl" />,'title':'Great Offers', 'p':"We will provide you great offers with great discounts that you can't miss that can be the offer of your life"},
  ])
  return (
    <div className='mb-24  max-[640px]:mb-20 bg-white'>
        <h3 className='title w-1/4 max-[910px]:w-1/3 max-[690px]:w-1/2 max-[470px]:w-3/4  mx-auto text-center text-3xl'>Why Choose Us?</h3>
        <div className='grid grid-cols-3 max-[575px]:grid-cols-2 w-10/12 max-[1045px]:w-11/12 mx-auto gap-x-10 min-[1046px]:gap-5'>
          
          {
            elements.map((e, index) => (
              <div className='flex bg-white  max-[960px]:flex-col max-[960px]:items-center mb-5 max-[960px]:mb-7 w-full  group'>
                <span className='icon relative w-10 h-10 p-7  transition  flex justify-center items-center rounded-full bg-transparent border-2 border-solid border-black before:content-[""] before:absolute before:h-full before:w-[2px] before:z-10 before:bg-black before:top-0 before:right-1/2 after:content-[""] after:absolute after:h-[2px] after:w-full after:z-10 after:bg-black after:top-1/2 after:right-0' >
                  <span id='circle' className='w-6 h-6 p-6 z-20 group-hover:p-8 border-[3px] border-solid border-white transition rounded-full bg-main-blue text-white flex items-center justify-center'>{elements[index].img}</span>
                </span>
                <article className='ml-4 -mt-1 max-[960px]:text-center max-[960px]:flex max-[960px]:flex-col max-[960px]:items-center max-[960px]:ml-0 max-[960px]:mt-1'>
                  <h3 className='font-bold text-xl '>{elements[index].title}</h3>
                  <p className=' text-gray max-[960px]:text-center hover:text-black transition w-10/12 max-[1045px]:w-11/12 max-[500px]:w-full'>
                  {elements[index].p}
                  </p>
                </article>
              </div>
            ))}
          
        </div>
    </div>
  )
}

export default WhyChooseUs;
