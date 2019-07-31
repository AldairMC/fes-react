import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <form>
            <legend>Contact us form</legend>
            <div className="input-field">
                <label>Name: </label>
                <input type="text" placeholder="your name"/>
            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="email" placeholder="your Email"/>
            </div>
            <div className="input-field">
                <label>Message: </label>
                <textarea type="text" placeholder="your Message"></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Submit"/>
            </div>
        </form>
    );
};

export default Contact;