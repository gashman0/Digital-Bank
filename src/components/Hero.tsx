

const Hero = () => {
  return (
    <>
      <div className="py-[80px] bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] flex justify-center items-center text-center ">
        <div>
          <p className="text-white text-[24px] font-[900] py-4">Bank Smarter, Live Better</p>
          <p className="text-white text-[14px] font-[500] mb-8">Experience seamless digital banking designed for modern lifestyles. No hidden fees. Full control. <br /> Anywhere, anytime.</p>
          <button className="bg-white py-2 px-6 rounded-[6px] font-[600] text-blue-900 text-[10px] hover:bg-blue-700 hover:text-white hover:border hover:scale-105 transition-all duration-400">Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Hero