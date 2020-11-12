import React from "react";
import "./style.css";

function AboutMe() {
    return (
        <div className="container">
        {/* <div className="row">
            <div className="col-md-12" id="about"> */}
                <h1>About Me</h1>
                <hr />
                <img className="main-img" src={"assets/images/profile.jpg"} width="200px" alt="Erika" />
                <p className="font" >My name is Erika Zibelnik and I currently reside in Melbourne, Florida. I am learning
                    full stack web development through UCF's
                    coding
                    bootcamp. This will prepare me for an environment that is looking for innovation, education, and
                    creativity.</p>
                <p>I have a diverse background which enables me to adapt and problem solve as needed. This is
                    quite important in web development, and I believe will enable me to thrive. My past experiences have
                    also had me work with diverse group of individuals, enabling me to work well with clients and
                    co-operate
                    with coworkers for the best results and productivity.
                </p>
                <p>
                <a id="email" href="mailto:e.m.zibelnik@gmail.com">Email me at e.m.zibelnik@gmail.com</a>
                <br />
                <a id="phone" href="tel:4403829494">Call me at (440) 382-9494</a>
                <div>
                </div>
                </p>
            {/* </div>
        </div> */}
    </div>
    );
}

export default AboutMe;