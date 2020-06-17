<template>
  <div>
    <h1>购物车</h1>
  </div>
</template>

<script>
export default {
  // 局部路由守卫：志兰姐来到这个组件的路由跳转 行为
  beforeRouterEnter(to, from, next) {
    console.log("to", to);
    console.log("from", from);
      let isLogin = false;
      if (isLogin) {
        next();
      } else {
        next("/user");
    }
  },
};
</script>

<style></style>
