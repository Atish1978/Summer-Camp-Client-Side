import { useContext } from "react"
import { AuthContext } from "../pages/providers/AuthProviders";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;