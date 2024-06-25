'use client'

import React from 'react'
import {Button} from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className='bg-hero bg-no-repeat xl:bg-cover relative xl:h-[760px] pt-32    '>
            <div className='container'>
                <p className='text-white flex justify-end text-[20px] leading-[26px]'>125 Water street
                    st. john's, nl
                    709 383 2136</p>
                <div className='pt-44'>
                    <h1 className='text-white text-[120px] leading-[120px]'>terre restaurant</h1>

                </div>
                <div className='flex items-center gap-x-8 pt-10 '>
                    <Button variant='outline' size='round' className='uppercase'>About <br/> us</Button>
                    <p className='text-white max-w-[620px] text-[22px] leading-[28px]'>We have beautiful and fun things coming up on the patio this summer. Now it only needs to… be summer. To be continued!</p>
                </div>
            </div>
        </section>
    )
}
