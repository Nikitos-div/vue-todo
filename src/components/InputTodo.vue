<template>
  <input v-bind="$attrs" :placeholder="inputPlaceholder" type="text" class="note-title" v-model='model'  />
</template>

<script>
export default {
  name: 'InputTodo',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: () => 'плейсхолдер'
    },
    value: {
      type:String,
      default: ''
    }
  },
  
}
</script>

<style scoped>
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
