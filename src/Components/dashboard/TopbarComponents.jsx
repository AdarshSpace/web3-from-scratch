

const TopbarComponents = () => {
    return (
        <div className='flex justify-between m-3'>
            <div className='flex justify-center items-center text-xl w-10 h-10 rounded-full bg-white border-1'> A1</div>

            <div className='flex border-1 rounded-full p-2'>
                <p className='mx-2'>E</p>
                <button className=' mx-3'>Wallet 1</button>
                <p className='mx-2'>C</p>
            </div>
            <div className='flex justify-center items-center text-xl w-10 h-10 rounded-full bg-white border-1 '>S</div>
        </div>
    )
}

export default TopbarComponents