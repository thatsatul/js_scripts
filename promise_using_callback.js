// Creating a promise using callbacks

// const request = require('request');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Pm(PromiseCallback) {
  console.log('**** Initializing a promise ****');
  this.then = function(resolveCallback) {
    PromiseCallback(resolveCallback);
  }
}

var pmInstance = new Pm((resolve) => {
  console.log(' ***** Creating an async api request *****');
  const url = 'http://abc.com';
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => resolve(xhr.responseText);
  // xhr.onerror = () => reject(xhr.statusText);
  xhr.send();
});

pmInstance.then(() => {
  console.log('***** Api call got finished *****');
});
