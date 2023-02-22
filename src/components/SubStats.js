import React from 'react'
import '../App.css'

function SubStats(props) {

    return (

        <div className="card mx-3 my-2" style={{ width: "16rem", backgroundColor: props.backgroundColor, borderRadius: "1rem" }}>
            <div className="card-body">
                <h5 className="card-title text-uppercase fs-5">{props.displayText}</h5>
                <h6 className="card-subtitle mb-4 text-muted fs-6">Stay home stay safe</h6>
                <p className="text-bold fs-3" style={{ color: props.color }}>{props.count}</p>
            </div>
        </div>
    )
}

export default SubStats
