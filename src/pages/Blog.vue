<template>
  <Layout>
    <div class="tags flex flex-wrap my-3">
      <g-link
        class="nav-link tag rounded-full bg-background-orange text-white px-5 mx-2 py-1 capitalize hover:text-white hover:opacity-75"
        :to="`tag/${tag.node.id}`"
        v-for="(tag, index) in $page.allTag.edges"
        :key="index"
      >{{tag.node.id}}</g-link>
    </div>
    total count: {{ $page.allPost.totalCount }}
    <div class="posts flex -mx-2">
      <div v-for="(edge, index) in $page.allPost.edges" :key="index" class="w-1/3 px-2">
        <g-link :to="edge.node.path" class="max-w-sm rounded overflow-hidden shadow-md block post text-copy-primary hover:text-copy-primary">
          <div>
            <h1 class="post__title text-orange" v-html="edge.node.title" />
            <p class="date text-copy-primary" v-html="edge.node.date" />
            <p class="description" v-html="edge.node.summary" />
            <p>{{edge.node.timeToRead}} min read</p>
            <div class="flex" v-for="tag in edge.node.tags" :key="tag.id">
              {{ tag.title }}
            </div>
          </div>
        </g-link>
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
        path,
        summary,
        tags {
          id
          title
          path
        }
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

<style lang="scss">
.tags {
  .tag {
    font-size: .9rem;
  }
}

.posts {
  .post {
    transition: transform .3s, box-shadow .3s;
    &__title {
      font-weight: 700;
      font-size: 1.1rem;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1)
    }
  }
}
</style>
