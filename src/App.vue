<template>
  <div class="wrapper">
    <header-component/>
    <div class="wrapper-content">
      <div class="container">
       <router-view/>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'
import { app, links } from '@/_config'

export default {
  components: {
    FooterComponent,
    HeaderComponent
  },
  data () {
    return {
      title: app.title,
      links: links
    }
  }
}
</script>

<style lang="scss">
</style>
