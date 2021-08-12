<template>

  <div>

    <h2>List</h2>

    <ul v-if="items.length">

      <Single
          v-for="single in items"
          :key="single.id"
          :single="single"
      />

    </ul>

  </div>

</template>

<script>

import Single from './Single';

export default {
  components: {Single},
  data: () => {
    return {
      items: [
        {
          id: 1,
          text: 'Coffee'
        },
        {
          id: 2,
          text: 'Work'
        },
        {
          id: 3,
          text: 'Sleep'
        },
        {
          id: 4,
          text: 'Repeat'
        }
      ]
    }
  }
}

</script>
