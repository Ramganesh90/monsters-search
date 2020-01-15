import React from "react";
import './header.styles.css';

const styles = {
    heading: {
        textAlign: "center",
        color: "purple",
        backgroundColor: "black",
        padding: "10px"
    }
};
const Header = (props) => (
    <div className="header">
        <h1 style={styles.heading}>{props.name}</h1>
        <div style={{ "display": "flex", "justifyContent": "center" }} >
            <input
                type="textbox"
                placeholder={props.placeholderText}
                onChange={props.handleChange}
            />
        </div>
    </div>
);

export default Header;