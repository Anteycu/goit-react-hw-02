// import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const positive = Math.floor((good / total) * 100);
  return (
    <div>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive: {positive}</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
