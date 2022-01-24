import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'

Chart.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)


const TimeSeries = () => {

    let  [chart, setChart] = useState([]);
    
    // This api don't the give the results till today. I use this as api you provided to us dont give timeseries data till today
    const url = "https://data.covid19india.org/data.json";
    useEffect(() => {
        const fetchData = async()=>{
            let data = await fetch(url);
            // console.log(data);
            let res = await data.json();
            // console.log(res.cases_time_series)
            setChart(res)
        }
       fetchData();
    }, [])
    
// console.log(chart)
let data = {
    labels: chart?.cases_time_series?.map(x=>x.date),
    datasets: [{
        label: '# of Votes',
        data:  chart?.cases_time_series?.map(x=>x.totalconfirmed),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgba(245, 66, 87)'
        ],
        
        borderWidth: 0.7
    }]
}

let options = {
    maintainAspectRatio: false,

    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            beginAtZero: true
        }
    },
    legend: {
        labels: {
            fontSize: 26
        }
    }
}

return (
    <div className="d-flex flex-column align-items-center w-100">
        <h3 className="mt-3" style={{color:"darkred"}}>Covid Cases Rising in India&rarr;</h3>

        <div className="w-50 my-3 mx-5">
            <Line
                data={data}
                height={400}
                options={options}
            />
        </div>
    </div>
)
}

export default TimeSeries
