import './ChangeDetection.css';
import {useState} from "react";

function ChangeDetection() {
    // let title = "Let's learn about change detection!";
    const [title, setTitle] =
        useState("Let's learn about change detection!");
    // let x = 0;
    const [x, setX]
        = useState(1);

    function handleClick() {
        setTitle('Hey look, I changed!');
        alert(title);
    }

    function increment() {
        // setX(x + 1);
        // setX(x * 2);
        setX(x => {
            x++;
            x *= 2;
            return x;
        });
    }

    function decrement() {
        setX(x => {
            x /= 2;
            x--;
            return x;
        });
    }

    return (
        <>
            <h3>{title}</h3>
            <button onClick={handleClick}>Click Me</button>
            <h3>X={x}</h3>
            <button onClick={increment}>+ INC</button>
            <button onClick={decrement}>+ DEC</button>
        </>
    );
}

export default ChangeDetection;