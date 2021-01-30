<template>
  <div id="app">
    <AppBar />
    <HeroHeader />

  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import HeroHeader from '@/components/HeroHeader.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    HeroHeader,
  },
}
</script>

<style>

</style>
