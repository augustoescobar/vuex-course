<template>
  <div>
    Double counter: {{ doubleCounter }}
    Simple counter: {{ stringCounter }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('counter', [
        'doubleCounter',
        'stringCounter'
      ]),
    }
  }
</script>

<style>

</style>
