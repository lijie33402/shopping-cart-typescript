# shopping-cart-typescript

### 工程内容

改造 vuex 的官方示例，用 vue-cli3.x 的官方 ts 脚手架将原工程全部改为 ts，重点是 vuex 的使用。

### 主要考虑

由于手里面很多项目都是非 ts 编写，为了尽可能非侵入的改造目前已有的 vue 工程，同时还能解决目前 ts 工程中 vuex 的 commit，dispatch 等不提示的痛点，并且不使用 vue-class-component, vuex-class 等额外的三方库，否则采用类和注解的方式 vue 组件的写法会大大改变。

### 参考资料

- [参考 1](https://segmentfault.com/a/1190000011853167)
- [主要借鉴](https://github.com/BarneyZhao/vuex-typescript-demo)
- [官方 github issues](https://github.com/vuejs/vuex/issues/564)
