import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div className="p-6">
      <p className="text-xl font-medium mb-4">My Appointments</p>

      <div className="flex flex-col gap-4">
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="flex items-center gap-4 border p-4 rounded">
            <div>
            <img
              src={item.image}
              alt=""
              className="w-32 bg-indigo-50 h-32 rounded object-cover "
            />
             </div>
            <div className='flex-1 text-sm text-zinc-600'>
             <p className='text-neutral-800 font-semibold'>{item.name}</p>
             <p>{item.speciality}</p>
             <p className='text-neutral-700 fontmedium mt-1'>Address:</p>
             <p className='text-xs'>{item.address.line1}</p>
             <p className='text-xs'>{item.address.line2}</p>
             <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, July, 2025 | 8:30 PM</p> 
            </div>
            <div>
              <div className="flex flex-column gap-2 justify-end">
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-blue-500 hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white transition-all duration-300'>Cancel Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
