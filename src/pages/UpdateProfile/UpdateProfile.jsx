import { useContext, useEffect, useState } from "react";
import { CreateContext } from "../../sharedComponents/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
    const { user,profileUpdate } = useContext(CreateContext);
    // state for name and photo initialy set displayName if exist otherwise '' empty
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhotoURL] = useState(user?.photoURL || '');

    // use useNavigate hook to navigate without user interaction.
    const navigate = useNavigate();

    // update button call method
    const handleUpdate = (e) => {
        e.preventDefault();
        profileUpdate(name, photo) // updateProfile method 
            .then(() => {
                Swal.fire( // sweetalert for alert after update
                    {
                        title: "Updated",
                        icon: "update",
                        showConfirmButton: true,
                        timer: 2000
                    }
                )
                navigate('/'); // navigete to home page after successfully update
            });
    }

    // title
    useEffect(() => {
        document.title = "Update Profile | Real Eastate Hub"
    }, [])
    
    return (
        <>
            <div>
                <h1 className="uppercase font-bold text-center mb-10 text-3xl">{user.displayName} Profile</h1>
                <form onSubmit={handleUpdate} className="space-y-5 mx-auto shadow-md border border-[#ABABAB] rounded-md px-10 py-4 ">
                    <label htmlFor="" className="block">Name</label>
                    <input type="text" value={name} className="w-full outline-none border rounded-ss-xl p-2 border-black" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="" className="block">E-mail</label>
                    <input type="text" value={user?.email || ''} className="w-full outline-none border rounded-ss-xl p-2 border-black" disabled />
                    <label htmlFor="" className="block">PhotoURL</label>
                    <input type="text" value={photo} className="w-full outline-none border rounded-ss-xl p-2 border-black" onChange={(e) => setPhotoURL(e.target.value)} />
                    <input type="submit" value="Update" className="btn btn-accent w-full" />
                </form>
            </div>
        </>
    );
};

export default UpdateProfile;