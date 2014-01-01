// From: http://www.sitepoint.com/creating-an-iso-datestamp/
function datestamp(date){
    if(isNaN((date = typeof(date) !== 'undefined' ? new Date(date) : new Date()).getTime())){
        return null;
    }
    var pad2 = function(n) {
            return (n < 10 ? '0' : '') + n;
        },
        tokens = [[['FullYear'], ['Month', 1], ['Date']], [['Hours'], ['Minutes'], ['Seconds']]];
    for(var a = tokens.length, i = 0; i < a; i ++){
        for(var b = tokens[i].length, j = 0; j < b; j ++){
            tokens[i][j] = pad2(date['getUTC' + tokens[i][j][0]]() + (tokens[i][j][1] || 0));
        }
    }
    return tokens[0].join('-') + 'T' + tokens[1].join(':') + 'Z';
}

function createDateStamp(dateString){
    return datestamp(
        new Date(
            dateString.split('/')[2].split(' ')[0],
            dateString.split('/')[1] - 1,
            dateString.split('/')[0],
            dateString.split('/')[2].split(':')[0].split(' ')[1],
            dateString.split('/')[2].split(':')[1],
            dateString.split('/')[2].split(':')[2]
        )
    );
}

function addPostLinks(k, link, title){
    if(k == 0){
        $("#siteLinks").append($("<li></li>",{
            "class":"dropdown"
        }).append($("<a></a>",{
                "class":"dropdown-toggle",
                "data-toggle":"dropdown",
                "href":"#",
                "text":"Posts"
            }).append($("<b></b>",{
                    "class":"carat"
                }))).append($("<ul></ul>",{
                "class":"dropdown-menu",
                "id":"postLinks"
            }).append($("<li></li>").append($("<a></a>",{
                    "href":"#" + link,
                    "text":title
                })))));
    }else{
        $("#postLinks").append($("<li></li>").append($("<a></a>",{
            "href":"#" + link,
            "text":title
        })));
    }
}