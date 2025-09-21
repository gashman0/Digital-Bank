import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
        <div className="h-[55vh] bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] px-8">

          <div className="h-[60%] flex gap-8 justify-center items-center text-white">
            <div className="w-[16vw]">
              <p className="text-[18px] font-[700] py-4">Company</p>
              <p className="text-gray-200 py-1">About Us</p>
              <p className="text-gray-200 py-1">Careers</p>
              <p className="text-gray-200 py-1">Blog</p>
              <p className="text-gray-200 py-1">Press</p>
            </div>
            <div className="w-[16vw]">
              <p className="text-[18px] font-[700] py-4">Products</p>
              <p className="text-gray-200 py-1">Personal Banking</p>
              <p className="text-gray-200 py-1">Business Banking</p>
              <p className="text-gray-200 py-1">Loans</p>
              <p className="text-gray-200 py-1">Mobile App</p>
            </div>
            <div className="w-[16vw]">
              <p className="text-[18px] font-[700] py-4">Support</p>
              <p className="text-gray-200 py-1">Help Center</p>
              <p className="text-gray-200 py-1">Security</p>
              <p className="text-gray-200 py-1">Privacy Policy</p>
              <p className="text-gray-200 py-1">Terms and Conditions</p>
            </div>
            <div className="">
              <p className="text-[18px] font-[700] py-4">Newsletter</p>
              <form action="">
                <label htmlFor="" className="font-[500]">Subscribe to the latest updates</label><br />
                <input type="text" placeholder="Enter your email" className="w-[20vw] bg-white text-black px-4 py-2 rounded my-1"/><br />
                <button className="border w-[20vw] px-4 py-2 rounded hover:scale-101 transition-all duration-400 cursor-pointer">Submit</button>
              </form>
            </div>
          </div>
          <div className="h-[20%] flex gap-16 justify-center items-center">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff"}} className='cursor-pointer text-3xl'/>
            <FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff"}} className='cursor-pointer text-3xl'/>
            <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}} className='cursor-pointer text-3xl'/>
            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}} className='cursor-pointer text-3xl'/>
          </div>
          <div className="border-t border-gray-300 h-[15%] flex items-center justify-center text-white">
            <p>© 2025 Digital Bank. All rights reserved.</p>
          </div>
        </div>
    </>
  )
}

export default Footer