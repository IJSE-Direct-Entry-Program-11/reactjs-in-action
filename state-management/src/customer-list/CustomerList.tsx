import './CustomerList.css';
import {useState} from "react";
import Customer from "../customer/Customer.tsx";

export type TCustomer = {
    id: string,
    name: string,
    contact: string
}

const dummyCustomerRecords = [
    { id: 'C001', name: 'Kasun', contact: '077-123467'},
    { id: 'C002', name: 'Nuwan', contact: '078-123467'},
    { id: 'C003', name: 'Upul', contact: '075-123467'},
    { id: 'C004', name: 'Sampath', contact: '070-123467'},
    { id: 'C005', name: 'Kalum', contact: '071-123467'}
]

export default function CustomerList() {
    const [customerList, setCustomerList] =
                useState<TCustomer[]>(dummyCustomerRecords);

    function handleCustomerDelete(id: string){
        setCustomerList(customerList.filter(c => c.id !== id));
    }

    return (
        <>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CONTACT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {customerList.map((customer) => (
                    <Customer onDelete={handleCustomerDelete}
                              key={customer.id}
                              {...customer} />
                ))}
            </tbody>
            {!customerList.length &&
                <tfoot>
                    <tr>
                        <td className="text-center" colSpan={4}>
                            No customer records yet!
                        </td>
                    </tr>
                </tfoot>
            }
        </table>
        </>
    );

}

