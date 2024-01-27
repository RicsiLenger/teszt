import React from 'react'
import Chart from '../chart/chart'
const PartnerPage = () => {
  return (
    <div className=' text-cl5 mr-5 ml-5'>
      <div className='shadow-md rounded-xl p-8 w-full md:max-w-2xl md:mx-auto border border-slate-700 bg-cl4 bg-opacity-50 mb-5 flex justify-between mt-5'>
        <h1 className=' text-2xl'>Admin & Admin Inc.</h1>
        <h1 className='mr-28'>"Logo"</h1>
      </div>
      <div className='shadow-md rounded-xl p-8 w-full md:max-w-2xl md:mx-auto border border-slate-700 bg-cl4 bg-opacity-50 min-h-96'>
      <table className='w-full text-sm'>
            <thead>
            <tr className='p-2.5 text-center border-b border-b-slate-'>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Created At</td>
                <td>Status</td>
            </tr>
            </thead>
            <tbody>
            <tr className='p-2.5 text-center'>
                <td><div className=''>Admin Admin</div></td>
                <td>admin@admin.com</td>
                <td>admin</td>
                <td>2024.01.17</td>
                <td>active</td>
            </tr>
            </tbody>
        </table>
      </div>
      <div className='shadow-md rounded-xl p-8 w-full md:max-w-2xl md:mx-auto border border-slate-700 bg-cl4 bg-opacity-50 mb-5 mt-5'>
        <Chart />
      </div>
    </div>
  )
}

export default PartnerPage