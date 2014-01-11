var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var qs = require("querystring");
var md = require("markdown").markdown;
var hp = require("./scripts/").homepage;

var server = http.createServer(function(req, res){
    var oUrl = url.parse(req.url);
    var pathname = oUrl.pathname;
    console.log(pathname);
    if (pathname !== "/") {
        hp._static(req, res, "assets");
    } else {
        var params = qs.parse(oUrl.query);
        var file = params.file;
        var header = fs.readFileSync("./views/header.html").toString("utf8");
        var footer = fs.readFileSync("./views/footer.html").toString("utf8");
        var doc = "";
        if (file) {
            doc = fs.readFileSync("./markdown/" + file + ".md").toString("utf8");
            doc = md.toHTML(doc);
            doc += '<footer class="site-foot"><a href="/" target="_self" class="back-home">返回首页</a></footer>';
        } else {
            doc = hp.getHomeHtml();
        }
        res.write(header + doc + footer);
        res.end();
    }
});

server.listen(process.env.PORT || 3000);

console.log("Server is running at host 127.0.0.1:" + (process.env.PORT || 3000));