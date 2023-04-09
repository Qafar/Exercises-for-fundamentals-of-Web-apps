import { useState } from 'react';

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / all;
  const positiveByPercent = `${(good / all) * 100}%`;

  return (
    <table border="1">
      <tbody>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={average.toFixed(1)} />
        <StatisticLine text='positive' value={positiveByPercent} />
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => handleFeedback('good')} text='good' />
      <Button handleClick={() => handleFeedback('neutral')} text='neutral' />
      <Button handleClick={() => handleFeedback('bad')} text='bad' />
      <h2>statistics</h2>
      <Statistics {...feedback} />
    </div>
  );
};

export default App;
