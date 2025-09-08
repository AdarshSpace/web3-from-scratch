
import React, {useState} from 'react';
import TransactionCardComponents from './dashboard/TransactionCardComponents';
import TopbarComponents from './dashboard/TopbarComponents';
import AssetRowComponents from './dashboard/AssetRowComponents';
import QuickActionsComponents from './dashboard/QuickActionsComponents';


const Dashboard = () => {
    const [balanceSOL, setBalanceSOL] = useState(0);
    const [balanceUSD, setBalanceUSD] = useState(0);

  
    return (

        <div className='bg-gray-600  border-gray-400 border-1 rounded-2xl'>

            <TopbarComponents />

            <TransactionCardComponents  balanceUSD={balanceUSD} setBalanceSOL={setBalanceSOL} setBalanceUSD={setBalanceUSD}/>

            <hr />

            <AssetRowComponents balanceSOL={balanceSOL}  balanceUSD={balanceUSD}/> 

            <hr />

            <QuickActionsComponents />

        </div>
    )
}

export default Dashboard