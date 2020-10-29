<template>
  <Layout>
    <div class="post-container flex flex-wrap">
      <div class="w-full lg:w-3/5 bg-background-primary-100 bg-opacity-0 post__body" v-html="$page.post.content"/>
      <div class="post__related w-full lg:w-2/5">
        hello second
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  }
};
</script>

<style>
.post__body {
  padding: 20px;
  border-radius: 8px;
}

pre {
  margin: 20px 0;
  padding: 30px;
  border-radius: 8px;
  overflow-x: auto;
}
</style>