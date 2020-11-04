<template>
  <Layout>
    <div class="post-container">
      <div class="post-info text-center flex justify-center items-center">
        <h1 class="post__title">
          {{ $page.post.title }}
        </h1>
        <p class="post__subtitle">
          {{ $page.post.summary }}
        </p>
        <div class="post__date">
          Posted
          <span>
            {{ $page.post.date }}.
          </span>
          <span>
            {{ $page.post.timeToRead }} min read
          </span>
        </div>
        <div class="post__tags flex flex-wrap justify-center">
          <g-link
            class="nav-link tag rounded-full bg-background-orange text-white px-5 mx-2 py-1 capitalize hover:text-white hover:opacity-75"
            :to="`tag/${tag.id}`"
            v-for="(tag, index) in $page.post.tags"
            :key="index"
          >{{tag.id}}</g-link>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-3/5 xl:w-8/12 bg-background-primary-100 bg-opacity-0 post__body shadow-md">
          <figure
            v-if="$page.post.image"
            class="flex flex-col items-center"
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
        <div class="w-full lg:w-3/5 xl:w-8/12 post__comment">
          <Disqus shortname="ibn-abubakre" :identifier="$page.post.title" />
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
    tags {
      id
      title
      path
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
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
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
  font-size: 1.2rem;
  background-color: lighten($color: #2E394F, $amount: 5);
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
}

.post-info {
  margin: 50px auto;
  max-width: 800px;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }

  h1 {
    font-size: 4rem;

    @media screen and (max-width: 992px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }

}

.g-image {
  margin: 20px auto;
}

.post__subtitle {
  font-size: 1.8rem;
  margin: 30px auto;

  @media screen and (max-width: 992px) {
    font-size: 1.5rem;
  }
}

.post__tags {
  margin: 30px auto;
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

.post__comment {
  margin: 50px 0;
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
  word-break: break-all;
  border-radius: 4px;
}
</style>