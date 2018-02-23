// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        //初始化引擎
        Laya.init(1136, 640);
        var txt = new Laya.Text();
        //设置文本内容
        txt.text = "hello_world";
        //设置文本颜色
        txt.color = "#ffffff";
        //设置文本字体
        txt.font = "Ya Hei";
        //设置字体大小
        txt.fontSize = 32;
        //设置文本取背景
        txt.bgColor = "#c30c30";
        //设置文本框的颜色
        txt.borderColor = "#23cfcf";
        //设置粗体、斜体
        txt.bold = true;
        //设置斜体
        txt.italic = true;
        Laya.stage.addChild(txt);
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map