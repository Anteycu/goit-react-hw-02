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

  function handleClick(e) {
    const btnDataKeys = Object.keys(e.target.dataset);
    const feedbackName = new String(...btnDataKeys);
    const updFeedback = {
      ...feedback,
      [feedbackName]: feedback[feedbackName] + 1,
    };
    setFeedback(updFeedback);
    // console.log(btnDataKeys);
    // console.log(feedbackName);
    // console.log(feedback[feedbackName]);
    // console.log(updFeedback);
  }

  return (
    <>
      <Description />
      <Options onUpdate={handleClick} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
}

export default App;
