import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import TitleChild from "./components/TitleChild/TitleChild";
import Accordian from "./components/Accordian/Accordian";
import Footer from "./components/Footer/Footer";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { publicRoutes } from '~/routes'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  const [tab, setTab] = useState('Teller Operation');

  const handleChangeTab = (tb) => {
    setTab(tb);
    console.log(tb);
  }

  return (
    // <Router>
    //   <div className="App">
    //       <Routes>
    //           {publicRoutes.map((route, index) => {
    //             const Page = route.component
    //             return <Route key={index} path={route.path} element={<Page />} />;
    //           })}
    //       </Routes>
    //   </div>
    // </Router>

    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>

        <NavBar handleChangeTab={handleChangeTab}/>
        {tab==="Teller Operation" && <Accordian />}
        {tab==="Transfer Operation" && <Accordian />}
        {tab==="Credit Operation" && <Accordian />}
        {tab==="Trade Finance Operation" && <Accordian />}
        {/* <TitleChild props="Teller Operation"/>
        <Accordian /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
