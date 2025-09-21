

const ClientsTalks = () => {
  return (
    <>
      <div className="flex flex-col items-center py-19 bg-gray-100">
        <p className="text-[22px] pb-8 font-[600]">Our Clients say</p>

        {/* Outer container with overflow hidden */}
        <div className="overflow-hidden w-full">
          {/* Track with two copies */}
          <div className="flex flex-nowrap gap-8 min-w-max animate-[marquee_40s_linear_infinite] marquee-paused">
            {/* First copy */}
            <span className="flex gap-8">
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>Digital bank has made me save and spend responsively.</p>
                <p className="text-[14px] font-[400] pt-2">Chika, Enugu</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>I can now run my business swiftly without lots of failed transactions.</p>
                <p className="text-[14px] font-[400] pt-2">Ebuka, Nsukka</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>The mobile app is very user friendly, easy to set up and use from your comfort zone.</p>
                <p className="text-[14px] font-[400] pt-2">James, Lagos</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>I have been enjoying transactions without bank charges and vats, I recommend.</p>
                <p className="text-[14px] font-[400] pt-2">Juliet, Owerri</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>I now manage and track how I spend money and everything I spend on. Digital bank is good.</p>
                <p className="text-[14px] font-[400] pt-2">Haruna, Abuja</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>There is a peace of mind that comes with using this bank, can't just explain. Really good.</p>
                <p className="text-[14px] font-[400] pt-2">Femi, Lagos</p>
              </div>
            </span>

            {/* Second copy */}
            <span className="flex gap-8">
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>Digital bank has made me save and spend responsively.</p>
                <p className="text-[14px] font-[400] pt-2">Chika, Enugu</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>I can now run my business swiftly without lots of failed transactions.</p>
                <p className="text-[14px] font-[400] pt-2">Ebuka, Nsukka</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>The mobile app is very user friendly, easy to set up and use from your comfort zone.</p>
                <p className="text-[14px] font-[400] pt-2">James, Lagos</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>I have been enjoying transactions without bank charges and vats, I recommend.</p>
                <p className="text-[14px] font-[400] pt-2">Juliet, Owerri</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>I now manage and track how I spend money and everything I spend on. Digital bank is good.</p>
                <p className="text-[14px] font-[400] pt-2">Haruna, Abuja</p>
              </div>
              <div className="w-[18vw] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:scale-105 transition-all duration-400 bg-white p-4 text-center">
                <p>There is a peace of mind that comes with using this bank, can't just explain. Really good.</p>
                <p className="text-[14px] font-[400] pt-2">Femi, Lagos</p>
              </div>
            </span>            

          </div>
        </div>
      </div>
    </>
  )
}

export default ClientsTalks
