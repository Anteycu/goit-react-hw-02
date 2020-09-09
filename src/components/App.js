import React, { Component } from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { SectionTitle } from "./SectionTitle";
import { Notification } from "./Notification";

export class App extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percentage: this.props.initialValue,
  };

  handleGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
    this.countTotalFeedback();
  };

  handleNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
    this.countTotalFeedback();
  };

  handleBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback() {
    this.setState((state, props) => ({
      total: state.total + props.step,
    }));
    this.countPositiveFeedbackPercentage();
  }

  countPositiveFeedbackPercentage() {
    this.setState((state) => ({
      percentage: (state.good / state.total) * 100,
    }));
  }

  render() {
    return (
      <>
        <SectionTitle title={"Please leave feedback"}>
          <FeedbackOptions
            onLeaveFeedback={{
              handleGood: this.handleGood,
              handleNeutral: this.handleNeutral,
              handleBad: this.handleBad,
            }}
          />
        </SectionTitle>
        <SectionTitle title={"Statistics"}>
          {this.state.total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.percentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </>
    );
  }
}
