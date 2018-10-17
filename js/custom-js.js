<script>
    $(document).ready(function() {

        $('dl.expandable-list dd').hide();
        $('.expandable-list dt').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('open').next('.expandable-list dd').slideToggle(300);
        });

        //$("#mt-search-container #mt-help-results input.input-text").attr("placeholder", "Search our resources");
        //$('main article footer .elm-related-articles-container').insertAfter('main article aside#mt-toc-container');
        var $placeholder = $('main header nav .elm-nav-container ol li .mt-quick-search-container.mt-toggle-form-container form input');
        $placeholder.attr('placeholder', 'Search this section');
        $('body.columbia-special-search, body.columbia-page-special').find($placeholder).attr('placeholder', 'Search the site');

        $('.mt-toggle-container nav em:contains("No headers")').closest('.mt-toggle-container').css('display', 'none');
        if ($('.mt-search-carousel-container .mt-search-carousel-widget').is(':empty')) {
            //do something
            $('mt-carousel-helper-text').hide();
        } else {
            $('mt-carousel-helper-text').show();
        }

        $('.type-empty p').html('Try searching for something else, or click <a href="#" class="mt-search-reset">here</a> to search the whole site.');

        $(document).on('click', '.elm-related-articles-container h1.mt-related-articles-header', function() {
            $(this).next('ol.mt-related-listings-container').slideToggle(100);
        });

        $(document).on('click', 'ol li.elm-back-to-top a', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });

        window.onscroll = function() {
            var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
            if (pageOffset >= 400) {
                $('.mt-icon-back-to-top').removeClass('back').addClass('move');
            } else {
                $('.mt-icon-back-to-top').removeClass('move').addClass('back');
            }
        };

        $('ol li.elm-back-to-top a').attr('href', 'javascript:void(0);');

        if ($('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
            //do something
            $('aside#mt-toc-container').addClass('hh-collapsed');
        } else if (!$('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
            $('aside#mt-toc-container').removeClass('hh-collapsed');
        }

        $(document).on('click', 'aside#mt-toc-container button.mt-toggle', function() {
            if ($('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
                //do something
                $('aside#mt-toc-container').addClass('hh-collapsed');
            } else if (!$('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
                $('aside#mt-toc-container').removeClass('hh-collapsed');
            }
        });



        $(".mt-lp-progress-bar li").each(function(i) {
            $(this).append('<div class="number">' + (++i) + "</div>");
        });

        $(document).on("click", ".mt-lp-progress-bar li .number", function() {
            $(this).closest('li').find('a')[0].click();
        });

        $('.mt-lp-progress-bar li .number').hover(function() {
            $(this).closest('li').find('span').toggleClass('j-border');
        });



        $(".mt-lp-progress-bar").each(function(i) {
            $('.mt-lp-progress-container').insertBefore('h1#title');
            $(".mt-lp-progress-bar").before('<p class="desktop-verb">You are viewing a collection of pages. Click the numbered circles to navigate between pages or click the previous/next article titles.</p>', '<p class="mobile-verb">You are viewing a collection of pages. Click the circles to navigate between pages or click the previous/next article titles.</p>');
            $('.mt-lp-path-meta-data').prependTo('.mt-lp-progress-container');
            $(".mt-lp-path-meta-data .mt-lp-progress-description").html($(".mt-lp-path-meta-data .mt-lp-progress-description").html().replace("step", "page"));
        });
    });
</script>


<script>
    $(document).ready(function() {

        $("a.toggle-all").on("click", function(e) {
            e.preventDefault();
            $('.expandable-list dt').toggleClass('open');
            $('.expandable-list dd').slideToggle();
        });
    });
</script>
