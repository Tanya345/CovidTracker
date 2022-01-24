import React, { useEffect, useState } from 'react'
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomDropdown from './CustomDropdown'

const Graphs = () => {

    const arr = ["confirmed", "deaths", "recovered"]
    let [chart, setChart] = useState([]);
    const url = "https://data.covid19india.org/data.json";
    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch(url);
            // console.log(data);
            let res = await data.json();
            // console.log(res.cases_time_series)
            setChart(res)
        }
        fetchData();
    }, [])
    const data = chart.cases_time_series

    const [type, setType] = useState("confirmed")
    const handleListItem = (e) => {
        setType(e.target.dataset.name)
    }

    return (
        <div className="d-flex flex-column align-items-center w-100">
            <h3 className="mt-3" style={{ color: "darkred" }}>Covid Cases Rising in India &rarr;</h3>
            <div className="d-flex">
                <div className="btn-group mx-3 align-self-end" style={{ width: "6rem" }}>
                    <button id="btnToggle" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {type}
                    </button>
                    <ul className="dropdown-menu" style={{ overflowY: "scroll", height: "41vh", width: "max-content" }}>
                        {/* <li className="mx-3 my-2" role="button">Global</li> */}
                        {arr.forEach((val) => {
                            
                                <li className="mx-3 my-2" role="button" data-name={val} onClick={handleListItem}>{val}</li>
                            
                        })}
                    </ul>
                </div>
            </div>

            <ResponsiveContainer width="60%" aspect={2}>
                <AreaChart
                    width={400}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="date" angle={10} minTickGap={1} />
                    <YAxis type={''} />
                    <Tooltip />
                    <Legend />
                    <Area type={'monotone'} dataKey="totalconfirmed" activeDot={{ r: 8 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Graphs
