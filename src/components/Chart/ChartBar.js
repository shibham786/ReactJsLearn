import React from "react";
import "./ChartBar.css"

const ChartBar = (props) => {
  //setting the height of bar dyanmically depending on value
  let BarHeightfill = "0%";

  if (props.maxValue > 0) {
    BarHeightfill = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* yaha pr style property ko obj chahiye isliye {{}} use kiya*/}
        <div className="chart-bar__fill" style={{ height: BarHeightfill }}>
        
        </div>
      </div>
      <div className="chart-bar__label"> {props.label} </div>
    </div>
  );
};

export default ChartBar;
