// App.js
import React from 'react';
import First from '../asserts/first.jpg'
import Logs from '../asserts/bro.png'
import Second from '../asserts/second.png'
import Third from '../asserts/third.png'

function Home() {
    const bg = {
        backgroundImage: `url(${First})`,
        backgroundSize: "cover"
    }
    return (
        <div>
            <div>
                <div className="font-mono h-full bg-gradient-to-r from-blue-300 via-white to-blue-300 pb-6">
                    {/* 1 */}
                    <div className=" ">
                        <div className='flex-row-reverse pt-20 space-x-4 md:flex justify-center md:pt-32 md:space-x-36 items-center'>
                        <div>
                                <img className=' h-72 w-auto' src={Logs}></img>
                            </div>
                        <div className='px-2 md:px-3 md:w-[40%]'>
                            <p className=" font-bold text-2xl flex justify-center pt-[10%] text-black">TRAILER SERVICES - 40 FT AND 20 FT VEHICLES</p>
                            <p className="text-xl my-6 text-black">Trailer Services are mostly used by clients belonging to the industrial sector. Those who need transportation service on a large scale. The following are the versatile set of services one can avail according to their need.</p>
                        </div>    
                        </div>
                    </div>

                   {/* 2 */}
                    <div className=" ">
                        <div className='block pt-20 space-x-4 md:flex justify-center md:pt-32 md:space-x-32 items-center'>
                        <div>
                                <img className=' h-72 w-auto' src={Second}></img>
                            </div>
                        <div className='px-2 md:px-3 md:w-[40%]'>
                            <p className=" font-bold text-2xl flex justify-center pt-[10%] text-black">Import Air & Sea Freights</p>
                            <p className="text-xl my-6 text-black">Importing from small boxes to full containers no matter the size, our professional overseas agents are ready to assist with getting your cargo ready from origin to destination without a hassle.</p>
                        </div>    
                            
                            
                        </div>
                    </div>

                    {/* 3 */}
                 
<div className=" ">
                        <div className=' flex-row-reverse pt-20 space-x-4 md:flex justify-center md:pt-32 md:space-x-32 items-center'>
                        <div>
                                <img className=' h-72 w-auto' src={Third}></img>
                            </div>
                        <div className=' px-2 md:px-3 md:w-[40%]'>
                            <p className=" font-bold text-2xl flex justify-center pt-[10%] text-black">Unlocking Global Opportunities, One Shipment at a Time</p>
                            <p className="text-xl my-6 text-black">
                            At Reudan, we're your global logistics partner. Our precision, experience, and innovation ensure seamless, reliable, and efficient cargo delivery worldwide.
                                </p>
                        </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
