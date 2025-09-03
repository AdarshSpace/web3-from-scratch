
import React from 'react';
import {Landmark, ArrowLeftRight, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
        <div className='bg-gray-600 p-10 border-gray-400 border-1 rounded-2xl'>
            <div className='mb-5'>
                <h1 className='text-white text-2xl'> $ 100 </h1>
            </div>

            <div className='mb-5'>
                <button className=' text-white m-3 px-3 py-2 border-1 rounded-2xl'> <Landmark size={40}/></button>
                <button className=' text-white m-3 px-3 py-2 border-1 rounded-2xl'> <ArrowDown size={40}/></button>
                <button className=' text-white m-3 px-3 py-2 border-1 rounded-2xl'> <ArrowUp size={40} /></button>
                <button className=' text-white m-3 px-3 py-2 border-1 rounded-2xl'><ArrowLeftRight size={40}/></button>
            </div>

            <div>
                <h3 className=''>Transaction History</h3>
            </div>

        </div>
    </div>
  )
}

export default Dashboard