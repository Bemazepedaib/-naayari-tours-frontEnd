
import { React } from 'react'
import NavbarAdmin from '../elements/AdminDashboard/NavbarAdmin';
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin';


function Dashboard() {


  return (
    <div className='DashBoardContainer'>
      <NavbarAdmin></NavbarAdmin>
      <SidebarAdmin></SidebarAdmin>
    </div>
  )
}
export default Dashboard;
