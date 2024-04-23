import { useState } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    const updFeedback = {
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    };
    setFeedback(updFeedback);
    // console.log(feedback[feedbackType]);
    // console.log(updFeedback);
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
      <Options onUpdate={updateFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={calcTotalFeedback(feedback)}
        positiveFeedback={calcPositiveFeedback(feedback)}
      />
    </>
  );
}

export default App;
