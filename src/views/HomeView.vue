<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <CardComponent :title="item.title" :level="`${item.level} lvl`" :urlImg="item.img">
        {{ item.description }}
      </CardComponent>
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
