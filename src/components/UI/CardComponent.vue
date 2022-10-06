<template>
  <div class="card">
    <span class="card-name">{{ level }}</span>
    <span class="card-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    level: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
