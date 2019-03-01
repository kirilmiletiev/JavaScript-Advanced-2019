function attachEvents() {
    $('.button').click(function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

}