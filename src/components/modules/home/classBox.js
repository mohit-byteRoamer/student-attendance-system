import React from "react";
import "./index.css";
import Header from "../../widgets/header'";
import StudentCard from "../../shared/studentCard";

let ClassBox = function (props) {
  return (
    <div className="classBoxRoot">
      <div className="classBoxContent">
        <Header value={props.Class_Name} />

        {props.classArray &&
          props.classArray.map((val, index) => {
            return (
              <div key={index}>
                <div className="classStudent">
                  <StudentCard rollNumber={val.rollNumber} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ClassBox;
