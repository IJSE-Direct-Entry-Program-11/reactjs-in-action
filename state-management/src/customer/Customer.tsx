import './Customer.css';
import {TCustomer} from "../customer-list/CustomerList.tsx";
import {useDispatcher} from "../context/CustomerContext.tsx";

export default function Customer({id, name, contact}: TCustomer) {
    const dispatcher = useDispatcher();

    return (<tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{contact}</td>
        <td>
            <button onClick={e => dispatcher({
                type: 'delete',
                customerId: id
            })}>DELETE</button>

        </td>
    </tr>);
}