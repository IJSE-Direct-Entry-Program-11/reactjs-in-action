import './App.css'
import Header from "./header/Header.tsx";
import CustomerList from "./customer-list/CustomerList.tsx";
import {ManageCustomer} from "./manage-customer/ManageCustomer.tsx";
import CustomerProvider from "./context/CustomerContext.tsx";

function App() {

    const headerProps = {
        title: 'State Management in Action',
        align: 'text-center',
        fontSize: 'fs-2'
    }

    return (
        <>
            {/*<Header title={headerProps.title}*/}
            {/*align={headerProps.align}*/}
            {/*fontSize={headerProps.fontSize}*/}
            {/*/>*/}
            <Header {...headerProps} />
            <CustomerProvider>
                <ManageCustomer />
                <CustomerList />
            </CustomerProvider>
        </>
    )
}

export default App
