jQuery(document).ready(function($) {
    $(".header-3-v2").each(function() {
        var o = $(this);
        
        if (o.hasClass("init")) {
            return;
        }

        o.addClass("init");

        var headerId = "id-" + Math.random().toString().slice(2);
        o.attr("id", headerId);
      
        var style = "";

        o.find(".js-nav-styles").each(function(){
            var parentMenuColor = $( this ).data( 'nav-parent-color' );
            var parentMenuHoverColor = $( this ).data( 'nav-parent-hover-color' );
            var childMenuColor = $( this ).data( 'nav-child-color' );
            var childMenuHoverColor = $( this ).data( 'nav-child-hover-color' );
            var childMenuBgColor = $( this ).data( 'nav-child-bg' );
            
            var navId = "id-" + Math.random().toString().slice(2);
            $(this).attr("id", navId);

            style += "#" + navId + " ul > li > a { color: " + parentMenuColor + "; } \n";
          	style += "#" + navId + " ul > li > a:hover, #" + navId + " ul > li > a:focus, #" + navId + " ul > li > a:active { color: " + parentMenuHoverColor + "; } \n";
            style += "#" + navId + " ul > li > .hs-menu-children-wrapper li a { color: " + childMenuColor + "; } \n";
          	style += "#" + navId + " ul > li > .hs-menu-children-wrapper li a:hover, #" + navId + " ul > li > .hs-menu-children-wrapper li a:focus, #" + navId + " ul > li > .hs-menu-children-wrapper li a:active { color: " + childMenuHoverColor + "; } \n";
            style += "#" + navId + " ul > li > .hs-menu-children-wrapper { background-color: " + childMenuBgColor + "; } \n";
            style += "#" + headerId + " .navbar-toggle .icon-bar { background-color: " + parentMenuColor + "; } \n";
        });
      
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
