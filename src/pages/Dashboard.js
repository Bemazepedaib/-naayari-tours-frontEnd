
import { React } from 'react'
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin';
import Princ from '../elements/AdminDashboard/Princ';
import Styles from '../styles/Dashboard.module.css'

function Dashboard() {

  return (
    <div className={Styles.DashBoardContainer}>
      <SidebarAdmin ></SidebarAdmin>
      <Princ />
    </div>
  )
}
export default Dashboard;
