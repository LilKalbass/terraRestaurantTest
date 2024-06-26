import React from 'react'
import {FaInstagram, FaFacebookF} from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className='bg-footer pt-20 pb-[72px] ph:py-14'>
            <div className='container'>
                <div className='flex justify-center xl:hidden sm:pb-10 ph:pb-[26px]'>
                    <Image src='/assets/logo/webp/LogoF70.webp' alt='logo_img' width={240} height={62} className=''/>
                </div>
                <div className='flex xl:flex-row justify-between ph:flex-col'>
                    <div className='gap-y-[30px] xl:flex flex-col hidden'>
                        <Image src='/assets/logo/LogoF.png' alt='logo_img' width={240} height={62} className=''/>
                        <div className='xl:flex gap-x-5 hidden'>
                            <Button variant='default' size='icon'>
                                <FaInstagram className='text-4xl hover:fill-white transition-all duration-300'/>
                            </Button>
                            <Button variant='default' size='icon'>
                                <RiFacebookFill className='text-4xl hover:fill-white transition-all duration-300'/>
                            </Button>
                        </div>
                    </div>
                    <nav className = 'grid sm:grid-rows-1 sm:grid-cols-4  ph:grid-cols-2 ph:grid-rows-2 xl:gap-x-20 ph:gap-x-14'>
                        <div className='sm:max-w-[160px] ph:max-w-[126px]'>
                            <h5>sitemap</h5>
                            <ul>
                                <li>
                                    <Link href = '#menu'>
                                        menu
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '#book'>
                                        book now
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:max-w-[160px] ph:max-w-[126px]'>
                            <h5>adress</h5>
                            <ul>
                                <li>
                                    <Link href = '/'>
                                        125 water streetst. john’s, nl a1c 5x4
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className='sm:max-w-[160px] ph:max-w-[126px]'>
                            <h5>contacts</h5>
                            <ul>
                                <li>
                                    <Link href = '/'>
                                        +7 09 383 2136
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        info@terrerestaurant.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:max-w-[160px] ph:max-w-[126px]'>
                            <h5>other</h5>
                            <ul>
                                <li>
                                    <Link href = '/'>
                                        privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link href = '/'>
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='flex justify-center gap-x-5 xl:hidden sm:pt-[38px] ph:pt-[30px]'>
                    <Button variant='default' size='icon'>
                        <FaInstagram className='text-4xl hover:fill-white transition-all duration-300'/>
                    </Button>
                    <Button variant='default' size='icon'>
                        <RiFacebookFill className='text-4xl hover:fill-white transition-all duration-300'/>
                    </Button>
                </div>
            </div>
        </footer>
    )
}
