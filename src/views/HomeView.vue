<template>
  <carousel :breakPoints="breakPoints" :settings="settings">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <card-component :title="item.title" :level="`${item.level} lvl`" :urlImg="item.img" :link="`/${item.alias}`">
        <template v-slot:body>{{ item.description }}</template>
        <template v-slot:footer>
          <card-stats :item="item"></card-stats>
        </template>
      </card-component>
    </slide>

    <template #addons>
      <navigation/>
    </template>
  </carousel>
</template>

<script>
import CardComponent from '@/components/UI/CardComponent'
import CardStats from '@/components/UI/CardStats'
import items from '../seeders/items'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'HomeView',
  components: {
    CardComponent,
    Carousel,
    Slide,
    Navigation,
    CardStats
  },
  data () {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        snapAlign: 'center',
        wrapAround: true
      },
      breakPoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
