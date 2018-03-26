<script>
$(document).ready(function () {
//$("#mt-search-container #mt-help-results input.input-text").attr("placeholder", "Search our resources");
//$('main article footer .elm-related-articles-container').insertAfter('main article aside#mt-toc-container');
var $placeholder = $('main header nav .elm-nav-container ol li .mt-quick-search-container.mt-toggle-form-container form input');
$placeholder.attr('placeholder', 'Search this section');
$('body.columbia-special-search, body.columbia-page-special').find($placeholder).attr('placeholder', 'Search the site');

    $('.mt-toggle-container nav em:contains("No headers")').closest('.mt-toggle-container').css('display', 'none');
    if ($('.mt-search-carousel-container .mt-search-carousel-widget').is(':empty')) {
        //do something
        $('mt-carousel-helper-text').hide();
    }
    else {
        $('mt-carousel-helper-text').show();
    }

    $('.type-empty p').html('Try searching for something else, or click <a href="#" class="mt-search-reset">here</a> to search the whole site.');

$(document).on('click','.elm-related-articles-container h1.mt-related-articles-header',function(){
    $(this).next('ol.mt-related-listings-container').slideToggle(100);
});

    $(document).on('click', 'ol li.elm-back-to-top a', function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    window.onscroll = function () {
        var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (pageOffset >= 400) {
            $('.mt-icon-back-to-top').removeClass('back').addClass('move');
        } else {
            $('.mt-icon-back-to-top').removeClass('move').addClass('back');
        }
    };

    $('ol li.elm-back-to-top a').attr('href', 'javascript:void(0);');


});
</script>
