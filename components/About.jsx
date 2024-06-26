import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const About = () => {
    return (
        <section className='bg-about bg-no-repeat bg-left-bottom relative  pt-[100px]' id='about'>
            <div className='container'>
                <h3>our history</h3>
                <Image src='/assets/about/webp/AboutBig70.webp' alt='about_big' width={660} height={600} className='absolute mt-10'/>
                <div className='flex flex-col items-end gap-y-10'>
                    <h6 className=''>We could not be prouder to be.</h6>
                    <div className= 'text-[20px] leading-[24px] max-w-[780px] flex gap-y-4 flex-col'>
                        <p>
                            It only took one visit to Newfoundland & Labrador for Chef Matthew Swift to pack-up everything he owned and make St. John’s his new home.
                        </p>
                        <p>
                            Heading kitchens in Ontario and Quebec restaurants, including Montreal institution Joe Beef, for two decades was the perfect primer for Matthew to break out on his own. Inspired by the provinces people, food, produce, history and jaw-dropping landscapes, Matthew and his incredible team have created a welcoming comfortable space that reflects and respects it’s environment.
                        </p>
                        <p>
                            In 2021, Terre was selected as one of ‘Canada’s Best New Restaurants’ by enRoute Magazine’s expert food panel. We could not be prouder to be part of this prestigious list.
                        </p>
                    </div>
                    <div className='flex items-start w-[980px] justify-between'>
                        <Image src='/assets/about/webp/AboutSmall70.webp' alt='about_big' width={500} height={50} className='z-10'/>
                        <Button variant='outline_green' size='strict' className=''>read the full enroute story</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
