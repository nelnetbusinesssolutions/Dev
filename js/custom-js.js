<script>
$(document).ready(function () {
    $('.mt-toggle-container nav em:contains("No headers")').closest('.mt-toggle-container').css('display', 'none');


$( document ).ajaxStop(function() {

$('ul#mt-search-results li.type-empty p').html('<p>Try searching for something else, or click <a href="#" class="mt-search-reset">here</a> to search the whole site.</p>');


});
$( document ).ajaxStart(function() {

$('ul#mt-search-results li.type-empty p').html('<p>Try searching for something else, or click <a href="#" class="mt-search-reset">here</a> to search the whole site.</p>');


});


    $('ol li.elm-back-to-top a').attr('href', 'javascript:void(0);');

    $(document).on('click', 'ol li.elm-back-to-top a', function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    window.onscroll = function () {
        var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (pageOffset >= 500) {
            $('.mt-icon-back-to-top').removeClass('back').addClass('move');
        } else {
            $('.mt-icon-back-to-top').removeClass('move').addClass('back');
        }
    };
});
</script>