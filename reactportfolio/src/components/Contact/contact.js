import React from "react";
import "./style.css";

function Contact(props) {
    return (
        <form className="form">
            <h1>Contact form phone</h1>

            <label>Name</label>
            <input placeholder="Name" />

            <label>Email</label>
            <input placeholder="Email" />

            <label>Message</label>
            <textarea placeholder="Message"></textarea>
        </form>
    )
};

export default Contact;