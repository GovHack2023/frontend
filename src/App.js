// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState("");

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     axios.get("http://127.0.0.1:8000/wel/").then((res) => {
//   //       setName(res.data.name)
//   //       setDetails(res.data.detail)
//   //       console.log(res.data)
//   //     })
//   //   }, 1000)
//   //   return () => {
//   //     clearInterval(interval)
//   //   }
//   // }, [])
//   useEffect(() => {
//     axios.get("http://10.12.127.137:8000/wel/womenCare").then((res) => {
//       setData(res.data.data[0].sex);
//     });
//   }, []);
//   return (
//     <div>
//       <h1>Women Care</h1>
//       <h2>{data}</h2>
//     </div>
//   );
// }

// export default App;

// import Header from "../src/components/Header";
// import MainBox from "../src/components/MainBox";
// import "./css/backpic.css";

// function App() {
//   return (
//     <>
//       <div className="backgroundpic">
//         <Header></Header>
//         <MainBox />
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/intro">Intro</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
