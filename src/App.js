import React from 'react'

const App = () => {
  // This function will calculate the time remaining between the current date and the first date of New Years.
  const calculateTimeLeft = () => {
    // This is a Date object to find the current year but can also use it to work with dates and times.
    // You can use this variable to calculate the difference between the current date and the first day of New Years.
    let year = new Date.getFullYear();
    // When you use the year variable in place of a hard-coded year, you will always have the current year.
    let difference = +new Date(`01/01/${year}`) - +new Date();
  };

  return (
    <div>
    </div>
  )
}

export default App
