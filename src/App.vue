<template>
  <div id="app">
    <!-- 路由的视图容器：告诉vue在哪里显示路由匹配的组件，默认为default -->
    <router-view></router-view>

    <!-- 命名视图 -->
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
    <router-view name="c"></router-view>

    <!-- 声明式导航 -->
    <div class="tabs">
      <!-- <router-link to="/home" tag="span" active-class="on">首页</router-link>
      <router-link to="/find" tag="span" active-class="on">发现</router-link>
      <router-link to="/user" tag="span" active-class="on">用户</router-link> -->

      <!-- 编程式导航 -->
      <!-- <span @click="skip(1)">首页</span>
      <span @click="skip(2)">发现</span>
      <span @click="skip(3)">我的</span> -->

      <!-- 声明式导航 -->
      <router-link :to="{ name: 'home' }" tag="span" active-class="on"
        >首页</router-link
      >
      <router-link to="/find" tag="span" active-class="on">发现</router-link>
      <router-link to="/cart" tag="span" active-class="on">购物车</router-link>
      <router-link to="/user" tag="span" active-class="on">我的</router-link>
    </div>
  </div>
</template>

<script>
// 引入组件
// import HelloWorld from "./components/HelloWorld.vue";
// import WorldHello from "./components/WorldHello.vue";

export default {
  name: "App",
  // 路由里面的监听器
  watch: {
    $route: function (to, from) {
      console.log("watch", to, from);
    },
  },
  components: {
    // HelloWorld,
    // WorldHello
  },
  mounted() {
    // for (var i = 0; i < 10; i++) {
    //   console.log(i);
    // }
    // console.log("这是mounted");
    console.log(this.$route)
    console.log(this.$router)
    console.log(this.$store)
  },
  methods: {
    skip(index) {
      switch (index) {
        case 1:
          this.$router.push("/home");
          break;
        case 2:
          this.$router.push("/find");
          break;
        case 3:
          this.$router.push("/user");
          break;
        default:
      }
    },
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
.tabs span.on {
  color: #fff;
  background: seagreen;
}
</style>
