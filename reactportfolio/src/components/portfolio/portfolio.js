import React from "react";
import "./style.css";

function Portfolio(props) {
    return (
        <div className="container col-4">
            <div className="row">
                <div className="card">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <strong>Name:</strong> {props.name}
                            </li>
                            <a
                                href={props.repo}
                                className="btn btn-secondary btn-block"
                                target="_blank">
                                Repository
                            </a>
                            <a
                                href={props.deployed}
                                className="btn btn-primary btn-block"
                                target="_blank">
                                Deployed Page
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;