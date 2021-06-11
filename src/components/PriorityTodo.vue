<template>
  <form class="priority-check">
    <p>Приоритет:</p>
    <label>
      <input
      v-model="priorityValue"
      @keypress.enter="addNewNote"
      name="priority"
      type="radio"
      value="⚡"
      class="priority-check__low">Низкий
    </label>
    <label>
      <input
      v-model="priorityValue"
      @keypress.enter="addNewNote"
      name="priority"
      type="radio"
      value="⚡⚡"
      class="priority-check__middle">Средний
    </label>
    <label>
      <input
      v-model="priorityValue"
      @keypress.enter="addNewNote"
      name="priority"
      type="radio"
      value="⚡⚡⚡"
      class="priority-check__high">Высокий
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      priorityValue: ''
    }
  },
  props: {
    inputValue: {
      type: String
    },
    customPress: {
      type: Function,
      default: () => console.log('error')
    }
  }
};
</script>

<style scoped>
  .priority-check {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
