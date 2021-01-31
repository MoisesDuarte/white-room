<template>
  <section>
    <article>
      <img src="@/assets/img/placeholder.jpg" alt="About Icon">
    </article>
    <article>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam consequuntur
        laboriosam doloribus? Dicta, in! Eligendi, soluta asperiores quae vero id culpa,
        et ea ab quidem illo numquam dolore illum.
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'about-section',
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  padding: 2em;
}

article:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 30%;
}

article:nth-child(2) {
  flex-basis: 70%;
}

article img {
  border-radius: 50%;
  width: 300px;
  height: auto;
}

article > h1 {
  font-size: 2.5rem;
  margin-bottom: 0.75em;
}

article > p {
  font-size: 1.625rem;
  line-height: 1.5;
}
</style>