import React from "react";
import './Clock.css';

const Clock = ({ timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
      <div className="">
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <p>{timerHours}</p>
                <small>Hours</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerMinutes}</p>
                <small>Minutes</small>
              </section>{" "}
              <span>:</span>
              <section>
                <p>{timerSeconds}</p>
                <small>Seconds</small>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

Clock.defaultProps = {
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;