import {TCustomer} from "../customer-list/CustomerList.tsx";
import React, {createContext, ReactNode, useContext, useReducer} from "react";

type TAction = {
    type: "add" | "delete",
    [property: string] : any
}

function mainReducer(customerList: TCustomer[], action: TAction){
    if (action.type === "add"){
        return [...customerList, action.customer];
    }else{
        return customerList.filter(c => c.id !== action.id);
    }
}

const dummyCustomerRecords = [
    { id: 'C001', name: 'Kasun', contact: '077-123467'},
    { id: 'C002', name: 'Nuwan', contact: '078-123467'},
    { id: 'C003', name: 'Upul', contact: '075-123467'},
    { id: 'C004', name: 'Sampath', contact: '070-123467'},
    { id: 'C005', name: 'Kalum', contact: '071-123467'}
];

const CustomerContext =
    createContext<TCustomer[]>([]);
const DispatcherContext =
    createContext<React.Dispatch<TAction>>(()=>{});

export function MainProvider({children}: {children: ReactNode}){
    const [customerList, dispatcher]
        = useReducer(mainReducer, dummyCustomerRecords);

    return (<CustomerContext.Provider value={customerList}>
        <DispatcherContext.Provider value={dispatcher}>
            {children}
        </DispatcherContext.Provider>
    </CustomerContext.Provider>)
}

export function useCustomerList(){
    return useContext(CustomerContext);
}

export function useDispatcher(){
    return useContext(DispatcherContext);
}