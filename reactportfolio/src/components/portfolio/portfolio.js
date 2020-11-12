import React from "react";
import "./style.css";

function Portfolio(props) {
    return (
        <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed:</strong> {props.deployed}
          </li>
          <li>
            <strong>Repo:</strong> {props.repo}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.deployed(props.id)} className="deployedLink">
        Deployed page
      </span> */}
    </div>
    
    )
}

export default Portfolio;