<template>
  <div>
    <h1>{{ msg }}</h1>

    <display></display>
    <br>
    <another-display></another-display>
    <br>
    <buttons></buttons>
    <br>
    <custom-model></custom-model>
  </div>
</template>

<script>
  import Display from './Display.vue';
  import AnotherDisplay from './AnotherDisplay.vue';
  import Buttons from './Buttons.vue';
  import CustomModel from './CustomModel.vue';

  export default {
    components: {
      display: Display,
      buttons: Buttons,
      anotherDisplay: AnotherDisplay,
      customModel: CustomModel
    },
    data () {
      return {
        msg: 'Welcome'
      }
    }
  }
</script>

<style>

</style>
