import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";



const DashboardLayout: React.FC = () => {
  return (
    <>
        <DashboardNavBar title={"active"} userName={"Gustavo"}/>
        <Outlet />
    </>
  )
}

export default DashboardLayout