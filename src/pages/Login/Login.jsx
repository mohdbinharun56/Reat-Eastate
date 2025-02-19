import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";


const Login = () => {
    const { signIn, loginWithGoogle, loginWithGithub } = useContext(CreateContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();

    const handleLogin = (data) => {
        const { email, password } = data;
        console.log(email, password);

        signIn(email, password)
            .then(res => {
                setError('');
                console.log(res.user);
                navigate(location?.state || '/');
            })
            .catch(error => setError(error.message.split('/').pop().replace(')', '')))
    }
    useEffect(() => {
        document.title = "Login | Real Eastate Hub";
    }, [])
    
    const handleGoogleLogin = () =>{
        console.log("google");
        loginWithGoogle()
        .then(res=>{
            setError('');
            console.log(res.user);
            navigate(location?.state || '/');
        })
        .catch(error=>setError(error.message.split('/').pop().replace(')','')))
    }
    const handleGithubLogin = () =>{
        console.log("github")
        loginWithGithub()
        .then(res=>{
            setError('');
            console.log(res.user);
            navigate(location?.state || '/');
        })
        .catch(error=>setError(error.message.split('/').pop().replace(')','')))
    }
    return (
        <div>
            <div className="mt-2">
                <div className="space-y-5 mx-auto shadow-md border border-[#ABABAB] rounded-md px-10 py-4 ">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <form className="space-y-10" onSubmit={handleSubmit(handleLogin)}>
                        <input type="email"
                            placeholder="Username or E-mail"
                            {...register("email", { required: true })}
                            className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl"
                        />
                        {errors.email && <span className="text-red-500">This field is required.</span>}
                        <input type="password"
                            placeholder="Password"
                            {...register('password', { required: true })}
                            className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl"
                        />
                        {errors.password && <span className="text-red-500">This field is required.</span>}
                        {error && <span className="text-red-500">{error}</span>}
                        <input type="submit" value="Login" className="bg-[#00335A] text-white py-2 px-4 font-medium w-full text-base cursor-pointer hover:bg-[#063051]" />
                    </form>
                    <p className="text-center text-base font-medium mt-4">Don't have an account? Please <Link to="/register" className="text-[#063051] hover:underline">Register</Link></p>
                </div>
                <div className="mt-10 flex gap-2 items-center w-1/3 mx-auto mb-10">
                    <hr className="border border-[#AAAAAA] w-full" /><span className="text-base font-medium">or</span> <hr className="border border-[#AAAAAA] w-full" />
                </div>
                <div className="space-y-4 md:space-y-8 mb-10">
                    <button onClick={handleGithubLogin} className="flex items-center gap-2 mx-auto bg-black text-white rounded-md p-3"><FaGithub /><span className="text-base font-medium">Continue with GitHub</span></button>
                    <button onClick={handleGoogleLogin} className="flex items-center gap-2 mx-auto bg-yellow-900 text-white rounded-md p-3"><FaGoogle /><span className="text-base font-medium">Continue with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;