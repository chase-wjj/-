<template>
  <div id="content">
    <p id="modelTitle">模型导入</p>
    <div id="modelPart">
      <div id="labelPart">
        <p id="nameLabel">名称:</p>
        <input type="text">
      </div>
      <div id="labelPart">
        <p id="nameLabel">类型:</p>
        <input type="text">
      </div>
    </div>
    <span class="fileinput-button">
      <span>选择文件</span>
      <input type="file" id="openFile">
    </span>
    <button id="upload" @click="uploadFile">上传文件</button>
  </div>
</template>

<script>
export default {
  name:'MyNewModel',
  methods:{
    uploadFile(){
      this.$router.push({
        name:'MyModel',
        query:{}
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
#content #modelTitle{
    text-align: center;
    font-size: 42px;
    padding: 40px;
}
#content #modelPart{
  width:480px;
  margin: auto;
}
#modelPart #labelPart{
  text-align: center;
  padding:10px;
}
#labelPart #nameLabel{
  display: inline-block;
  font-size: 25px;
}
#labelPart input{
  display: inline-block;
  height: 25px;
}
.fileinput-button{
  position:relative;
  display:inline-block;
  overflow:hidden;
  background-color: #fff;
  color:#000;
  font-size: 15px;
  height:30px;
  width:80px;
  margin-right:100px;
  margin-top:20px;
}
.fileinput-button span{
  font-size: 20px;
}
.fileinput-button input{
  position:absolute;
  left:0px;
  top:0px;
  opacity:0;
}
#content #upload{
  margin-top: -20px;;
  position: relative;
  left:0;
  top:-8px;
  width:80px;
  height:30px;
  font-size: 20px;
  font-weight: 500;
  font-family:Arial, Helvetica, sans-serif
}
</style>