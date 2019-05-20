# vue-mint-ui

[Mint UI](https://mint-ui.github.io/#!/zh-cn) 基于 Vue.js 的移动端组件库  

`npm i mint-ui -S`  

[引入 Mint UI](https://mint-ui.github.io/docs/#/zh-cn2/quickstart)  

main.js 
```js
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
  el: '#app',
  components: { App }
})
```

[Tabbar](https://mint-ui.github.io/docs/#/zh-cn2/tabbar) 底部選項卡，點擊 tab 會切換顯示的頁面。依賴 tab-item 組件。
搭配 [tab-container](https://mint-ui.github.io/docs/#/zh-cn2/tab-container) 組件使用  
ex [mint-ui之tabbar使用](https://www.cnblogs.com/zhaozhenzhen/p/8422261.html)  


## vue cli

[Vue CLI](https://cli.vuejs.org/zh/) 

`$ cd vue-mint-ui`
`$ yarn serve`

App running at:
  - Local:   http://localhost:8080/  



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
