<template>
  <div class="home">
    <img src="../assets/logo.png" />
    <ShoppingCart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ShoppingCart from '@/components/ShoppingCart/index.vue';

export default Vue.extend({
  components: {
    ShoppingCart
  }
});
</script>
