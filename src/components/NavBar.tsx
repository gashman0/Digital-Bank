import { NavLink } from "react-router-dom";

NavLink

const NavBar = () => {
  return (
    <div className="text-white h-[10vh] flex justify-evenly items-center bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shadow-xl relative z-10 shadow-black/5">
        <div className="flex items-center gap-4">
            <img src="/Financial Tech Logo Design.png" alt="Digital Bank Logo" className="h-[35px] rounded-lg"/>
            <p className="text-[20px] font-bold">Digital-Bank</p>
        </div>
        <div className="flex gap-2 text-[16px] font-[600]">
            <button className="py-1 px-4 hover:bg-blue-500 rounded-lg transition-all duration-500 ease-in-out">Home</button>
            <button className="py-1 px-4 hover:bg-blue-500 rounded-lg transition-all duration-500 ease-in-out">Features</button>
            <button className="py-1 px-4 hover:bg-blue-500 rounded-lg transition-all duration-500 ease-in-out">Service</button>
            <button className="py-1 px-4 hover:bg-blue-500 rounded-lg transition-all duration-500 ease-in-out">About</button>
            <button className="py-1 px-4 hover:bg-blue-500 rounded-lg transition-all duration-500 ease-in-out">Contact</button>
        </div>
        <div className="flex gap-2 font-[600]">
            <button className="py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-500 ease-in-out">Open Account</button>
            <button className="py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-500 ease-in-out">Sign In</button>
        </div>
    </div>
  )
}

export default NavBar