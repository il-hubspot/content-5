jQuery(document).ready(function($) {
    $(".header-4-v2").each(function() {
        var o = $(this);
        if (o.hasClass("init")) {
            return;
        }
        o.addClass("init");
      
      	var style = "";

        o.find(".js-btn-color").each(function(){
            var btnType = $(this).data('btn-type');
            var btnColor = $(this).data('btn-color');
            var btnHoverColor = $(this).data('btn-hover-color');
            
            var btnId = "id-" + Math.random().toString().slice(2);
            $(this).attr("id", btnId);

            $(this).removeAttr('style');

             if(btnType === 'normal') {
                style += "#" + btnId + ".btn { background-color: " + btnColor + "; color: #ffffff; } \n";
                style += "#" + btnId + ".btn:hover, #" + btnId + ".btn:focus, #" + btnId + ".btn:active { background-color: " + btnHoverColor + "; } \n";
            }

            if(btnType === 'clear') {
                style += "#" + btnId + ".btn { background-color: transparent; border: 2px solid " + btnColor + "; color: " + btnColor + " } \n";
                style += "#" + btnId + ".btn:hover, #" + btnId + ".btn:focus, #" + btnId + ".btn:active { background-color: " + btnColor + "; color: #ffffff } \n";
            }
        });

        $("<style type='text/css'/>").html(style).appendTo("head");
    });
});
