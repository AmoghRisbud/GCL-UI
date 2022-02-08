import React, {useState} from 'react';
import {DropdownButton, Dropdown, Form, Button} from "react-bootstrap";


function Selection(){
const [dropdownTitle, setDropdownTitle] = useState("Select Product");

    return (
        <>
                <div className="row" align='center'>
                    <div className="row-sm-6 text-center mt-20" align='center'>
                        <div className="card w-50 p-5 h-100 d-inline-block" >
                            <div className="card-body text-center mt-20" align='center'>
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">Select product here</p>
                                <DropdownButton id="dropdown-basic-button" title={dropdownTitle}>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 1");}}>Product 1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 2");}}>Product 2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 3");}}>Product 3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 4");}}>Product 4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 5");}}>Product 5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 6");}}>Product 6</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 7");}}>Product 7</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 8");}}>Product 8</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 9");}}>Product 9</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 10");}}>Product 10</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 11");}}>Product 11</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 12");}}>Product 12</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 13");}}>Product 13</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 14");}}>Product 14</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 15");}}>Product 15</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 16");}}>Product 16</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 17");}}>Product 17</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 18");}}>Product 18</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 19");}}>Product 19</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 20");}}>Product 20</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 21");}}>Product 21</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 22");}}>Product 22</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 23");}}>Product 23</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 24");}}>Product 24</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 25");}}>Product 25</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" onClick={()=>{setDropdownTitle("Product 26");}}>Product 26</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"onClick={()=>{setDropdownTitle("Product 27");}}>Product 27</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"onClick={()=>{setDropdownTitle("Product 28");}}>Product 28</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                    <div className="row-sm-6 text-center mt-20" align=''>
                        <div className="card w-50 p-5 h-100 d-inline-block">
                            <div className="card-body">
                                <h5 className="card-title">Choose file to upload</h5>
                                <p className="card-text">Upload your {} .xlsx or .csv file here</p>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Default file input example</Form.Label>
                                    <Form.Control type="file" />
                                    <Button className='row-sm-4' variant="success">Upload</Button>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )

}
export default Selection;