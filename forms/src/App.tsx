import './App.css'
import {useRef, useState} from "react";

function App() {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(true);
  const txtElm = useRef<HTMLInputElement>(null);

  function handleButtonClick(){
    txtElm.current!.focus();
  }

  return (
    <>
      <h1>React Forms</h1>
      <label>
        <input type="checkbox" checked={checked}
            onChange={e => setChecked(e.target.checked)}/>
        Enable
      </label><br/>
      <input type="text" value={value} disabled={!checked}
           ref={txtElm}
           onChange={e => setValue(e.target.value)}/>
      <button onClick={handleButtonClick}>Click Me</button>
      <h3>Output</h3>
      <div>{value}</div>
    </>
  )
}

export default App
