import {useState} from 'react';
const FreshLaunches = () => {

    const [carsData, setCarsData] = useState([{
        "brand": "Toyota",
        "model": "Avalon",
        "img" : "./src/assets/freshLaunches/Toyota Avalon.png",
        "price": "15000$",
        "year": 2023
      },
      {
        "brand": "Toyota",
        "model": "GR86",
        "img" : "./src/assets/freshLaunches/toyota gr86.png",
        "price": "35000$",
        "year": 2022
      },
      {
        "brand": "Toyota",
        "model": "Highlander",
        "img" : "./src/assets/freshLaunches/toyota highlander.webp",
        "price": "22000$",
        "year": 2017
      },
      {
        "brand": "Toyota",
        "model": "Crown",
        "img" : "./src/assets/freshLaunches/toyota crown.webp",
        "price": "33000$",
        "year": 2023
      },{
        "brand": "Audi",
        "model": "Q7",
        "img" : "./src/assets/freshLaunches/audi q7.png",
        "price": "25000$",
        "year": 2023
      },
    {
        "brand": "Audi",
        "model": "T/T",
        "img" : "./src/assets/freshLaunches/audi tt.png",
        "price": "27000$",
        "year": 2023
      },
    {
        "brand": "Audi",
        "model": "Q8",
        "img" : "./src/assets/freshLaunches/audi q8.webp",
        "price": "25000$",
        "year": 2020
      },
    {
        "brand": "Audi",
        "model": "T/T",
        "img" : "./src/assets/freshLaunches/audi tt.png",
        "price": "27000$",
        "year": 2023
      }])

      

    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => { 
      setWidth(window.innerWidth);
    });
          // 428px
  return (
    <div> 
        <div id="featured-cars" className='w-10/12 max-[540px]:w-11/12 max-[488px]:w-[95%] mx-auto mb-24  max-[640px]:mb-20'>
            <h3 className="title max-[917px]:w-1/3 max-[700px]:w-2/3 text-3xl w-1/4 mx-auto text-center mb-14">Fresh Launches</h3>
            <div id="showed-cars" className=" grid grid-cols-4 max-[980px]:grid-cols-2 max-[980px]:gap-y-8 max-[670px]:gap-x-0  gap-3 xl:gap-8   w-full mx-auto  ">
                {carsData.map((card, index) => (
                    
                    <div id='card' className={"group shadow-lg bg-white border-[1px] border-solid border-zinc-200 hover:border-none gap-3 w-full max-[980px]:w-3/4 max-[670px]:w-[85%] max-[488px]:w-[95%] max-[980px]:mx-auto   cursor-pointer  transition-all duration-150 hover:shadow-card transform hover:-translate-y-1 relative rounded-md px-3 py-3 flex flex-col justify-between"}>
                        <div className="flex justify-between">
                          {<div id="model" className="font-bold max-[530px]:text-sm">{carsData[index].brand  + " " +  carsData[index].model}</div>}
                          {<div id="price" className={"text-sm text-red hover:text-gray transition-all duration-150 font-bold" }>{carsData[index].price}</div>}
                        </div>
                        {<img src={window.location.origin + carsData[index].img} alt="" className=" mx-auto w-3/4 h-1/2 transform transition-all duration-150 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:drop-shadow-xl" />}
                        {<div id="otherData" className="font-bold text-sm max-[428px]:text-xs text-gray  flex justify-evenly w-full relative before:content-[''] before:absolute before:w-3/4  before:top-[150%] before:left-[12.5%] before:bg-gradient-to-r  from-white via-zinc-500 to-white from-0% to-100% before:h-[2px]"><span>{carsData[index].year}</span> <span>Automatic</span> <span>Petrol</span></div>}
                        <div id='buttons' className=' w-full flex justify-around mt-3'>
                            <button className='bg-main-blue text-sm max-[428px]:text-xs hover:opacity-[80%] text-white cursor-pointer rounded-md py-1 px-3 max-[428px]:px-2 transition-all duration-150 transform hover:-trasnalte-y-[0.5px]'>Test Drive</button>
                            <button className='bg-white text-sm max-[428px]:text-xs border-[1px] border-solid border-main-blue hover:bg-zinc-100 text-main-blue cursor-pointer rounded-md py-2 px-3 max-[428px]:px-2 transition-all duration-150 transform hover:-trasnalte-y-[0.5px]'>Details</button>
                        </div>
                        {index + 1 == carsData.length && <div className='absolute top-0 left-0 bg-opacity-[80%] bg-black  w-full h-full z-30 flex items-center justify-center'>
                        <button className='bg-main-blue text-sm max-[428px]:text-xs hover:opacity-[80%] text-white cursor-pointer rounded-md py-1 px-3 max-[428px]:px-2 transition-all duration-150 transform hover:-trasnalte-y-[0.5px]'>View More</button>
                        </div>}
                    </div>
                    
                ) )}

            </div>
        </div>
    </div>
  )
}

export default FreshLaunches;