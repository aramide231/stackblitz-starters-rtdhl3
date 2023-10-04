import React, { useState, useEffect } from 'react';
import moment from 'moment';

const useDate = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return date;
};

const Clock = () => {
  const date = useDate();
  const timeString = moment(date).format('h:mm:ss A');

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const handleDayClick = () => {
    const dayString = moment(date).format('dddd');
    setDay(dayString);
  };

  const handleMonthClick = () => {
    const monthString = moment(date).format('MMMM');
    setMonth(monthString);
  };

  return (
    <div>
      <div>The current time is {timeString}</div>
      <div>The current day is {day}</div>
      <div>The current month is {month}</div>
      <button onClick={handleDayClick}>Show Day</button>
      <button onClick={handleMonthClick}>Show Month</button>
    </div>
  );
};

export default Clock;
