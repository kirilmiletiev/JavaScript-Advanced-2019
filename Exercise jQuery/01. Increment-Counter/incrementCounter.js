function increment(selector) {
    let container = $(selector);
    let textElement = $('<textarea>');
    let fragment = document.createDocumentFragment();
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textElement.val(0);
    textElement.addClass('counter');
    textElement.attr('disabled', true);

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //list.attr('id', 'addBtn');
    list.addClass('results');

    $(incrementBtn).on('click', function () {
        textElement.val(Number(textElement.val()) + 1);
    });

    $(addBtn).on('click', function () {
        let li = $(`<li>${textElement.val()}</li>`);
        li.appendTo(list);
    });

    textElement.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
