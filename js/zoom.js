$(document).ready(function() {
    
    
    
    
  var mq = window.matchMedia( "(min-width: 1024px)" );
    
     if (mq.matches) {
         
         $("main").mouseenter(function(){
        $("#cover").fadeIn(1000);
         });
    
    $("svg").mouseenter(function(){
        
        $("#cover").fadeOut(1000);
    });
         
 $("svg").svgPanZoom({
     
     


  events: {

  // enables mouse wheel zooming events
  mouseWheel: true, 

  // enables double-click to zoom-in events
  doubleClick: true, 

  // enables drag and drop to move the SVG events
  drag: true, 

  // cursor to use while dragging the SVG
  dragCursor: "crosshair"
},

// time in milliseconds to use as default for animations. 
// Set 0 to remove the animation
animationTime: 0,

// how much to zoom-in or zoom-out
zoomFactor: 1, 

// maximum zoom in, must be a number bigger than 1
maxZoom: 5,

// how much to move the viewBox when calling .panDirection() methods
panFactor: 5,

// the initial viewBox, if null or undefined will try to use the viewBox set in the svg tag. 
// Also accepts string in the format "X Y Width Height"
initialViewBox: { 

  // the top-left corner X coordinate
  x: 0,

  // the top-left corner Y coordinate
  y: 0,

  // the width of the viewBox
  width: 932, //1000

  // the height of the viewBox
  height: 718.813  //1000 
},

// the limits in which the image can be moved. 
// If null or undefined will use the initialViewBox plus 15% in each direction
limits: { 
  x: 0,//-150,
  y: 0,//-150,
  x2: 932,//1150,
  y2: 718.813,//1150
}
 
    });
}       
        
 else {
  // window width is less than 500px

    
   
  
        addEventListener(document, "svg", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
  }, Modernizr.passiveeventlisteners ? {passive: true} : false);
    
    
    
 }
    
}); // koniec funkcji ready

