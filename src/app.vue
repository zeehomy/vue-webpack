<template>
  <div id="text">{{text}}</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'abcas333点但是'
    }
  },
  // components: {}
  created() {
    console.log(123);
  }
};
</script>

<style>
  #text {
    color: red;
  }
</style>