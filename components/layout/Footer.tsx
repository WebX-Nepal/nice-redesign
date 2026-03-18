import React from 'react'
import facebook from "../../public/facebook.svg"
import Image from 'next/image'
import logo from "../../public/nice-logo.png"
import Link from 'next/link'
import Button from '../ui/Button'
import { navbar } from '@/constants/constant'

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto mt-20">

        <div className="flex flex-col rounded-[25px] px-8 py-4 bg-[#f8f8f8]">

            <div className="my-10 mx-auto w-[90%] flex items-center justify-between">

                <div className="basis-[48%] flex flex-col gap-4">
                    <h1 className="text-[2rem] font-semibold">Reach out</h1>

                    <p>info@nicerecruitment.org</p>
                    <p>9706414359</p>
                    <p>Samakhusi Town Planning, Kathmandu, Nepal.</p>

                    <Image src={facebook} alt="logo" className="footer-logo" />
                </div>


                <div className="basis-[48%] flex flex-col gap-4">

                    <p>
                        Partner with us to access skilled manpower tailored to meet your industry’s unique demands.
                        Our expertise spans a wide range of sectors, ensuring you get the right talent, every time.
                    </p>

                    <h2 className="text-[1.5rem] font-medium">
                        Ready to strengthen your workforce?
                    </h2>

                    <Button>Contact Us Today</Button>

                </div>

            </div>


            <div className="flex pt-5 mx-8.75 justify-between border-t-2 border-[rgb(61,60,60)]">

                <p>© Copyright 2024 | All rights reserved</p>
                <p>Designed & Developed by WebX</p>

            </div>

        </div>

        <div className="flex justify-between items-center rounded-[25px] px-8 py-4 bg-[#f8f8f8]">

            <Image src={logo} alt="logo" className="w-25" />

            <ul className="flex list-none gap-[1.2rem]">

                {navbar.map((nav)=>(
                    <Link key={nav.id} href={nav.href} className="hover:text-[#22C55E]">{nav.title}</Link>
                ))}

            </ul>

        </div>

    </div>
  )
}

export default Footer