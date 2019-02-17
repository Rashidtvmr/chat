
var socket=io.connect('http://localhost:4000');

var output=document.getElementById('output'),
    sendbtn=document.getElementById('sendbtn'),
    msg=document.getElementById('smscont'),
    clrchat=document.getElementById('clrchat'),
    user=document.getElementById('user');
    var userin=prompt('Enter Your Name:');
    user.innerHTML=userin;
    output.innerHTML+='<p>Welcome <strong>'+ userin+'</strong></p>';
sendbtn.addEventListener('click',function(){
    //console.log('clicked');
    socket.emit('myMsg',{
        message:msg.value,
        user:userin
    });
    msg.value="";
});

//Listening for event

socket.on('myMsg',function(data){
   // console.log('Recieved Message');
    output.innerHTML+='<p>'+data.user+':'+ data.message+'</p>';
});
clrchat.addEventListener('click',function(){
    output.innerHTML='';
});
