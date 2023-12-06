import './ManageCustomer.css';
import React, {useState} from "react";
import {TCustomer} from "../customer-list/CustomerList.tsx";
import {useDispatcher} from "../context/CustomerContext.tsx";

export function ManageCustomer() {
    const [customer, setCustomer] =
        useState<TCustomer>({
            id: '',
            name: '',
            contact: ''
        });
    const dispatcher = useDispatcher();

    function handleFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatcher({
            type: 'add',
            customer: customer
        })
    }

    function handleClearClick() {
        setCustomer({id: '', name: '', contact: ''})
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setCustomer({...customer,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>ID</label>
                <input
                    name="id"
                    value={customer.id}
                    onChange={handleChange}
                    className="form-control" type="text"/>
            </div>
            <div>
                <label>NAME</label>
                <input
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    className="form-control" type="text"/>
            </div>
            <div>
                <label>CONTACT</label>
                <input
                    name="contact"
                    value={customer.contact}
                    onChange={handleChange}
                    className="form-control" type="text"/>
            </div>
            <div>
                <button>SAVE</button>
                <button type="button"
                        onClick={handleClearClick}>
                    CLEAR
                </button>
            </div>
        </form>
    );
}