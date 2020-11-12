import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="outer-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="name">Erika Zibelnik</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Resume_ErikaZibelnik.pdf" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
