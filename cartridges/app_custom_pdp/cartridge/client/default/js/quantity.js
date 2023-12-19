$(document).ready(function() {
    $('.quantity-decrease').on('click', function() {
        var $selectedOption = $('#quantity option:selected');
        var selectedIndex = $selectedOption.index();

        if (selectedIndex > 0) {
            $selectedOption.removeAttr('selected');
            $('#quantity option:eq(' + (selectedIndex - 1) + ')').prop('selected', true).change();
        }
    });

    $('.quantity-increase').on('click', function() {
        var $selectedOption = $('#quantity option:selected');
        var selectedIndex = $selectedOption.index();
        var optionCount = $('#quantity option').length;

        if (selectedIndex < optionCount - 1) {
            $selectedOption.removeAttr('selected');
            $('#quantity option:eq(' + (selectedIndex + 1) + ')').prop('selected', true).change();
        }
    });
});

