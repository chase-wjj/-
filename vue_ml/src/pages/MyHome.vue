<template>
  <div id="content">
    <p id="welcomeWords">欢迎使用机器学习模型服务平台</p>
    <div class="button">
      <button @click='jumpToModel' id="start">开始</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyHome',
    methods:{
        jumpToModel(){
            this.$router.push({
                    name:'MyModel'
                })
        }
    }
};
</script>

<style>
*{
  margin: 0;
  padding:0;
  border: 0;
}
#content{
    margin: auto;
    width: 1080px;
    height: 100vh;
    background: rgba(00, 00, 33, 0.8);
    color: #fff;
}
#content #welcomeWords{
    padding-top: 30vh;
    font-size: 60px;
    margin: auto;
    text-align: center;
    margin: auto;
}
#content .button{
    padding-top: 40px;
    text-align: center;
}
#start{
    border:1px solid #fff;
    color:#fff;
    font-size: 20px;
    text-align: center;
    width: 120px;
    height: 40px;
    background-color: #000080;
}
</style>