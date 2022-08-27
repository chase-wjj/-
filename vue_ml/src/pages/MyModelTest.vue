<template>
  <div>
    <div class="route">
      <a>项目</a>
      <p>></p>
      <a>PMML部署测试</a>
      <p>></p>
      <a>部署</a>
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
      <p id="module_2"><router-link to='/modelweb'>部署</router-link></p>
    </div>

    <div class="request">
      <p>请求</p>
      <button>生成代码</button>
      <form>
        <p>*函数名</p>
        <input type="text" name="name" />
        <p>*请求正文</p>
        <textarea name="text" rows="10" cols="30"> </textarea>
      </form>
      <button id="submit">提交</button>
      <button id="clean">清除</button>
    </div>

    <div class="response">
      <p>响应</p>
      <textarea name="response_text" rows="10" cols="50"></textarea>
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
    color:rgb(20, 17, 17);
}
#module_2{
    position: relative;
    left: 20vw;
    color: rgb(158, 40, 205);
    font-weight: bold;
    text-decoration: underline;
}

.request{
    display: flex;
    background-color: white;
    width: 40vw;
    height: 50vh;
    position: relative;
    top: 5vh;
    left: 4vw;
    box-shadow: 5px 5px 5px 0 gray;
    border-radius: 5px 5px;
}
.request p{
    font-size: 18px;
    position: relative;
    left: 2vw;
}
.request form p{
    font-size: 20px;
    font-weight: bold;
    position: relative;
    left: 4vw;
}
.request button{
    height: 6vh;
    font-size: 16px;
    color: rgb(99, 168, 227);
    background-color: white;
    border-width: 0;
    position: relative;
    top: 2vh;
    left: 30vw;
}
.request form{

    position: relative;
    top: 5vh;
    left: -10vw;
}
.request form input{
    position: relative;
    left: 4vw;
}
.request form textarea{
    position: relative;
    left: 4vw;
}
#submit{
    position: relative;
    left: 10vw;
    top: 42vh;
    width: 4vw;
    background-color: rgb(4, 0, 255);
    color: white;
}
#clean{
    position: relative;
    left: 2vw;
    top: 42vh;
    width: 4vw;
    border-width: 2px;
    color: rgb(104, 102, 102);
}
.response{
    display: flex;
    background-color: white;
    width: 40vw;
    height: 50vh;
    position: relative;
    top: -45vh;
    left: 48vw;
    box-shadow: 5px 5px 5px 0 gray;
    border-radius: 5px 5px;
}
.response p{
    font-size: 20px;
    font-weight: bold;
    position: relative;
    left: 4vw;
}
.response textarea{
    position: relative;
    top: 10vh;
    left: 2vw;
    height: 30vh;
    width: 30vw;
}

</style>