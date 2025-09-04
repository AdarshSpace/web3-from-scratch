import React from 'react'

const AssetRowComponents = () => {
    return (
        <div className='flex justify-between mx-3  my-3'>
            <div className='flex justify-center '>
                <div className='flex justify-center items-center text-3xl w-12 h-12 rounded-full bg-white border-1 mr-3'>S</div>
                <div>
                    <h3 className='text-white text-xl'>Solana</h3>
                    <p className='text-gray-400'>0 SOL</p>
                </div>
            </div>
            <div className=''>
                <h3 className='text-white text-2xl'>$0.00</h3>
                <p className='ml-5 text-gray-400'>$0.00</p>
            </div>
        </div>
    )
}

export default AssetRowComponents