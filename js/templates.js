$.templates({
    addPost: '' +
        '<article data-id="{{>id}}" class="post">' +
            '<header>' +
                '<h2><a id="{{>id}}">{{>title}}</a></h2>' +
                '<p>Published: <time datetime="{{>pubdate}}">{{>date}}</time></p>' +
            '</header>' +
            {{:content}}' +
        '</article>' +
        '<hr />'
});
