import React from 'react'
import { ConnectWallet } from '../ui/ConnectWallet'


export const HeroSection = () => {
    return (
        <div className="relative">

            <div className='container   mx-auto px-2.5'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-end">
                    <div className="pb-[50px] ">
                        <h1 className='gradient-text Bangers leading-[81.36px] text-[30px] uppercase  lg:text-[72px]'>
                            One Cat to Protect   <br />
                            and Connect Them All
                        </h1>
                        <img src="/assets/Group 1171275086.svg" className='absolute lg:block hidden left-0 max-w-full' alt="" />


                    </div>
                 <div className='w-full'>
                    <ConnectWallet />
                 </div>
                </div>
            </div>

        </div>

    )
}
