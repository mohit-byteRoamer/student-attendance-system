import "./index.css";
let Input = function (props) {
  return (
    <input className="input" value={props.value} onChange={props.onChange} />
  );
};

export default Input;
