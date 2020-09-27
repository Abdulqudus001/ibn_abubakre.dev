<template>
  <div class="layout">
    <header class="header">
      <g-link to="/" class="header__logo">
        <g-image alt="ibn_abubakre.dev logo" src="~/images/logo.jpg" />
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/tidbits/">Tidbits</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: 'nunito', Roboto, "Helvetica Neue", Arial, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;

  &__logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }
}

.nav__link {
  margin-left: 20px;
}
</style>
