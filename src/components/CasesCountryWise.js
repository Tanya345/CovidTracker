import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import '../App.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

const CasesCountryWise = () => {

    const url = "https://corona.lmao.ninja/v2/countries/";
    const [arrData, setArrData] = useState([])


    const columns = [
        { dataField: 'country', text: 'Country', sort: true, filter: textFilter() },
        { dataField: 'cases', text: 'Total Cases', sort: true },
        { dataField: 'active', text: 'Active Cases', sort: true },
        { dataField: 'deaths', text: 'Deaths', sort: true },
        { dataField: 'recovered', text: 'Recovered', sort: true },
        { dataField: 'tests', text: 'Tested', sort: true },
    ]

    const getData = async () => {
        const data = await fetch(url)
        let res = await data.json()
        setArrData(res)
        // console.log(arrData)
    }

    useEffect(() => {
        getData()
    }, [])

    // console.log(arrData)

    return (
        <div className="w-100 mx-3 my-5 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-between align-items-center" style={{ width: "85%" }}>
                <h2 className="my-3">Reported Cases Per Country</h2>
            </div>

            <div className="table-responsive" style={{display:"contents"}}>
                <BootstrapTable
                    bootstrap4
                    keyField='country'
                    columns={columns}
                    data={arrData}
                    filter={filterFactory()} />
            </div>

        </div >

    )
}

export default CasesCountryWise
