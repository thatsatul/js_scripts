let int = 0;

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter, int);
store.subscribe(() => console.log(store.getState(), '1111'));
store.subscribe(() => console.log(store.getState(), '2222'));

store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });

function createStore(reducer, int) {
  let state = int;
  let subscribers = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(getState(), action);
    subscribers.forEach(cb => cb());
  }

  function subscribe(cb) {
    subscribers.push(cb);
  }

  return {
    dispatch,
    subscribe,
    getState
  };
}
