setTimeout(function () {
  console.log("I have waited for this moment");
}, 5000);

function greet() {
  console.log("Hello World!");
}

setTimeout(greet, 5000);

setInterval(function () {}, 1000);

setInterval(() => {
  console.log("Echo...");
}, 1000);

setInterval 