<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { dispatch, Product, state } from '@/store';

export default Vue.extend({
  computed: {
    products() {
      return state.products.all;
    }
  },
  methods: {
    addProductToCart(product: Product) {
      dispatch('addProductToCart', product);
    }
  },
  created() {
    dispatch('getAllProducts');
  }
});
</script>
