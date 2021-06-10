<template>
  <div class="form-control">
    <input  class='note-title' :placeholder="placeholderTitle" v-model='titleValue' />
    <input  :placeholder="inputPlaceholder" type="text" class="note-title" v-model='inputValue'   />
    <PriorityTodo />
    <ButtonTodo :customClass="'btn add'" @customEvent='addNewNote' >
      {{ addButtonText }}
    </ButtonTodo>
  </div>
</template>

<script>
// import InputTodo from '../components/InputTodo.vue';
//TODO разобраться что здесь происходит
import PriorityTodo from '../components/PriorityTodo.vue';
import ButtonTodo from '../components/ButtonTodo.vue';

export default {
  name: 'FormTodo',
  data() {
    return {
      placeholderTitle: 'Введите название заметки',
      placeholderNote: 'Содержание заметки',
      addButtonText: 'Добавить',
      title: '',
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
      
        this.$store.dispatch('addNote', `${this.titleValue} ${this.inputValue} ${this.priorityValue}`);
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
