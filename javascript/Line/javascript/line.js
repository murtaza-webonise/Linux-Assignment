function getformdata( arg )             //this is called by reset and submit button
{
  if ( 'default' == arg) 
  { 
    location.reload();
  } 
    
  if ( 'Submit' == arg) 
  {
    var form = document.getElementById( 'divform' ); 
    
    var equation = form.eq.value; 
    var s = parseInt( form.step.value );
    var s_point = parseInt( form.s_point.value );
    var e_point = parseInt( form.e_point.value );  
    
    lineObj.equationParse(equation);             //here is the call to object function lineParse() for parsing an equation
    lineObj.lineDraw(s_point,e_point,s);
                                          //here we call method of lineObj
  }
    
}

var lineObj = {   

  
  
  equationParse:function(args)                                      //here is the object function lineParse() which takes equation as argument
{ 
  
  var posx = args.indexOf("x");
  
  if(posx==0)
    showx=1;
  else
    showx = args.charAt(posx-1);

  var posy = args.indexOf("y"); 
    
  if(posy==0)
    showy=1;
  else
    showy = args.charAt(posy-1);
    
  if(args.charAt(args.length-1)=='x'||args.charAt(args.length-1)=='y')
    showc=0;
  else
    showc = parseInt(args.charAt(args.length-1));

  if(showx==' '||showx=='-'||showx=='+'||showx=='=')
  {
    if(showx=='-')
      showx=-1;
    else
      showx=1;
  }
      
  if(showy==' '||showy=='-'||showy=='+'||showy=='=')
  {
    if(showy=='-')
      showy=-1;
    else
      showy=1;
  }

  if(args.charAt(posx-2)=='-')
    showx=-showx;
  else
  {
    if(args.charAt(posx-2)!='='&&args.charAt(posx-2)!=' '&&args.charAt(posx-2)!='y')
      showx=args.charAt(posx-2).concat(showx);
  }


  if(args.charAt(posy-2)=='-')
    showy=-showy;
  else
  {
    if(args.charAt(posy-2)!='='&&args.charAt(posy-2)!=' '&&args.charAt(posy-2)!='x')
      showy=args.charAt(posy-2).concat(showy);
  }

  if(args.indexOf('=')>args.indexOf('x'))
    showx=-showx;



       
},
       
       
  
  
  lineDraw: function(s_point,e_point,step)                //here is the method of lineObj that is lineMethod

  { 
    var x1,y1,x,y;
    var temp=e_point-s_point;
 
    var count=1;
    x=s_point;
    
for(var coordinate=step;coordinate<=800;)
{
  ctx.moveTo(-560,coordinate);
  ctx.lineTo(560,coordinate);
  coordinate=coordinate+step;

}

for( coordinate=step;coordinate<=800;)
{
  ctx.moveTo(-560,-coordinate);
  ctx.lineTo(560,-coordinate);
  coordinate=coordinate+step;

}

for( coordinate=step;coordinate<=560;)
{
  ctx.moveTo(coordinate,560);
  ctx.lineTo(coordinate,-560);
  coordinate=coordinate+step;

}
for( coordinate=step;coordinate<=560;)
{
  ctx.moveTo(-coordinate,560);
  ctx.lineTo(-coordinate,-560);
  coordinate=coordinate+step;

}

ctx.lineWidth = 1;  
ctx.strokeStyle = '#000000';    
ctx.stroke();
ctx.moveTo(0,0);


  for(var count1=s_point;count1<=e_point;count1++)
  {

    if(showy==1||showy==-1)
    {
      if(showy==-1)
        y=-showx*x-showc;
      else
        y=showx*x+showc;
    }
    else
      y=(showx*x+showc)/showy;
      
    
    //x1=x*20;
   // y1=y*20;
   
    if(count==1)
      ctx.moveTo(x,y);
    else
      ctx.lineTo(x,y);

    ctx.fillText("* "+x+" "+y,x,y);
    count++;
    x=x+step;
  }


  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000000';
  ctx.stroke();
  ctx.move(0,0);

  } , showx:0,showy:0,showc:0
  
  
  
  
} ;

var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
ctx.translate(canvas.width/2, canvas.height/2);
ctx.scale(1, -1);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(560, 0);
ctx.fillText("X",560,0);
ctx.moveTo(0, 0);
ctx.lineTo(0,400);
ctx.fillText("Y",0,400);
ctx.moveTo(0, 0);
ctx.lineTo(0,-400);
ctx.fillText("-Y",0,-400);
ctx.moveTo(0,0);
ctx.lineTo(-560,0);
ctx.fillText("-X",-560,0);
ctx.lineWidth = 3;  
ctx.strokeStyle = '#000000';    

ctx.stroke();


