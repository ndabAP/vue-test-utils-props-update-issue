<template>
    <div>
        <Array :array="array" />
    </div>
</template>

<script>
import Array from './../../src/components/Array'

export default {
  name: 'ArrayWrapper',
  
  components: {
    Array
  },

  data: () => ({
    array: [1]  
  })
}
</script>