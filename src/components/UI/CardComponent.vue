<template>
  <div class="card">
    <div v-if="urlImg" class="card-img__wrapper">
      <img class="card-img" :src="urlImg" :alt="title"/>
    </div>
    <span class="card-name">{{ level }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot name="body"></slot>
      <router-link
        class="link"
        style="display: block; margin-top: 16px"
        v-if="link"
        :to="link"
      >See more</router-link>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    level: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    urlImg: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
