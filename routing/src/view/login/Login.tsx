import './Login.css';
import {useId} from "react";
import {FieldError, useForm} from "react-hook-form";

type LoginFormType = {
    username: string,
    password: string
}

type FieldState = {
    invalid: boolean,
    isDirty: boolean,
    isTouched: boolean,
    error?: FieldError
}

function getClasses(fieldState: FieldState,
                    ...classes: string[]) {
    const dirty = fieldState.isDirty ? 'r-dirty': 'r-pristine';
    const touched = fieldState.isTouched ? 'r-touched'
                                : 'r-untouched';
    const invalid = fieldState.invalid ? 'r-invalid': 'r-valid';
    return `${classes.join(' ')} ${dirty} ${touched} ${invalid}`;
}

export function Login() {
    const username = useId();
    const password = useId();
    const {register, formState, getFieldState} =
        useForm<LoginFormType>({
            mode: "onChange"
        });

    return (
        <div className="flex flex-col h-screen
            justify-center items-center">
            <h1 className="text-3xl font-bold p-2">Login</h1>
            <div>Please enter your credentials to log in</div>
            <form className="flex flex-col items-center mt-2">
                <label htmlFor={username}>Username</label>
                <input className={getClasses(
                    getFieldState('username', formState),
                    'form-control', 'mb-2')}
                       {...register('username',
                           {
                               required: true,
                               minLength: 3
                           })}
                       id={username} type="text"
                       placeholder="Enter your username here"/>
                <label htmlFor={password}>Password</label>
                <input className={getClasses(
                    getFieldState('password', formState),
                    'form-control', 'mb-2')}
                       {...register('password',
                           {
                               required: true,
                               minLength: 6
                           })}
                       id={password} type="password"
                       placeholder="Enter your password here"/>
                <button
                    disabled={!formState.isValid}
                    className="border px-4 py-1
                    border-sky-500
                    hover:bg-sky-500 hover:text-white
                    disabled:bg-gray-300
                    disabled:border-gray-300
                    disabled:text-gray-400
                    rounded mt-2">
                    Log In
                </button>
            </form>
        </div>
    );
}