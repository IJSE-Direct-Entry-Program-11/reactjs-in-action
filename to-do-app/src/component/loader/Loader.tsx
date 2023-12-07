import './Loader.css';
export function Loader() {
    return (
        <div className="Loader d-flex vh-100
                    justify-content-center
                    align-items-center">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}