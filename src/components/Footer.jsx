import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
    return (
        <Section crosses className='!py-10 !px-0'>
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">  
                    © {new Date().getFullYear()}. All rights reserved. 
                </p>

                <ul className='flex flex-wrap gap-5'>
                    {socials.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.url} 
                            target='_blank'
                            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        >
                            <img 
                                src={item.iconUrl} 
                                alt={item.title} 
                                width={16} 
                                height={16} 
                                
                            />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Footer
