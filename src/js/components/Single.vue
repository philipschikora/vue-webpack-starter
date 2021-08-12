<template>

  <li>
    {{ single.text }}
  </li>

</template>

<script>

export default {
  created: () => {
    console.log('Single Instance created!');
  },
  props: {
    single: {
      type: Object,
      required: true
    }
  }
}

</script>
