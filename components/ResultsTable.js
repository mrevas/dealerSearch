import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import { useStateContext } from './DealerProvider';


const ResultsTable = ({currentTableData}) => {
    const globalState = useStateContext()

    //sends a post request to the api on load
    useEffect(() => {
        axios({
            method: 'post',
            url: `https://sampleapi.dealerview.net/api/data/customerdata${globalState.dealership !== '' ? '?dealership='+globalState.dealership : ''}`,
        })
            .then((res) => {
                globalState.setAllData(JSON.parse(res.data))
                globalState.setFilteredData(JSON.parse(res.data))
                globalState.setLoadingData(false)
                console.log(JSON.parse(res.data))
            })
            .catch(error => {
                console.error(error)
            })
    }, [globalState.dealership])


    //maps over every customer object in the array
    const getTableRow = () => {
        let i = 1;
        if (!globalState.loadingData) {
            return (
                currentTableData.map((item) => {
                    return (
                        <tr key={uuidv4()}>
                            <td> {i++} </td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.ModelYear}</td>
                            <td>{item.Make}</td>
                            <td>{item.Model}</td>
                            <td>{item.Dealership}</td>
                        </tr>
                    )
                })
            )

        }
    }


    //calls the getTableRow function and displays data in the tbody
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Model Year</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Dealership</th>
                </tr>
            </thead>
            <tbody>
                {getTableRow()}
            </tbody>
        </Table>
    )
}
export default ResultsTable;
