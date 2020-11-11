import React from "react";
import "./style.css";

function Portfolio(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-9 bg-light" id="portfolio">
                <div className="container2">
                    <h1>Portfolio</h1>
                    <hr />
                    <div className="row mt-2">
                        <div align="center" className="col-md-6 d-flex justify-content-center">
                            <a href="https://damp-gorge-35199.herokuapp.com/">
                                <img src={"assets/images/burger.PNG"} width="275px" height="150px" />
                                <a href="https://github.com/eschiavoni2/Burger" className="banner">Burger</a>
                            </a>
                        </div>
                        <div align="center" className="col-md-6 d-flex justify-content-center">
                            <a href="https://eschiavoni2.github.io/Work-Day-Scheduler/">
                                <img src={"assets/images/Project2.PNG"} width="275px" height="150px" />
                                <a href="https://github.com/eschiavoni2/Work-Day-Scheduler" className="banner">Work Day
                                    Scheduler Repo</a>
                            </a>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div align="center" className="col-md-6 d-flex justify-content-center">
                            <a href="https://eschiavoni2.github.io/Code-Generator/">
                                <img src={"assets/images/Project3.PNG"} width="275px" height="150px" />
                                <a href="https://github.com/eschiavoni2/Code-Generator" className="banner">Code Generator
                                    Repo</a>
                            </a>
                        </div>
                        <div align="center" className="col-md-6 d-flex justify-content-center">
                            <a href="https://github.com/eschiavoni2/note-taker">
                                <img className="p4" src={"assets/images/note.PNG"} width="275px" height="150px" />
                                <a href="https://safe-plains-93574.herokuapp.com/notes" className="bannerb">
                                    Note Taker
                                </a>
                        </a>
                    </div>
                    </div>
                        <div className="row mt-2">
                            <div align="center" className="col-md-6 d-flex justify-content-center">
                                <a href="https://github.com/eschiavoni2/Project2">
                                    <img className="row3" src={"assets/images/artbook.PNG"} width="275px" height="150px" />
                                    <a href="https://theartroom.herokuapp.com/" className="banner">ArtBook</a>
                                </a>
                            </div>
                            <div align="center" className="col-md-6 d-flex justify-content-center">
                                <a href="https://github.com/eschiavoni2/Employee-Tracker">
                                    <img classNameName="row3" src={"assets/images/EmpTracker.gif"} width="275px" height="150px"/>
                                    <a href="https://github.com/eschiavoni2/Employee-Tracker" classNameName="banner">Employee Tracker</a>
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;