<template>
  <div id="app">
    <Array :array.sync="array"/>
  </div>
</template>

<script>
import Array from './components/Array.vue'

export default {
  name: 'App',
  
  components: {
    Array
  },

  data: () => ({
    array: [1, 2]
  })
}
</script>
