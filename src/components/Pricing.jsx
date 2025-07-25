import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing" crosses>
            <div className='container z-2 relative'>
                <div className='relative justify-center hidden mb-[6.6rem] lg:flex'>
                    <img 
                        src={smallSphere} 
                        alt="sphere" 
                        className='relative z-1'
                        width={255}
                        height={255}
                    />

                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-y-1/2 pointer-events-none'>
                        <img 
                            src={stars} 
                            alt="stars" 
                            className='w-full'
                            width={950}
                            height={400}
                        />
                    </div>
                </div>

                <Heading 
                    tag="Get started with Brainwave"
                    title="Pay once, use forever"
                />

                <div className='relative'>
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>

                <div className='flex justify-center mt-10'>
                    <a className='text-xs font-code font-bold tracking-wider uppercase border-b' href='/pricing'> See the full details </a>
                </div>
            </div>
        </Section>
    )
}

export default Pricing
