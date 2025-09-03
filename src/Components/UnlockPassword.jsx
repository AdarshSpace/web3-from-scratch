
import { useState } from 'react';
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';

const UnlockPassword = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className='border-1 border-gray-300/20 rounded-xl bg-gray-500/40 p-10'>

                <div className='flex justify-center item-center'>
                    <div className='flex justify-center item-center bg-slate-800 shadow-2xl px-5 py-3 mb-5 rounded-2xl'>
                        <LockKeyhole size={40}  className='text-white/90 drop-shadow-[0_0_12px_#00f] drop-shadow-[0_0_24px_#00f]'/>
                    </div>
                </div>

                <div className=' mb-10'>
                    <h1 className='flex justify-center text-white font-bold text-3xl '>Unlock Wallet</h1>
                    <p className='flex justify-center text-white'>Enter your password to access the wallet</p>
                </div>

                <div className='mb-5 relative'>
                    <label className='text-white' > password</label> <br />
                    <input type={showPassword ? 'text' : 'password'} className='border-1 text-white w-full px-5 py-3 mt-2 rounded-2xl' placeholder='Enter Password' />
                    <button className='absolute right-5 bottom-1/9 -translate-y-1/4 text-white ' onClick={() => setShowPassword(!showPassword)}> {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} </button>
                </div>

                <div className='flex gap-5'>
                    <button className='font-bold text-black bg-white text-xl border-1 rounded-xl w-full py-2 px-5 my-2 cursor-pointer'>Unlock</button>
                </div>
            </div>
        </div>
    )
}

export default UnlockPassword