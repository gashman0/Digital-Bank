

const ContactUs = () => {
  return (
    <>
        <div className="flex flex-col items-center py-19">
            <p className="text-[22px] pb-8 font-[600]">Contact Us</p>
            <div className="">
                <form action="">
                    <input type="text" placeholder="Your Name" className="border border-gray-300 py-4 px-5 rounded-[5px] w-[40vw] focus:outline-none focus:border-blue-800 focus:border-2"/><br />
                    <input type="text" placeholder="Your Email" className="border border-gray-300 py-4 px-5 rounded-[5px] w-[40vw] focus:outline-none focus:border-blue-800 focus:border-2 my-4"/><br />
                    <textarea placeholder="Your Message" className="border border-gray-300 py-4 px-5 rounded-[5px] w-[40vw] focus:outline-none focus:border-blue-800 focus:border-2"></textarea><br />
                    <button className="text-white font-[600] py-3 rounded-[5px] text-center w-[40vw] bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] my-2 hover:scale-101 transition-all duration-400 cursor-pointer">Send Message</button>
                </form>
                
            </div>
            
        </div>
    </>
  )
}

export default ContactUs