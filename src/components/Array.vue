<template>
  <div class="hello">
    {{ array }}
  </div>
</template>

<script>
export default {
  name: 'Array',
  
  props: {
    array: {
      type: Array
    }
  },

  mounted () {
    this.$emit('update:array', [1, 2])
  }
}
</script>
