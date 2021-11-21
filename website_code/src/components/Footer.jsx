import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <div className="my-auto">
                <footer className="w-100 my-50 bg-light text-center">
                <p>© {date} jeeshan ali teachnology .All Right Reserved | Term and Condition</p>
                </footer>
            </div>
        </>
    )
}
export default Footer;