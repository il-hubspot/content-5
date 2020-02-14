jQuery(document).ready(function($) {
    $(".content-16-v2").each(function() {
        var o = $(this);
        
        if (o.hasClass("init")) {
            return;
        }

        o.addClass("init");

        var id = "id-" + Math.random().toString().slice(2);
        o.attr("id", id);
      
      	o.find('.control-btn.fui-arrow-down').click(function(e) {
        	e.preventDefault();

        	$("html, body").animate({scrollTop: $(this).closest(".hs_cos_wrapper").next().offset().top});
      	});
    });
});
