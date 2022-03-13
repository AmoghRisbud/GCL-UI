import React, {useState} from 'react';
import {DropdownButton, Dropdown, Form, Button} from "react-bootstrap";
import axios from "axios";


function Selection() {
    const [dropdownTitle, setDropdownTitle] = useState("Select Product");
    const [monthTitle, setmonthTitle] = useState("Select Month");
    const [yearTitle, setyearTitle] = useState("1990");
    const [file, setFile] = useState();

    const yearDefault = 1990;
    const year = [];
    const filename = `${dropdownTitle}-${monthTitle}-${yearTitle}`;
    for (let i = yearDefault; i < 2030; i++) {
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
                // {headers: {'X-Session-Cookie': cookie.load(process.env.REACT_APP_SESSION_COOKIE_NAME)}}
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
                            <DropdownButton className="p-2 h-20" id="dropdown-basic-button" title={dropdownTitle}>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 1");
                                }}>Product 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 2");
                                }}>Product 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 3");
                                }}>Product 3</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 4");
                                }}>Product 4</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 5");
                                }}>Product 5</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 6");
                                }}>Product 6</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 7");
                                }}>Product 7</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 8");
                                }}>Product 8</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 9");
                                }}>Product 9</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 10");
                                }}>Product 10</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 11");
                                }}>Product 11</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 12");
                                }}>Product 12</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 13");
                                }}>Product 13</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 14");
                                }}>Product 14</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 15");
                                }}>Product 15</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 16");
                                }}>Product 16</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 17");
                                }}>Product 17</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 18");
                                }}>Product 18</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 19");
                                }}>Product 19</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 20");
                                }}>Product 20</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 21");
                                }}>Product 21</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 22");
                                }}>Product 22</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 23");
                                }}>Product 23</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 24");
                                }}>Product 24</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 25");
                                }}>Product 25</Dropdown.Item>
                                <Dropdown.Item href="#/action-1" onClick={() => {
                                    setDropdownTitle("Product 26");
                                }}>Product 26</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setDropdownTitle("Product 27");
                                }}>Product 27</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={() => {
                                    setDropdownTitle("Product 28");
                                }}>Product 28</Dropdown.Item>
                            </DropdownButton>
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
                                    setmonthTitle("NOV");
                                }}>November</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    setmonthTitle("DEC");
                                }}>December</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton className=" p-2 h-20" id="dropdown-basic-button" title={yearTitle}>
                                {year.map(function (item) {
                                    var item1 = item.toString();
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