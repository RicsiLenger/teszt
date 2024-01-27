import React from 'react'
import { RiDeleteBin2Fill, RiSettings4Fill } from "react-icons/ri";  //<RiDeleteBin2Fill />
import { HiOutlinePlus } from "react-icons/hi"; //<HiOutlinePlus />
import Link from 'next/link';


const partners = () => {
    return (
        <div className='border-2 p-2.5 m-[15px] rounded-[20px] min-w-[40vw] min-h-[70vh] text-cl5 bg-cl4 bg-opacity-30 shadow-md border-slate-500 '>
        <div className='flex justify-between text-xl mb-5'>
            <div className='ml-2'>Users</div>
            <Link href="/homepage/users/add">
            <button className='hover:bg-slate-900 p-1 rounded-full'><HiOutlinePlus /></button>
            </Link>
        </div>
        <table className='w-full text-sm'>
            <thead>
            <tr className='p-2.5 text-center border-b border-b-slate-'>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Created At</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
            <tr className='p-2.5 text-center'>
                <td><div className=''>Admin Admin</div></td>
                <td>admin@admin.com</td>
                <td>admin</td>
                <td>2024.01.17</td>
                <td>active</td>
                <td>
                    <div className='inline-flex items-baseline text-base'>
                    <Link href="/">
                        <button className='hover:bg-slate-900 p-1 rounded-full'><RiSettings4Fill /></button>
                    </Link>
                    <button className='hover:bg-slate-900 p-1 rounded-full'><RiDeleteBin2Fill /></button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        )
}

export default partners