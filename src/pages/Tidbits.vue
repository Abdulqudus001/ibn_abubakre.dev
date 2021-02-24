<template>
  <Layout>
    <div class="tidbits">
      <g-image class="tidbits__img" src="~/assets/images/coming-soon.svg" />
      <h1 class="tidbits__title my-4">
        Work In Progress...
        <span class="build">
          ⚙️
        </span>
      </h1>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Code Tidbits'
  }
}
</script>

<style lang="scss" scoped>
.tidbits {
  text-align: center;
  padding: 40px 0;
  &__img {
    max-width: 200px;
    margin: 30px auto;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .build {
    animation: rotate 1s infinite linear;
    display: inline-block;
  }
}
</style>