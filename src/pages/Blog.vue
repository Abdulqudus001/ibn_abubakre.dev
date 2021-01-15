<template>
  <Layout>
    <div class="tags flex flex-wrap my-3 mb-12">
      <g-link
        class="nav-link tag rounded-full bg-background-orange text-white px-5 mx-2 py-1 capitalize hover:text-white hover:opacity-75"
        :to="`tag/${tag.node.id}`"
        v-for="(tag, index) in $page.allTag.edges"
        :key="index"
      >{{tag.node.id}}</g-link>
    </div>
    <div class="posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(edge, index) in $page.allPost.edges" :key="index" class="mx-auto sm:mx-0">
        <div class="post max-w-sm rounded-md overflow-hidden shadow-md block text-copy-primary hover:text-copy-primary">
          <div>
            <div
              class="post__image"
              :style="{ 'background-image': `url(${edge.node.image})` }"
            />
            <!-- <div v-if="edge.node.image" class="post__image">
              <g-image
                :src="edge.node.image"
                class="mb-2"
              />
            </div> -->
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
        image,
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
import PostSeo from '../mixins/SEO';

export default {
  mixins: [PostSeo],
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
    width: 100%;
    height: 100%;
    background-color: lighten($color: #39465e, $amount: 0);
    padding: 30px;
    font-weight: 400;
    font-size: .9rem;
    position: relative;

    &__image {
      width: calc(100% + 60px);
      height: 200px;
      border-radius: 0.375rem 0.375rem 0 0;
      overflow: hidden;
      background-size: cover;
      margin: -30px;
      margin-bottom: 10px;
    }

    &__title {
      font-weight: 700;
      font-size: 1.4rem;
      margin: 20px 0;
    }

    &__date {
      font-size: .8rem;

      span {
        opacity: .9;
      }

      span:nth-of-type(2) {
        font-weight: 700;
      }
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1)
    }

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      opacity: 0;
      z-index: 0;
      text-indent: -9999px;
    }

    &__tags {
      position: relative;
      z-index: 1;
      margin-bottom: 0;
    }
  }
}
</style>
