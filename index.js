const http = require('http');
const port = process.env.PORT || 3000;
const express = require("express")

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   const msg = 'Hello Node!\n'
//   res.end(msg);
// });

// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });

const app = express()

app.listen(port,() => {
    console.log("Server is up and running.")
})
