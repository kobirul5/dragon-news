import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero">
            <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0  p-10">
                <h1 className="text-2xl font-bold text-center">Register your account</h1>
                <div className="divider p-5"></div>
                <form className="card-body pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="phot url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
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