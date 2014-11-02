(function ($) {
	"use strict";

	$(document).ready(init);
   	function init(){
        prettyPrint();
        nav();
    }
    
    function nav(){
         var link = $(".side-nav li a");
        link.on("click", function(){
            var targetId = $(this).attr("href").replace("#","");
            $('html, body').stop(true).animate({
				scrollTop: $("#"+targetId).offset().top
			}, 750, 'easeOutQuart');
        });
    }
})(jQuery)