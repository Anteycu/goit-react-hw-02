import css from "./Options.module.css";

const Options = ({ onUpdate, totalFeedback }) => {
  const getFeedbackType = (e) => {
    const btnDataKeys = Object.keys(e.target.dataset);
    onUpdate(...btnDataKeys);
  };

  return (
    <div className={css.options}>
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
