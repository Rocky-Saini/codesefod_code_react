import React from "react";
import Hero from "./../components/Homepage/Hero";
import Clients from "./../components/Homepage/Clients";
import DeliveryProcess from "./../components/Homepage/DeliveryProcess";
import StatisticsPage from "../components/Homepage/StatisticsPage";

const Home = () => {
    return (
        <>
            <Hero />
            <StatisticsPage />
            <Clients />
            <DeliveryProcess />
        </>
    );
};

export default Home;
