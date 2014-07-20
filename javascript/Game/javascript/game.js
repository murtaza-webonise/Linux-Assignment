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
    var content=$("#"+i).html();
    $("#"+i).html($("#1").html());
     $("#1").html(content);
    if(i==8)
    i--;
    content= $("#"+(i+2)).html();
     $("#"+(i+2)).html( $("#2").html());
    $("#2").html(content);
    content=$("#"+(i-1)).html();
    $("#"+(i-1)).html($("#3").html());
    $("#3").html(content);
    content=$("#"+(i-2)).html();
    $("#"+(i-2)).html($("#5").html());
    $("#5").html(content);
 
  }); 

});
