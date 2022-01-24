import React, {useState, useEffect} from 'react'
import SubStats from './SubStats';

const Stats2 = (props) => {

    const [totalCases, setTotalCases] = useState(0);
    const [totalRecovered, setTotalRecovered] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)
    const [activeCases, setActiveCases] = useState(0)
    const [tested, setTested] = useState(0)

    useEffect(() => {
        async function fetchData() {
            // const url="https://api.covid19api.com/summary";

            const url = `https://corona.lmao.ninja/v2/countries/${props.country}`;
            // console.log(props.country)
            let data = await fetch(url);
            let res = await data.json();
            // console.log(res.cases);
            setTotalCases(res.cases);
            setTotalRecovered(res.recovered);
            setActiveCases(res.active);
            setTotalDeaths(res.deaths);
            setTested(res.tests);
        }
        fetchData();

    },[props.country])


    return (
        <>
            <SubStats backgroundColor="#d3a70f" color="#ff0024c2" displayText="Cases" count={totalCases} />
            <SubStats backgroundColor="#03c1ff" color="black" displayText="Active" count={activeCases} />
            <SubStats backgroundColor="#fe8683" color="#ff0024c2" displayText="Deaths" count={totalDeaths} />
            <SubStats backgroundColor="#9be89c" color="green" displayText="Discharged" count={totalRecovered} />
            <SubStats backgroundColor="lightgreen" color="rgb(183 145 14)" displayText="Tested" count={tested} />
        </>
    )
}

export default Stats2
