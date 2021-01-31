<template>
  <div id="app">
    <AppBar />
    <HeroHeader />
    <AboutSection />

  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import HeroHeader from '@/components/HeroHeader.vue';
import AboutSection from '@/components/AboutSection.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    HeroHeader,
    AboutSection,
  },
}
</script>

<style>

</style>
