import './Main.css';
import {Dashboard} from "../dashboard/Dashboard.tsx";
import {ManageCustomer} from "../manage-customer/ManageCustomer.tsx";
import {ManageItem} from "../manage-item/ManageItem.tsx";
import {Link, NavLink, Outlet} from "react-router-dom";

export function Main() {
    return (
        <>
            <header className="p-2 border-b
                flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    React Routing
                </h1>
                <button className="border px-3 py-1 rounded
                    border-rose-600 hover:bg-rose-600
                    hover:text-white">
                    Sign Out
                </button>
            </header>
            <nav className="list-none flex items-center
            border-b justify-center">
                <NavLink to="home">
                    <li className="p-2 border-x
                    hover:bg-cyan-700 hover:text-white
                    cursor-pointer">HOME</li>
                </NavLink>
                <NavLink to="customers">
                    <li className="p-2 hover:bg-cyan-700
                    hover:text-white
                    cursor-pointer">MANAGE CUSTOMERS</li>
                </NavLink>
                <NavLink to="items">
                    <li className="p-2 border-x
                    hover:bg-cyan-700 hover:text-white
                    cursor-pointer">MANAGE ITEMS</li>
                </NavLink>
            </nav>
            <div className="flex justify-center">
                <Outlet />
            </div>
        </>
    );
}