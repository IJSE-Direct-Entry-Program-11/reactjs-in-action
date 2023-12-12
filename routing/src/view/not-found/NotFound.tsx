import './NotFound.css';
import {Link} from "react-router-dom";
export function NotFound() {
    return (
        <div className="flex h-screen justify-center flex-col
        items-center">
            <h1 className="text-8xl font-bold text-gray-300">404</h1>
            <h2 className="text-3xl font-bold text-slate-400">NOT FOUND</h2>
            <div className="p-2">Go to
                <Link className="p-2 mx-2 cursor-pointer
                hover:bg-cyan-300
                bg-cyan-400 rounded"
                      to="/app">
                    App
                </Link>
            </div>
        </div>
    );
}