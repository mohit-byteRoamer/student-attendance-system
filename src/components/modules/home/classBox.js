import React from "react";
import "./index.css";
import Header from "../../widgets/header'";
import StudentCard from "../../shared/studentCard";
import UpArrowIcon from "../../../assets/icon/up-arrow.png";
import DownArrow from "../../../assets/icon/down-arrow.png";

let ClassBox = function (props) {
  const [show, setShow] = React.useState(false);
  let showDetail = function () {
    setShow(show ? false : true);
    // debugger;
    console.log(show);
  };
  return (
    <div className="classBoxRoot">
      <div className="classBoxContent">
        <div className="headerSection">
          <Header value={props.Class_Name} />
          {props.humburger ? (
            show ? (
              <img
                onClick={() => showDetail()}
                className="iconArrow"
                src={DownArrow}
              />
            ) : (
              <img
                onClick={() => showDetail()}
                className="iconArrow"
                src={UpArrowIcon}
              />
            )
          ) : null}
        </div>
        {props.classArray &&
          props.classArray.map((val, index) => {
            return (
              <div key={index}>
                <div className="classStudent">
                  {props.humburger ? null : (
                    <StudentCard rollNumber={val.rollNumber} />
                  )}
                  {show ? <StudentCard rollNumber={val.rollNumber} /> : null}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ClassBox;
