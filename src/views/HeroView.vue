<template>
  <div class="wrapper-hero">
    <div v-if="item">
      <img :src="item.img" :alt="item.description"/>
      <h1 class="title" style="color:#ffffff">{{ item.title }}</h1>
      <p>{{ item.description }}</p>

      <div class="card-stats">
        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
          <div class="stat-value">{{stat.value}}</div>
          <div class="stat">{{stat.title}}</div>
        </div>
      </div>
      <div>
        <router-link
          class="btn btnPrimary"
          style="margin-top: 16px"
          to="/"
        >Back to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items'

export default {
  name: 'HeroView',
  data () {
    return {
      item: null
    }
  },
  created () {
    const hero = this.$route.params.hero
    this.item = items.find(el => el.alias === hero)
  }
}
</script>

<style lang="scss" scoped>
.wrapper-hero {
  text-align: center;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>
