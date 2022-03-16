import React, {useState} from 'react';
import {DropdownButton, Dropdown, Form, Button} from "react-bootstrap";
import axios from "axios";


function Selection() {
    const [monthTitle, setmonthTitle] = useState("Select Month");
    const [yearTitle, setyearTitle] = useState("2020");
    const [file, setFile] = useState();

    const yearDefault = 2021;
    const year = [];
    const filename = `${monthTitle}-${yearTitle}.csv`;
    for (let i = yearDefault; i < 2023; i++) {
        year.push(i);
    }
    const handleChange = e => {
        const file = e.target.files[0];
        setFile(file);
    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('filename', filename);
        formData.append('file', file);

        try {
            const result = await axios.post(
                `${process.env.REACT_APP_API_HOST}/file`,
                formData,
            );
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <>
            <div className="row" align='center'>
                <div className="row-sm-6 text-center mt-20" align='center'>
                    <div className="card w-50  p-5 h-100 d-inline-block" style={{margin:'2rem'}}>
                        <div className="card-body text-center mt-20" align='center'>
                            <h5 className="card-title">Select Attributes of SAP data</h5>
                            <p className="card-text">Select product name, month and year of the SAP data to be uploaded</p>
                            <DropdownButton className="p-2 h-20" id="dropdown-basic-button" title={monthTitle}>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setmonthTitle("JAN");
                                }}>January</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setmonthTitle("FEB");
                                }}>February</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setmonthTitle("MAR");
                                }}>March</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setmonthTitle("APR");
                                }}>April</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setmonthTitle("MAY");
                                }}>May</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setmonthTitle("JUN");
                                }}>June</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setmonthTitle("JUL");
                                }}>July</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setmonthTitle("AUG");
                                }}>August</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setmonthTitle("SEP");
                                }}>September</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setmonthTitle("OCT");
                                }}>October</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setmonthTitle("nov");
                                }}>November</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setmonthTitle("DEC");
                                }}>December</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton className=" p-2 h-20" id="dropdown-basic-button" title={yearTitle}>
                                {year.map(function (item) {
                                    const item1 = item.toString();
                                    return (<Dropdown.Item href="#/action-1" onClick={() => {
                                        setyearTitle(item1);
                                    }}>{item1}</Dropdown.Item>)
                                })}
                            </DropdownButton>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Choose file to upload</h5>
                            <p className="card-text">Upload your .csv file here</p>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>(Only .CSV files are accepted)</Form.Label>
                                <Form.Control type="file" onChange={handleChange}/>
                                <Button className='row-sm-4' variant="success" onClick={uploadFile}>Upload</Button>
                            </Form.Group>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Selection;