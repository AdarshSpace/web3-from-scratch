import { QRCode } from 'react-qr-code';

const Receive = () => {

  const address = '0x7c5f85237c8eE80B61A679b8D33a6406beb65309';

  return (
    <div className='bg-black'>
       <div>
          <h1 className="flex justify-center text-white font-bold text-3xl mt-2 mb-10" >Deposit</h1>
       </div>

      <div>
          <div className="flex justify-center items-center border-1 rounded-2xl bg-white mx-20 mb-10 p-5">
              <QRCode value={address} size={200} />
          </div>

          <div className="text-white">
            <p className="text-white mt-2">{address}</p>
            <button className="flex justify-center border-1 rounded-2xl text-white font-bold text-3xl p-2 mt-2 mb-10">Copy address</button>
            <p>This address can only receive assets on Ethereum</p>
          </div>

      </div>
      <div>

      </div>

    </div>
  )
}

export default Receive