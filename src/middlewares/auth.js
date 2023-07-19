import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute=({children})=>{

    const jwtToken=Cookies.get('jwtToken')
    if(jwtToken!=undefined){
        return children
    }
    else
    return <Navigate to={"/login"} replace={true}></Navigate>
}
export default ProtectedRoute