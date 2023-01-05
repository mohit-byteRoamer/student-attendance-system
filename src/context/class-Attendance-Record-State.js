import React from "react";
import ClassAttendanceRecordContext from "./class-Attendance-Record-Context";

let ClassAttendanceRecordState = function (props) {
  const [error, setError] = React.useState(false);
  let [class1, setClass1] = React.useState([]);
  let [class2, setClass2] = React.useState([]);
  let [class3, setClass3] = React.useState([]);
  let [class4, setClass4] = React.useState([]);
  let [class5, setClass5] = React.useState([]);
  const [presentStudent, SetPresentStudent] = React.useState(0);

  let stateConnection = {
    Class1: setClass1,
    Class2: setClass2,
    Class3: setClass3,
    Class4: setClass4,
    Class5: setClass5,
  };

  let arrayConnection = {
    Class1: class1,
    Class2: class2,
    Class3: class3,
    Class4: class4,
    Class5: class5,
  };

  let markAttendance = function (className, rollNumber) {
    let stringRollnumber = rollNumber.toString().length;
    if (stringRollnumber > 4 || stringRollnumber < 4) {
      setError(true);
      return;
    }
    let array = [...arrayConnection[className]];
    if (array) {
      for (let i = 0; i <= array.length - 1; i++) {
        if (array[i]["rollNumber"] == rollNumber) {
          alert("This Rollnumber has already Present");
          return;
        }
      }
    }
    array.push({ rollNumber: rollNumber });
    stateConnection[className](array);
    localStorage.setItem(className, JSON.stringify(array));
    let PresentStudent = Number(presentStudent) + 1;
    SetPresentStudent(PresentStudent);
    localStorage.setItem("presentStudent", PresentStudent);
  };

  return (
    <ClassAttendanceRecordContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </ClassAttendanceRecordContext.Provider>
  );
};

export default ClassAttendanceRecordState;
