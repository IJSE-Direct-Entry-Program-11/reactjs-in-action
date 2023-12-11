import {createBrowserRouter, Navigate, RouteObject, RouterProps} from "react-router-dom";
import {Dashboard} from "./view/dashboard/Dashboard.tsx";
import {ManageCustomer} from "./view/manage-customer/ManageCustomer.tsx";
import {ManageItem} from "./view/manage-item/ManageItem.tsx";
import {Main} from "./view/main/Main.tsx";

const appRoutes: RouteObject[] = [
    {
      index: true,   /* path: '' */
      element: <Navigate to="home" />
    },
    {
        path: 'home',
        Component: Dashboard
    },
    {
        path: 'customers',
        Component: ManageCustomer
    },
    {
        path: 'items',
        Component: ManageItem
    }
]

const routes: RouteObject[] = [
    {
        path: 'app',
        Component: Main,
        children: appRoutes
    }
];

export const router = createBrowserRouter(routes);