import { NavLink } from "react-router-dom";



const NavBar = () => {
  const linkClasses = ({ isActive }: {isActive: boolean})  => `py-1 px-4 hover:bg-blue-500 rounded-lg transition-all duration-500 ease-in-out ${isActive ? "bg-blue-500" : ""}`;
  const logsign = ({isActive}: {isActive: boolean}) => `py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-500 ease-in-out ${isActive ? "bg-blue-900" : ""}`;



  return (
    <div className="text-white h-[10vh] flex justify-evenly items-center bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shadow-xl relative z-10 shadow-black/5">
        <div className="flex items-center gap-4">
            <img src="/Financial Tech Logo Design.png" alt="Digital Bank Logo" className="h-[35px] rounded-lg"/>
            <p className="text-[20px] font-bold">Digital-Bank</p>
        </div>
        <div className="flex gap-2 text-[16px] font-[600]">
            <NavLink to={'/'} className={linkClasses}>Home</NavLink>
            <NavLink to={'/features'} className={linkClasses}>Features</NavLink>
            <NavLink to={'/services'} className={linkClasses}>Service</NavLink>
            <NavLink to={'/about'} className={linkClasses}>About</NavLink>
            <NavLink to={'/contact-us'} className={linkClasses}>Contact</NavLink>
        </div>
        <div className="flex gap-2 font-[600]">
            <NavLink to={'/register'} className={logsign}>Open Account</NavLink>
            <NavLink to={'/login'} className={logsign}>Sign In</NavLink>
        </div>
    </div>
  )
}

export default NavBar