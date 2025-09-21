

const AccountType = () => {
  return (
    <>
        <div className="flex flex-col items-center py-19">
            <p className="text-[22px] pb-8 font-[600]">Account Types</p>
            <div className="flex justify-around gap-8">
                <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white py-4">
                  <p className='font-[700] text-[18px] text-center py-2'>Savings</p>
                  <p className='text-center'>Secure savings account with competitive interest rates.</p>
                </div>
                <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white py-4">
                  <p className='font-[700] text-[18px] text-center py-2'>Checking</p>
                  <p className="text-center">Flexible access and no monthly fees.</p>
                </div>
                <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white py-4">
                  <p className='font-[700] text-[18px] text-center py-2'>Student</p>
                  <p className="text-center">Designed for students with smart budgeting tools.</p>
                </div>
                <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white py-4">
                  <p className='font-[700] text-[18px] text-center py-2'>Business</p>
                  <p className="text-center">Banking that grows with your business needs.</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default AccountType