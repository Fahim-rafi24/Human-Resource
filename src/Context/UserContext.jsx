import { createContext } from "react"



// context
export const UserDataProvider = createContext(null);


// provider
const UserContext = ({ children }) => {

    // testing Purpose
    let user = null;
    // user ='Not_Login'
    user = {
        name: 'Kazi Rafi',
        employeeID: "KaziRafi122",
        img: 'https://photos.google.com/photo/AF1QipOW-Ia2qy9NK1D9YsjVlDc3EUIbuO_UO_FpEG6E',
        department: 'Admin',
        // department: 'Database',
        salary: 25000,
    }
    const isAdmin = user?.department === 'Admin';


    const result = {
        user,
        isAdmin,
    }
    return (
        <UserDataProvider.Provider value={result}>
            {children}
        </UserDataProvider.Provider>
    )
}
export default UserContext