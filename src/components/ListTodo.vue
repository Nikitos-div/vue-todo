<template>
  <ul class="list" v-if="notes.length !== 0">
    <li class="list__item" v-for="(note, index) in notes" :key="index">
      {{ note }}
      <ButtonTodo class="list__btn list__btn_done" @click="deleteNote(index)">Завершить</ButtonTodo>
      <ButtonTodo class="list__btn list__btn_delete" @click="deleteNote(index)">Провалить</ButtonTodo>
    </li>
  </ul>
  <h3 class="msg" v-if="notes.length === 0">Заметок нет</h3>
</template>

<script>
import ButtonTodo from './ButtonTodo.vue'

export default {
  // data() {
  //   return {
  //     notes: []
  //   }
  // },
  components: {
    ButtonTodo
  },
  // created() {
  //   // this.notes = this.$store.state.notes
  // },
  computed: {
    notes() {
      return this.$store.state.notes
    }
  },
  methods: {
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .list {
    margin: 0;
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  .list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    transition: .22s all;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 90%;
    margin: auto;
  }
  .msg {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
