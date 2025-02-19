import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CreateContext } from "./Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(CreateContext);

    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => navigate('/login'))
            .catch(error => { console.log(error.message) })
    }
    const navLinnks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update'>Update Profile</NavLink></li>
        <li>
            {
                user ? <div>
                    Welcome {user?.displayName || user?.email || '-'}
                </div> : <NavLink to='/login'>Login</NavLink>
            }
        </li>
    </>
    return (
        <div className="navbar text-white bg-[#00335A]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#00335A]">
                        {navLinnks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to='/'><img src="https://ibb.co.com/nspQ0Bz9" />EastetHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinnks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-2">
                        <div>
                            <img id='hoverImage' src={user?.photoURL || 'https://avatars.githubusercontent.com/u/79358840?v=4'} alt="Profile" className="w-10 rounded-full" />
                            <small id="hoverName">{user?.displayName || user?.email || 'Name Not Found'}</small>
                        </div>
                        <button className="btn btn-secondary text-white" onClick={handleLogout}>Logout</button>
                    </div> : <Link className="btn btn-primary" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;