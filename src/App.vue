<template>
  <div id="app">
    <div class="wrapper">
      <section-header/>
        <router-view/>
      <section-footer/>
    </div>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import SectionFooter from '@/components/SectionFooter'
export default {
  name: 'App',
  components: {SectionHeader, SectionFooter}
}
</script>

<style scoped>
div.wrapper {
    background-image: url('./assets/img/bg-main.jpg');
}
</style>
