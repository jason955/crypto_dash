const http = require('http');
const {CoinbasePro} = require('coinbase-pro-node');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const movieRouter = require('./routes/movie-router')
const userRouter = require('./routes/user-router')
const accountRouter = require('./routes/account-router')
const trackerRouter = require('./routes/tracker-router')

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crypto', { useNewUrlParser: true });
const connection = mongoose.connection;

// Once the connection is established, callback
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)
app.use('/api', userRouter)
app.use('/api', accountRouter)
app.use('/api', trackerRouter)

app.listen( PORT, () => {
    console.log("Server is running on port " + PORT);
});

// const auth = {
//   apiKey: 'a9d1170ee1b59701534ab511737dc373',
//   apiSecret: '82uK9scpcy3ckFX7bJdxJmNFN5mEudpn5gW9xrFpjOz2wKDZDHjOluTUbuDy+URg1hl6KlqRNB1vrz3/2yV2Qg==',
//   passphrase: 'pbz5vscdk6d',
//   // The Sandbox is for testing only and offers a subset of the products/assets:
//   // https://docs.pro.coinbase.com/#sandbox
//   useSandbox: true,
// };
// const client = new CoinbasePro(auth);
//
// http.createServer((request, response) => {
//   console.log(`Request url: ${request.url}`);
//
//   const eventHistory = [];
//
//   request.on('close', () => {
//     closeConnection(response);
//   });
//
//   if (request.url.toLowerCase() === '/events') {
//     response.writeHead(200, {
//       'Connection': 'keep-alive',
//       'Content-Type': 'text/event-stream',
//       'Cache-Control': 'no-cache',
//       'Access-Control-Allow-Origin': '*'
//     });
//
//     checkConnectionToRestore(request, response, eventHistory);
//     sendEvents(response, eventHistory);
//     console.log("tick")
//   } else {
//     response.writeHead(404);
//     response.end();
//   }
// }).listen(5000, () => {
//   console.log('Server running at http://127.0.0.1:5000/');
// });
//
// function sendEvents(response, eventHistory) {
//   console.log("hi")
//   const client = new CoinbasePro(auth);
//   //while(true) {
//     setTimeout(() => { client.rest.product.getProductTicker("BTC-USD").then(data => {
//         //if (!response.finished) {
//           console.log("coin tick")
//           var eventString = 'id: 1\nevent: coinStateUpdate\ndata: {"coin": "BTC", "price":' + data.bid +'}\n\n';
//           response.write(eventString);
//           eventHistory.push(eventString);
//           console.log(data)
//         //}
//       })
//       .catch(error => {
//         console.log("error" + error)
//         // handle the error
//     });}, 3000);
//
//   //}
//   // const eventString = 'id: 1\nevent: coinStateUpdate\ndata: {"coin": "BTC", "price":' + data.price +'}\n\n';
//   // response.write(eventString);
//   // eventHistory.push(eventString);
//   //Make the request
//
// }
//
// function closeConnection(response) {
//   if (!response.finished) {
//     response.end();
//     console.log('Stopped sending events.');
//   }
// }
//
// function checkConnectionToRestore(request, response, eventHistory) {
//   if (request.headers['last-event-id']) {
//     const eventId = parseInt(request.headers['last-event-id']);
//
//     eventsToReSend = eventHistory.filter((e) => e.id > eventId);
//
//     eventsToReSend.forEach((e) => {
//       if (!response.finished) {
//         response.write(e);
//       }
//     });
//   }
// }
