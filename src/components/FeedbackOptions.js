import React, { Component } from "react";
import PropTypes from "prop-types";

export function FeedbackOptions({ options, onLeaveFeedback }) {
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
