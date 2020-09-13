<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { state, getters, dispatch } from '@/store';

export default Vue.extend({
  computed: {
    checkoutStatus() {
      return state.cart.checkoutStatus;
    },
    products() {
      return getters.cartProducts;
    },
    total() {
      return getters.cartTotalPrice;
    }
  },
  methods: {
    checkout() {
      dispatch('checkout');
    }
  }
});
</script>
