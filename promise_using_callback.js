// This is a common interview question where you can create anpromise like effect using callback. But this is not how actual promise works. To see how actual promise works, refer to : https://www.freecodecamp.org/news/how-javascript-promises-actually-work-from-the-inside-out-76698bb7210b/

// const request = require('request');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Pm(asyncExec) {
  console.log('**** Initializing a promise ****');
  this.then = function(execResolve) {
    asyncExec(execResolve);
  }

  this.error = function(execReject) {
    asyncExec(null, execReject);
  }
}

var pmInstance = new Pm((resolve, reject) => {
  console.log(' ***** Creating an async api request *****');
  const url = 'http://abc.com';
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => resolve(xhr.responseText);
  xhr.onerror = () => reject(xhr.statusText);
  xhr.send();
});

pmInstance.then((res) => {
  console.log('***** Api call got finished *****', res);
});
pmInstance.error((err) => console.log('******* Error in fetching data *******', err));
