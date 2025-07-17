import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Loading from "../components/shared/Loading";


const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth();

    if(loading){
        return <Loading></Loading>
    }

    if(user?.email){
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;