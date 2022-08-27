<template>
  <div id="content">
    <p id="modelTitle">模型列表</p>
    <div id="modelsPart">
      <div id="tablePart">
        <table>
          <tbody>
            <tr>
              <th>模型名称</th>
              <th>类型</th>
              <th>修改时间</th>
              <th>删除模型</th>
            </tr>
            <tr>
              <td id="modelName"><router-link to="/thismodel">/ {{ msgName }}</router-link></td>
              <td>/</td>
              <td>/</td>
              <td>/</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="createModel">
      <button @click="createMd" id="createModelButton">添加模组</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'MyModel',
    methods:{
      createMd(){
        this.$router.push({
          name:'NewModel'
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
#content #modelsPart{
    background-color: #fff;
}
#modelsPart #tablePart{
    background: #fff;
}
#tablePart table{
    border-collapse: collapse;
    width: 100%;
}
#tablePart tbody{
    vertical-align: middle;
}
#tablePart th{
    background-color: #555;
    border: 1px solid #000;
    font-size: 20px;
    padding:3px;
    color: #fff;
}
#tablePart tr{
    background-color: #fff;
    border: 1px solid #555;
    color: #000;
    text-align: center;
}
#content .createModel{
    padding-top: 40px;
    text-align: center;
}
#createModelButton{
    border:1px solid #fff;
    color:#fff;
    font-size: 20px;
    text-align: center;
    width: 120px;
    height: 40px;
    background-color: #000080;
}

</style>