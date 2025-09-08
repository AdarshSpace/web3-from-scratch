
import React from 'react';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { Landmark, ArrowLeftRight, ArrowUp, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransactionCardComponents = ({balanceUSD, setBalanceSOL, setBalanceUSD}) => {

    const navigate = useNavigate();

    const publicKey = localStorage.getItem('solana Public key');

    async function balance(PubkeyString){
        const connection = new Connection("https://api.devnet.solana.com", "confirmed");

        try{
            const pubkey = new PublicKey(PubkeyString);

            // fetch balance in lamports 
            const balanceLamports = await connection.getBalance(pubkey);

            // converts Lamports to Sol
            const balanceSol = balanceLamports/LAMPORTS_PER_SOL;

             // Fetch current SOL price in USD
            const priceResponse = await fetch(
                "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
              );
            const priceData = await priceResponse.json();
            const solPriceUSD = priceData.solana.usd;

            // convert SOL → USD
            const balanceUSD = balanceSol * solPriceUSD;

            setBalanceSOL(parseFloat(balanceSol.toFixed(4)));
            setBalanceUSD(balanceUSD.toFixed(2))

            console.log(balanceSol, balanceUSD);

        }
        catch (error) {
            console.log("Error : ", error);           
        }
    }

     balance(publicKey);
     

    return (  
            <div className='mx-15'>
                <div className='flex gap-5 justify-between mb-12 '>
                    <p>Tokens</p>
                    <p>Defi</p>
                    <p>NFTs</p>
                    <p>Activity</p>
                </div>
                <div className='mb-12 flex justify-center'>
                    <h1 className='text-white text-5xl'> $ {balanceUSD} </h1>
                </div>

                <div className='mb-1.5 flex justify-between gap-5'>
                    <button onClick={()=> navigate('/cash')} className=' text-white  w-13 h-13 flex justify-center items-center border-1 rounded-full'> <Landmark size={30} />   </button>
                    <button onClick={()=> navigate('/receive')} className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowDown size={30} />  </button>
                    <button onClick={()=> navigate('/send')} className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowUp size={30} />   </button>
                    <button onClick={()=> navigate('/swap')} className=' text-white  w-13 h-13 flex justify-center items-center  border-1 rounded-full'> <ArrowLeftRight size={30} /> </button>
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