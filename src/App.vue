<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabs">
      <router-link to="/home" tag="span" active-class="on">首页</router-link>
      <router-link to="/find" tag="span" active-class="on">发现</router-link>
      <router-link to="/user" tag="span" active-class="on">用户</router-link>
    </div>
  </div>
</template>

<script>
// 引入组件
// import HelloWorld from "./components/HelloWorld.vue";
// import WorldHello from "./components/WorldHello.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // WorldHello
  },
  mounted() {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log("这是mounted");
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 80px;
}
.tabs span.on{
  color: #fff;
  background: seagreen;
}
</style>
