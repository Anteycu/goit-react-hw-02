import React from "react";
import PropTypes from "prop-types";

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback.handleGood}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback.handleNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback.handleBad}>
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.object,
};
