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
                <a className="github-button" href="https://github.com/eschiavoni2"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large"
                    aria-label="Follow @eschiavoni2 on GitHub">
                    <i className="fa"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;