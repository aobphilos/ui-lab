<template>
  <div id="app">
    <section-header/>
    <router-view/>
    <section-footer/>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import SectionFooter from '@/components/SectionFooter'
import ItemSlider from '@/components/ItemSlider'
export default {
  name: 'App',
  components: { SectionHeader, SectionFooter, ItemSlider }
}
</script>
