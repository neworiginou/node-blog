var path = require("path");
var fs = require("fs");
var url = require("url");
var mime = require("mime").types;
var rExt = /\.(md|markdown)/;

var Utils = {
	doubleNumber: function(num) {
		return num < 10 ? "0" + num : num;
	},
	format: function(date, tpl) {
		var week = ["日", "一", "二", "三", "四", "五", "六"];
		var Y = date.getFullYear();
		var M = Utils.doubleNumber(date.getMonth() + 1);
		var D = Utils.doubleNumber(date.getDate());
		var W = week[date.getDay()];
		var h = Utils.doubleNumber(date.getHours());
		var i = Utils.doubleNumber(date.getMinutes());
		var s = Utils.doubleNumber(date.getSeconds());
		return tpl.replace("{Y}", Y).replace("{M}", M).replace("{D}", D).replace("{W}", W).replace("{h}", h).replace("{i}", i).replace("{s}", s);
	}
}

exports.homepage = {
	_static: function(req, res, dir) {
		var pathname = url.parse(req.url).pathname;
		var realPath = path.join(dir, pathname);
        fs.exists(realPath, function (exists) {
            if (!exists) {
                res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
                res.write("请求链接" + pathname + "不存在。");
                res.end();
            } else {
                fs.readFile(realPath, "utf8", function (err, file) {
                    if (err) {
                        res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'});
                        res.end(err);
                    } else {
                        res.writeHead(200, {
                            'Content-Type': ((mime[path.extname(realPath).slice(1)] + ";charset=utf-8") || "text/plain;charset=utf-8")
                        });
                        res.write(file, "utf8");
                        res.end();
                    }
                });
            }
        });
	},
	getHomeHtml: function() {
		var dir = "markdown";
			list = fs.readdirSync(dir),
			lis = [];
		list.sort(function(a, b){
			var stata = fs.statSync(path.join(dir, a));
			var statb = fs.statSync(path.join(dir, b));
			return statb.mtime - stata.mtime;
		});
		list.forEach(function(f, i){
			var stat = fs.statSync(path.join(dir, f));
			var mTime = Utils.format(stat.mtime, "{Y}/{M}/{D} {h}:{i}");
			if (stat.isFile() && rExt.test(f)) {
				lis.push('<li class="file-item clearfix"><a href="/?file=' + encodeURIComponent(f.replace(rExt, "")) + '" target="_blank" class="pull-left file_link">' + ((i + 1) + "、" +  f) + '</a><span class="pull-right update_time">' + mTime + '</span></li>')
			}
		});
		return '<ul class="file-list">' + lis.join("") + "</ul>";
	}
};