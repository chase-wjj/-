<template>
  <div>
    <div class="route">
            <a>项目</a>
            <p>></p>
            <a>PMML部署测试</a>
            <p>></p>
            <a>模型</a>
            <p>> xgb-iris</p>

        </div>

        <div class="infomation">
            <div class="model">
                <p id="model_name">xgb-iris</p>
                <p id="model_name_intro">这是一个XGBoost导出的模型</p>
            </div>
            <div class="time">
                <p id="time_name">修改时间</p>
                <p id="time_name_intro">2022-8-21 17:10</p>
            </div>
            <div class="type">
                <p id="type_name">类型</p>
                <p id="type_name_intro">PMML</p>
            </div>
            <div class="algorithm">
                <p id="algorithm_name">算法</p>
                <p id="algorithm_name_intro">MiningModel</p>
            </div>
            <div class="engine">
                <p id="engine_name">引擎</p>
                <p id="engine_name_intro">PyPMML</p>
            </div>
        </div>

        <div class="module">
            <p id="module_1">概述</p>
            <p id="module_2">部署</p>
            <p id="module_3">测试</p>
        </div>

        <div class="deploy">
            <p>部署</p>
            <button id="button_1">+添加服务</button>
            <button id="button_2">+添加任务</button>
            <table>
                <tr>
                    <th>名称</th>
                    <th>类型</th>
                    <th>开始时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                
            </table>

        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.title{
    display: flex;
    width: 100vw;
    height: 12vh;
    background-color: rgb(11, 12, 44);
    position: relative;
    left: -0.55vw;
    top: -1.2vh;
}
.title img{
    width: 4vw;
    height: 8vh;
    position: absolute;
    left: 5vw;
    top: 2vh;
}
.title_name{
    color: yellow;
    font-size: larger;
    position: absolute;
    left: 10vw;
    top: 2vh;
}
#project{
    position: absolute;
    left: 18vw;
    top: 4vh;
    height: 5vh;
}
#huanjing{
    position: absolute;
    left: 25vw;
    top: 4vh;
    height: 5vh;
}
#yonghu{
    position: absolute;
    left: 80vw;
    top: 4vh;
    height: 5vh;
    width: 10vw;
}
.route{
    display: flex;
    position: relative;
    left: 4vw;
    color: rgb(150, 155, 155);
}
.route a{
    position: inherit;
    top: 2vh;
}
.infomation{
    display: flex;
    background-color: aliceblue;
    box-shadow: 5px 5px 5px 0 gray;
    border-radius: 10px 10px;
}
.model{
    position: relative;
    left: 4vw;
    
}
#model_name{
    font-size: 20px; 
    font-weight: bold;
    
}
#model_name_intro{
    color: rgb(150, 155, 155);
}
.time{
    position: relative;
    left: 28vw;
    
}
#time_name{
    font-size: 20px; 
    font-weight: bold;
}
#time_name_intro{
    color: rgb(9, 12, 12);
}
.type{
    position: relative;
    left: 34vw;
    
}
#type_name{
    color: rgb(150, 155, 155);
}
#type_name_intro{
    font-size: 20px; 
    font-weight: bold;
    color: rgb(12, 14, 15);
}
.algorithm{
    position: relative;
    left: 42vw;
    
}
#algorithm_name{
    color: rgb(150, 155, 155);
}
#algorithm_name_intro{
    font-size: 20px; 
    font-weight: bold;
    color: rgb(9, 10, 11);
}
.engine{
    position: relative;
    left: 48vw;
    
}
#engine_name{
    color: rgb(150, 155, 155);
}
#engine_name_intro{
    font-size: 20px; 
    font-weight: bold;
    color: black;
}
.module{
    display: flex;
    font-size: 20px ;
    background-color: aliceblue;
    width: 100vw;
    box-shadow: 5px 5px 5px 0 gray;
    
    position: relative;
    
    
}
#module_1{
    position: relative;
    left:10vw;
    color:rgb(20, 17, 17);
}
#module_2{
    position: relative;
    left: 20vw;
    color: rgb(158, 40, 205);
    font-weight: bold;
    text-decoration: underline;
}
#module_3{
    position: relative;
    left: 30vw;color:rgb(11, 9, 9);
}
.deploy{
    display: flex;
    background-color: aliceblue;
    width: 80vw;
    height: 48vh;
    position: relative;
    top: 5vh;
    left: 10vw;
    box-shadow: 5px 5px 5px 0 gray;
    border-radius: 10px 10px;
    color:#000;
}
.deploy p{
    font-weight: bold;
    font-size: 20px;
    position: relative;
    left: 4vw;
}
.deploy table{
    border: 2px solid rgb(230, 209, 209);
    width: 60vw;
    height: 10vh;
    position: relative;
    top: 10vh;
    left: -5vw;
}
.deploy table tr{
    background-color: rgb(244, 244, 236);
}
.deploy button{
    background-color: azure;
    border-color: black;
    border-width: 1px;
}
#button_1{
    height: 6vh;
    width: 6vw;
    position: relative;
    left: 58vw;
    top: 2vh;
}
#button_2{
    height: 6vh;
    width: 6vw;
    position: relative;
    left: 62vw;
    top: 2vh;
}

</style>