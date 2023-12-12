import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const [list, setList] = useState(false);
  window.addEventListener('resize', () => { 
    setwidth(window.innerWidth);
  });
  const toggleList = () => { 
    if (list) { 
      setList(false);
    }
    else { 
      setList(true);
    }
  }
  return (
    <div className="mx-auto py-7 max-sm:w-[90%] w-[85%] 720:w-[97%] md:w-[98%] lg:w-[94%] xl:w-[80%] flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl -mt-[5px] text-main-blue font-bold">RIDE IT</h1>
        {width >= 720 && <ul className="flex items-center">
            <li className="active font-bold mr-[10px] md:mr-3 844:mr-5 910:mr-8 hover:transform hover:-translate-y-[3px] transition"><a href="#">Home</a></li>
            <li className="text-gray mr-[10px] md:mr-3 844:mr-5 910:mr-8  hover:text-black transition hover:transform hover:-translate-y-[3px]"><a href="#" className="flex"><span className="mr-[3px]">Used</span> Cars</a></li>
            <li className="text-gray mr-[10px] md:mr-3 844:mr-5 910:mr-8  hover:text-black transition hover:transform hover:-translate-y-[3px]"><a href="#">Dealrs</a></li>
            <li className="text-gray mr-[10px] md:mr-3 844:mr-5 910:mr-8  hover:text-black transition hover:transform hover:-translate-y-[3px]"><a href="#" className="flex"><span className="mr-[3px]">Car</span> Hier</a></li>
            <li className="text-gray mr-[10px] md:mr-3 844:mr-5 910:mr-8  hover:text-black transition hover:transform hover:-translate-y-[3px]"><a href="#">Insurance</a></li>
            <li className="text-gray mr-[10px] md:mr-3 lg:mr-20 min-[1300px]:mr-36 844:mr-5 910:mr-8  hover:text-black transition hover:transform hover:-translate-y-[3px]"><a href="#">Finance</a></li>
        <div id="buttons" className="flex items-center">
            <button className="mr-[10px] hover:transform hover:-translate-y-[3px] transition md:mr-3 lg:mr-8 border-[1px] border-solid border-main-blue text-main-blue hover:border-white hover:bg-main-blue hover:text-white py-2 px-2 md:px-3 md:py-2 rounded-md ">Sell Your Car</button>
            <button className="border-[1px] hover:transform hover:-translate-y-[3px] transition border-solid border-white bg-main-blue text-white py-2 px-2 md:px-6 md:py-2 rounded-md hover:opacity-[90%] ">Login</button>
        </div>
        </ul> }
        { width < 720 && <ul className="flex items-center">
          {/* Bars */}
          <div id="buttons" className="flex items-center">
            </div>
          {/* <FontAwesomeIcon icon={faEllipsisVertical} size="2xl" className="text-main-blue cursor-pointer" />
           */}
          
          <div id="bars" onClick={() => toggleList()} className="bg-white relative cursor-pointer w-5 h-full flex flex-col items-center">
            <span className="h-1 w-7 bg-main-blue mb-2 "></span>
            <span className="h-1 w-7 bg-main-blue mb-2 "></span>
            <span className="h-1 w-7 bg-main-blue "></span>
          </div>

        </ul> }

        {list && <div id="list" className="fixed z-30 h-screen w-screen transform top-0  right-0 ">
          <div className={!list ? " bg-main-white -translate-x-[200%] transition-all duration-500 z-30 fixed  text-lg  p-10  top-0 flex flex-col  justify-start" : " bg-main-white top-0 right-0 z-30 fixed w-1/2 max-sm:w-full  h-full text-lg  transition-all duration-500  p-10 transform translate-x-0 flex flex-col   "}>
            <span onClick={() => toggleList()} className="mb-12 cursor-pointer font-bold transition text-red bg-white shadow-card flex items-center justify-center rounded-full w-4 h-4 p-4 hover:text-white hover:bg-red">X</span>
            <ul className=" z-50 max-sm:flex max-sm:flex-col max-sm:items-center"> 
              <li className="active font-bold mb-8 transition sm:hover:pl-1 max-sm:hover:-translate-y-1 "><a href="#">Home</a></li>
              <li className="text-gray mb-8 hover:text-black transition sm:hover:pl-1 max-sm:hover:-translate-y-1"><a href="#" className="flex"><span className="mr-[3px]">Used</span> Cars</a></li>
              <li className="text-gray mb-8 hover:text-black transition sm:hover:pl-1 max-sm:hover:-translate-y-1"><a href="#" >Dealrs</a></li>
              <li className="text-gray mb-8 hover:text-black transition sm:hover:pl-1 max-sm:hover:-translate-y-1"><a href="#" className="flex "><span className="mr-[3px]">Car</span> Hier</a></li>
              <li className="text-gray mb-8 hover:text-black transition sm:hover:pl-1 max-sm:hover:-translate-y-1"><a href="#" >Insurance</a></li>
              <li className="text-gray mb-12  hover:text-black transition sm:hover:pl-1 max-sm:hover:-translate-y-1"><a href="#" >Finance</a></li>
              <div className="">
                <button className=" mr-5 border-[1px] border-solid border-main-blue text-main-blue hover:border-white hover:bg-main-blue hover:text-white py-2 px-2   rounded-md transition">Sell Your Car</button>
                <button className="border-[1px] mr-5 border-solid border-white bg-main-blue text-white py-2 px-8  rounded-md hover:opacity-[90%] transition">Login</button>
              </div>
            </ul>
          </div>
          {list && <div className="bg-black opacity-[80%] fixed top-0 left-0 w-screen h-screen z-20 "></div>}
        </div>}
    </div>
  )
}

export default NavBar;
        
        