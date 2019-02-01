<script>
/* Expandable List Functionality */

    //Wrap the text of each dt in a button
    $(document).ready(function() {
        $('.expandable-list dt').each(function(index) {
            $(this).wrapInner( '<button aria-controls="item-' + (index + 1) + '" aria-expanded="false"></button>' );
            $(this).next('.expandable-list dd').attr('id', function() {
                return 'item-' + (index + 1);
            });
        });
    });

    $(document).ready(function() {
        $('.expandable-list dt').click(function(e) {
            e.preventDefault();
            // Add the open class to the clicked dt and corresponding dd
            $(this).toggleClass('open').next('.expandable-list dd').toggleClass('open');
            //Change the aria-expanded attribute from 'true' to 'false' or 'false' to 'true'
            $(this).children('button').attr('aria-expanded', function(i, origValue) {
                if (origValue == 'true') {
                    return 'false';
                } else {
                    return 'true';
                };
            });
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
    /*** Expandable List Expand/Collapse All Button ***/
    $(document).ready(function() {
        $("a.toggle-all").on("click", function(e) {
            e.preventDefault();
            //Count the number of items and the number of open items
            let openItems = $('.expandable-list dt.open');
            let allItems = $('.expandable-list dt');
            //If less than half of the items are open, open all. Otherwise, close all items.
            $('.expandable-list dt').toggleClass('open', openItems.length <= allItems.length/2);
            $('.expandable-list dd').toggleClass('open', openItems.length <= allItems.length/2);
            //If the dt has a class of open, change the button aria-expanded attribute to true.
            //Otherwise, change it to false.
            if ($('.expandable-list dt').hasClass('open')) {
                $('.expandable-list dt button').attr('aria-expanded', 'true');
            } else {
                $('.expandable-list dt button').attr('aria-expanded', 'false');
            };
        });
    });

$('.mt-feedback-consent-checkbox').closest('.mt-field').remove();

$('.elm-pdf-export a').attr('title','Printer friendly page');

$('.mt-carousel-helper-text').html('Refine results by selecting a filter or entering in a new search term');

$('<div>Refine results by selecting a filter or changing the search terms.</div>').appendTo('.mt-help-breadcrumb-container.mt-search-breadcrumb-widget');





</script>

<script>
/*** Creating tooltips for each page settings classification ***/

document.addEventListener('DOMContentLoaded', function() {
//The class for each tooltip
class PageSettingTooltip {
    constructor(name, id) {
        //Name and id are used for selecting elements
        this.name = name;
        this.id = id;
        //Default text for tooltip
        this.description = 'Select the appropriate option from the drop-down.'
    }

    //Add the question mark icon before the label
    appendIcon() {
        const questionIcon = document.createElement('SPAN'),
              parentDiv = document.querySelector(this.id).parentElement,
              label = document.querySelector(this.id);
        //This class adds the question mark image in MT
        questionIcon.classList.add('mt-icon-question2');
        //Giving the questionIcon an id so it can be selected later
        questionIcon.id = this.name + '-qicon';
        //Insert the icon before the label
        parentDiv.insertBefore(questionIcon, label);
    }

    //Add a tooltip to the icon
    addTooltip() {
        const classTooltip = document.createElement('DIV'),
              questionIcon = document.querySelector(`#${this.name}-qicon`);
        //Add two classes to the tooltip for styling
        classTooltip.classList.add('class-tooltip');
        classTooltip.classList.add('class-tooltip-hidden')
        //The tooltip text is the class description
        classTooltip.textContent = this.description;
        //Append the tooltip to the question icon
        questionIcon.appendChild(classTooltip);
        //The tooltip will display the question icon is hovered over
        questionIcon.addEventListener('mouseenter', function() {
            classTooltip.classList.remove('class-tooltip-hidden');
        });
        questionIcon.addEventListener('mouseleave', function() {
            classTooltip.classList.add('class-tooltip-hidden')
        })
    }
}

//Grab all the page classification labels
const allLabels = document.querySelectorAll('.live-tag-label'),
      labelsArray = Array.prototype.slice.call(allLabels);
//Empty array to hold each of the instantiated PageSettingTooltip objects
let pstArray = [];

//Iterate through each of the page classification labels
labelsArray.forEach(function(x, index) {
    //Define the name and id for each object
    let classifName = labelsArray[index].innerHTML.replace(/\s+/g, '-').toLowerCase();
    let classifId = `#${labelsArray[index].id}`;
    //Instantiate a new PageSetting Tooltip
    pstArray[index] = new PageSettingTooltip(classifName, classifId);
    //Add the icon
    pstArray[index].appendIcon();
})

    /* *Section for defining page setting classification tooltip text * */
pstArray[0].description = "I'm an article type!";
pstArray[1].description = "Hello markets!";
pstArray[2].description = "Product in the house!";
pstArray[3].description = "Your platform to stand on!";
pstArray[4].description = "All the world's a stage.";
pstArray[5].description = "Hit the target.";
pstArray[6].description = "Year after year after year.";
pstArray[7].description = "Do you belong here? Let me see your access.";
pstArray[8].description = "I'll pwn you.";

//Iterate through labelsArray to add the tooltip
labelsArray.forEach(function(x, index) {
    pstArray[index].addTooltip();
});
});
</script>
