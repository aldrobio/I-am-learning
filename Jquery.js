// asset/js/my_jquery.js

$(function () {
        $("#l_default").hide(1000); // hide id = 'l_default' using # operator after 300 ms
        $(".label-danger").html("Shark is dangerous"); // change content using 'html'
});

// toggle 'warning label' based on click on the button 'Toggle Warning Label'
$(function () {
        $('#b_warning').on('click', function () {
                $('#l_warning').slideToggle();
        });
});

// toggle panels according to the clicked-buttons
$(function () {
        $('.label-btn').on('click', function () { // select class 'label-btn'
                var labelId = $(this).attr('label_id'); // store the attribute value of 'label_id'
                $('#' + labelId).toggle(); // toggle the label with id  stored in 'label_id'
        });
});

