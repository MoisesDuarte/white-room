<template>
  <nav class="appbar">
    <a class="nav-brand">
      Brand
    </a>
    <div class="spacer" />
    <a v-for="i in 4" :key="'nav_' + i" class="nav-item">
      Link {{ i }}
    </a>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.appbar {
  border-bottom: 1px solid var(--color-grey);
  display: flex;
}

.appbar a {
  padding: 1em;
}

.appbar .nav-item {
  cursor: pointer;
}

.spacer {
  flex-grow: 1;
}
</style>