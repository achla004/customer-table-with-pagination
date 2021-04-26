import React from 'react';
import { useParams, } from "react-router-dom";
import './Style.css';
import data from "../mock/Data.json";






export default function Customerdetail({ props }) {
    const { id } = useParams();
    const companydata = data.find(x => x.id === Number.parseInt(id));
    return (

        <div className="customer">
            <h1 >Customer details</h1>
            {companydata ?
                <div className="customerdata" style={{ marginTop: 24 }}>
                    <div style={{ display: "flex", marginTop: 16, marginLeft: 24 }}>
                        <p>Id: </p>
                        <p style={{ marginLeft: 16 }}>{companydata.id}</p>
                    </div>

                    <div style={{ display: "flex", marginTop: 16, marginLeft: 24 }}>
                        <p>Name: </p>
                        <p style={{ marginLeft: 16 }}>{companydata.name}</p>
                    </div>
                    <div style={{ display: "flex", marginTop: 16, marginLeft: 24 }}>
                        <p>Email: </p>
                        <p style={{ marginLeft: 16 }}>{companydata.email}</p>
                    </div>
                </div>
                :
                <div className="customerdata" style={{ marginTop: 24 }}>
                    <p style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>No record found</p>
                </div>}
        </div>

    )
}

