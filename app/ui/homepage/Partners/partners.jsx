import React from 'react'
import Link from 'next/link'
import { RiDeleteBin2Fill, RiSettings4Fill } from "react-icons/ri";  //<RiDeleteBin2Fill /> <RiSettings4Fill />
import { HiOutlinePlus } from "react-icons/hi"; //<HiOutlinePlus />
import Image from 'next/image';
import PartnersAnonimPhoto from '@/public/partnerphoto.png';
const users = () => {
  return (
    <div className="border-2 p-2.5 m-[15px] lg:mr-0 rounded-[20px] min-w-[45vw] min-h-[41vh] text-cl5 bg-cl4 bg-opacity-30 shadow-md border-slate-500 ">
    <div className='flex justify-between text-xl mb-5'>
        <div className='ml-2'>Partners</div>
        <Link href="/homepage/partners/add">
        <button className='hover:bg-slate-900 p-1 rounded-full'><HiOutlinePlus /></button>
        </Link>
    </div>
    <div className='flex items-center mb-0'>
        <Link href={"/homepage/partners/partner"} className='flex w-5/6 hover:bg-slate-900 rounded-full'>
            <Image 
                src={PartnersAnonimPhoto}
                alt='Partners Logo'
                width={25}
                className='invert mt-1 mb-1 ml-6'
            />
            <h2 className='mt-1 mb-1 ml-20'>Admin & Admin Inc.</h2>
        </Link>
        <div className='inline-flex items-baseline ml-10 text-lg'>
                <Link href="/">
                    <button className='hover:bg-slate-900 p-1 rounded-full'><RiSettings4Fill /></button>
                </Link>
                <button className='hover:bg-slate-900 p-1 rounded-full'><RiDeleteBin2Fill /></button>
        </div>
    </div> 
    <div className='flex items-center mt-0'>
        <Link href={"/homepage/partners/partner"} className='flex w-5/6 hover:bg-slate-900 rounded-full'>
            <Image 
                src={PartnersAnonimPhoto}
                alt='Partners Logo'
                width={25}
                className='invert mt-1 mb-1 ml-6'
            />
            <h2 className='mt-1 mb-1 ml-20'>Admin & Admin Inc.</h2>
        </Link>
        <div className='inline-flex items-baseline ml-10 text-lg'>
                <Link href="/">
                    <button className='hover:bg-slate-900 p-1 rounded-full'><RiSettings4Fill /></button>
                </Link>
                <button className='hover:bg-slate-900 p-1 rounded-full'><RiDeleteBin2Fill /></button>
        </div>
    </div> 
    
    </div>
  )
}

export default users