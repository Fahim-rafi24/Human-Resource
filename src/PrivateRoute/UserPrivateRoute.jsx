import { useContext, useEffect } from "react";
import LodingPage from "./LodingPage/LodingPage";
import { UserDataProvider } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";




const UserPrivateRoute = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserDataProvider);

    
    // page lodding
    if (!user) {
        return <LodingPage></LodingPage>
    }
    useEffect(() => {
        // not login
        if (user === "Not_Login") {
            return navigate('/');
        }
        // employee login
        else {
            return navigate('/home');
        }
    }, [user, navigate])
}
export default UserPrivateRoute