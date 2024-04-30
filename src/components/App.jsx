import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const initFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback ?? initFeedback;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    if (feedbackType === "reset") {
      setFeedback(initFeedback);
      return;
    }

    const updFeedback = {
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    };
    setFeedback(updFeedback);
  }

  function calcTotalFeedback({ good, bad, neutral }) {
    return good + bad + neutral;
  }

  function calcPositiveFeedback(fbData) {
    return Math.round((fbData.good / calcTotalFeedback(fbData)) * 100);
  }

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={calcTotalFeedback(feedback)}
      />
      {calcTotalFeedback(feedback) ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={calcTotalFeedback(feedback)}
          positiveFeedback={calcPositiveFeedback(feedback)}
        />
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </>
  );
}

export default App;
