// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function IntroPage() {
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
//     axios.get("http://10.12.127.137:8000/wel/genderIncome").then((res) => {
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

// export default IntroPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import echarts from "echarts";

// function IntroPage() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get("http://10.12.127.137:8000/wel/genderIncome").then((res) => {
//       setData(res.data.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Women Care</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <p>sex: {item.sex}</p>
//             <p>state: {item.state}</p>
//             <p>TaxableIncomeRange: {item.TaxableIncomeRange}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default IntroPage;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as echarts from "echarts"; // Import ECharts as a namespace

function IntroPage() {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get("http://10.12.127.137:8000/wel/industryIncome").then((res) => {
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const chart = echarts.init(chartRef.current);

      const xAxisData = data.map((item) => item.industry);
      const yAxisData = data.map((item) => item.total);

      const option = {
        xAxis: {
          type: "category",
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 45,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "bar",
            data: yAxisData,
          },
        ],
      };

      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, [data]);

  return (
    <div>
      <h1>industry income</h1>
      <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default IntroPage;
