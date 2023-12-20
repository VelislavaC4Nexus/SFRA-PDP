$(document).ready(function() {
    $('.carousel-new').carousel()
    $('.carousel-new .carousel-item').each(function () {
        let minItemsPerSlide = 4;
        let next = $(this).next();

        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (let i = 0; i < minItemsPerSlide; i++) {
            next = next.next();

            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
});