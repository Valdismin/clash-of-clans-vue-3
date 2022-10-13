<template>
  <div class="wrapper-hero">
    <div v-if="item">
      <img :src="item.img" :alt="item.description"/>
      <h1 class="title" style="color:#ffffff">{{ item.title }}</h1>
      <p>{{ item.description }}</p>

      <card-stats :item="item"></card-stats>
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
import CardStats from '@/components/UI/CardStats'

export default {
  name: 'HeroView',
  components: { CardStats },
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
