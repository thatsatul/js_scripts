const fetch = require("node-fetch");

function get(id) {
  return fetch('http://hn.algolia.com/api/v1/items/'+id);
}

function getData(count) {
  if(count > 10)
    return;
  const fetchPromise = get(count);
  fetchPromise.then(res => res.json()).then(res1 => {
    if(res1.id) {
      getData(count + 1);
    }
    console.log('***** count, id *****', count, res1.id);
  });
}

getData(1);

