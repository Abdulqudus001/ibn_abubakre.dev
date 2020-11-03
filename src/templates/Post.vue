<template>
  <Layout>
    <div class="post-container">
      <div class="post-info text-center my-5">
        <h1 class="post__title">
          {{ $page.post.title }}
        </h1>
        <div class="post__date">
          Posted
          <span>
            {{ $page.post.date }}.
          </span>
          <span>
            {{ $page.post.timeToRead }} min read
          </span>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-3/5 bg-background-primary-100 bg-opacity-0 post__body shadow-md">
          <figure
            v-if="$page.post.image"
            class="flex flex-col"
          >
            <g-image
              :alt="$page.post.image.alt"
              :src="$page.post.image.path"
              class="mb-2"
            />
            <figcaption
              class="image-caption self-center mb-15"
              v-html="$page.post.image.caption"
            />
          </figure>
          <div v-html="$page.post.content"></div>
        </div>
        <div class="post__related w-full lg:w-2/5">
          hello second
        </div>
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
    summary
    path
    image {
      path
      caption
      alt
    }
  }
}
</page-query>

<script>
import PostSeo from '../mixins/SEO';

export default {
  mixins: [PostSeo],
  // metaInfo() {
  //   return {
  //     title: this.$page.post.title,
  //   };
  // }
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 30px;
  font-weight: 700;
}

h1 {
  font-size: 1.8rem;
  font-weight: 800;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.2rem;
}

.post__body {
  padding: 20px;
  border-radius: 4px;
  line-height: 2;
  font-size: 1.1rem;
  background-color: lighten($color: #2E394F, $amount: 5);
}

.post-info {
  margin: 50px auto;
}

.post__date {
  margin-top: 20px;
  font-size: .9rem;

  span {
    opacity: .9;
  }

  span:nth-of-type(2) {
    font-weight: 700;
  }
}

span.icon-link {
  &::before {
    content: '#';
    margin-right: 10px;
  }
}

pre {
  margin: 20px 0;
  padding: 30px;
  border-radius: 8px;
  overflow-x: auto;
  line-height: 1.5;
}

.shiki-inline {
  background-color: #33384d;
  padding: .2em .5em;
  white-space: nowrap;
  border-radius: 4px;
}
</style>