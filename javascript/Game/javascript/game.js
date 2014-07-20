var color="";
var i;

$(document).ready(function(){

  $(".button").click(function(){
  
  
    if(color=="")
      alert("please select a color");
    else 
    {
      if(this.value==" ")
      { 
        $(this).css("background-color",color);
        this.value=color;
      }
      else
        alert("already Colouredwith colour "+this.value);
    }
   });
});

$(document).ready(function(){
  $(".middle").hover(function(){
    $(this).css("border-style","dotted");
    },function(){
    $(this).css("border-style","solid");
  });
});

function myfunction(arg)
{ 
  color=arg;

}

$(document).ready(function() {
  $(":reset").click(function() {
    $(".button").css("background-color","white");
    for(var c=1;c<=9;c++)
    { 
      var v="a"+c; 
      document.getElementById(v).value=" ";
      var x = document.getElementById(c);
      var y = x.getElementsByTagName("button");
      y[0].innerHTML=c;
       
     }
     r1.checked=false;
     r2.checked=false;
     r3.checked=false;
     color="";
       
     $(".button").click(function(){
      if(color=="")
      alert("please select a color");
      else {
        if(this.value==" ")
        { 
          $(this).css("background-color",color);
          this.value=color;
        }
        else
          alert("already Colouredwith colour "+this.value);
       }
      });
       
      
       
       
       
  }); 

});


$(document).ready(function() {
  $("#shuffle").click(function() {
    i= Math.floor(Math.random() * 10);
    var content=document.getElementById(i).innerHTML;
    document.getElementById(i).innerHTML=document.getElementById("1").innerHTML;
    document.getElementById("1").innerHTML=content;
    if(i==8)
    i--;
    content=document.getElementById(i+2).innerHTML;
    document.getElementById(i+2).innerHTML=document.getElementById("2").innerHTML;
    document.getElementById("2").innerHTML=content;
    content=document.getElementById(i-1).innerHTML;
    document.getElementById(i-1).innerHTML=document.getElementById("3").innerHTML;
    document.getElementById("3").innerHTML=content;
    content=document.getElementById(i-2).innerHTML;
    document.getElementById(i-2).innerHTML=document.getElementById("5").innerHTML;
    document.getElementById("5").innerHTML=content;
 
  }); 

});
