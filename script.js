const socket = io('http://localhost:3000');


// 5500 client script.js -> 3000 server index.js
// 3000 server index.js -> 5500 client script.js
// index.html  -> frontend, script.js is client-side server, index.js is backend server