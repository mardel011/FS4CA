var server = require('http').createServer()
var io = module.exports.io = require('socket.io')(server)

var mongoose = require('mongoose'); //requiring mongoose
const connectionString = "mongodb://shafinr:Pj8cAO8d9DJJQ8io@cluster0-shard-00-00-xljxs.mongodb.net:27017,cluster0-shard-00-01-xljxs.mongodb.net:27017,cluster0-shard-00-02-xljxs.mongodb.net:27017/ChatApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

server.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})

//adding mongoose

mongoose
  .connect(connectionString, { useNewUrlParser: true } )
  .then( () => {console.log("Mongoose connected Successfully");},
  error => {console.log("Mongoose could not be connected to database: " + error);}
  );