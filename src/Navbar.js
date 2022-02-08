import React from 'react';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">GCL</a>
                    <button className="navbar-toggle" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" aria-selected="true" href="/">Home</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-content-end">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" aria-selected="true" href="/" onClick={() => alert("are you sure?")}>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
     </>
    );

}
export default Navbar;