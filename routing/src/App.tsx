import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./app-routes.tsx";

function App() {

    return (<>
        <RouterProvider router={router}/>
    </>);
}

export default App
