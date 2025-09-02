import { useState } from 'react';
import {createBrowserRouter, Outlet} from 'react-router-dom';
import Home from './Components/HomeComponent';
import WalletPassword from './Components/WalletPassword';
import UnlockPassword from './Components/UnlockPassword';


const AppLayout = () => {

  return (
    <div  className='h-screen w-screen flex justify-center items-center bg-slate-800 backdrop-blur-md'>
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'mnemonics',
        element: <Home />
      },
      {
        path: 'walletpassword',
        element: <WalletPassword />
      },
      {
        path: 'unlockpassword',
        element: <UnlockPassword />
      },
    ]
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center bg-slate-800'>
        < Home />
      </div>

    </>
  )
}

export default AppRouter
