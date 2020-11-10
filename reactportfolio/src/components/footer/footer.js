import React from "react";
import "./style.css";

function Footer() {
    return (
        <div class="footer">
            <div class="linkedinDiv">
                {/* Share on LinkedIn button */}
                <a class="linkedin-button" href="https://www.linkedin.com/in/erika-zibelnik-5ab715a4/">
                    <i style="font-size:24px" class="fa">&#xf0e1;</i>
                </a>
            </div>
            <div class="gitHubDiv">
                <a class="github-button" href="https://github.com/eschiavoni2"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large"
                    aria-label="Follow @eschiavoni2 on GitHub">
                    <i style="font-size:24px" class="fa"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;