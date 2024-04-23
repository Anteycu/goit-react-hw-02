// import css from "./Description.module.css";

const Options = ({ onUpdate }) => {
  return (
    <div>
      <button type="button" data-good onClick={onUpdate}>
        Good
      </button>
      <button type="button" data-neutral onClick={onUpdate}>
        Neutral
      </button>
      <button type="button" data-bad onClick={onUpdate}>
        Bad
      </button>
      {/* <button type="reset">Reset</button> */}
    </div>
  );
};

export default Options;
