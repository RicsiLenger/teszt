'use client'

import React, { use, useState } from 'react'


const addPartner = () => {

  const [partner, setPartner] = useState({
    name:"",
    location: "",
    phone: "",
    description: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (partner) {
      try {
        const response = await fetch("/api/addPartner", {
          method: "POST",
          body: JSON.stringify(partner
            
            ),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          return response;
        } else {
          console.error("Hiba a szerver válaszában:", response.statusText);
          return response;
        }
      } catch (error) {
        console.error("Hiba a fetch hívás során:", error);
        return null;
      }
    }
    return null;
  }

  return (
    <div className='flex items-center justify-center h-screen '>
      <form action='' onSubmit={handleSubmit} className='shadow-md rounded-xl p-8 w-full md:max-w-2xl md:mx-auto border border-slate-700 bg-cl4 bg-opacity-50'>
            <h2 className='text-gray-100 mb-8 border-b border-slate-800'>Add Partner</h2>
            <input  name='name' type='text' placeholder='Partner name' value={partner.name} onChange={(e) => setPartner((p) => ({...p, name: e.target.value}))} className='mb-4 px-4 py-2 border border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl' required ></input>
            <input name= 'location' type='text' placeholder='Location' value={partner.location} onChange={(e) => setPartner((p) => ({...p, location: e.target.value}))} className='mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl'></input>
            <input name= 'phone' type='text' placeholder='Phone number' value={partner.phone} onChange={(e) => setPartner((p) => ({...p, phone: e.target.value}))} className='mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl'></input>
            <textarea
              name='desc'
              value={partner.description}
              onChange={(e) => setPartner((p) => ({...p, description: e.target.value}))}
              rows="6"
              placeholder='Description'
              className='mb-4 px-4 py-2 border w-full bg-transparent max-h-60 border-solid border-b-2 border-r-2 border-slate-800 rounded-xl' 
            ></textarea>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default addPartner