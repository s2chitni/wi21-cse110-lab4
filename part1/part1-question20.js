var intervalID = setInterval(myFunc, 1000);

function myFunc(a, b) {
   let d = new Date();
   let time = d.toLocaleTimeString();
   console.log(time);
}

myFunc();