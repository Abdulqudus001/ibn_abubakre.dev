<template>
  <Layout>
    <section class="hero flex items-center justify-center flex-column">
      <div class="text-center">
        <h1 class="hero__title">
          Abdulqudus Abubakre<br>
          <small>Frontend Developer</small>
        </h1>
        <h2 class="pacifico hero__subtitle">The world is my canvas and I create my reality</h2>
        <button class="bg-orange hero__cta shadow-lg">Let's go</button>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'ibn_abubakre.dev',
    titleTemplate: '',
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.hero {
  min-height: 70vh;

  &__title {
    font-weight: 700;
    font-size: 1.2rem;
    opacity: 0.8;
  }

  &__subtitle {
    max-width: 700px;
    margin: 10px auto;
    font-size: 3rem;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }

  &__cta {
    padding: 10px 20px;
    border-radius: 50px;
    width: 200px;
    min-height: 60px;
    margin: 10px auto;
    color: #FFF;
    font-weight: 700;
    font-size: 1.2rem;
    transition: box-shadow .2s ease;
    outline: none;

    &:focus,
    &:hover {
      box-shadow: 0 2px 5px -3px rgba(0, 0, 0, 0.1), 0 2px 3px -2px rgba(0, 0, 0, 0.05);
      opacity: .85;
    }
  }
}

.pacifico {
  font-family: 'Pacifico', cursive;
}
</style>
