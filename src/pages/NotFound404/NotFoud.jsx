import { Link } from "react-router-dom";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";

const NotFoud = () => {
    return (
        <div className="flex flex-col justify-center mt-36 items-center space-y-5">
            <h1 className="text-7xl font-bold flex gap-1 items-center text-red-900"><MdOutlineWifiTetheringErrorRounded/><p>4O4</p></h1>
            <h1 className="text-3xl font-medium">Page Not Found.</h1>
            <Link to='/' className="text-blue-500 text-2xl border btn">Back to Home</Link>
        </div>
    );
};

export default NotFoud;