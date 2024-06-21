import React from 'react'
import {FaInstagram, FaFacebookF} from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri";
import {Button} from "@/components/ui/button";

export const Footer = () => {
    return (
        <footer className=''>
            <Button variant='default' size='icon'><FaInstagram className='text-4xl hover:fill-white transition-all duration-300'/></Button>
            <Button variant='default' size='icon'><RiFacebookFill className='text-4xl hover:fill-white transition-all duration-300'/></Button>
        </footer>
    )
}
