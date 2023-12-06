import './Customer.css';
import {TCustomer} from "../customer-list/CustomerList.tsx";
import {useDispatcher} from "../context/MainContext.tsx";

export default function Customer({id, name, contact}: TCustomer) {
    const dispatcher = useDispatcher();

    return (<tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{contact}</td>
        <td>
            <button onClick={e => dispatcher({
                type: 'delete',
                id
            })}>DELETE</button>
        </td>
    </tr>);
}