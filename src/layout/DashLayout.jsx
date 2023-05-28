import React from 'react'
import Sidebar from '../pages/dashbord/sideBar/Sidebar'
// import Navbar from '../pages/dashbord/navBar/Navbar'
import DashRouter from '../Routers/DashRouters'

const DashLayout = () => {
  return (
    <section className="DashLayout">
        <Sidebar />
        <div className="DashRouter">
          <DashRouter />
        </div>
    </section>
  )
}
export default DashLayout