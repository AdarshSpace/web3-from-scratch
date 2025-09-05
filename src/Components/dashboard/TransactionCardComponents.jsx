
import React from 'react'
import { Landmark, ArrowLeftRight, ArrowUp, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransactionCardComponents = () => {

    const navigate = useNavigate();

    function cash(){
        console.log('cash');
        
    }

    function swap(){
        console.log('swap');      
    }

    function send(){
        console.log('send'); 
        navigate('/send');      
    };

    function recieve(){
        console.log('recieve');
        navigate('/receive')        
    };

    return (  
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
                    <button onClick={cash} className=' text-white  w-13 h-13 flex justify-center items-center border-1 rounded-full'> <Landmark size={30} />   </button>
                    <button onClick={recieve} className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowDown size={30} />  </button>
                    <button onClick={send} className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowUp size={30} />   </button>
                    <button onClick={swap} className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowLeftRight size={30} /> </button>
                </div>

                <div className='mb-10 flex justify-between '>
                    <p>Cash</p>
                    <p>Receive</p>
                    <p>Send</p>
                    <p>Swap</p>
                </div>

            </div>
    )
}

export default TransactionCardComponents