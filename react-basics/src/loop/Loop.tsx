import './Loop.css';
import {ChangeEvent, FormEvent, useState} from "react";

export default function Loop(){
    const [nums, setNums] = useState([] as number[]);
    const [value, setValue] = useState(0)

    function handleInput(e: FormEvent) {
        const size = +(e.target as HTMLInputElement).value;
        setValue(size);
        setNums(()=>{
            const arr = new Array(size) as number[];
            arr.fill(0, 0, size);
            return arr;
        });
    }

    return (
        <>
            <input type="number" min="0" value={value} onInput={handleInput}/>
            {
                nums.map((num, index) =>
                    <p key={index}>Loop Works!</p>)
            }
        </>
    );
}