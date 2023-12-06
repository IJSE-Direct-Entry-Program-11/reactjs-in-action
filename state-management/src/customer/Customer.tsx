import './Customer.css';
import {TCustomer} from "../customer-list/CustomerList.tsx";

type CustomerProps = TCustomer & {
    onDelete: (id: string) => void
}

export default function Customer({id, name, contact, onDelete}: CustomerProps) {
    return (<tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{contact}</td>
        <td>
            <button onClick={e => onDelete(id)}>DELETE</button>
        </td>
    </tr>);
}