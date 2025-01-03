import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <FaBars />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div>
                    {
                        user && <h2>{user.email}</h2>
                    }
                    
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  font-bold">
                   {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div>
                    <img className="rounded-full" src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={userLogOut}>Log Out</button>: <Link to="/auth/login" className="btn bg-neutral text-white rounded-none px-6 py-1 ">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;