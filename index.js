(function() {
  'use strict';
  // YOUR CODE HERE
  const stopButton = document.getElementById('stopButton');
  const slowButton = document.getElementById('slowButton');
  const goButton = document.getElementById('goButton');

  stopButton.addEventListener('click', stopButtonClick);
  function stopButtonClick(event) {
    let stopLight = document.getElementById('stopLight');
    stopLight.classList.toggle('stop');
    console.log(event.target.textContent + ' button has been clicked');
  }

  slowButton.addEventListener('click', slowButtonClick);
  function slowButtonClick(event) {
    let slowLight = document.getElementById('slowLight');
    slowLight.classList.toggle('slow');
    console.log(event.target.textContent + ' button has been clicked');
  }

  goButton.addEventListener('click', goButtonClick);
  function goButtonClick(event) {
    let goLight = document.getElementById('goLight');
    goLight.classList.toggle('go');
    console.log(event.target.textContent + ' button has been clicked');
  }
})();


// I= click inputs
// O= color of corresponding bulbs change color
// C= bulbs can be on/off independently
// E= ??
