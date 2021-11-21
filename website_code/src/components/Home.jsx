import React from "react";
import Common from "./Common";
import homeImage from "../images/img1.jpg";


const Home = () => {
    return (
        <>
            <Common name="Grow your bussiness" imgsrc={homeImage} visit="/service" btnName="Get Started" className="btn-primary btn-get-started text-white" />
        </>
    )
}

export default Home;