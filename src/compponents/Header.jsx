import { useContext, useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { UserDataProvider } from "../Context/UserContext";



const Header = () => {
    const {isAdmin} = useContext(UserDataProvider);


    return (
        <>
            <div id="header" className="bg-gradient-to-l from-cyan-300 to-[#5f72dc] w-full h-20 flex items-center p-2 md:p-10 justify-between">
                <div className="flex items-center">
                    {/* Page content here */}
                    <div className="text-3xl lg:hidden">
                        <label htmlFor="my-drawer-2">
                            <IoReorderThree />
                        </label>
                    </div>
                    <h1 className="text-white text-2xl ml-3"
                        id="pacifico">{
                            isAdmin ? 'Admin HR' : 'Employee HR'
                        }</h1>
                </div>
                <button className="btn btn-outline">Log out</button>
            </div>
        </>
    )
}
export default Header