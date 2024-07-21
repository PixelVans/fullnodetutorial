// const superHero = require("./super-hero");


// //REQUIRE OR IMPORT FILES
// const math = require("./math.js")
// console.log(math.add(3, 5))
// console.log(math.subtract(3, 5))















// //IMPORTING JSON
// const data = require("./data.json");
// console.log(data);
// console.log(data.name)
// //adding (node --watch) to the terminal restarts after changes
// //without the braces just type node --watch and run the codenode index
 














// function greet(name) {clearInterval
//     console.log(`Hello ${name}`)
// }
// //here, the function receives a function as a parameter
// function greetVishwas(greetFn) {
//     const name = "Vishwas";
//     greetFn(name)
// }
// greetVishwas(greet)











// //event module(registers events listeners using on method)
// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.on("order-pizza", () => {
//     console.log("order received! Baking started")
// });
// //using an emit method to emit an event
// emitter.emit("order-pizza");











// //BUFFER
// const buffer = new Buffer.from("evans");
// console.log(buffer.toJSON());
// console.log(buffer.toString())












// //WORKING WITH FS MODULE
// const fs = require("node:fs");
// // using readFilesync method of fs to acces fies
// const fileContent = fs.readFileSync("./file.txt");
// //convert to string since it returns binary data in buffer mode
// console.log(fileContent.toString());
// //read file method to do it asynchronously
// //utf-8 tells it to encode the binary data to normal
// fs.readFile("./file.txt", "utf-8",(error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// });
// //writeFileSync method
// //the code below will create a new file with the text in it
// fs.writeFileSync("./greet.txt",  "Hello new file")
// fs.writeFile("./greet.txt",  " Hello async write", { flag: "a" },
//     (err) => {
//         if (err) { console.log(err); }
//         else{console.log("file written")}
//      }
//  )













// //USING FS/PROMISES
// const fs = require("fs").promises;
// fs.readFile("file.txt", "utf-8")
//     .then((data) => console.log(data))
// .catch(err=>console.log(err))














// //USING FS STREAMS
// const fs = require('fs');
// const readableStream = fs.createReadStream("./file.txt",
//     {
//         encoding: "utf-8",
//         highWaterMark: 2,//meaning stream 2 bytes or xtrs per time
//     }
// );
// //writing and creating a new file with file.txt content
// const writeableStream = fs.createWriteStream("./file2.txt");
// //using write method to append content from readable stream(file.txt)
// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// });













// //PIPES
// const fs = require('fs');
// const readableStream = fs.createReadStream("./file.txt",
//     {
//         encoding: "utf-8",
//         highWaterMark: 2,//meaning stream 2 bytes or xtrs per time
//     }
// );
// //writing and creating a new file with file.txt content
// const writeableStream = fs.createWriteStream("./file2.txt");
// //now we can directly pipe writeable steam uisong .pipe method
// //it pipes data from file.txt to file2.txt created above
// readableStream.pipe(writeableStream);












// //USING HTTP MODULE AND CREATING A SERVER
// const http = require("http");
// //using the createServer method of http
// const server = http.createServer((req, res) => {
//     //method write with http status code
//     res.writeHead(200);
//     res.end("Hello http");
  
// });
// //using the listen method on server & specifying ports
// server.listen(3000, () => {
//     console.log("Server listening on port 3000")
// });






// //RESPONDING WITH JSON
// const http = require("http");

// const server = http.createServer((req, res) => {
//     //method write with http status code
//     const superHero = {
//         firstname: "Evans",
//         lastName: "Pixels",
//     }
//     res.writeHead(200);
//     //convert using json stringify since plain objects are not supported
//     res.end(JSON.stringify(superHero));
  
// });
// //using the listen method on server & specifying ports
// server.listen(3000, () => {
//     console.log("Server listening on port 3000")
// });






// //RESPONDING WITH HTML FILES
// const http = require("http");
// //require fs which reads files eg html
// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     //method write with http status code
 
//     res.writeHead(200,{"Content-type":"text/html"});
//   //using fs to read html file and responding it with res,end
//     // const html = fs.readFileSync("./index.html","utf-8")
//     // res.end(html);

//     //alternatively and better way
//     fs.createReadStream(__dirname + "./index.html").pipe(res)
  
// });
// //using the listen method on server & specifying ports
// server.listen(3000, () => {
//     console.log("Server listening on port 3000")
// });







// //INJECTING DYNAMICS TO THE HTML RESPONDED using simple string replacement


// const http = require("http");

// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" });
//     //this variable below will be used in the html
//     const name = "Memba"
//     let html = fs.readFileSync("./index.html", "utf-8")
//     //replacing the name in the html file  to our variable
//     html = html.replace("{{name}}", name)
//     res.end(html);

    
  
// });
// //using the listen method on server & specifying ports
// server.listen(3000, () => {
//     console.log("Server listening on port 3000")
// });







// //ROUTING WITH HTTP MODULE

// const http = require("http");

// const fs = require("fs")

// const server = http.createServer((req, res) => {
//     //examples of how req are handled
//     if (req.url === "/") {
//         res.end("Home page")
//     } else if (req.url === "/about") {
//         res.end(JSON.stringify({
//             name: "Evans",
//             lastName: "Memba"
//         }))
//     } else {
//         res.end("page doesnt exist")
//     }

// });
// //using the listen method on server & specifying ports
// server.listen(3000, () => {
//     console.log("Server listening on port 3000")
// });





//EVENT LOOPS.(TO-DO)










// NPM
//To test if you have npm installed, run (npm -v) in ur terminal

//to publish an npm package, run (npm adduser pixelvans) on your commaand





//PUBLISH
//npm publish on your command
//to see it run( https://www.npmjs.com/package/<package name> ) in your browser






//HOW TO DEAL WITH TERMINAL REFUSING SCRIPTS
// open POWERSHELL
//type:      Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// enter
// choose Y and enter
//close powershell and re open
//now run your package eg nodemon new.js









//BUILDING CLI TOOLS
//process.argv is an array containing the command-line arguments passed when the Node.js

//npm install yargs
// yargs is a powerful library for Node.js that simplifies the process of parsing and handling command-line arguments