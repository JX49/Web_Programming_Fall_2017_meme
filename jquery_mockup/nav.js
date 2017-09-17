$(function()
{
 //9/7   //functions are first class citizens in Jquery/javascript
 //  var hello = "what'sup?" //var allows for functions scope is local to the function
   
   $(function(){
   $("header-placeholder").load("_nav.html", function(){
 
     //list of nav links
      $(".nav-link").removeClass("active");
      $("#signup-link").addClass("active");
   
   } );

  
    $(".btn-primary").click(function(){

        $(this).closest(".col-md-4").css({'max-width':'none'}).animate({'flexBasis':'100%'})    
        //closest returns closest parent that matches
    })

    

}
});