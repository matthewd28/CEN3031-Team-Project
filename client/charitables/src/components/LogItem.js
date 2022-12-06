import LogDate from './LogDate';
import './LogItem.css';

function LogItem(props) {
  return (
    <div className='log-item'>
      <LogDate date={props.date} />
      <div className='log-item__description'>
        <h2>{props.orgName}</h2>
        <div className='log-item__price'>$ {props.amount}</div>
      </div>
    </div>
  );
}

export default LogItem;