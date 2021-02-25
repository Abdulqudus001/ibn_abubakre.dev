<template>
  <Layout>
    <h1 class="my-3">Articles tagged with {{ $page.tag.title }}</h1>
    <ul>
    <div class="posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        class="mx-auto sm:mx-0"
      >
        <div class="post bg-background-postBody max-w-sm rounded-md overflow-hidden shadow-md block text-copy-primary hover:text-copy-primary">
          <div>
            <div
              class="post__image"
              :style="{ 'background-image': `url(${edge.node.image})` }"
            />
            <h1 class="post__title text-orange" v-html="edge.node.title" />
            <p class="description" v-html="edge.node.summary" />
            <div class="post__date">
              Posted
              <span>
                {{ edge.node.date }}.
              </span>
              <span>
                {{ edge.node.timeToRead }} min read
              </span>
            </div>
            <div class="flex mt-3 post__tags">
              <g-link v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path" class="mr-2">
                #{{ tag.title }}
              </g-link>
            </div>
          </div>
          <g-link :to="edge.node.path" class="post__link">Read More</g-link>
        </div>
      </div>
    </div>
    </ul>
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
            timeToRead
            date (format: "D MMMM YYYY")
            path,
            summary,
            image,
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  },
  allTag {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>