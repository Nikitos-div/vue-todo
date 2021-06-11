<template>
  <div id="app">
    <TodoLayout>
      <TiltleTodo :title="titleTodo" />
      <FormTodo />
      <ListTodo />
    </TodoLayout>
  </div>
  <!-- <router-view /> -->
</template>

<script>
// import TiltleTodo from './components/TitleTodo.vue';
// import ListTodo from './components/ListTodo.vue';
// import FormTodo from './components/FormTodo.vue';
import TodoLayout from './layouts/TodoLayout.vue';

export default {
  name: 'App',
  data() {
    return {
      titleTodo: 'Заметки'
    }
  },
  components: {
    TodoLayout,
    // TiltleTodo,
    // FormTodo,
    // ListTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
