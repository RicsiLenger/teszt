import React from 'react'

const userslog = () => {
  return (
    <div className="border-2 p-2.5 m-[15px] lg:mr-0 rounded-[20px] min-w-[45vw] min-h-[27vh] text-cl5 bg-cl4 bg-opacity-30 shadow-md border-slate-500 ">
    <div className='flex justify-start text-xl mb-5'>
        <div className='ml-2'>Logs</div>
    </div>
    <table className='w-full text-sm'>
        <thead>
        <tr className='p-2.5 text-center border-b border-b-slate-400'>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Last Login</td>
        </tr>
        </thead>
        <tbody>
        <tr className='p-2.5 text-center'>
            <td><div className=''>Admin Admin</div></td>
            <td>admin@admin.com</td>
            <td>admin</td>
            <td>2024.01.17</td>
        </tr>
        <tr className='p-2.5 text-center'>
            <td><div className=''>Admin2 Admin2</div></td>
            <td>admin2@admin2.com</td>
            <td>admin2</td>
            <td>2024.01.17</td>
        </tr>
        </tbody>
    </table>
    </div>
  )
}

export default userslog