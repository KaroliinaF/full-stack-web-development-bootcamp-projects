jQuery("h1").addClass("big_title");

jQuery("a").attr("href", "https://www.yahoo.com");

jQuery("button").click(function() {
    jQuery("h1").css("color", "red");
});

jQuery(document).keypress(function(event) {
    jQuery("h1").text(event.key);
});

jQuery("h1").on("mouseover", function() {
    jQuery("h1").css("color", "purple");
});

jQuery("button").on("click", function() {
    jQuery("h1").slideToggle();
});

jQuery("button").on("click", function() {
    jQuery("h1").animate({opacity: 0.5});
});