import { Outlet } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar";
import Footer from "./sharedComponents/Footer";


const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="max-w-7xl mx-auto flex-grow flex justify-center items-center">
                <div className="mt-10">
                    <Outlet />
                </div>
            </div>
            <div className="footer-content relative bottom-0 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default Root;