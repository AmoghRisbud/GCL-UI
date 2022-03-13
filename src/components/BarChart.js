import React, {useState} from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip, ArcElement, RadialLinearScale,
} from 'chart.js';
import {
    Chart,
} from 'react-chartjs-2';
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import axios from "axios";
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Legend,
    Tooltip,
);


const BarChart = () => {
    const [chart, setChart] = useState({
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: "Price in USD",
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    "#ffbb11",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ]
            }
        ]
    })
    const [dropdownTitle, setDropdownTitle] = useState("Select Product");
    const [monthTitle, setmonthTitle] = useState("Select Month");
    const [yearTitle, setyearTitle] = useState("1990");

    const [chart1Type,setChart1Type] = useState("bar");
    // const [chart2Type,setChart2Type] = useState("bar");
    // const [chart3Type,setChart3Type] = useState("bar");

    const yearDefault = 1990;
    const year = [];
    const filename = `${dropdownTitle}-${monthTitle}-${yearTitle}`;
    for (let i = yearDefault; i < 2023; i++) {
        year.push(i);
    }
    const labels = [];
    const chartData = [];

    const sendFileName = async () => {
        const formData = new FormData();
        formData.append('filename', filename);
        try {
            const result = await axios.get(
                `${process.env.REACT_APP_API_HOST}/fetchdata/${filename}`,
            );
            console.log(result.data.data)

            result.data.data.map((row) => chartData.push(row.Month_cost))
            result.data.data.map((row) => labels.push(row.Description))
            setChart({
                labels: labels,
                datasets: [
                    {
                        label: "Price in USD",
                        data: chartData,
                        backgroundColor: [
                            "#ffbb11",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0"
                        ]
                    }
                ]
            })

        } catch (err) {
            console.log(err)
        }
    };

    const downloadCostSheet = async () => {

        try {
            const result = await axios.get(
                `${process.env.REACT_APP_API_HOST}/download/${filename}`,
            );
            if (result) {
                window.open(`${process.env.REACT_APP_API_HOST}/download/${filename}`, '_blank')
                return true
            }


        } catch (err) {
            console.log(err)
        }

    }


    return (
        <>
            <div className="row" align='center'>
                <div className="row-sm-6 text-center" align='center'>
                    <div className={'d-flex p-2 justify-content-around'} style={{width: '55rem', margin: 'auto'}}
                         align='center'>


                        <DropdownButton className=" m-2" style={{padding: '0rem',borderRadius:'5rem'}} title={dropdownTitle}>
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
                        <DropdownButton className=" m-2" style={{padding: '0rem'}} title={monthTitle}>
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

                        <DropdownButton className=" m-2" style={{padding: '0rem'}} title={yearTitle}>
                            {year.map(function (item) {
                                var item1 = item.toString();
                                return (<Dropdown.Item href="#/action-1" onClick={() => {
                                    setyearTitle(item1);
                                }}>{item1}</Dropdown.Item>)
                            })}
                        </DropdownButton>
                        <Button className=' m-2' variant="success" onClick={sendFileName}>Get Cost Sheet</Button>
                        {chart.datasets[0].data[0] !== 0 ? (
                            <Button className=' m-2' variant="success" onClick={downloadCostSheet}>Download Cost
                                Sheet</Button>) : (<div style={{background: 'none'}}/>)}
                    </div>
                    <div className="card  p-2 h-100 d-inline-block" style={{width: '65rem'}}>
                        <div className="card-body text-center">
                            <DropdownButton id="dropdown-basic-button" title={`${chart1Type}`}>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("line");
                                }} >Line Graph</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("doughnut");
                                }} >Doughnut</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("polarArea");
                                }} >Polar Area chart</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("bar");
                                }} >Bar chart</Dropdown.Item>
                            </DropdownButton>
                            <div className={'m-2'}>

                                {chart1Type==='bar'?(<Chart
                                    type='bar' redraw={true}
                                    options={{
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: "Monthly cost RM"
                                            },
                                            legend: {
                                                display: true,
                                                position: "bottom"
                                            }
                                        }
                                    }}
                                    data={chart}
                                />):null}
                                {chart1Type==='line'?(<Chart
                                    type='line' redraw={true}
                                    options={{
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: "Monthly cost RM"
                                            },
                                            legend: {
                                                display: true,
                                                position: "bottom"
                                            }
                                        }
                                    }}
                                    data={chart}
                                />):null}
                                {chart1Type==='doughnut'?(<Chart
                                    type='doughnut'
                                    redraw={true}

                                    options={{
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: "Monthly cost RM"
                                            },
                                            legend: {
                                                display: true,
                                                position: "bottom"
                                            },
                                            layout:{
                                                autoPadding:true
                                            }
                                        }
                                    }}
                                    data={chart}
                                />):null}{chart1Type==='polarArea'?(<Chart
                                type='polarArea' redraw={true}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Monthly cost RM"
                                        },
                                        legend: {
                                            display: true,
                                            position: "bottom"
                                        }
                                    }
                                }}
                                data={chart}
                            />):null}
                            </div>


                            </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default BarChart
