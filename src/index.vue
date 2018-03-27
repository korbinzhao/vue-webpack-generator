<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 60px;
}
</style>

<template>
  <div id="app">
    hello world
  </div>
</template>

<script>

const a = 'b';

export default {
  name: 'App',
  created(){
    console.log('created');
  },
  mounted(){
    console.log('mounted');
  }
}
</script>
