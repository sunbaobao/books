/**
 * Created by Administrator on 2016/11/3.
 */
var express = require("express");
var router = express.Router();

var setting=require("../setting");
var key=setting.key;
var getApiAsync= setting.getApiAsync;
router.get("/class", function (req, res) {
    var url = "http://apis.juhe.cn/goodbook/catalog?key=" + key +
        "&dtype=json";
    getApiAsync(url).then(function (data) {
        res.send(data);
    }, function (err) {
        console.log("错误" + err);
    });
});
router.get("/catalog",function (req, res) {
    var id=req.query.id;
    var url = "http://apis.juhe.cn/goodbook/query?key=" + key +
        "&catalog_id=" + id+
        "&rn=10&rn=10";
    getApiAsync(url).then(function (data) {
        res.send(data);
    })
});
module.exports = router;



