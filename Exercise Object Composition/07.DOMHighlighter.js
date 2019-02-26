function koitoNeZnaeDomaDaSiHodiDoma(selector) {
    let targetCount = 0;

    function scan(target) {
        let children = $(target).children();
        if (children.length === 0){
            return target;
        }

        let childWithMostChildren, maxChildrenCount = Number.NEGATIVE_INFINITY;

        for (let i = 0; i < children.length; i++) {
            if ($(children[i]).children().length > maxChildrenCount) {
                maxChildrenCount = $(children[i]).children().length;
                childWithMostChildren = i;
            }
        }

        targetCount++;
        return scan(children[childWithMostChildren]);
    }

     deepestNode = scan(selector);
    $(deepestNode).addClass('highlight');
    let targets = $(deepestNode).parents();
    for (let i = 0; i < targets.length && i < targetCount; i++){
        $(targets[i]).addClass('highlight');
    }
}