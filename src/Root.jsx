import { Outlet } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar";
import Footer from "./sharedComponents/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;