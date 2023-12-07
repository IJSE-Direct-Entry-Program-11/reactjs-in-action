import './Header.css';
import {signOut} from 'firebase/auth';
import {auth} from "../../firebase.ts";
import {Theme} from "../theme/Theme.tsx";

export function Header() {

    function handleSignOut(){
        signOut(auth);
    }

    return (
        <header className="p-2 border-bottom d-flex
                    justify-content-between align-items-center">
            <h3 className="m-0">
                <i className="bi bi-clipboard-check-fill pe-2"></i>
                To-do App</h3>
            <div>
                <Theme />
                <button onClick={handleSignOut}
                    className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-escape"></i> SIGN OUT
                </button>
            </div>
        </header>
    );
}