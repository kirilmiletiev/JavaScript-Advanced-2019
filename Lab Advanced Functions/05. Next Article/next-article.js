function getArticleGenerator(articles) {
    let div = document.getElementById('content');
    return function () {
        if (articles.length >= 1) {
            let article = document.createElement('article');
            let p = document.createElement('p');
            p.textContent = articles.shift();
            article.appendChild(p);
            div.appendChild(article);
        }
    };
}