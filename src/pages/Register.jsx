import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {user, newUserCreate} = useContext(AuthContext)
    const handleCreateUser = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        console.log(name,email, photo, password)
        newUserCreate(email, password)
        console.log(user)
    }
    return (
        <div className="hero">
            <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0  p-10">
                <h1 className="text-2xl font-bold text-center">Register your account</h1>
                <div className="divider p-5"></div>
                <form onSubmit={handleCreateUser} className="card-body pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name </span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <div className="text-center px-10">
                    <p>Already Have An Account ?<Link to="/auth/login" className="text-red-500">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;