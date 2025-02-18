import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";

const Register = () => {
    const { signUp } = useContext(CreateContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        if (password.length < 6) {
            setError('Password at least 6 characters or long');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must be contain at least one upper case');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must contain at least one lower case');
            return;
        }

        console.log(name, email, password, photo);

        signUp(email, password)
            .then(res => {
                navigate('/login')
            })
            .catch(error => setError(error.message.split('/').pop().join(1)))
    }
    return (
        <div>
            <div className="mt-2">
                <div className="space-y-5 md:w-1/2 mx-auto shadow-md border border-[#ABABAB] rounded-md px-10 py-4 ">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <form className="space-y-10" onSubmit={handleRegister}>
                        <input type="text" name="name" placeholder="Name" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="email" name="email" placeholder="E-mail" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="password" name="password" placeholder="Password" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        <input type="text" name="photo" placeholder="Photo URL" required className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl" />
                        {
                            error && <small className="text-red-500">{error}</small>
                        }
                        <input type="submit" value="Register" className="bg-[#00335A] text-white py-2 px-4 font-medium w-full text-base cursor-pointer hover:bg-[#063051]" />
                    </form>
                    <p className="text-center text-base font-medium mt-4">Already have an account? Please <Link to="/login" className="text-[#063051] hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;