import { QRCode } from 'react-qr-code';
import { useState } from 'react';

const Receive = () => {

  const [copy, setCopy] = useState(false);

  const address = localStorage.getItem('solanaPublicKey');

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopy(true);
      setTimeout(() => { setCopy(false) }, 1500);
    })
  }
  return (
    <div className='bg-gray-600 rounded-2xl'>
      <div>
        <h1 className="flex justify-center text-white font-bold text-3xl mt-5 mb-10" >Deposit</h1>
      </div>

      <div>
        <div className="flex justify-center items-center border-1 rounded-2xl bg-white mx-20 mb-10 p-5">
          <QRCode value={address} size={200} />
        </div>

        <div className='flex justify-center mb-10 text-center'>
          <div className='w-60'>
            <p className={`text-white font-mono break-all leading-6 inline-block ${copy ? 'bg-blue-900/30' : null} `} >{address}</p>
           
          </div>
        </div>


        <div className='flex justify-center  mb-10'>
          <button onClick={handleCopy} className="rounded-xl text-blue-500 bg-blue-950 font-bold text-lg w-50 px-5 py-2 hover:scale-105 "> {copy ? 'Copied' : "Copy address"}</button>
        </div>

        <div className="flex justify-center text-gray-800 text-center mb-10  ">
          <p className=' w-60 '>This address can only receive assets on Solana</p>
        </div>

      </div>


    </div>
  )
}

export default Receive