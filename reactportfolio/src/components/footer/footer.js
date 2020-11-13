import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="footer">
            <div className="linkedinDiv">
                {/* Share on LinkedIn button */}
                <a className="linkedin-button" href="https://www.linkedin.com/in/erika-zibelnik-5ab715a4/">
                    <i className="fa">&#xf0e1;</i>
                </a>
            </div>
            <div className="gitHubDiv">
                <a className="github-button" href="https://github.com/eschiavoni2">
                <i className="fa fa-github" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;