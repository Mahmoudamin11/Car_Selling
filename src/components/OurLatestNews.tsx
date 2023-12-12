import carLeftside from '../assets/lastNews4.png';
import { useState } from 'react';
import repair from '../assets/repair.png';
import wash from '../assets/washCar.png';
import mechanic from '../assets/mechanic.png';


const OurLatestNews = () => {
  let date = new Date();
  const [dayInMonth] = useState(date.getMonth());
  const day = date.getDate();
  const  Months = ['January', 'February', 'March', 'April', 
  'May', 'June', 'July', 'August', 'September', 
  'October', 'November', 'December'];
  const [month] = useState(Months[dayInMonth]);
  const year = date.getFullYear();

  return (
    <div className="mb-24  max-[640px]:mb-20 mx-auto  xl:w-[85%] w-[92%] flex flex-col justify-center items-center">
        <h1 className="title w-fit text-3xl max-[450px]:text-2xl z-30  mb-10 text-center">Our Latest News</h1>
        <div className="grid grid-cols-1 mini-md:grid-cols-2 w-full mt-8 gap-5 ">
            
            <div id="left-side" className=' max-mini-md:text-center max-mini-md:mb-5'>
              <img src={carLeftside} alt="" className='shadow-card' />
              <h1 className='text-xl w-full mt-8 font-bold'>What are the factors to be considegray before sending your car for repair ?</h1>
              <p className='text-gray mt-1 mb-7 transition-all duration-150 hover:text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a, qui laborum, esse ad voluptatum magni corporis laboriosam quidem voluptates alias ab odio error repellendus ex nostrum iusto.</p>
              <p className='text-gray text-sm '><span className='font-bold text-black'>Mahmoud Amin</span> in <span className='font-bold text-black'>Automobile</span> </p>
              {/* to put date */}
              <p className=' text-gray text-xs '><span>{month} {day}, {year}</span> 6 min read</p> 
              <button className='text-white py-2 px-3 cursor-pointer bg-main-blue transition-all duration-150 transform hover:shadow-xl hover:-translate-y-1 rounded-md mt-8'>All Feature News</button>
            </div>

            {/* ================= */}
            
            <div  id="right-side" className='flex flex-col items-center justify-center'>
              <div className='flex  h-1/3 mb-5 gap-4 group transition-all duration-150'>
                <img src={repair} className='w-[40%] ' alt="" />
                <article className='flex flex-col justify-evenly'>
                  <div>
                    <h1 className='max-md:text-sm md:text-base lg:text-xl font-bold'>Which brand makes the most attractive cars?</h1>
                    <p className='text-xs lg:text-sm text-gray  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure earum temporibus optio similique, aut dolores laudantium, modi quo corporis rerum eveniet quod.</p>
                    
                  </div>
                  <div>
                    <p className='text-gray text-xs mt-1'><span className='font-bold text-black'>Mahmoud Amin</span> in <span className='font-bold text-black'>Automobile</span> </p>
                    <p className=' text-gray text-xs '><span>{month} {day}, {year}</span> 6 min read</p>
                  </div> 
                </article>
              </div>

              <div className='flex  h-1/3 mb-5 gap-4 group transition-all duration-150'>
                <img src={wash} className='w-[40%] ' alt="" />
                <article className='flex flex-col justify-evenly'>
                  <div>
                    <h1 className='max-md:text-sm md:text-base lg:text-xl font-bold'>What is the role of regular car wash? Is it advisable?</h1>
                    <p className='text-xs lg:text-sm text-gray  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure earum temporibus optio similique, aut dolores laudantium, modi quo corporis rerum eveniet quod.</p>
                    
                  </div>
                  <div>
                    <p className='text-gray text-xs mt-1'><span className='font-bold text-black'>Mahmoud Amin</span> in <span className='font-bold text-black'>Automobile</span> </p>
                    <p className=' text-gray text-xs '><span>{month} {day}, {year}</span> 6 min read</p>
                  </div> 
                </article>
              </div>

              <div className='flex  w-full h-1/3 gap-4 group transition-all duration-150'>
                <img src={mechanic} className='w-[40%]  ' alt="" />
                <article className='flex flex-col justify-evenly'>
                  <div>
                    <h1 className='max-md:text-sm md:text-base lg:text-xl font-bold'>What is the role of good tyres?</h1>
                    <p className='text-xs lg:text-sm text-gray  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure earum temporibus optio similique, aut dolores laudantium, modi quo corporis rerum eveniet quod.</p>
                    
                  </div>
                  <div>
                    <p className='text-gray text-xs mt-1'><span className='font-bold text-black'>Mahmoud Amin</span> in <span className='font-bold text-black'>Automobile</span> </p>
                    <p className=' text-gray text-xs '><span>{month} {day}, {year}</span> 6 min read</p>
                  </div> 
                </article>
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default OurLatestNews;