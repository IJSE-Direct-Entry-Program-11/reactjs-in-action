import {createBrowserRouter, Navigate, redirect, RouteObject, RouterProps} from "react-router-dom";
import {Dashboard} from "./view/dashboard/Dashboard.tsx";
import {ManageCustomer} from "./view/manage-customer/ManageCustomer.tsx";
import {ManageItem} from "./view/manage-item/ManageItem.tsx";
import {Main} from "./view/main/Main.tsx";
import {Login} from "./view/login/Login.tsx";
import {NotFound} from "./view/not-found/NotFound.tsx";

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
      index: true,
      element: <Navigate to="/app" />
    },
    {
      path: 'login',
      Component: Login
    },
    {
        path: 'app',
        Component: Main,
        children: appRoutes,
        loader: ()=> {
            const user = localStorage.getItem("user");
            if (user && user === 'authenticated'){
                return null;
            }else{
                return redirect('/login');
            }
        }
    },
    {
        path: '*',
        Component: NotFound
    }
];

export const router = createBrowserRouter(routes);