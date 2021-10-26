import React from 'react';
import ReactDOM from 'react-dom';
import TimerForm from './Components/TimerForm/TimerForm';

ReactDOM.render(
  <React.StrictMode>
    <TimerForm />
  </React.StrictMode>,
  document.getElementById('root')
);


// Homepage

// main header title:
// "Cooking Timers"
// "Add a timer and have multiple timers running simultaneously together at the same time!"

// Subtitle: 
// up top of page after the main header
// input form - "What are you serving up?" - this will be the placeholder for the input form
// button - click enter 
// after clicking the title then appears and is hard-coded. onClick={}

// 
// click here to add a timer for your cooking 
// input form where you can enter the name of your timer and once you hit the enter button, it sets the name.
// the placeholder name of the input form will say "ingredient name"
// while the timer is running, 
// reset doesn't take the timer back to zero

// set the timer buttons
// if they hit the start button and a time has not been set, send an alert saying set your timer

// giving the option to actually delete the timer

// shortest timers go on top and disappear as they finish


//button wrapper
// button will say "Add Timer"
// jsx component within this button wrapper

// where do timers appear on the page?
// do they just appear side to side? stack on each other?
// if side-to-side, should it be in a grid container where 3 timers take up one roll (12 cols on the row)

