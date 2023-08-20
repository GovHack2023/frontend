import "../css/leftBox.css";
import { useContext, useEffect } from "react";
import { PassedFlag } from "./MainBox";
import { StateBarChart } from "../pre-utils/StateBarChart";
import LineChartComponent from "../pre-utils/LineChartComponent";
import ShowTextInTime from "../pre-utils/ShowTextInTime";

function LeftBox() {
  const { flag } = useContext(PassedFlag);
  useEffect(() => {}, [flag]);

  let ExactBarChartL;
  ExactBarChartL = StateBarChart;

  return (
    <div className="leftBox">
      <div className="panelL">
        <div className="chartL">
          <ExactBarChartL />
        </div>
      </div>
      <div className="panelL">
        <div className="lineL">
          <LineChartComponent />
        </div>
      </div>
      <div className="panelL">
        <div className="pieL">
          <ShowTextInTime />
        </div>
      </div>
    </div>
  );
}

export default LeftBox;
