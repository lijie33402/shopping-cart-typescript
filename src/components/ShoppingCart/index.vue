<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';

export default Vue.extend({
  components: { ProductList, ShoppingCart }
});
</script>
