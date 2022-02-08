import Selection from "./components/Selection";
import Analysis from "./components/Analysis";
import Content from "./Content";
import Navbar from "./Navbar";
import React, { Component } from 'react';
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
        <Route path="/" element={<Content/>}>
        </Route>
        </Routes>
        <Routes>
            <Route path="/components/Selection" element={<Selection/>}/>
        </Routes>
        <Routes>
            <Route path="/components/Analysis" element={<Analysis/>}/>
        </Routes>
    </div>
      </Router>
   </>
  );
}

export default App;
