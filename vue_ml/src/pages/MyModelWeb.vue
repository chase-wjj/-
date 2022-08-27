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
        <p id="model_name">xgb-iris-svc</p>
        <p id="model_name_intro">站点</p>
      </div>
      <div class="time">
        <p id="time_name">类别</p>
        <p id="time_name_intro">网络服务</p>
      </div>
      <div class="type">
        <p id="type_name">类型</p>
        <p id="type_name_intro">默认实时预测</p>
      </div>
      <div class="algorithm">
        <p id="algorithm_name">对象</p>
        <p id="algorithm_name_intro">xgb-iris</p>
      </div>
      <div class="engine">
        <p id="engine_name">创建时间</p>
        <p id="engine_name_intro">2022-8-22 00:52</p>
      </div>
    </div>

    <div class="module">
      <p id="module_1"><router-link to='/thismodel'>概述</router-link></p>
      <p id="module_2"><router-link to='/modeltest'>测试</router-link></p>
    </div>

    <div class="deploy">
      <p>指标</p>

      <table>
        <tr>
          <th>函数名</th>
          <th>访问次数</th>
          <th>平均响应时间(ms)</th>
          <th>中间响应时间(ms)</th>
          <th>最小响应时间(ms)</th>
          <th>最大响应时间(ms)</th>
          <th>首次访问时间(ms)</th>
          <th>最新访问时间(ms)</th>
        </tr>
      </table>
    </div>

    <div class="copy">
      <p>副本</p>

      <table>
        <tr>
          <th>名称</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
    left: 38vw;
    
}
#time_name{
    font-size: 16px; 
    
}
#time_name_intro{
    color: rgb(9, 12, 12);
    font-weight: bold;
    font-size: 20px;
}
.type{
    position: relative;
    left: 44vw;
    
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
    left: 52vw;
    
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
    left: 58vw;
    
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
    color: rgb(158, 40, 205);
    text-decoration: underline;
}
#module_2{
    position: relative;
    left: 20vw;
    color:rgb(20, 17, 17);
    font-weight: bold;
   
}
.deploy{
    display: flex;
    background-color: aliceblue;
    width: 80vw;
    height: 30vh;
    position: relative;
    top: 2vh;
    left: 10vw;
    box-shadow: 5px 5px 5px 0 gray;
    border-radius: 10px 10px;
}
.deploy p{
    font-weight: bold;
    font-size: 20px;
    position: relative;
    left: 4vw;
}
.deploy table{
    font-size: 14px;
    border: 2px solid rgb(230, 209, 209);
    width: 60vw;
    height: 10vh;
    position: relative;
    top: 10vh;
    left: 6vw;
}
.deploy table tr{
    background-color: rgb(244, 244, 236);
}
.copy{
    display: flex;
    background-color: aliceblue;
    color:#000;
    width: 80vw;
    height: 20vh;
    position: relative;
    top: 3vh;
    left: 10vw;
    box-shadow: 5px 5px 5px 0 gray;
    border-radius: 10px 10px;
}
.copy p{
    font-weight: bold;
    font-size: 20px;
    position: relative;
    left: 2vw;
}
.copy table{
    font-size: 14px;
    border: 2px solid rgb(230, 209, 209);
    width: 60vw;
    height: 10vh;
    position: relative;
    top: 2vh;
    left: 6vw;
}
.copy table tr{
    background-color: rgb(244, 244, 236);
}
</style>