(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
 $(document).ready(function(){
      $('.slider').slider({full_width: true});
      
      
$('.slider').slider('pause');
$('.slider').slider('start');
$('.slider').slider('next');
$('.slider').slider('prev');
   
   
 });
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
        
