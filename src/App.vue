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
export default {
  name: 'App',
  components: { SectionHeader, SectionFooter }
}
</script>
