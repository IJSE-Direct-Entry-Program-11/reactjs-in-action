import './App.css'
import ChangeDetection from "./change-detection/ChangeDetection.tsx";
import ControlFlow from "./control-flow/ControlFlow.tsx";
import Loop from "./loop/Loop.tsx";

// class App extends React.Component<null, null>{
//
//     render() {
//         return <h1>React</h1>;
//     }
// }

function App(){
    let title = 'Hello React!';

    function handleClick1(){
        alert("Okay-1");
    }

    function handleClick2() {
        alert("Okay-2");
    }

    return (
        <>
            <h1>{title}</h1>
            <button onClick={handleClick1}>
                Click Me
            </button>
            <button onClick={()=>{
                            handleClick1();
                            handleClick2();
                        }}>
                Click Me
            </button>
            <ChangeDetection />
            <ControlFlow />
            <Loop />
        </>
    );
}

export default App
