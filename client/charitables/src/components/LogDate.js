import './LogDate.css';

function LogDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="log-date">
      <div className="log-month-and-day">{month}</div>
      <div className="log-month-and-day">{day}</div>
      <div className="log-year">{year}</div>

    </div>
  );
}

export default LogDate;