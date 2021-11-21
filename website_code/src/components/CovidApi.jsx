import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

const CovidApi = () => {
    // const [data, setData] = useState([]);
    // const getCovidData = async () => {
    //     const res = await fetch("https://data.covid19india.org/states_daily.json");
    //     const actualData = await res.json();
    //     // console.log(actualData.states_daily);
    //     setData(actualData.states_daily)
    // }

    // //getCovidData()

    // useEffect(() => {
    //     getCovidData()
    // }, []);

    //console.log('mmmmmmmmm: ', data);


    return (
        <>
            <h2 className="m-3">https://data.covid19india.org/states_daily.json state | states_daily report</h2>
            <table className="table m-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>api not response, so all code commented</tr>
                    {/* {
                        data.map((value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{value}</td>
                                    <td>{value.date}</td>
                                    <td>{value.dateymd}</td>
                                    <td>{value.status}</td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
        </>
    );
}

export default CovidApi;