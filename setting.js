/**
 * Created by Administrator on 2016/11/3.
 */
var http=require("http");
module.exports = {
    key: "5101e0dc7bbf3fdc50d2a27b2ef534ea",
    getApiAsync:function (url) {
        return new Promise(function (resolve, reject) {
            http.get(url, function (res) {
                var str = '';
                res.on("data", function (data) {
                    str += data;
                });
                res.on("error", function (err) {
                    reject(err);
                });
                res.on("end", function () {
                    resolve(str);
                });
            });
        });
    }
}
