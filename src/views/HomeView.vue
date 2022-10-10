<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <card-component :title="item.title" :level="`${item.level} lvl`" :urlImg="item.img" :link="`/${item.alias}`">
        <template v-slot:body>{{ item.description }}</template>
        <template v-slot:footer>
          <div class="card-stats">
            <div v-for="(stat, index) in item.info" :key="index" class="one-third">
              <div class="stat-value">{{stat.value}}</div>
              <div class="stat">{{stat.title}}</div>
            </div>
          </div>
        </template>
      </card-component>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/UI/CardComponent'
import items from '../seeders/items'

export default {
  name: 'HomeView',
  components: { CardComponent },
  data () {
    return {
      items: items
    }
  }
}
</script>

<style scoped>

</style>
