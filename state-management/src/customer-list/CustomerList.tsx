import './CustomerList.css';
import {useState} from "react";
import Customer from "../customer/Customer.tsx";
import {useCustomerList, useDispatcher} from "../context/CustomerContext.tsx";

export type TCustomer = {
    id: string,
    name: string,
    contact: string
}

export default function CustomerList() {
    const customerList = useCustomerList();

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
                    <Customer key={customer.id}
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

