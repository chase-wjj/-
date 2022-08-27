<template>
  <div id="myHeader">
    <p id="myHeader_mlms">机器学习模型服务</p>
    <div id="myHeader_nav">
      <router-link to='/home'>首页</router-link>
      |
      <router-link to='/model'>模型</router-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style>
#myHeader{
    margin: 0;
    padding:0;
    border: 0;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 1080px;
    height: 40px;
    margin: 0 auto;
    background: url(../assets/机器学习.png) no-repeat;
    background-size: 35px 35px;
    background-color: #000033;
}
#myHeader_mlms{
    color: #fff;
    margin-left: 20px;
    line-height: 40px;
    font-size: 20px;
    width:300px;
    float: left;
    margin: 0;
}
#myHeader_nav{
    float: right;
    color: #fff;
    height: 40px;
    width: 100px;
    line-height: 40px;
}
#myHead_nav router-link{
    color: #fff;
    padding: 15px;
}
</style>