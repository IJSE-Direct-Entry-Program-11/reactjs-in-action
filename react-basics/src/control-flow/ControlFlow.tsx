import './ControlFlow.css';
import {FormEvent, useState} from "react";

export default function ControlFlow() {
    const [show, setShow]
        = useState(false);
    const [buttonText, setButtonText]
        = useState("Show");

    function handleShow() {
        // 1. This is not going to work
        // setShow(!show);
        // setButtonText((bt)=>{
        //     if (show){
        //         return 'Hide';
        //     }else{
        //         return 'Show';
        //     }
        // });

        // 2. This is also not going to work
        // setShow(!show);
        // if (show){
        //     setButtonText('Hide');
        // }else{
        //     setButtonText('Show');
        // }

        // 3. This is okay
        // setShow(s=>{
        //     s = !s;
        //     if (s){
        //         setButtonText('Hide');
        //     }else{
        //         setButtonText('Show');
        //     }
        //     return s;
        // });

        // 4. This is okay
        const flag = !show;
        setShow(flag);
        if (flag) setButtonText('Hide');
        else setButtonText('Show');
    }

    const [checked, setChecked]
        = useState(false);

    function handleCheck() {
        setChecked(!checked);
    }

    const [value, setValue] = useState("");

    function handleInput(eventData: FormEvent) {
        setValue((eventData.target as HTMLInputElement).value);
    }

    return (
        <>
            <hr/>
            <button onClick={handleShow}>{buttonText}</button>
            {show && <h1>Hi!</h1>}
            <hr/>
            <input id="chk" type="checkbox"
                   checked={checked}
                   onInput={handleCheck}
            />
            {checked ?
                /* If */
                <label htmlFor="chk">Checked</label>
                :
                /* Else */
                <label htmlFor="chk">Unchecked</label>
            }
            <hr/>
            <div>Select an option</div>
            <label><input name="rdo" type="radio" value="option-1" onInput={handleInput}/>Option 1</label>
            <label><input name="rdo" type="radio" value="option-2" onInput={handleInput}/>Option 2</label>
            <label><input name="rdo" type="radio" value="option-3" onInput={handleInput}/>Option 3</label>
            {
                value === 'option-1' ?
                    <h1>I am H1</h1>
                : value === 'option-2' ?
                    <h2>I am H2</h2>
                : value === 'option-3' ?
                    <h3>I am H3</h3>
                :
                <h4>No option has been selected yet</h4>
            }
        </>
    );
}