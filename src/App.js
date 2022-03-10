import Selection from "./components/Selection";
import BarChart from "./components/BarChart";
import Content from "./Content";
import Navbar from "./Navbar";
import React from 'react';
import
{
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


function App() {
  return (
      <>

      <Router>
    <div className="App">

      <Navbar className="container" />
        {/*<Routes>*/}
        {/*    <Route path="/components/Content" element={<Content/>}/>*/}
        {/*</Routes>*/}

        <Routes>
            <Route path="/components/Selection" element={<Selection/>}/>
        </Routes>
        <Routes>
            <Route path="/components/BarChart" element={<BarChart />}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Content/>} />
        </Routes>
    </div>
      </Router>
   </>
  );
}

export default App;
