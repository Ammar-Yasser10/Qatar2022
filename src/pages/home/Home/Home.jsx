import React from 'react'
import "./home.css"
import Navbar from "../../../components/navbar/Navbar"
import Header from "../../../components/header/Header"
//import Featured from '../../../components/featured/Featured'
import DataFetching from '../../../data'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <DataFetching/>
               

            </div>
        </div>
    )
}

export default Home