<template>
  <button :class="customClass" @click="customClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonTodo',
  props: {
    customClass: {
      type: String,
      default: 'list__btn'
    },
    customClick: {
      type: Function,
      default: () => (console.log('error click'))
    }
  }
};
</script>

<style scoped>
  .list__btn {
    color: #177E89;
    position: relative;
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 1px solid #177E89;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1.5rem;
    font-weight: 700;
    background: #fff;
  }

  .list__btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .add {
    margin-top: 20px;
  }

  .list__btn_delete {
    background: #DB3A34;
    color: #fff;
    border-color: #DB3A34;
    margin-left: 10px;
  }

  .list__btn_done {
    background: #06d6a0;
    color: #fff;
    border-color: #06d6a0;
    margin-left: auto;
  }
</style>
