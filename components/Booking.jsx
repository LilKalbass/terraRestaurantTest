import React from 'react'
import {Button} from "@/components/ui/button";

export const Booking = () => {
    return (
        <section className = 'bg-booking bg-no-repeat bg-cover relative py-[100px]' id='book'>
            <div className= 'container'>
                <div className='flex justify-center flex-col'>
                    <div className='flex items-center flex-col'>
                        <h6>book a table</h6>
                        <h3 className='text-white'>book a table</h3>
                    </div>
                    <div className='bg-transparent flex items-center flex-col pt-[50px]'>
                        <form className='bg-transparent sm:min-w-[600px] ph:min-w-[320px] flex flex-col gap-y-8'>
                            <input className='pt-0' placeholder='ur name'/>
                            <input className='' placeholder='ur phone number'/>
                            <input className='' placeholder='date'/>
                            <Button variant='submit' size='strict' >submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
