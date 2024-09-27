import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src="/hilink-logo.svg"  width={74} height={30} alt="logo"/>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                    className='regular-16 text-gray-50 text-center flexCenter cursor-pointer
                    pb-1.5 transition-all hover:font-bold'>
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className='lg:flexCenter hidden'>
                <Button 
                type="button"
                title="login"
                icon='/user.svg'
                variant='btn_dark_green'
                />
            </div>
            <Image
            src="menu.svg"
            alt="menu"
            height={32}
            width={32}
            className='inline-block cursor-pointer lg:hidden'
        />

    </nav>
  )
}

export default Navbar