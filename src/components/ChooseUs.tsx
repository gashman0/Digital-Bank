import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faMoneyBillTrendUp, faClock, faMobileButton } from "@fortawesome/free-solid-svg-icons";

const ChooseUs = () => {
  return (
    <>
        <div className="flex flex-col items-center py-19 bg-gray-100">
            <p className="text-[22px] pb-8 font-[600]">Why Choose Us</p>
            <div className="flex justify-around gap-8">
                <div className="w-[18vw] h-[25vh] px-2 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} className='text-4xl py-3'/>
                  <p className='font-[700] text-[18px]'>Fast Transfers</p>
                  <p className='text-center'>Instant and reliable transactions worldwide</p>
                </div>
                <div className="w-[18vw] h-[25vh] px-2 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white  flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faWallet} className='text-4xl py-3' />
                  <p className='font-[700] text-[18px]'>No hidden fees</p>
                  <p>Transparent pricing with no surprises</p>
                </div>
                <div className="w-[18vw] h-[25vh] px-2 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white  flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className='text-4xl py-3' />
                  <p className='font-[700] text-[18px]'>24/7 Support</p>
                  <p>We're here for you anytime, any day.</p>
                </div>
                <div className="w-[18vw] h-[25vh] px-2 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white  flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faMobileButton} className='text-4xl py-3' />
                  <p className='font-[700] text-[18px]'>Mobile Banking</p>
                  <p>Control your finances from your phone</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ChooseUs