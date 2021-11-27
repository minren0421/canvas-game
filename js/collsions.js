// 完成遊戲中碰撞檢測

// 大魚碰撞食物
function momFruitsCollison(){
    // 遍歷所有食物
    for(var i=0;i<fruit.num;i++){
        // 判斷當前食物是否顯示
        if(fruit.alive[i]){
            // 計算食物與大魚距離
            var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            // 兩者之間小於900
            if(l<900){
                // 食物消失
                // fruit.alive[i] = false;
                fruit.dead(i);
                // 累加分數
                // 1.判斷當前住類型
                var type = 1;
                if(fruit.fruitType[i]!="blue"){
                    type = 2;
                }
                data.add(type);
                // 調用顯示光環方法
                wave.born(fruit.x[i],fruit.y[i]);
                
            }
        }
    }
    // 添加到 index.js 當中調用
}



