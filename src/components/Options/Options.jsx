// import css from "./Description.module.css";

const Options = ({ onUpdate }) => {
  const getFeedbackType = (e) => {
    const btnDataKeys = Object.keys(e.target.dataset);
    // console.log(btnDataKeys);
    onUpdate(new String(...btnDataKeys));
  };

  return (
    <div>
      <button type="button" data-good onClick={getFeedbackType}>
        Good
      </button>
      <button type="button" data-neutral onClick={getFeedbackType}>
        Neutral
      </button>
      <button type="button" data-bad onClick={getFeedbackType}>
        Bad
      </button>
      {/* <button type="reset">Reset</button> */}
    </div>
  );
};

export default Options;
