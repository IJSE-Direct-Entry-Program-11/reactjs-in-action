import {TCustomer} from "../customer-list/CustomerList.tsx";
import React, {createContext, useContext, useReducer} from "react";

type TAction = {
    type: string,
    [property: string]: any
}

function customerReducer(customersList: TCustomer[],
                         action: TAction) {
    switch (action.type) {
        case "add":
            return [...customersList, action.customer];
        case "delete":
            return customersList
                .filter(c => c.id !== action.customerId);
        default:
            throw new Error("Unknown action");
    }
}

const dummyCustomerRecords = [
    {id: 'C001', name: 'Kasun', contact: '077-123467'},
    {id: 'C002', name: 'Nuwan', contact: '078-123467'},
    {id: 'C003', name: 'Upul', contact: '075-123467'},
    {id: 'C004', name: 'Sampath', contact: '070-123467'},
    {id: 'C005', name: 'Kalum', contact: '071-123467'}
]

const CustomerListContext = createContext<TCustomer[]>([]);
const DispatcherContext = createContext<React.Dispatch<TAction>>(()=>{});

export default function CustomerProvider({children}:{children: React.ReactNode}) {
    const [customerList, dispatcher] =
        useReducer(customerReducer, dummyCustomerRecords);

    return (<CustomerListContext.Provider value={customerList}>
        <DispatcherContext.Provider value={dispatcher}>
            {children}
        </DispatcherContext.Provider>
    </CustomerListContext.Provider>)
}

export function useCustomerList(){
    return useContext(CustomerListContext);
}

export function useDispatcher(){
    return useContext(DispatcherContext);
}