import React, { useState } from "react";
import "./style.css";
import {db} from "../../firebase";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection("contacts").add({
            name:name,
            email:email,
            message:message
        })
        .then(() => {
            alert("Message has been submitted.");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Me</h1>

            <label>Name:</label>
            <input 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email:</label>
            <input 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message:</label>
            <input 
                type="textarea"
                placeholder="Message"
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" style={{background : loader ? "#ccc" : " rgb(2, 2, 110)" }}></button>
        </form>
        </div>
    )
};

export default Contact;