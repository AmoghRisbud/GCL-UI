import React from 'react';
import {Card,Button} from "react-bootstrap";
import Selection from "./components/Selection";

function Content()
{
    return (
        <>
            <div className="d-flex bd-highlight example-parent align-item-center" style={{display: 'flex', justifyContent: 'center'}} >
                <div className="card1">
                <Card style={{height: 'fit-content',width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="card2">
                <Card style={{ height: 'fit-content' ,width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Analysis</Card.Title>
                        <Card.Text>
                            Graphical Representation
                            of technical analysis of any month
                            <br/>
                            <br/>
                            <br/>
                        </Card.Text>
                        <Button variant="outline-primary" href='/components/Analysis'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                    </div>
            </div>
            <div className= "d-flex bd-highlight example-parent" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="card3">
                <Card style={{ height: 'fit-content' ,width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>card 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary" >Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="card4">
                <Card style={{ height: 'fit-content' ,width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Selection</Card.Title>
                        <Card.Text>
                            Select Product name and upload SAP data for the same.
                            <br/>
                            <br/>
                            <br/>
                        </Card.Text>
                        <Button variant="outline-primary" href="/components/Selection">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <br/>

            </div>

        </>
    )

}
export default Content;