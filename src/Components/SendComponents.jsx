import {Connection, Keypair, Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import { useState } from 'react';
import bs58 from 'bs58';


const Send = () => {

    const [amount, setAmount] = useState(0);
    const [recipientKey, setRecipientKey] = useState('');
    const privateKey = localStorage.getItem('solanaPrivateKey');
    console.log(privateKey);
    

    async function sendTransaction(privateKey, to, amount){
        const connection = new Connection("https://api.devnet.solana.com", "confirmed");
        const fromKeypair = Keypair.fromSecretKey(bs58.decode(privateKey));
        const toPublicKey = new PublicKey(to);

        try{
            // get recent blockhash
            const latestBlockhash = await connection.getLatestBlockhash();

            // Create Transaction 
            const transaction = new Transaction();
            transaction.recentBlockhash = latestBlockhash.blockhash;
            transaction.feePayer = fromKeypair.publicKey;

            // Add the transfer instruction 
            transaction.add(
                SystemProgram.transfer({
                    fromPubkey: fromKeypair.publicKey,
                    toPubkey: toPublicKey,
                    lamports: amount * LAMPORTS_PER_SOL
                })
            );

            // sign the transaction 
            transaction.sign(fromKeypair);

            // send the raw transaction 
            const signature = await connection.sendRawTransaction(
                transaction.serialize(),
                {
                    skipPreflight: false,
                    preflightCommitment: 'confirmed'
                }
            );

            console.log('Transaction send : ', signature);

            // Confirm Transaction 
            const confirmation = await connection.confirmTransaction({
                signature,
                blockhash: latestBlockhash.blockhash,
                latestValidBlockHeight: latestBlockhash.latestValidBlockHeight
            });

            if(confirmation.value.error){
                throw new Error(`Transaction failed : ${confirmation.value.error}`);
            }

            console.log('Transaction confirmed : ', confirmation);

            return signature;
                       
        }
        catch(error){
            console.log('Error : sendTransaction shows error', error)
        }
    }

    return (
        <div>
            <div className='bg-gray-600 p-10 w-140 rounded-2xl'>
                <div className='flex justify-center mb-10'>
                    <h1 className='text-white font-bold text-3xl'>Send</h1>
                </div>

                <div className='mb-8'>
                    <label className='text-white text-xl mb-2'>Amount </label> <br />
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} className='p-3 border-1 text-white rounded-2xl w-full' placeholder='0.00' />
                </div>

                <div className='mb-10'>
                    <label className='text-white text-xl mb-2' > Recipient address </label> <br />
                    <input type="text" value={recipientKey} onChange={(e)=> setRecipientKey(e.target.value)} className='flex justify-center px-5 py-3 rounded-2xl border-1 text-white w-full' placeholder='Enter the Solana address' />
                </div>

                <div className='flex'>
                    <button className='text-white font-bold text-2xl border-1 m-2 px-3 py-2 rounded-2xl w-full' >Cancel</button>
                    <button className='text-white font-bold text-2xl border-1 m-2 px-3 py-2 rounded-2xl w-full' onClick={()=>sendTransaction(privateKey, recipientKey, amount)} >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Send