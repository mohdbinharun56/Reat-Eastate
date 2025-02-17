import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="mt-2">
                <div className="space-y-5 md:w-1/2 mx-auto shadow-md border border-[#ABABAB] rounded-md px-10 py-4 ">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <form className="space-y-10">
                        <input type="text" placeholder="Name" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="email" placeholder="E-mail" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="password" placeholder="Password" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="text" placeholder="Photo URL" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="submit" value="Register" className="bg-[#00335A] text-white py-2 px-4 font-medium w-full text-base cursor-pointer hover:bg-[#063051]" />
                    </form>
                    <p className="text-center text-base font-medium mt-4">Already have an account? Please <Link to="/login" className="text-[#063051] hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;