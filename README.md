# Simultaneous Timers Assignment

Tools:
1. React.js - Create-React-App(CRA)

Description:
This is a very straight forward Countdown Timer application where you as the chef can create as many timers necessary to assist with keeping track of your ingredients/items while they are in the process of cooking. A form is present for you to fill out the item name, minutes, and seconds. Timers will run simultaneously with each other for better tracking and once the countdown has decremented entirely, the timer will disappear. 

Build Instructions:
- Please reinstall npm with 'npm i' as node_modules package is not included.
- Simply start the server of the app by using 'npm start' and see it in localhost on your browser.

Testing the Timer App:
- There are 3 input fields: Item Name, Minutes, and Seconds. Please fill them all out accurately.
- Once you are done filling out the fields, hit the "Start Timer" button to initiate your timer.
- The Timer will disappear once the countdown has finished.
- Once a countdown timer has finished, you will notice that the name is still present. This indicates that this previous timer has finished and you no longer have to time it again. :)
- To add an additional timer, simply hit the "Reset Timer" button as it will clear the input fields for you to fill out again with your new inputs. Hit "Start Timer" again and see your new timer in action working simultaneously with the others.

- How long you spent on the assignment.

10 hrs++

- What you like about your implementation.

The implementation of setting state and using React hooks was a key essential tool into building this timer application. Given the ability to set state and pass them down as props made the utilization of user data present within my countdown logic component. Using handle functions and event handlers such as onSubmit, onChange, and handleSubmit allowed for making changes to state values and props happen asynchronously. Time computations within JavaScript can be quite complex and confusing without a library but being able to scope out JS methods and use time computations to convert over to unix was convenient in this case. To help with the countdown, I used the setInterval method that helps repeatedly call a function with a specific time dependency and then clearing out the interval as soon as the timer stopped with the clearInterval method. In addition, the useEffect hook was what helped triggered my startTimer function being that it is a direct replacement to a lot of lifecycle methods such as componentDidMount and componentDidUpdate.

All in all, it was a fun app to build. I was able to implement most of the main functions that were needed for this Simultaneous Timer App: creating the timer, having timers run simultaneously, and making sure the timers disappeared when they were done. I'm actually very thankful towards this app because it has taught me immensely and looking forward to more challenges.

- What you would change if you were going to do it again.

Although I was content with how I was able to manage state without having to use Redux, I would implement a state management library such as Redux because global state can help with convenience. Using it the next time would be nice to showcase it's abilities and relevance in the front-end field today. However, these libraries can be taxing performance-wise for a small application such as this Timer app. Lastly, I would have also dispersed some of my time into design and making the app a bit more aesthically pleasing as well.

- How you made your design decisions. For example, if you looked at other timer apps/webapps for inspiration, please note that.

Some of my design decisions were through pure intuition but I found a good amount of inspiration through a lot of posts/blogs on websites such as Medium. I tend to like more formal documentation-oriented websites such as React's or Mozilla.Mdn's websites but an app like this really draws you towards outside resources due to it's unique requirements.

- How you would test this if you had more time.

Aside from using the debugger and console.log-ing values to see their output, I would have liked to implement more methods, custom hooks, and possibly have added libraries to see the overall functionality and how the app would turn out in the end.
