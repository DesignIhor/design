
// 2018 additions
jQuery(document).ready(function ($) {

// Testimonials functionality
    $('.testimonials-tab').hide();
    $('.testimonials-tab').first().show();
    $('.toggle-tabs').first().addClass('active');

    $('.toggle-tabs').click(function () {

        $('.toggle-tabs').removeClass('active');
        $('.testimonials-tab').hide();
        $(this).addClass('active');

        var chosen = $(this).attr('href');
        var chosenTab = chosen.substring(1, chosen.length); //remove the #

        $('.' + chosenTab).show();
    });

// scroll to packages

$(".nonpricing").click(function() {
    $('html,body').animate({
        scrollTop: $(".packages").offset().top},
        'slow');
});

// toggle ToC

    $('.show-toc').click(function () {
        $('.show-toc-content').toggleClass('hide');
        //$(this).addClass('active');
    });

});
