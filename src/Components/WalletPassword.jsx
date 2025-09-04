import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Eye, EyeOff } from 'lucide-react';

const WalletPassword = () => {

    const nevigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    function matchPassword(){
        if(password.length < 8) {return console.log('Error : password must be atleast 8 chars');
        }

        if(password === confirmPassword) {
            console.log('Password : ', password); 

            // advice use encrypted to store in local storage
            localStorage.setItem('WalletPassword', password);   
                  
            return nevigate('/unlockpassword') }

        else return console.log("Error : password didn't matched ");      
    }

  return (
    <div>
        <div className='border-1 border-gray-300/20 rounded-xl bg-gray-500/40 p-10'>

            <div className=' mb-10'>   
                <h1 className='flex justify-center text-white font-bold text-3xl '>Create Wallet Password</h1>
                <p className='flex justify-center text-white'>Set a secure password to protect your wallet</p>
            </div>

            <div className='mb-5 relative'>
                <label className='text-white' > Set password (min 8 chars)</label> <br />
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className='border-1 text-white w-full px-5 py-3 mt-2 rounded-2xl' placeholder='Enter Strong Password' />
                <button className='absolute right-5 bottom-1/9 -translate-y-1/4 text-white' onClick={() => setShowPassword(!showPassword)}> {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>} </button>
            </div>

            <div className='mb-5'>
                <label className='text-white ' > Confirm Password</label> <br />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='border-1 rounded-2xl text-white w-full px-5 py-3 mt-2' placeholder='Re-enter your password' />
            </div>

            <div className='flex gap-5'>
                <button className='font-bold text-white text-xl border-1 rounded-xl py-2 px-10 my-2'> ← Back</button>
                <button onClick={matchPassword}  className='font-bold text-white text-xl border-1 rounded-xl py-2 px-5 my-2'>Create wallet</button>
            </div>
        </div>
    </div>
  )
}

export default WalletPassword