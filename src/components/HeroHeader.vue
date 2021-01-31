<template>
  <header>
    <div class="avatar">
      <img src="@/assets/img/avatar.jpg" alt="developer image">
    </div>
    <h1>
      Hi, I am Nameless
    </h1>
    <h2>
      Web Developer
    </h2>
  </header>
</template>

<script>
export default {
  name: 'hero-header',
}
</script>

<style scoped>
header {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid var(--color-grey); */

  /* Polka Dot Pattern */
  background-color: var(--color-off-white);
  background-image: radial-gradient(var(--color-grey) 1px, var(--color-off-white) 1px);
  background-size: 20px 20px;
}

.avatar {
  border-radius: 50%;
  height: 128px;
  width: 128px;
  margin-bottom: 1.5em;
}

.avatar img {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 1.75em;
  font-weight: 500;
}
</style>