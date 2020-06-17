<template>
  <div>
    <h1 @click="changeMsg">发现<span v-text="msg"></span></h1>
    <span v-text="msg2"></span>
    <div class="tabs2">
      <router-link to="/find/good" tag="span" exact-active-class="on"
        >发现好货</router-link
      >
      <router-link to="/find/price" tag="span" exact-active-class="on"
        >发现优惠</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// mapState的作用是把vuex中的state数据映射，唉计算属性中进行
// mapMutations的作用是映射vuex中的mutations方法，在methods选项中进行映射，然后使用this.进行访问

import { mapState, mapMutations, mapActions ,mapGetters} from "vuex";

export default {
  name: "Find", //取名：便于在devtools中查看
  computed: {
    ...mapState("study", ["msg", "foo"]),
    ...mapGetters("study", ["msg2"]),
    ...mapState("song", ["songMsg"]),
  },
  mounted() {
    console.log("map", this.msg, this.foo, this.songMsg);
  },
  methods: {
    ...mapMutations('study',["upstateMsg"]),
    ...mapActions('study',["asyncUpdateMsg"]),
    changeMsg() {
      /*// 不建议这样修改vuex中的状态组数
      this.$store.state.msg++;*/

      const payload = {
        count: 10,
        type: "请查收",
      };

      // 向store提交一个方法，申请同步改变msg
      // this.$store.commit("updateMsg", payload);
      // this.updateMsg(payload);
      // 异步修改msg两秒后数据改变
      // this.$store.dispatch("asyncUpdateMsg", payload);
      this.asyncUpdateMsg(payload);
    },
  },
};
</script>
<style>
.tabs2 {
  display: flex;
}
.tabs2 > span {
  flex: 1;
  text-align: center;
  line-height: 40px;
  border: 1px solid #ccc;
}
.tabs2 > span > on {
  color: #fff;
  color: seagreen;
}
</style>
