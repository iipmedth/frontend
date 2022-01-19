import { React, useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <span>
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </span>
  );
};

export default Clock;
