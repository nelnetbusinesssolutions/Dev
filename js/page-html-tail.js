<script src="https://rawgit.com/carhartl/jquery-cookie/master/src/jquery.cookie.js"></script>
<script>
    $(document).ready(function() {
        //Remove Previous Cookie Here
        $.removeCookie('mynew-cookie', {
            expires: 365,
            path: '/',
            domain: 'nelnet-dev.mindtouch.us'
        });

        $(".header-links #whats-new, #tz-menu #nav-new").click(function() {
            $(".cookie-message, img.badger, img.menu-badger").css("display", "none");
            //Add New Cookie Here
            $.cookie('mynew2-cookie', true, {
                expires: 365,
                path: '/',
                domain: 'nelnet-dev.mindtouch.us'
            });
        });

        $(function() {
            //Add New Cookie Here Too
            if (!$.cookie('mynew2-cookie')) {
                $(".cookie-message, img.menu-badger").css("display", "block");
                $("img.badger").css("display", "inline-block");
            }
        });
    });
</script>

<script>
    $(document).ready(function() {
        $('<div class="mt-carousel-helper-text refine">Refine results by selecting a filter or changing the search terms.</p>').insertAfter('.mt-help-breadcrumb-container');
    });
</script>



<!--MT Test-- >
    <script>
        window.addEventListener(
        'load',
        function() {
            let toc = document.querySelector('aside#mt-toc-container');
        let tocButton = document.querySelector('aside#mt-toc-container button');
        if (tocButton.classList.contains('mt-toggle-collapse')) {
            toc.classList.add("hh-collapsed");
        } else if (!tocButton.classList.contains('mt-toggle-collapse')) {
            toc.classList.remove("hh-collapsed");      
        }
    },
        false
        );
        $(document).on('click', 'aside#mt-toc-container button.mt-toggle', function () {
    if ($('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
            //do something
            $('aside#mt-toc-container').addClass('hh-collapsed');
    }
        else if (!$('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
            $('aside#mt-toc-container').removeClass('hh-collapsed');
    }
});</script>