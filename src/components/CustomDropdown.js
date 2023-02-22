import React, { useState } from 'react'
import Stats2 from './Stats2'

const CustomDropdown = (props) => {

    const [text, setText] = useState(props.btnText)

    const handleListItem = (e) => {
        setText(e.target.dataset.name)
    }

    return (
        <>
            <div className="btn-group mx-3 align-self-end" style={{ width: "6rem" }}>
                <button id="btnToggle" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {text}
                </button>
                <ul className="dropdown-menu" style={{ overflowY: "scroll", height: "41vh", width: "max-content" }}>
                    {/* <li className="mx-3 my-2" role="button">Global</li> */}
                    {props.arr.map((e) => {
                        return (
                            <li key={e.country} className="mx-3 my-2" role="button" data-name={e.country} onClick={handleListItem}>{e.country}</li>
                        )
                    })}
                </ul>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                <Stats2 country={text} />
            </div>
        </>
    )
}

export default CustomDropdown
