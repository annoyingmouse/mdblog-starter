// Determine location of sheets using: https://spreadsheets.google.com/feeds/worksheets/0AiRgQIhodQXfdGhhdTZDaEdjTy1ZV3h4T215NFRDUmc/private/full
var posts = [];
var converter = new Showdown.converter();
function displayBlog(data){
    $.each(data.feed.entry, function(k, v){
        var post = {};
        post.id = parseInt(v.gsx$id.$t);
        post.date = v.gsx$date.$t;
        post.title = v.gsx$title.$t;
        post.content = converter.makeHtml(v.gsx$content.$t);
        post.link = encodeURI(v.gsx$title.$t);
        post.pubdate = createDateStamp(v.gsx$date.$t);
        posts.push(post);
    });
    $.each(posts, function(k, post){
        $("#content").append($.render.addPost(post));
        addPostLinks(k, post.id, post.title);
    });
    $(".form-horizontal").hide();
    $("pre code").each(function(i, e) {
        hljs.highlightBlock(e)
    });
}