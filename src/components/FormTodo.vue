<template>
  <div class="form-control">
    <input :placeholder="placeholderTitle" type="text" class="note-title" v-model="titleValue" @keypress.enter="addNewNote" />
    <input :placeholder="placeholderNote" type="text" class="note-title" v-model="inputValue" @keypress.enter="addNewNote" />
    <!-- <InputTodo :inputPlaceholder="placeholderTitle" v-model="titleValue" @keypress.enter="addNewNote" />
    <InputTodo :inputPlaceholder="placeholderNote" v-model="inputValue" @keypress.enter="addNewNote" /> -->
    <PriorityTodo />
    <ButtonTodo :class="'list__btn add'" @click="addNewNote">{{ addButtonText }}</ButtonTodo>
  </div>
</template>

<script>
// import InputTodo from '../components/InputTodo.vue';
import PriorityTodo from '../components/PriorityTodo.vue';
import ButtonTodo from '../components/ButtonTodo.vue';

export default {
  name: 'FormTodo',
  data() {
    return {
      placeholderTitle: 'Введите название заметки',
      placeholderNote: 'Содержание заметки',
      addButtonText: 'Добавить',
      titleValue: '',
      inputValue: '',
      singleNote: '',
    }
  },
  components: {
    // InputTodo,
    PriorityTodo,
    ButtonTodo
  },
  methods: {
    addNewNote() {
      if(this.inputValue && this.titleValue) {
        console.log('click add')
        this.singleNote = `${this.titleValue + this.inputValue + this.priorityValue}`
        this.$store.dispatch('addNote', this.singleNote);
        this.inputValue = ''
      }
    },
    // onCustomEvent() {
    //   console.log('lol')
    // }
  }
}
</script>

<style scoped>
  .form-control {
    position: relative;
    margin-bottom: 0.5rem;
  }
    .note-title {
    margin: 20px auto 0px;
    outline: none;
    border: 2px solid #ccc;
    width: 100%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 99px;
    font-size: 1rem;
  }
</style>
