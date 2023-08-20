import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios.get("http://127.0.0.1:8000/wel/").then((res) => {
  //       setName(res.data.name)
  //       setDetails(res.data.detail)
  //       console.log(res.data)
  //     })
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  useEffect(() => {
    axios.get("http://10.12.127.137:8000/wel/womenCare").then((res) => {
      setData(res.data.data[0].sex);
    });
  }, []);

  return (
    <div>
      <h1>Gender Income</h1>
      <h2> Data </h2>
    </div>
  );
}

export default HomePage;
