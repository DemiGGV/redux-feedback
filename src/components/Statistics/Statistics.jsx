import { useSelector } from 'react-redux';

export function Statistics() {
  const { good, neutral, bad } = useSelector(state => state.feedback);
  return (
    <div>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{good + neutral + bad}</span>
      </p>
      <p>
        TotalPercent:
        <span> {Math.round((100 * good) / (good + neutral + bad))}%</span>
      </p>
    </div>
  );
}
