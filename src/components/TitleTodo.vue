<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'TiltleTodo',
  props: {
    title: {
      type: String,
      default: 'default'
    }
  }
}
</script>
