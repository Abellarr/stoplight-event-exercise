(function() {
  'use strict';
  // Global variables used for associated event listeners
  const stopButton = document.getElementById('stopButton');
  const slowButton = document.getElementById('slowButton');
  const goButton = document.getElementById('goButton');
  const controls = document.getElementById('controls');

  // event listeners and functions for the stop button and stop light
  stopButton.addEventListener('click', stopButtonClick);
  stopButton.addEventListener('mouseenter', enterStopButton);   // event listeners for stop button
  stopButton.addEventListener('mouseleave', leaveStopButton);
  
  function enterStopButton(event) {
    console.log(`Entered ${event.target.textContent} button`);  // functions for stop buttons
  }
  function leaveStopButton(event) {                             // first two are for logging mouse overs, last one is for clicking the button
    console.log(`Left ${event.target.textContent} button`);
  }
  function stopButtonClick(event) {
    let stopLight = document.getElementById('stopLight');
    stopLight.classList.toggle('stop');
    console.log(event.target.textContent + ' button has been clicked');
  }

  // event listeners and functions for the slow button and slow light
  slowButton.addEventListener('click', slowButtonClick);
  slowButton.addEventListener('mouseenter', enterSlowButton);   // event listeners for slow button
  slowButton.addEventListener('mouseleave', leaveSlowButton);

  function enterSlowButton(event) {
    console.log(`Entered ${event.target.textContent} button`);    // functions for slow buttons
  }
  function leaveSlowButton(event) {                               // first two are for logging mouse overs, last one is for clicking the button
    console.log(`Left ${event.target.textContent} button`);
  }
  function slowButtonClick(event) {
    let slowLight = document.getElementById('slowLight');
    slowLight.classList.toggle('slow');
    console.log(event.target.textContent + ' button has been clicked');
  }

  // event listeners and functions for the go button and go light
  goButton.addEventListener('click', goButtonClick);
  goButton.addEventListener('mouseenter', enterGoButton);     // event listeners for go button
  goButton.addEventListener('mouseleave', leaveGoButton);

  function enterGoButton(event) {
    console.log(`Entered ${event.target.textContent} button`);    // functions for go buttons
  }
  function leaveGoButton(event) {                                 // first two are for logging mouse overs, last one is for clicking the button
    console.log(`Left ${event.target.textContent} button`);
  }
  function goButtonClick(event) {
    let goLight = document.getElementById('goLight');
    goLight.classList.toggle('go');
    console.log(event.target.textContent + ' button has been clicked');
  }

  // event listener and function for tracking bulb status in console
  controls.addEventListener('click', checkOnOff);

  function checkOnOff(event) {
    let stopButton = document.getElementById('stopLight')   // variables for the bulbs
    let slowButton = document.getElementById('slowLight')
    let goButton = document.getElementById('goLight')
    if (event.target.id == 'stopButton' && stopButton.classList == 'bulb') {    // conditionals to check if bulbs are on or off
      console.log(`${event.target.textContent} bulb off`)
    } else if (event.target.id == 'stopButton' && stopButton.classList == 'bulb stop') {
      console.log(`${event.target.textContent} bulb on`)
    } else if (event.target.id == 'slowButton' && slowButton.classList == 'bulb') {
      console.log(`${event.target.textContent} bulb off`)
    } else if (event.target.id == 'slowButton' && slowButton.classList == 'bulb slow') {
      console.log(`${event.target.textContent} bulb on`)
    } else if (event.target.id == 'goButton' && goButton.classList == 'bulb') {
      console.log(`${event.target.textContent} bulb off`)
    } else if (event.target.id == 'goButton' && goButton.classList == 'bulb go') {
      console.log(`${event.target.textContent} bulb on`)
    }
  }
})();


// I= click inputs
// O= color of corresponding bulbs change color
// C= bulbs can be on/off independently
// E= ??
