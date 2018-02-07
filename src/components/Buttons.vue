<template>
  <div>
    Step: <input type="text" v-model="step">
    <br><br>
    <button @click="increment(step)">Increment</button>
    <button @click="decrement(step)">Decrement</button>
    <br><br>
    Delay (ms): <input type="text" v-model="delay">
    <br><br>
    <button @click="asyncIncrement({step, delay})">Async Increment</button>
    <button @click="asyncDecrement({step, delay})">Async Decrement</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    data () {
      return {
        step: 1,
        delay: 1000
      }
    },
    methods: {
      ...mapMutations('counter', [
        'increment',
        'decrement'
      ]),
      ...mapActions('counter', [
        'asyncIncrement',
        'asyncDecrement'
      ]),
    }
  }
</script>

<style></style>
