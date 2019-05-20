<template>
  <div id="app">
    <mt-button @click.native="handleClick">按钮</mt-button>
    

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1">
        tab-container1 外卖
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        tab-container2 订单
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        tab-container3 发现
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        tab-container4 我的
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        外卖
      </mt-tab-item>
      <mt-tab-item id="tab2">
        订单
      </mt-tab-item>
      <mt-tab-item id="tab3">
        发现
      </mt-tab-item>
      <mt-tab-item id="tab4">
        我的
      </mt-tab-item>
    </mt-tabbar>
     <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      selected: 'tab1'
    };
  },
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
