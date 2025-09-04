
import React from 'react';
import { Landmark, ArrowLeftRight, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-gray-600  border-gray-400 border-1 rounded-2xl'>

                <div className='flex justify-between m-3'>
                    <div className='flex justify-center items-center text-xl w-10 h-10 rounded-full bg-white border-1'> A1</div>
                    
                    <div className='flex border-1 rounded-full p-2'>
                        <p className='mx-2'>E</p>
                        <button className=' mx-3'>Wallet 1</button>
                        <p className='mx-2'>C</p>
                    </div>
                    <div className='flex justify-center items-center text-xl w-10 h-10 rounded-full bg-white border-1 '>S</div>
                </div>

                <div className='mx-15'>
                    <div className='flex gap-5 justify-between mb-12 '>
                        <p>Tokens</p>
                        <p>Defi</p>
                        <p>NFTs</p>
                        <p>Activity</p>
                    </div>
                    <div className='mb-12 flex justify-center'>
                        <h1 className='text-white text-5xl'> $ 100 </h1>
                    </div>

                    <div className='mb-1.5 flex justify-between gap-5'>
                        <button className=' text-white  w-13 h-13 flex justify-center items-center border-1 rounded-full'> <Landmark size={30} />   </button>
                        <button className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowDown size={30} />  </button>
                        <button className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowUp size={30} />   </button>
                        <button className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowLeftRight size={30} /> </button>
                    </div>

                    <div className='mb-10 flex justify-between '>
                        <p>Cash</p>
                        <p>Receive</p>
                        <p>Send</p>
                        <p>Swap</p>
                    </div>

                </div>

                <hr />


                <div className='flex justify-between mx-3  my-5'>
                    <div className='flex justify-center '>
                        <div className='flex justify-center items-center text-3xl w-12 h-12 rounded-full bg-white border-1 mr-3'>S</div>
                        <div>
                            <h3 className='text-white text-2xl'>Solana</h3>
                            <p>0 SOL</p>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-white text-2xl'>$0.00</h3>
                        <p>$0.00</p>
                    </div>
                </div>

                <hr />

                <div className='flex justify-between mx-3  my-5'>
                    <div className='flex justify-center '>
                        <div className='flex justify-center items-center text-3xl w-12 h-12 rounded-full bg-white border-1 mr-3'>B</div>
                        <div>
                            <h3 className='text-white text-2xl'>Bitcoin</h3>
                            <p>0 SOL</p>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-white text-2xl'>$0.00</h3>
                        <p>$0.00</p>
                    </div>
                </div>

                <hr />

                <div className='flex justify-between mx-3  my-5'>
                    <div className='flex justify-center '>
                        <div className='flex justify-center items-center text-3xl w-12 h-12 rounded-full bg-white border-1 mr-3'>E</div>
                        <div>
                            <h3 className='text-white text-2xl'>Ethereum</h3>
                            <p>0 Wei</p>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-white text-2xl'>$0.00</h3>
                        <p>$0.00</p>
                    </div>
                </div>

                <hr />

                <div>
                    <div className=' flex justify-between text-white mx-5 my-3'>
                        <p>Portfolio</p>
                        <p>Swap</p>
                        <p>Explore</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard