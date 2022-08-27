<template>
  <div id="myBackground">
    <div id="app">
      <MyHeader />
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"

export default {
  name: "App",
  components: {
    MyHeader
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  border: 0px;
}
#myBackground {
  background: url("./assets/bg.jpg") fixed no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100%;
  background-size: cover;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
#myContent {
  margin: auto;
  width: 1080px;
  height: 100vh;
  background: rgba(00, 00, 33, 0.8);
  color: #fff;
}
</style>
