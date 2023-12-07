import './SignIn.css';
import {signInWithPopup, GoogleAuthProvider}
        from 'firebase/auth';
import {auth} from "../../firebase.ts";

export function SignIn() {

    function handleSignIn(){
        signInWithPopup(auth, new GoogleAuthProvider());
    }

    return (
        <div className="d-flex vh-100 flex-column gap-2
            align-items-center justify-content-center">
            <i className="bi bi-clipboard-check-fill p-2 px-3 fs-1 border border-2 rounded-5 border-primary-subtle"></i>
            <h1>Welcome to To-do App</h1>
            <button onClick={handleSignIn}
                className="btn btn-primary">
                <i className="bi bi-google pe-2"></i>
                Sign In with Google
            </button>
        </div>
    );
}