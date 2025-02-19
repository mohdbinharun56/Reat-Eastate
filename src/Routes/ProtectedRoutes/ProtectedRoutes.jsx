import { useContext } from "react";
import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(CreateContext);
    const location = useLocation();
    
    if (loading) {
       return <div id="loading-content" className="text-center text-7xl font-bold font-serif">Loading...</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>

};

export default ProtectedRoutes;