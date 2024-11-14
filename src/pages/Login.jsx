import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const {user, setUser, userLogIn} = useContext(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password)
        userLogIn(email, password)
        .then((result) => {
            setUser(result.user)
            console.log(result)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }
    console.log(user)
    return (
        <div className="hero">
            <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0  p-10">
                <h1 className="text-2xl font-bold text-center">Login your account</h1>
                <div className="divider p-5"></div>
                <form onSubmit={handleLogin} className="card-body pt-0">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <div className="text-center px-10">
                    <p>Dont’t Have An Account ?<Link to="/auth/register" className="text-red-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;