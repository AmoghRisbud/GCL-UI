import React from 'react';
import {Card,Button} from "react-bootstrap";

function Content()
{
    return (
        <>
            <div className="d-flex bd-highlight example-parent align-item-center" style={{display: 'flex', justifyContent: 'center'}} >
                <div className="card1">
                    <Card style={{ height: 'fit-content' ,width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Selection</Card.Title>
                            <Card.Text>
                                Select Product name and upload SAP data for the same.
                                <br/>
                                <br/>
                                <br/>
                            </Card.Text>
                            <Button variant="outline-primary" href="/components/Selection">Upload SAP data</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card2">
                <Card style={{ height: 'fit-content' ,width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Analysis</Card.Title>
                        <Card.Text>
                            Analyse, Download Costsheets of various products
                            <br/>
                            <br/>
                            <br/>
                        </Card.Text>
                        <Button variant="outline-primary" href='/components/BarChart'>Analyse Costs</Button>
                    </Card.Body>
                </Card>
                    </div>
            </div>
        </>
    )

}
export default Content;