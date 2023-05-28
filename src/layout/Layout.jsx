import { useState } from "react"

import Header from "../pages/client/header/Header"
import Routers from  "../Routers/Routers"
import Footer from "../pages/client/footer/Footer"

const Layout = () => {
  const [Visibility, setCartVisibility] = useState();

  return (
    <div>
        <Header  Visibility={Visibility} setCartVisibility={setCartVisibility}/>
        <div className="layout_container">
            <Routers Visibility={Visibility} setCartVisibility={setCartVisibility} />
        </div>
        <Footer />
    </div>
  )
}

export default Layout