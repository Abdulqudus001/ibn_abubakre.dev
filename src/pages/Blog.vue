<template>
  <Layout>
    <div>
      <g-link
        class="nav-link"
        :to="`tag/${tag.node.id}`"
        v-for="(tag, index) in $page.allTag.edges"
        :key="index"
      >{{tag.node.id}}</g-link>
    </div>
    <div class="post-list">
      totalCount: {{ $page.allPost.totalCount }}
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
  allTag {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<style>

</style>