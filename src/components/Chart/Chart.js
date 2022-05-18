import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"
//yaha pr chart dikhayenge ki kis month m kitni sale hui uske liye chart and chart bar m coding hai
const Chart = (props) => {
    const DatapointValuesArray = props.Datapoints.map(Datapoint => Datapoint.value)
    const TotalMaximum = Math.max(...DatapointValuesArray)
    console.log("total maximum",DatapointValuesArray)
  return (
    <div className="chart">
      {props.Datapoints.map((Datapoint) => (
        <ChartBar
          key={Datapoint.label}
          value={Datapoint.value}
          maxValue={TotalMaximum}
          label={Datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
