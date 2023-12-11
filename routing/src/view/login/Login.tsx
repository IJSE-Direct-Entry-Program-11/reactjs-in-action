import './Login.css';
import {useId} from "react";
export function Login() {
    const username = useId();
    const password = useId();

    return (
        <div className="flex flex-col h-screen
            justify-center items-center">
            <h1 className="text-3xl font-bold p-2">Login</h1>
            <div>Please enter your credentials to log in</div>
            <form className="flex flex-col items-center mt-2">
                <label htmlFor={username}>Username</label>
                <input className="form-control"
                       id={username} type="text"
                placeholder="Enter your username here"/>
                <label htmlFor={password}>Password</label>
                <input className="form-control mt-2"
                       id={password} type="password"
                placeholder="Enter your password here"/>
                <button className="border px-4 py-1 rounded mt-2">
                    Log In
                </button>
            </form>
        </div>
    );
}