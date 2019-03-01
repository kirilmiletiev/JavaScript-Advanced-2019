function attachEvents() {
    $('#items li').on('click',clickTown);
    $('#showTownsButton').on('click',getGolqmPraz);

    function clickTown() {
        if($(this).attr('selected')){
            $(this).attr('selected',false);
            $(this).css('background-color','');
        }else {
            $(this).attr('selected',true);
            $(this).css('background-color','#DDD');
        }
    }

    function getGolqmPraz() {
        let selectedTowns = $('#items li[selected]');
        $('#selectedTowns').text(selectedTowns.toArray().map(a => $(a).text()).join(', '));
    }
}