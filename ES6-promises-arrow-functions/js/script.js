// ----------------------------------regular function

function hello() {
  console.log("Hello World!");
}
hello();

// ----------------------------------arrow function

// var hello = () => {
//   console.log("Hello World!");
// }
//
// hello2();

// ----------------------------------Arrow Function With Parameters

// var hello3 = (name) => {
//   console.log("Hello " + name);
// }
//
// hello3("John");

// ----------------------------------Arrow Function Using Input
//
// $("#fetchBtn").click(function() {
//   inputvalue = $('#name-input').val();
//   alertname(inputvalue);
// });
//
// var alertname = (name) => {
//   alert("Hello " + name);
// }

// ----------------------------------Can't click on button if empty

// $("#fetchBtn").click(function() {
//   inputvalue = $('#name-input').val();
//   if (inputvalue !== "") {
//     alertname(inputvalue);
//   } else{
//     alert("Please enter a name");
//   }
// });

// ----------------------------------non JQuery click, arrow function

// var box = document.getElementById('fetchBtn');
// box.addEventListener("click", () => {
// console.log(this);
// });

// ----------------------------------Use a promise


// var myPromise = new Promise(function(resolve, reject) {
//     resolve('Our promise was successful!');
// });
//
// myPromise.then(function(data) {
//     console.log(data);
// }).then(function(data) {
//     console.log("Our data was shown!");
// });

// ----------------------------------Use a promise to reject using catch

// var myPromise2 = new Promise(function(resolve, reject) {
//     x = 2;
//     if (x == 2) {
//     resolve('Our promise was successful');
//     }
//     reject('nah x is equal to ' + x);
// });
//
// myPromise2.then((data) => console.log(data))
// .catch((data) => console.log(data));
