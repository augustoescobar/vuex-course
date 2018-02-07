<template>
  <div>
    Paragraph: <input type="text" v-model="paragraph">
    <p>{{ paragraph }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      paragraph: {
        get () {
          return this.$store.getters['paragraph/paragraph'];
        },
        set (value) {
          this.$store.dispatch('paragraph/updateParagraph', value);
        }
      }
    }
  }
</script>

<style>

</style>
