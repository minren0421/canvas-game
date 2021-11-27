// 創建食物構造函數 

var dataObj = function(){
    this.score = 0;
}

dataObj.prototype.draw = function(){
    ctx1.save();
    ctx1.fillStyle = "#fff";
    ctx1.font = "35px Verdana";
    ctx1.textAlign = "center";
    ctx1.fillText("SCORE:"+this.score,
    canWidth*0.5,canHeight*0.9);
    ctx1.restore();
}

// 添加方法add
// type 大魚吃食物類型
// 2表示橘  1表示藍
dataObj.prototype.add = function(type){
    this.score += 100*type;
}

