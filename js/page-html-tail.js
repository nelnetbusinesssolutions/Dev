<script src="https://rawgit.com/carhartl/jquery-cookie/master/src/jquery.cookie.js"></script>
<script>
        $(document).ready(function() {
        //Remove Previous Cookie Here
        $.removeCookie('tztest4-cookie', {
            expires: 365,
            path: '/',
            domain: 'nelnet-dev.mindtouch.us'
        });

        $(".header-links #whats-new, #tz-menu #nav-new").click(function() {
            $(".cookie-message, img.badger, img.menu-badger").css("display", "none");
            //Add New Cookie Here
            $.cookie('mynew-cookie', true, {
                expires: 365,
                path: '/',
                domain: 'nelnet-dev.mindtouch.us'
            });
        });

        $(function() {
            //Add New Cookie Here Too
            if (!$.cookie('mynew-cookie')) {
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