import React, { useState, useEffect } from 'react'
import Stats2 from './Stats2';
// import SearchField from "react-search-field";
import '../App.css'
import CustomDropdown from "./CustomDropdown";

function Stats() {

    const url = "https://corona.lmao.ninja/v2/countries/"
    const [countries, setcountries] = useState([])
    // const [currentLoc, setCurrentLoc] = useState()

    // const getGeoInfo = async() => {
    //     const data = await fetch('https://ipapi.co/json/')
    //     let res = await data.json();
    //     setCurrentLoc(res.country_name)
    // }

    const getData = async () => {
        const data = await fetch(url)
        let res = await data.json()
        setcountries(res)
    }

    useEffect(() => {
        // await getGeoInfo();
        getData();
        // console.log(currentLoc)
    }, [])


    return (
        <div className=" my-4 d-flex flex-column align-items-center justify-content-center" style={{ width: "100%" }}>

            <div className="d-flex flex-column justify-content-center align-items-center" >
               
                <CustomDropdown btnText="India" arr={countries}/>

            </div>


        </div>
    )
}

export default Stats
