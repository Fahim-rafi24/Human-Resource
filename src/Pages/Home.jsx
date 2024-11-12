import { Outlet } from "react-router-dom"
import Header from "../compponents/Header"
import SideBar from "../compponents/SideBar"




const Home = () => {
    return (
        <>
            {/* header Div */}
            <Header></Header>
            <div className="drawer flex lg:drawer-open border">
                <div>
                    {/* Side Bar */}
                    <SideBar></SideBar>
                </div>
                {/* main body */}
                <Outlet/>
            </div>
        </>
    )
}
export default Home