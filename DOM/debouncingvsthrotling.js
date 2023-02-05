// Debouncing and throttling are two techniques used in JavaScript to control the frequency of events or the rate at which a function is executed.

// Debouncing is a technique where a function is executed after a certain amount of time has passed since the last time it was invoked. 
// This is useful when you want to make sure that a function is not executed too frequently, 
// for example, when you are working with event handlers for user input. With debouncing, 
// you can wait for the user to finish making their changes before executing the function.

// Throttling, on the other hand, is a technique where a function is executed at a maximum rate of once per specified interval. 
// This is useful when you want to limit the rate at which a function is executed, 
// for example, when you are working with an API that has rate limits. With throttling, 
// you can ensure that the function is not executed too frequently, regardless of how often the event is triggered.

// Here is an example of debouncing in JavaScript:
let timeoutId;

function debouncedFunction(event) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    console.log('Debounced function executed');
  }, 500);
}

document.querySelector('input').addEventListener('input', debouncedFunction);
