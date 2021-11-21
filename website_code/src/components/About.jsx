import React from "react";
import Common from "./Common";
import aboutImage from "../images/img2.jpg";


const About = () => {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={aboutImage} visit="/Contact " btnName="Contact Now"/>
        </>
    );
};

export default About;