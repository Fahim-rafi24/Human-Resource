import { useContext } from "react"
import { UserDataProvider } from "../Context/UserContext"
// 
import { FaPeopleRobbery } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";




const Dashboard =()=>{
    const {isAdmin} =useContext(UserDataProvider);
    return(
        <div className="flex flex-col w-full">
        <h1 className="text-center my-10 text-3xl font-bold">Dashboard Overview</h1>
        {/* admin display */}
        {
            isAdmin && <>
            <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-4">
                <div className="p-5 bg-[#57d1b1] text-xl font-bold border"><FaPeopleRobbery className="inline-block text-5xl"/> Total Employees :- 4</div>
                <div className="p-5 bg-[#5f72dc] text-xl font-bold border"><BsBuildingsFill className="inline-block text-5xl"/> Total Departments :- 3</div>
                <div className="p-5 bg-[#965fdc] text-xl font-bold border md:col-span-2 xl:col-span-1 md:text-center xl:text-start"><FaMoneyBillWave className="inline-block text-5xl"/> Montly Pay Total :- $1400</div>
            </section>
            </>
        }
        </div>
    )
}

export default Dashboard