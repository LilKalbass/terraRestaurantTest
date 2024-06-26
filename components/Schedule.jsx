import React from 'react'
import Image from "next/image";
import {FaRegClock} from "react-icons/fa6";

export const Schedule = () => {
    return (
        <section className='pt-20 pb-16 bg-schedule bg-contain bg-left-top sm:bg-repeat-round ph:bg-no-repeat' id='menu'>
            <div className='container'>
                <div className='grid grid-cols-2'>
                    <div className='justify-between flex flex-col pb-12'>
                        <Image src='/assets/schedule/webp/Sch170.webp' alt='qwe' width={650} height={500}/>
                        <div className='lowercase '>
                            <h6>work time</h6>
                            <h3 className='pb-6'>CAFÉ</h3>
                            <div className='flex items-center'>
                                <FaRegClock className='bg-green mr-3 text-[50px] p-3 fill-white text-white'/>
                                <h4 className='font-bold text-[22px] leading-[22px]'>Breakfast & Lunch<span className='mr-1.5'>:</span></h4>
                                <p className='text-[22px] leading-[22px]'>
                                    Every day from 8AM<span className='px-1'>-</span>3PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between pt-12'>
                        <div className='lowercase '>
                            <h6>work time</h6>
                            <h3>RESTAURANT</h3>
                            <div className='flex items-center py-6'>
                                <FaRegClock className='bg-green mr-3 text-[50px] p-3 fill-white text-white'/>
                                <h4 className='font-bold text-[22px] leading-[22px]'>friday<span className='mr-1.5'>:</span></h4>
                                <p className='text-[22px] leading-[22px]'>
                                    8AM<span className='px-1'>-</span>11:30AM
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <FaRegClock className='bg-green mr-3 text-[50px] p-3 fill-white text-white'/>
                                <h4 className='font-bold text-[22px] leading-[22px]'>Saturday & Sunday<span className='mr-1.5'>:</span></h4>
                                <p className='text-[22px] leading-[22px]'>
                                    9AM<span className='px-1'>-</span>2PM
                                </p>
                            </div>
                        </div>
                        <Image src='/assets/schedule/webp/Sch270.webp' alt='qwe' width={650} height={500} className='pt-20'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
