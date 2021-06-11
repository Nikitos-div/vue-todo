<template>
  <div id="nav" >
    <router-link :to="{name: 'AllToDoPage'}">Создать заметку</router-link> 
    <router-link to="/create-todo-page">Список заметок</router-link> 
    <!-- через слеш - очень плохо -->
  </div>
  <!-- <div @click='routeTo' style='width: 20px; height: 20px; background: red;'></div> -->
  <router-view/>
</template>

<script>
 export default {
   name: 'App',
  //  methods: {
  //    routeTo() {
  //      this.$router.push({name: 'AllToDoPage'})
  //    }
  //  }
 }
</script>




<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  display:flex;
  flex-direction: row;
  min-width: 400px;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #2c3e50;
    outline: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
