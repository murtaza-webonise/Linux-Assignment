function getformdata( arg )             //this is called by reset and submit button
{
  if ( 'default' == arg) 
  { 
    location.reload();
  } 
    
  if ( 'Submit' == arg) 
  {
    
    lineObj.lineMethod();
                                          //here we call method of lineObj
  }
    
}

var lineObj = {   

  lineMethod: function()                //here is the method of lineObj that is lineMethod

  { 
    var form = document.getElementById( 'divform' ); 
    var showx,showy,showc;
    var equation = form.eq.value; 
    var s = parseInt( form.step.value );
    var s_point = parseInt( form.s_point.value );
    var e_point = parseInt( form.e_point.value );  
    var x1,y1,x,y;
    var codes = lineParse(equation);             //here is the call to object function lineParse() for parsing an equation
    showx = codes[0];
    showy = codes[1];
    showc = codes[2];
    var temp=e_point-s_point;
    var step=temp/s;
    var count=1;
    x=s_point;

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
      
    
    x1=x*20;
    y1=y*20;
   
    if(count==1)
      ctx.moveTo(x1,y1);
    else
      ctx.lineTo(x1,y1);

    ctx.fillText("* "+x1+" "+y1,x1,y1);
    count++;
    x=x+step;
  }


  ctx.lineWidth = 2;
  ctx.strokeStyle = '#000000';
  ctx.stroke();
  ctx.move(0,0);

  } 
} ;

var lineParse=function(args)                                      //here is the object function lineParse() which takes equation as argument
{
  var showx,showy,showc;
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


  return [showx,showy,showc];  


       
};
       
       
