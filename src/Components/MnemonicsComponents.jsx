import React, { useState } from 'react';
import { generateMnemonics } from 'bip39';

const Mnemonics = () => {

    const [copied, setCopied] = useState(null);
    const value = ['mind', 'toddler', 'laundry', 'section', 'interest', 'better', 'eagle', 'escape', 'modify', 'club', 'purity', 'elite']

    console.log(navigator); // tells info about the browser

    //const words = generateMnemonics(128);
    const handleCopy = async (text, index) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(text)
            setTimeout(() => setCopied(null), 1500);
        }
        catch {
            console.log('Error: handleCopy shows error');

        }
    }

    return (
        <div>
            <div className='w-[600px] h-[730px] bg-gray-600 rounded-2xl m-5'>

                <h1 className='flex justify-center text-white font-bold text-3xl pt-8'>Your Recovery Phrase</h1>
                <p className='flex justify-center pb-8 text-gray-300'> Write these words in Order</p>

                <div className='flex items-center '>

                    <div className='bg-gray-500 rounded-2xl p-0 m-0 mx-10 my-0'>
                        <div className='grid grid-cols-4 gap-x-4 gap-y-4 bg-gray-500 rounded-2xl p-5 py-10 mx-5 mt-5'>
                            {value.map((item, index) => {
                                return (
                                    <div className='border-2 flex items-center border-gray-500 rounded-xl bg-gray-600 px-1 h-[50px] '>
                                        <p className='text-gray-400  mx-1 mr-2 '> {index + 1}.</p>
                                        <p className='text-gray-300  mx-0 whitespace-nowrap mr-2'>{item}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='border-1 border-red-500 bg-red-500/20 rounded-2xl mx-11 mb-5 p-2 '>
                                <p className='text-red-300 p-2'> ⚠️  Never Share this Phrase with anyone. These words can steal your assets. Store it securely offline </p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center  gap-5 bg-gray-500 border-1 border-gray-400 rounded-xl px-5 py-2 m-2 mx-11 mt-8 mb-6'>
                    <input type="checkbox" className='w-6 h-5 rounded-4xl accent-green-500 cursor-pointer' />
                    <p className='text-white text-l'>I've saved this phrase in Safe Location</p>
                </div>

                <div className='flex justify-between mx-12 my-2 py-2'>
                    <button className='border-1 text-white py-2 px-22 rounded-xl font-black'> ← Back</button>
                    <button className='border-1 text-white py-4 px-14 rounded-xl font-black '> Create Password</button>
                </div>
            </div>
        </div>
    )
}

export default Mnemonics