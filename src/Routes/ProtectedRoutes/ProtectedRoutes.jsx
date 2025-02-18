import { useContext } from "react";
import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(CreateContext);

    if (loading) {
        <div className="text-center text-7xl font-bold font-serif">Loading...</div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>

};

export default ProtectedRoutes;