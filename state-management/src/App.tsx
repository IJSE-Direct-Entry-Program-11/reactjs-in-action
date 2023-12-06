import './App.css'
import Header from "./header/Header.tsx";
import CustomerList from "./customer-list/CustomerList.tsx";
import {ManageCustomer} from "./manage-customer/ManageCustomer.tsx";
import {MainProvider} from "./context/MainContext.tsx";

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
            <MainProvider>
                <ManageCustomer />
                <CustomerList />
            </MainProvider>
        </>
    )
}

export default App
