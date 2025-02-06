import React from "react";

const Section = ({ children, className = "" }) => {
    return (
        <section className={`${className}`}>
            <div className="container">{children}</div>
        </section>
    );
};

export default Section;
