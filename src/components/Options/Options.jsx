// import css from "./Description.module.css";

const Options = ({ onUpdate, totalFeedback }) => {
  const getFeedbackType = (e) => {
    const btnDataKeys = Object.keys(e.target.dataset);
    // console.log(btnDataKeys);
    onUpdate(...btnDataKeys);
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
      {totalFeedback > 0 && (
        <button type="button" data-reset onClick={getFeedbackType}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
