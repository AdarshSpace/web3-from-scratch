
import React from 'react';
import TransactionCardComponents from './dashboard/TransactionCardComponents';
import TopbarComponents from './dashboard/TopbarComponents';
import AssetRowComponents from './dashboard/AssetRowComponents';
import QuickActionsComponents from './dashboard/QuickActionsComponents';


const Dashboard = () => {
    return (

        <div className='bg-gray-600  border-gray-400 border-1 rounded-2xl'>

            <TopbarComponents />

            <TransactionCardComponents />

            <hr />

            <AssetRowComponents />

            <hr />

            <QuickActionsComponents />

        </div>
    )
}

export default Dashboard