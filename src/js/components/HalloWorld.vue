<template>

  <div>
    <h1>Hello {{ msg }}!</h1>
    <p>{{ name }}</p>
    <button v-on:click="change">change</button>
    <button v-on:click="analyzeComponent">analyzeComponent</button>

    <List/>
  </div>


</template>

<script>

import List from './List';

export default {
  components: {
    List
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      name: 'some actions:)'
    }
  },
  methods: {
    change: () => console.log('changing works!'),
    analyzeComponent: function () {
      console.log(this)
    }
  }
}

</script>
