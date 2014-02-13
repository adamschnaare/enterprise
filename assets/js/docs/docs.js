/* ==================================
    Library Docs
=================================== */

$(function(){
    function resize(){
        var windowHeight = $(window).outerHeight();
        var headerHeight = $('.docs-header').outerHeight();
        var exampleHeight = windowHeight-headerHeight;
        $('.docs-example').css('height',exampleHeight);
    }

    $('.docs-toggle').on('click',function(){
        $('body').toggleClass('docs-hidden');
        resize();
        $(window).resize(resize);


    });

    if ($('.docs-hidden')){
       resize();
    }

    $('.docs-slide-trigger').on('click',function(){
        $('.docs-aside').toggleClass('open');

        var icon = $(this).find('i');
        if ( icon.hasClass('fullscreen')){
            icon.removeClass('fullscreen');
            icon.addClass('exit');
        }
        else{
            icon.removeClass('exit');
            icon.addClass('fullscreen');
        }
    });
});