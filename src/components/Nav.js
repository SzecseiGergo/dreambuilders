import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid ">
                <div className=" d-flex flex-row ">
                    <Link className="navbar-brand pe-3" to="/">Home</Link>
                    <div className="d-none d-sm-flex flex-row">
                        <i className="bi bi-telephone-fill text-success fs-4 pe-3 align-self-center" ></i>
                        <div className="text-white d-flex flex-column">
                            <span >Telefonszám:</span>
                            <span>+36 (70) 340 9658 </span>
                        </div>
                        <i className="bi bi-at text-success fs-2 px-3 align-self-center" ></i>
                        <div className="text-white d-flex flex-column">
                            <span >E-mail cím:</span>
                            <span>info@teszt.hu </span>
                        </div>
                    </div>
                </div>
                <div className="justify-content-end" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Főoldal</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/table">Bemutatkozás</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Szolgáltatásaink
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/form">Kapcsolat</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;