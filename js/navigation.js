$(document).ready(function() {
    
  
    
    $("#info").children().children().mouseenter(function() {
        
   $klasa_panstwa = $(this).attr('class');
        
        $('.' + $klasa_panstwa).children().attr("fill-opacity", 1).attr("stroke-width", 1.5);
        $('.' + $klasa_panstwa).children().children().attr("fill-opacity", 1).attr("stroke-width", 1.5);
        $('#nazwy').find(('.' + $klasa_panstwa)).find('text').attr("opacity", "0.9").attr("font-weight", 600);
           
    });
       
    
    
    
    
    $("#info").children().children().mouseleave(function() {
        
   $klasa_panstwa = $(this).attr('class');
        
        $('.' + $klasa_panstwa).children().attr("fill-opacity", 0.95).attr("stroke-width", 0.5);
        $('.' + $klasa_panstwa).children().children().attr("fill-opacity", 0.95).attr("stroke-width", 0.5);
        $('#nazwy').find(('.' + $klasa_panstwa)).find('text').attr("opacity", "0.2").attr("font-weight", 400);
    
     });
    
    
 
    
    
}); // koniec funkcji ready

