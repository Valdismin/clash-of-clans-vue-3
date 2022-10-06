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

export default {
  name: 'HomeView',
  components: { CardComponent },
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'Archer',
          description: 'Archer Archer Archer Archer Archer',
          img: require('./../assets/img/archer.png'),
          level: 4
        },
        {
          id: 2,
          title: 'Wizard',
          description: 'Wizard Wizard Wizard Wizard Wizard',
          img: require('./../assets/img/wizard.png'),
          level: 5
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
