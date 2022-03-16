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
    const [chart1, setChart1] = useState({
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: "Rs/Kg",
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
    });
    const [chart2, setChart2] = useState({
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: "Kg/Kg",
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
    });
    const [chart3, setChart3] = useState({
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: "Kg/Kg",
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
    });
    const [dropdownTitle, setDropdownTitle] = useState("Select Product");
    const [monthTitle, setmonthTitle] = useState("Select Month");
    const [yearTitle, setyearTitle] = useState("2020");

    const [chart1Type, setChart1Type] = useState("bar");
    const [chart2Type, setChart2Type] = useState("bar");
    const [chart3Type, setChart3Type] = useState("bar");

    const yearDefault = 2021;
    const year = [];
    const filename = `${dropdownTitle}-${monthTitle}-${yearTitle}`;
    for (let i = yearDefault; i < 2023; i++) {
        year.push(i);
    }
    const labels = [];
    let chart1Data = [];
    let chart2Data = [];
    let chart3Data = [];

    const sendFileName = async () => {
        const formData = new FormData();
        formData.append('filename', filename);
        try {
            const result = await axios.get(
                `${process.env.REACT_APP_API_HOST}/fetchdata/${filename}`,
            );
            result.data.data.map((row3) => labels.push(row3.Description))


            result.data.data.map((row) => chart1Data.push(row.Month_cost))

            setChart1({
                labels: labels,
                datasets: [
                    {
                        label: "Rs/Kg",
                        data: chart1Data,
                        backgroundColor: [
                            "#ffbb11",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0"
                        ]
                    }
                ]
            });
            result.data.data.map((row1) => chart2Data.push(row1.month_Rate))

            setChart2({
                labels: labels,
                datasets: [
                    {
                        label: "Kg/Kg",
                        data: chart2Data,
                        backgroundColor: [
                            "#ffbb11",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0"
                        ]
                    }
                ]
            });
            result.data.data.map((row2) => chart3Data.push(row2.month_Consumption))

            setChart3({
                labels: labels,
                datasets: [
                    {
                        label: "Kg/Kg",
                        data: chart3Data,
                        backgroundColor: [
                            "#ffbb11",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0"
                        ]
                    }
                ]
            });
            console.log(chart1,chart2,chart3)
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
                        <DropdownButton className=" m-2" style={{padding: '0rem', borderRadius: '5rem'}} title={dropdownTitle}>
                            <Dropdown.Item href="#/action-1" onClick={() => {
                                setDropdownTitle("natcpol_cpf");
                            }}>natcpol_cpf</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => {
                                setDropdownTitle("CPF_Symtet_Tech94");
                            }}>CPF_Symtet_Tech94</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={() => {
                                setDropdownTitle("CPF_TECH_OWN94");
                            }}>CPF_TECH_OWN94</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={() => {
                                setDropdownTitle("NATCPOL_ESTER");
                            }}>NATCPOL_ESTER</Dropdown.Item>
                            <Dropdown.Item href="#/action-1" onClick={() => {
                                setDropdownTitle("ACTP_ESTER");
                            }}>ACTP_ESTER</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => {
                                setDropdownTitle("RRCMA");
                            }}>RRCMA</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={() => {
                                setDropdownTitle("DCPFROMDCA");
                            }}>DCPFROMDCA</Dropdown.Item>
                            <Dropdown.Item href="#/action-1" onClick={() => {
                                setDropdownTitle("MECL");
                            }}>MECL</Dropdown.Item>

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
                                setmonthTitle("nov");
                            }}>November</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => {
                                setmonthTitle("DEC");
                            }}>December</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton className=" m-2" style={{padding: '0rem'}} title={yearTitle}>
                            {year.map(function (item) {
                                const item1 = item.toString();
                                return (<Dropdown.Item href="#/action-1" onClick={() => {
                                    setyearTitle(item1);
                                }}>{item1}</Dropdown.Item>)
                            })}
                        </DropdownButton>
                        <Button className=' m-2' variant="success" onClick={sendFileName}>Get Cost Sheet</Button>
                        {chart1.datasets[0].data[0] !== 0 ? (
                            <Button className=' m-2' variant="success" onClick={downloadCostSheet}>Download Cost Sheet</Button>) : (<div style={{background: 'none'}}/>)}
                    </div>
                    <div className="card m-2 d-inline-block" style={{width: '65rem'}}>
                        <div className="card-body text-center">
                            <DropdownButton id="dropdown-basic-button" title={`${chart1Type}`}>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("line");
                                }}>Line Graph</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("doughnut");
                                }}>Doughnut</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("polarArea");
                                }}>Polar Area chart</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart1Type("bar");
                                }}>Bar chart</Dropdown.Item>
                            </DropdownButton>
                            <div className={'m-2'}>

                                {chart1Type === 'bar' ? (<Chart
                                    type='bar' redraw={true}
                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Cost',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Cost (Rs/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart1}
                                />) : null}
                                {chart1Type === 'line' ? (<Chart
                                    type='line' redraw={true}
                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Cost',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Cost (Rs/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart1}
                                />) : null}
                                {chart1Type === 'doughnut' ? (<Chart
                                    type='doughnut'
                                    redraw={true}

                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Cost',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Cost (Rs/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart1}
                                />) : null}{chart1Type === 'polarArea' ? (<Chart
                                type='polarArea' redraw={true}
                                options={{
                                    plugins: {
                                        legend: {
                                            title: {
                                                display: true,
                                                text: 'Month Cost',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    weight: 'bold',
                                                    lineHeight: 1.2,
                                                },
                                            }
                                        },
                                    },
                                    scales: {
                                        x: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Components',
                                                color: '#911',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    weight: 'bold',
                                                    lineHeight: 1.2,
                                                },
                                                padding: {top: 20, left: 0, right: 0, bottom: 0}
                                            }
                                        },
                                        y: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Cost (Rs/Kg)',
                                                color: '#191',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    style: 'normal',
                                                    lineHeight: 1.2
                                                },
                                                padding: {top: 30, left: 0, right: 0, bottom: 0}
                                            }
                                        }},

                                }}
                                data={chart1}
                            />) : null}
                            </div>
                        </div>
                    </div>
                    <div className="card m-2 d-inline-block" style={{width: '65rem'}}>
                        <div className="card-body text-center">
                            <DropdownButton id="dropdown-basic-button" title={`${chart2Type}`}>
                                <Dropdown.Item onClick={() => {
                                    setChart2Type("line");
                                }}>Line Graph</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart2Type("doughnut");
                                }}>Doughnut</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart2Type("polarArea");
                                }}>Polar Area chart</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart2Type("bar");
                                }}>Bar chart</Dropdown.Item>
                            </DropdownButton>
                            <div className={'m-2 p-3'}>

                                {chart2Type === 'bar' ? (<Chart
                                    type='bar' redraw={true}
                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Rate',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Rate (Kg/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart2}
                                />) : null}
                                {chart2Type === 'line' ? (<Chart
                                    type='line' redraw={true}
                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Rate',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Rate (Kg/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart2}
                                />) : null}
                                {chart2Type === 'doughnut' ? (<Chart
                                    type='doughnut'
                                    redraw={true}

                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Rate',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Rate (Kg/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart2}
                                />) : null}{chart2Type === 'polarArea' ? (<Chart
                                type='polarArea' redraw={true}
                                options={{
                                    plugins: {
                                        legend: {
                                            title: {
                                                display: true,
                                                text: 'Month Rate',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    weight: 'bold',
                                                    lineHeight: 1.2,
                                                },
                                            }
                                        },
                                    },
                                    scales: {
                                        x: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Components',
                                                color: '#911',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    weight: 'bold',
                                                    lineHeight: 1.2,
                                                },
                                                padding: {top: 20, left: 0, right: 0, bottom: 0}
                                            }
                                        },
                                        y: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Rate (Kg/Kg)',
                                                color: '#191',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    style: 'normal',
                                                    lineHeight: 1.2
                                                },
                                                padding: {top: 30, left: 0, right: 0, bottom: 0}
                                            }
                                        }},

                                }}
                                data={chart2}
                            />) : null}
                            </div>
                        </div>
                    </div>
                    <div className="card  m-2 d-inline-block" style={{width: '65rem'}}>
                        <div className="card-body text-center">
                            <DropdownButton id="dropdown-basic-button" title={`${chart3Type}`}>
                                <Dropdown.Item onClick={() => {
                                    setChart3Type("line");
                                }}>Line Graph</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart3Type("doughnut");
                                }}>Doughnut</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart3Type("polarArea");
                                }}>Polar Area chart</Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setChart3Type("bar");
                                }}>Bar chart</Dropdown.Item>
                            </DropdownButton>
                            <div className={'m-2'}>

                                {chart3Type === 'bar' ? (<Chart
                                    type='bar' redraw={true}
                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Consumption',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Consumption (Kg/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart3}
                                />) : null}
                                {chart3Type === 'line' ? (<Chart
                                    type='line' redraw={true}
                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Consumption',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Consumption (Kg/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart3}
                                />) : null}
                                {chart3Type === 'doughnut' ? (<Chart
                                    type='doughnut'
                                    redraw={true}

                                    options={{
                                        plugins: {
                                            legend: {
                                                title: {
                                                    display: true,
                                                    text: 'Month Consumption',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                }
                                            },
                                        },
                                        scales: {
                                            x: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Components',
                                                    color: '#911',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        weight: 'bold',
                                                        lineHeight: 1.2,
                                                    },
                                                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                                                }
                                            },
                                            y: {
                                                display: true,
                                                title: {
                                                    display: true,
                                                    text: 'Consumption (Kg/Kg)',
                                                    color: '#191',
                                                    font: {
                                                        family: 'Helvetica',
                                                        size: 20,
                                                        style: 'normal',
                                                        lineHeight: 1.2
                                                    },
                                                    padding: {top: 30, left: 0, right: 0, bottom: 0}
                                                }
                                            }},

                                    }}
                                    data={chart3}
                                />) : null}{chart3Type === 'polarArea' ? (<Chart
                                type='polarArea' redraw={true}
                                options={{
                                    plugins: {
                                        legend: {
                                            title: {
                                                display: true,
                                                text: 'Month Consumption',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    weight: 'bold',
                                                    lineHeight: 1.2,
                                                },
                                            }
                                        },
                                    },
                                    scales: {
                                        x: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Components',
                                                color: '#911',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    weight: 'bold',
                                                    lineHeight: 1.2,
                                                },
                                                padding: {top: 20, left: 0, right: 0, bottom: 0}
                                            }
                                        },
                                        y: {
                                            display: true,
                                            title: {
                                                display: true,
                                                text: 'Consumption (Kg/Kg)',
                                                color: '#191',
                                                font: {
                                                    family: 'Helvetica',
                                                    size: 20,
                                                    style: 'normal',
                                                    lineHeight: 1.2
                                                },
                                                padding: {top: 30, left: 0, right: 0, bottom: 0}
                                            }
                                        }},

                                }}
                                data={chart3}
                            />) : null}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BarChart
