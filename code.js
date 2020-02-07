jQuery(document).ready(function($) {
    $(".content-13-v2").each(function() {
        var o = $(this);
        if (o.hasClass("init")) {
            return;
        }
        o.addClass("init");
      
      	var style = "";
      
      	var newId = "id-" + Math.random().toString().slice(2);
        o.attr("id", newId);
      
      	var btnColor = $(this).find(".js-form-btn-color").data("form-btn-color");
        if (btnColor && btnColor !== "#16a085") {
            style += "#" + newId + ".content-13 .hs_submit input[type='submit'] { background-color: " + btnColor + "; } \n";
            $("<style type='text/css'/>").html(style).appendTo("head");
        }
      
      	var btnHoverColor = $(this).find(".js-form-btn-color").data("form-btn-hover-color");
        if (btnHoverColor && btnHoverColor !== "#24deb4") {
            style += "#" + newId + ".content-13 .hs_submit input[type='submit']:hover, #" + newId + ".content-13 .hs_submit input[type='submit']:focus, #" + newId + ".content-13 .hs_submit input[type='submit']:active{ background-color: " + btnHoverColor + "; } \n";
            $("<style type='text/css'/>").html(style).appendTo("head");
        }
    });
});
