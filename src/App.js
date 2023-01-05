import "./App.css";
import Home from "./components/modules/home";
import ClassAttendanceRecordState from "./context/class-Attendance-Record-State";

function App() {
  return (
    <ClassAttendanceRecordState>
      <div className="App">
        <Home />
      </div>
    </ClassAttendanceRecordState>
  );
}

export default App;
