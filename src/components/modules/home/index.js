import React from "react";
import Header from "../../widgets/header'";
import Input from "../../widgets/input";
import ClassBox from "./classBox";
import Button from "../../widgets/button";
import ClassAttendanceRecordContext from "../../../context/class-Attendance-Record-Context";
import "./index.css";
import { className } from "../../../assets/data/classes";
let Home = function (props) {
  let classAttendanceRecordContext = React.useContext(
    ClassAttendanceRecordContext
  );
  let {
    class1,
    class2,
    class3,
    class4,
    class5,
    markAttendance,
    error,
    setError,
    setClass1,
    setClass2,
    setClass3,
    setClass4,
    setClass5,
    presentStudent,
    SetPresentStudent,
  } = classAttendanceRecordContext;
  const [roll, setRoll] = React.useState();
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWindowDimensions = () => {
    const newHeight = window.innerWidth;
    setWidth(newHeight);
  };
  let [studentClass, setStudentClass] = React.useState();
  let fillRollNumber = function (e) {
    setRoll(e.target.value);
  };

  let studentClasssHandler = function (className) {
    setStudentClass(className);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions); //// Ask

    var getData = JSON.parse(localStorage.getItem("Class1"));
    setClass1(getData ? getData : []);
    var getData = JSON.parse(localStorage.getItem("Class2"));
    setClass2(getData ? getData : []);
    var getData = JSON.parse(localStorage.getItem("Class3"));
    setClass3(getData ? getData : []);
    var getData = JSON.parse(localStorage.getItem("Class4"));
    setClass4(getData ? getData : []);
    var getData = JSON.parse(localStorage.getItem("Class5"));
    setClass5(getData ? getData : []);
    let Presentdata = localStorage.getItem("presentStudent");
    SetPresentStudent(Presentdata ? Presentdata : 0);
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error, presentStudent]);
  return (
    <div className="homeRoot">
      <div className="controlSectionBox">
        <div className="controlSection">
          <div>
            <div className="presentStudentData">
              <div>Present Stu : {presentStudent}</div>
              <div>Date : {new Date().toDateString()} </div>
            </div>
            <Header value={"Enter Roll Number"} />
            <Input value={roll} onChange={(e) => fillRollNumber(e)} />
            <div className="error">
              {error ? "Your Roll Number Must Be 4 Digit" : null}
            </div>
          </div>
          <div className="classesBox">
            <Header value={"Select Class"} />
            <div className="classesList">
              {className.map((val, index) => {
                return (
                  <div
                    onClick={() => studentClasssHandler(val)}
                    className="classesItem"
                    key={index}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buttonBox">
            <Button
              onClick={() => markAttendance(studentClass, roll)}
              name={"Mark Attendance"}
            />
          </div>
        </div>
      </div>
      <div className="content">
        <ClassBox
          humburger={width < 600 ? true : false}
          Class_Name={"Class 1"}
          classArray={class1}
        />
        <ClassBox
          humburger={width < 600 ? true : false}
          Class_Name={"Class 2"}
          classArray={class2}
        />
        <ClassBox
          humburger={width < 600 ? true : false}
          Class_Name={"Class 3"}
          classArray={class3}
        />
        <ClassBox
          humburger={width < 600 ? true : false}
          Class_Name={"Class 4"}
          classArray={class4}
        />
        <ClassBox
          humburger={width < 600 ? true : false}
          Class_Name={"Class 5"}
          classArray={class5}
        />
      </div>
    </div>
  );
};
export default Home;
