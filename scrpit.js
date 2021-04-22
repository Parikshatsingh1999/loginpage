
let regname=document.getElementById("rname").value;
let regpw=document.getElementById("rpw").value;
let regmail=document.getElementById("rmail").value;
let checkmail=/@([a-z]+)\./;
var x;
var y;

function checkcreate(){
if(document.getElementById("rname").value==""||document.getElementById("rpw").value==""||
document.getElementById("rmail").value==""){alert("Enter All the details")}
else {
    if(checkmail.test(document.getElementById("rmail").value)){
x=document.getElementById("rname").value;
y=document.getElementById("rpw").value;
alert("Id created for "+x+"Now go to login");
return x , y;
}
    else{alert(" Enter valid email");}
  }}

var logname=document.getElementById("lname").value;
var logpw=document.getElementById("lpw").value;


function checklogin(){
    if(document.getElementById("lname").value==""||document.getElementById("lpw").value=="")
    {alert("Please fill details")}
    else if(document.getElementById("lname").value=="bunny@"&&
    document.getElementById("lpw").value=="123456"){
     window.location="home.html";alert("Welcome Bunny")}
    //else if(document.getElementById("lname").value=="bunny@"&&
    //document.getElementById("lpw").value=="123456")
    //{window.location="home.html"}
        
    else if(document.getElementById("lname").value==x&&document.getElementById("lpw").value==y)
    {
        window.location="home.html"}
    
      else {alert("Wrong Id or Password");}
}


