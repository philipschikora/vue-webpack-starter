<template>

  <div class="App">

    <h1>Welcome to<br>Vue-Webpack-Starter</h1>

    <HalloWorld msg="Stranger!"/>

  </div>

</template>

<script>

import HalloWorld from './components/HalloWorld';

export default {
  components: {
    HalloWorld
  }
}

</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

*, *::before, *::after {
  box-sizing: border-box;
}

.App {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $vue-blue;
}

h1 {
  text-align: center;
}
</style>
