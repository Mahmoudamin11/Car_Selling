import { useState } from "react";
import aclass from '../assets/mercedes/a-class.png';
import amgGT from '../assets/mercedes/amg gt.png';
import cla from '../assets/mercedes/cla.png';
import cls from '../assets/mercedes/cls.png';

const FilterCars = () => {
  const options = [
    {value: 'mercedes', text: 'Mercedes'},
    {value: 'toyota', text: 'Toyota'},
    {value: 'bmw', text: 'Bmw'},
    {value: 'audi', text: 'Audi'},
  ];
    const [carComp, setCarComp] = useState(options[0].value);
    const [rand, setrand] = useState(Math.floor(Math.random() * 4));
    // Data Object
    let carsData = {
        "mercedes": [
          {
            "brand": "Mercedes",
            "model": "A Class",
            "img" : aclass,
            "price": "10000$",
            "year" : 2023
          },
          {
            "brand": "Mercedes",
            "model": "AMG GT",
            "img" : amgGT,
            "price": "50000$",
            "year": 2022
          },
          {
            "brand": "Mercedes",
            "model": "CLA",
            "img" : cla,
            "price": "15000$",
            "year": 2021
          },
          {
            "brand": "Mercedes",
            "model": "CLS",
            "img" : cls,
            "price": "30000$",
            "year": 2019
          }
          
        ],
        "toyota":[
            {
                "brand": "Toyota",
                "model": "Camry",
                "img" : "./src/assets/toyota/camry.png",
                "price": "25000$",
                "year": 2015
              },
            {
                "brand": "Toyota",
                "model": "Corolla",
                "img" : "./src/assets/toyota/corolla.png",
                "price": "25000$",
                "year": 2023
              },
            {
                "brand": "Toyota",
                "model": "Prius",
                "img" : "./src/assets/toyota/prius.png",
                "price": "25000$",
                "year": 2020
              },
            {
                "brand": "Toyota",
                "model": "Rav4",
                "img" : "./src/assets/toyota/rav4.png",
                "price": "25000$",
                "year": 2017
              }
        ],
        "bmw": [
          {
            "brand": "Bmw",
            "model": "8 Series",
            "img" : "./src/assets/bmw/bmw 8 series.png",
            "price": "10000$",
            "year": 2023
          },
          {
            "brand": "Bmw",
            "model": "IX",
            "img" : "./src/assets/bmw/bmw ix 2023.png",
            "price": "50000$",
            "year": 2021
          },
          {
            "brand": "Bmw",
            "model": "M2",
            "img" : "./src/assets/bmw/bmw m2 coupe.png",
            "price": "15000$",
            "year": 2023
          },
          {
            "brand": "Bmw",
            "model": "X6",
            "img" : "./src/assets/bmw/bmw x6 2023.png",
            "price": "30000$",
            "year": 2023
          }
          
        ],
        "audi":[
            {
                "brand": "Audi",
                "model": "A4",
                "img" : "./src/assets/audi/audi a4 2023.png",
                "price": "25000$",
                "year": 2022
              },
            {
                "brand": "Audi",
                "model": "E-tron GT",
                "img" : "./src/assets/audi/audi e-tron gt 2023.png",
                "price": "25000$",
                "year": 2023
              },
            {
                "brand": "Audi",
                "model": "Q3",
                "img" : "./src/assets/audi/audi q3 2023.png",
                "price": "25000$",
                "year": 2020
              },
            {
                "brand": "Audi",
                "model": "R8",
                "img" : "./src/assets/audi/audi r8 2023.png",
                "price": "28000$",
                "year": 2023
              }
        ]
    };
    const carNames = ['mercedes', 'toyota', 'bmw', 'audi'];
    
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => { 
      setWidth(window.innerWidth);
    });

    const showCars = (car:string) => { 
        setCarComp(car);
        setrand(Math.floor(Math.random() * 4));
    };


  return (
    <div className="mb-24 max-lg:mt-40 xl:mt-24 max-sm:mt-20  max-sm:mb-20 w-10/12 max-[1120px]:w-11/12 max-[980px]:w-10/12 max-[670px]:w-[95%] mx-auto flex flex-col items-center">
        <div id="filter" className="bg-white mb-14 max-[480px]:mb-8 shadow-2xl  p-10 w-2/3 max-[980px]:w-[92%] max-[622px]:w-[96%]   flex flex-col items-center ">
            <h3 className="title max-[680px]:text-lg text-center  max-[680px]:mb-10">Not Sure About Which Car To Buy? Find It Here!</h3>
            <section id="select" className="flex flex-col-reverse sm:flex-row justify-around  w-3/4 max-[710px]:w-[92%] xl:w-[60%] ">
                
                <select name="cars" value={carComp} onChange={event => setCarComp(event.target.value)}  id="cars" className="py-2 px-3  relative    border-[1px] rounded-md hover:border-black transform hover:translate-y-[-3px]  transition border-solid border-gray outline-none cursor-pointer sm:w-[35%]">
                    {options.map((opt) => (
                      <option  key={opt.value} value={opt.value}>{opt.text}</option>
                    ))}
                </select>
                <span className="font-bold mx-auto my-2 sm:my-auto">OR</span>
                <button onClick={() => showCars('select')} className="bg-main-blue py-3 px-5 transform hover:opacity-[90%] hover:translate-y-[-3px] transition rounded-md text-white ">
                    Search Random Cars
                </button>
            </section>
        </div>
        
        <div id="featured-cars w-full">
            <h3 className="title max-[917px]:w-1/3 max-[700px]:w-2/3 text-3xl w-1/4 mx-auto text-center mb-14">Featured Cars</h3>
            <div id="showed-cars" className=" grid grid-cols-4 max-[980px]:grid-cols-2 max-[980px]:gap-y-8 max-[670px]:gap-x-0  gap-3 xl:gap-8   w-full mx-auto  ">
                {[0, 1, 2, 3].map((card, index) => (
                    
                    <div className="group bg-white gap-3 w-full max-[980px]:w-3/4 max-[670px]:w-[85%] max-[476px]:w-[95%] max-[980px]:mx-auto   cursor-pointer shadow-card transition hover:shadow-2xl transform hover:-translate-y-1 relative px-2 py-3 flex flex-col justify-between">
                        <div className="flex justify-between">
                          {carComp != 'select' && <div id="model" className="font-bold max-[530px]:text-sm">{carsData[carComp as keyof typeof carsData][index].brand  + " " +  carsData[carComp as keyof typeof carsData][index].model}</div>}
                          {carComp == 'select' && <div id="model" className="font-bold max-[530px]:text-sm">{carsData[carNames[index] as keyof typeof carsData][rand].brand  + " " +  carsData[carNames[index] as keyof typeof carsData][rand].model}</div>}
                          {carComp != 'select' && <div id="price" className={width <= 450 ? "text-sm text-gray hover:text-black transition font-bold" : " w-[30%] max-[530px]:text-sm max-[476px]:text-xs text-center h-[32px] py-1 px-1 bg-red text-white"}>{carsData[carComp as keyof typeof carsData][index].price}</div>}
                          {carComp == 'select' && <div id="price" className={width <= 450 ? "text-sm text-gray hover:text-black transition font-bold" : " w-[30%] max-[530px]:text-sm max-[476px]:text-xs text-center h-[32px] py-1 px-1 bg-red text-white"}>{carsData[carNames[index] as keyof typeof carsData][rand].price}</div>}
                        </div>
                        {carComp != 'select' && <img src={carsData[carComp as keyof typeof carsData][index].img} alt="" className=" mx-auto w-3/4 h-1/2 transform transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:drop-shadow-xl" />}
                        {carComp == 'select' && <img src={carsData[carNames[index] as keyof typeof carsData][rand].img} alt="" className=" mx-auto w-3/4 h-1/2 transform transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:drop-shadow-xl" />}
                        {carComp != 'select' && <div id="otherData" className="font-bold text-sm text-gray hover:text-black w-fit">{carsData[carComp as keyof typeof carsData][index].year} Automatic</div>}
                        {carComp == 'select' && <div id="otherData" className="font-bold text-sm text-gray hover:text-black w-fit">{carsData[carNames[index] as keyof typeof carsData][rand].year} Automatic</div>}
                    </div>
                    
                ) )}

            </div>
        </div>
    </div>
  )
}

export default FilterCars;