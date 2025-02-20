import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";

const Register = () => {
    // destructure signUp function to implementing  useContext hooks.
    const { signUp, profileUpdate,toggleCheck,toggle} = useContext(CreateContext);
    
    // set useState hook to manage the error.
    const [error, setError] = useState('');

    // implementing useNavigate hook to navigation others page.
    const navigate = useNavigate();

    // check is toogle true or false
    const handleToggle = () =>{
        toggleCheck(); // true || false
    }

    // React Hook Form for Validation purpose
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    // register button call method
    const handleRegister = (data) => {
        // console.log(data);
        const { Name, Email, Password, Photo } = data;

        if (Password.length < 6) {
            setError('Password must be at least 6 characters or long');
            return;
        }
        if (!/[A-Z]/.test(Password)) {
            setError('Password must contain at least one UPPERCASE');
            return;
        }
        if (!/[a-z]/.test(Password)) {
            setError('Password must contain at least one lowercase');
            return;
        }

        // console.log(Name, Email, Password, Photo);

        // signUp method to create user.
        signUp(Email, Password) 
            .then(res => {
                profileUpdate(Name, Photo) // updateProfile method to update user-> (name,photoURL)
                    .then(() => {
                        console.log(res);
                        Swal.fire( // an alert using sweetalert package
                            {
                                title: "Successfully Register",
                                icon: "success",
                                showConfirmButton: true,
                                timer: 2000
                            }
                        )
                        navigate('/');
                    })
            })
            .catch(error => setError(error.message.split('/').pop().replace(')', ''))) // split in '/' and remove last item and replace ')' to '' empty.
    }

    // title
    useEffect(() => {
        document.title = "Register | Real Eastate Hub";
    }, [])
    
    return (
        <div>
            <div className="mt-2">
                <div className="space-y-5 mx-auto shadow-md border border-[#ABABAB] rounded-md px-10 py-4 ">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <form className="space-y-10" onSubmit={handleSubmit(handleRegister)}>
                        <input type="text"
                            placeholder="Name"
                            {...register("Name", { required: true })}
                            className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl"
                        />
                        {errors.Name && <span className="text-red-500">This field is required</span>}

                        <input type="email"
                            placeholder="E-mail"
                            {...register("Email", { required: true })}
                            className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl"
                        />
                        {errors.Email && <span className="text-red-500">This field is required</span>}
                        <div className="flex items-center">
                            <input type={`${toggle ? 'text' : 'password'}`}
                                placeholder="Password"
                                {...register("Password", { required: true })}
                                className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl"
                            />
                            <span onClick={handleToggle} className="relative -left-7">{toggle ? <IoEyeOffSharp className="cursor-pointer" /> : <FaRegEye className="cursor-pointer"/>}</span>
                        </div>
                        {errors.Password && <span className="text-red-500">This field is required</span>}
                        <input type="text"
                            placeholder="Photo URL"
                            {...register("Photo", { required: true })}
                            className="w-full text-base font-medium outline-none border border-black p-2 rounded-ss-xl"
                        />
                        {errors.Photo && <span className="text-red-500">This field is required</span>}
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