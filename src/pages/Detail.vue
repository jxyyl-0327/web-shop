<template>
  <div>
    <h1>商品详情页</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log("动态路由", this.$route.params.id);
    console.log("路由传参", this.id);
  },
};
</script>

<style></style>
