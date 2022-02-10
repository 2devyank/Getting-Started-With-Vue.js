<template>
  <div class="about">
    <h1>This is an about page</h1>
<h2>{{store.state.counter}}</h2>
  </div>
</template>

<script>
import {inject } from 'vue'
export default {
  setup() {
    const store=inject('store')

    return {
      store
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
