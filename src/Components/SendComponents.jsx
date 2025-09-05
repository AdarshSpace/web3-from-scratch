import React from 'react'

const Send = () => {
    
    return (
        <div>
            <div className='bg-gray-600 p-10 w-140 rounded-2xl'>
                <div className='flex justify-center mb-10'>
                    <h1 className='text-white font-bold text-3xl'>Send</h1>
                </div>

                <div className='mb-8'>
                    <label className='text-white text-xl mb-2'>Amount </label> <br />
                    <input type="number" className='p-3 border-1 text-white rounded-2xl w-full' placeholder='0.00' />
                </div>

                <div className='mb-10'>
                    <label className='text-white text-xl mb-2' > Recipient address </label> <br />
                    <input type="text" className='flex justify-center px-5 py-3 rounded-2xl border-1 text-white w-full' placeholder='Enter the Solana address' />
                </div>

                <div className='flex'>
                    <button className='text-white font-bold text-2xl border-1 m-2 px-3 py-2 rounded-2xl w-full' >Cancel</button>
                    <button className='text-white font-bold text-2xl border-1 m-2 px-3 py-2 rounded-2xl w-full' >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Send