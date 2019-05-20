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
