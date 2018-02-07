<template>
  <div>
    <h2>{{ hello }}</h2>
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
      hello () {
          return "hello"
      }
    }
  }
</script>

<style>

</style>
