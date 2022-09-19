import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
    return (
        <div className="contactContainer">
            <a className="mailBtn" href="mailto:yuntuan1309@gmail.com">
                <Button>Contact:yuntuan1309@gmail.com</Button>
            </a>
        </div>
    );
};

export default Contact;