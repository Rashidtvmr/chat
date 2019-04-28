const path = require('path');
var express=require('express');
var socket=require('socket.io');
const app = express();
//app.use(express.static('public'));

var io=socket(server);
io.on('connection',function(socket){
   // console.log('Connected with',socket.id);
    socket.on('myMsg',function(data){
        io.sockets.emit('myMsg',data);
     //   console.log('Emiited to the server',data);
    });
});
//Install express server




// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/public/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
