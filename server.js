


var express=require('express');
var socket=require('socket.io');
var app=express();
var server =app.listen(8080,function() {
   //console.log("Server is Listening in 4000") 
});

app.use(express.static('public'));

var io=socket(server);
io.on('connection',function(socket){
   // console.log('Connected with',socket.id);
    socket.on('myMsg',function(data){
        io.sockets.emit('myMsg',data);
     //   console.log('Emiited to the server',data);
    });
});
