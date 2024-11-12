import { NavLink } from "react-router-dom"
// icon
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useContext } from "react";
import { UserDataProvider } from "../Context/UserContext";
import { FaMoneyBillWave } from "react-icons/fa";




const SideBar = () => {
    const { isAdmin } = useContext(UserDataProvider);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side mt-20 lg:mt-0">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="font-bold bg-base-200 text-base-content min-h-full w-56 p-4">
                    <li><NavLink to={'/home'} className={"flex my-5 items-center"}><IoIosSpeedometer className="text-xl mr-4" /> Dashboard</NavLink></li>
                    {/* Admin Sidebar content here */}
                    {!isAdmin && <>
                        <li><NavLink to={'/myProfile'} className={"flex my-5 items-center"}><FaPeopleGroup className="text-xl mr-4" /> My Profile</NavLink></li>
                        <li><NavLink to={'/leave'} className={"flex my-5 items-center"}><FaBuilding className="text-xl mr-4" /> Leave</NavLink></li>
                        <li><NavLink to={'/salary'} className={"flex my-5 items-center"}><SlCalender className="text-xl mr-4" /> Salary</NavLink></li>
                        {/* back in Login */}
                        <li><NavLink to={'/'}
                            className='flex items-center'>
                            <FaArrowLeft className="mr-3" />
                            Log In
                        </NavLink></li>
                    </>}
                    {/* Employee Sidebar content here */}
                    {
                        isAdmin && <>
                            <li><NavLink to={'/employess'} className={"flex my-5 items-center"}><FaPeopleGroup className="text-xl mr-4" /> Employees</NavLink></li>
                            <li><NavLink to={'/departments'} className={"flex my-5 items-center"}><FaBuilding className="text-xl mr-4" /> Departments</NavLink></li>
                            <li><NavLink to={'/leaves'} className={"flex my-5 items-center"}><SlCalender className="text-xl mr-4" /> Leaves</NavLink></li>
                            <li><NavLink to={'/allSalary'} className={"flex my-5 items-center"}><FaMoneyBillWave className="text-xl mr-4" /> Salary</NavLink></li>
                            {/* back in Login */}
                            <li><NavLink to={'/'}
                                className='flex items-center'>
                                <FaArrowLeft className="mr-3" />
                                Log In
                            </NavLink></li>
                        </>}
                </ul>
            </div>
        </div>
    )
}
export default SideBar