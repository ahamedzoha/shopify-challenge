import React, { useEffect, useState } from "react";

const Notification = (props) => {
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const [exit, setExit] = useState(false);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prevState) => {
        if (prevState < 100) return prevState + 0.5;
        clearInterval(id);
        return prevState;
      });
    }, 15);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      //remove state therefore dom
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 300);
  };

  useEffect(() => {
    if (width === 100) handleCloseNotification();
    // eslint-disable-next-line
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${
        props.type === "SUCCESS" ? `success` : `error`
      } ${exit ? `exit` : ``}`}
    >
      <p>{props.message}</p>
      {/* <button onClick={() => setExit(true)} type="button">
        exit
      </button> */}
      <div className="bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default Notification;
