<template>
  <Layout>
    <div class="post-list">
      <div v-for="(edge, index) in $page.allPost.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <p class="date" v-html="edge.node.date" />
        <p class="description" v-html="edge.node.description" />
        <p>{{edge.node.timeToRead}} min read</p>
        <g-link :to="edge.node.path" class="read">Read More...</g-link>
        <hr class="line" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Code Tidbits'
  }
}
</script>

<style>

</style>