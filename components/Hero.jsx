'use client'

import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";


export const Hero = () => {
    return (
        <section className='bg-hero bg-no-repeat xl:bg-cover relative pt-32 transition-all'>
            <div className='container'>
                <p className='text-white flex justify-end text-[20px] leading-[26px]'>125 Water street
                    st. john's, nl
                    709 383 2136</p>
                <div className='pt-44'>
                    <h1 className='text-white text-[120px] leading-[120px]'>terre restaurant</h1>

                </div>
                <div className='flex items-center gap-x-8 pt-10 pb-[120px]'>
                    <Link href='#about'><Button variant='outline' size='round' className='uppercase'>About <br/> us</Button></Link>
                    <p className='text-white max-w-[620px] text-[22px] leading-[28px]'>We have beautiful and fun things coming up on the patio this summer. Now it only needs to… be summer. To be continued!</p>
                </div>
            </div>
        </section>
    )
}
