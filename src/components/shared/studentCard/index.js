import "./index.css";
let StudentCard = function (props) {
  return (
    <div className="studentCardRoot">
      <div> Roll Number : {props.rollNumber}</div>
    </div>
  );
};

export default StudentCard;
