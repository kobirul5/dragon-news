import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] min-h-screen pt-5 pb-10 mx-auto">
            <header className="mx-auto w-11/12">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;