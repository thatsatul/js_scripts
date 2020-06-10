
const axios = require('axios');

axios({
  method: 'get',
  url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
})
  .then(response => {
    console.log('********* Implementing normal axios *********');
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });


//Async and await
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000)
});
async function f() {
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();


// Implementing async-await with axios
const get = () => {
  return axios({
    method: 'get',
    url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
  });
}

async function f1() {
  let response = await get(); // wait until the promise resolves (*)
  console.log('********* Implementing async-await with axios *********', response.data); // "done!"
}

f1();
