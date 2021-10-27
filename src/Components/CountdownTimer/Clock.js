import React from "react";
import './Clock.css';

const Clock = ({ timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
      <h1>Countdown Clock</h1>
      <div id="clockdiv">
        <div>
          <span class="days"></span>
          <div class="smalltext">Days</div>
        </div>
        <div>
          <span class="hours"></span>
          <div class="smalltext">Hours</div>
        </div>
        <div>
          <span class="minutes"></span>
          <div class="smalltext">Minutes</div>
        </div>
        <div>
          <span class="seconds"></span>
          <div class="smalltext">Seconds</div>
        </div>
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