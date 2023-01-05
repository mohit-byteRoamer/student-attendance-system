import "./index.css";
let Button = function (props) {
  return (
    <div onClick={props.onClick} className="button">
      {props.name}
    </div>
  );
};

export default Button;
