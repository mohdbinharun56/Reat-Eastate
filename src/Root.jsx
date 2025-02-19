import { Outlet } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar";
import Footer from "./sharedComponents/Footer";


const Root = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div id="body-container" className="max-w-7xl mx-auto">
                <div className="mt-10">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;