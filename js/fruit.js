// 創建食物

// 1.創建fruit 構造函數
var fruitObj = function(){
    // 添加食物狀態屬性 
    this.alive = [];
    // 創建圖片對象
    this.blue = new Image();
    this.orange = new Image();
    // 創建位置數組 x,y保存食物位置
    this.x = [];
    this.y = [];
    // 創建保存寬高
    this.l = [];
    // 創建保存速度 向上漂浮
    this.spd = [];
    // 創建保存食物類型 "blue" "orange"
    this.fruitType = [];

}
// 2.為函數添加屬性 num
fruitObj.prototype.num = 30;
// 3.為函數添加方法 init 
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.l[i] = 0;
        this.fruitType[i] = "";
        this.spd[i] = Math.random()*0.017;
    }
    
    this.blue.src = "src/blue.png";
    this.orange.src = "src/fruit.png";
    // console.log(this)

}
// 4.為函數添加方法 draw 
fruitObj.prototype.draw = function(){
   //4.1:创建循环遍每个食物
   for(var i=0;i<this.num;i++){
    //4.2:判断当前食物是否活动
    if(this.alive[i]){
      //4.3:判断当前食物类型
      if(this.fruitType[i]=="blue"){
       var pic = this.blue;
      }else{
       var pic = this.orange;
      }
      //4.4:判断当前食物宽度<=14
      //4.5:修改l
      //4.6:修改y
      if(this.l[i]<=14){
        this.l[i]+=this.spd[i]*deltaTime; 
      }else{
        this.y[i]-=this.spd[i]*deltaTime*3;
      }
      //4.7:绘制食物
      ctx2.drawImage(pic,
        this.x[i],this.y[i],
        this.l[i],this.l[i]);
    }//if end  alive
   //4.8:如果当前食物漂浮屏幕
   //4.9:将当前食物状态修改隐藏!!!!
     if(this.y[i]<10){
      this.alive[i] = false;
      }
   }//end for

}

function fruitMonitor(){
    var num = 0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i])num++;
    }
    if(num<15){
        sendFruit();  //挑一個食物
        return;       //一次挑一個
    }
}
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);  //出生
            return;         //一次一個
        }
    }
}

fruitObj.prototype.born = function(i){
    var idx = Math.floor(ane.num*Math.random());
    // 獲取海葵終點座標
    var x = ane.headx[idx];
    var y = ane.heady[idx];
    // 依據座標 賦值當前食物位置
    this.x[i] = x;
    this.y[i] = y;
    // 
    this.alive[i] = true;

    this.l[i] = 0;
    this.fruitType[i] = Math.random()<0.9?"blue":"orange";
    this.spd[i] = Math.random()*0.017;
}

