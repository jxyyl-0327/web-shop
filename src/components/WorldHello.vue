<template>
  <div>
    <h1 class="world" @click='clickHandle'>桃花依旧笑春风</h1>
  </div>
</template>

<script>
// 抛出组件
export default {
    data:function(){
        return {
            msg:'world'
        }
    },
  created() {
    console.log('你好,vue')
  },
  methods:{
    clickHandle:function(){
        console.log('点击事件')
    }
  }
};
</script>

<style>
.world {
  color: seagreen;
}
</style>
