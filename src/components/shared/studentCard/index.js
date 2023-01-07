import "./index.css";
let StudentCard = function (props) {
  return (
    <div className="studentCardRoot">
      {props.rollNumber > 0 ? (
        <div> Roll Number : {props.rollNumber}</div>
      ) : (
        <div> No Data</div>
      )}
    </div>
  );
};

export default StudentCard;
