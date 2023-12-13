import {useState} from 'react';
const ClientsSay = () => {
    const [clients, setClients] = useState([
        {'img': "/src/assets/humans/pic1.png", 'name': 'Thomas A.', 'address': 'Luxomborg'},
        {'img': "/src/assets/humans/pic2.png", 'name': 'Jhon D.', 'address': 'Las vegas'},
        {'img': "/src/assets/humans/pic3.png", 'name': 'Daniel T.', 'address': 'California'},
        {'img': "/src/assets/humans/pic4.png", 'name': 'George H.', 'address': 'London'},
    ]);
  return (
    <div className=' w-full mx-auto relative max-[450px]:bg-center bg-clientsSay bg-cover'>
        <div className="w-11/12 mx-auto   flex flex-col items-center pt-8 sm:pb-28 max-sm:pb-20">
            <div className=' absolute w-full h-full bg-white opacity-[80%]  z-10 top-0 left-0'></div>
                <h1 className="title w-fit  text-3xl max-[450px]:text-2xl z-30 mx-auto mb-10 text-center">Know What Our Clients Say</h1>
                <p className=" text-black z-30 relative text-opacity-[60%]  mb-14 transition-all duration-150 hover:text-opacity-[100%] mx-auto w-1/3 max-[932px]:w-1/2 max-[630px]:w-3/4 max-[450px]:w-[75%] max-[450px]:text-sm text-center">We provide a five star service and a five star quality of products that our clients enjoy with and give as happy feedback</p>
        
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-8 max-500:gap-y-4  max-500:grid-cols-1 max-500:w-full max-[850px]:place-content-around mx-auto place-items-center w-full z-30">
                    {clients.map((card, index) => (
                        <div id='card' className='bg-main-blue w-[90%] z-30 group  relative shadow-card  transition-all duration-150'>
                            <div className='bg-white w-full h-full p-[8%] group-hover:p-5  rounded-tl-[150px]  transition-all duration-150 group-hover:rounded-none group-hover:shadow-2xl'>
                                <div className='flex gap-1'>
                                    <img src={clients[index].img} className='rounded-full border-2 border-solid border-white' alt="" />
                                    <article className='flex flex-col justify-center'>
                                        <p className='font-bold'>{clients[index].name}</p>
                                        <p className='text-gray text-xs'>{clients[index].address}</p>
                                    </article>
                                </div>
                                <p className='text-gray px-[2%] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam inventore perspiciatis commodi quos aliquid itaque doloremque vitae molestias. Esse dolorum repellat quaerat aut? Officiis, molestiae. Officiis ipsam quod magnam.</p>
                            </div>
                        </div>
                    ))}
        
                </div>
            <button className='py-2 px-3 rounded-md text-white font-bold hover:-translate-y-2 transition-all duration-150 hover:opacity-[80%] bg-main-blue z-30 relative mx-auto my-14'>View All</button>
        </div>
    </div>
  )
}

export default ClientsSay;