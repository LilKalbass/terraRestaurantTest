'use client'

import React from 'react'
import Link from "next/link";
import Image from "next/image";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// const links = [
//     {
//         path: '/',
//         name: 'menu',
//     },
//     {
//         path: '/',
//         name: 'book now',
//         offset: -50
//     },
//     {
//         path: '/',
//         name: 'gift cards',
//         offset: -150
//     },
// ]

export const Header = () => {
    return (
        <header className='top-0 left-0 right-0 bg-none absolute z-20 transition-all'>
            <div className='container'>
                <div className= 'flex items-center justify-between py-10 border-b-[1px] border-white/40'>
                    <Link href='/'>
                        {/*<Image src='/assets/logo/LogoH.svg' alt='logo_img' width={147} height={38}/>*/}
                        <Image src='/assets/logo/Logo.png' alt='logo_img' width={147} height={38}/>
                    </Link>
                    <nav className='text-white text-xl flex gap-x-[50px] items-center'>
                        <Link href='/' className=' hover:underline hover:decoration-white'>
                            menu
                        </Link>
                        <Link href='/' className=' hover:underline hover:decoration-white'>
                            book now
                        </Link>
                        <Link href='/' className=' hover:underline hover:decoration-white'>
                            gift cards
                        </Link>
                        <Select>
                            <SelectTrigger  className="w-[80px] h-[62px] border-none">
                                <SelectValue placeholder={<Image src='/assets/EngIcon.png' alt='qwe' width={40} height={26}/>}/>
                            </SelectTrigger>
                            <SelectContent className= 'shadow-none'>
                                <SelectItem  value = 'we'><Image src='/assets/EngIcon.png' alt='qwe' width={40} height={26}/></SelectItem>
                                <SelectItem value = 'qwe'><Image src='/assets/FrenchIcon.png' alt='qwe' width={40} height={26}/></SelectItem>
                            </SelectContent>
                        </Select>

                    </nav>
                </div>
            </div>
        </header>
    )
}
