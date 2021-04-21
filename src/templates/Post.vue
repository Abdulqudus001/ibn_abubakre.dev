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
        <div class="w-full lg:w-3/5 xl:w-8/12 bg-background-post bg-opacity-0 post__body shadow-md">
          <figure
            v-if="$page.post.image"
            class="flex flex-col items-center"
          >
            <g-image
              :src="$page.post.image"
              class="mb-2"
              :alt="$page.post.caption || `Header image for post ${$page.post.title}`"
            />
          </figure>
          <div v-html="$page.post.content"></div>
          <div class="pt-10">
            <h3>Share this article</h3>
            <hr class="mb-4">
            <div class="social flex py-4">
              <g-link
                class="mr-4"
                :to="`https://twitter.com/intent/tweet?text=${$page.post.title} by @ibn_abubakre&url=https://ibn-abubakre.netlify.app${$page.post.path}`"
                aria-label="Post on twitter"
              >
                <img src="@/assets/images/twitter.svg" alt="">
              </g-link>
              <g-link
                :to="`https://www.linkedin.com/shareArticle?mini=true&url=https://ibn-abubakre.netlify.app/${$page.post.path}&title=${$page.post.title}&summary=${$page.post.summary}&source=ibn_abubakre's blog`"
                aria-label="Post on linkedin"
              >
                <img src="@/assets/images/linkedin.svg" alt="">
              </g-link>
            </div>
          </div>
          <div class="py-3">
            <div class="flex items-center text-base">
              <h5 class="mt-0 h5">Spot an error?</h5>
              <a
                class="mx-2"
                :href="`https://github.com/Abdulqudus001/ibn_abubakre.dev/blob/master/posts/${postPath}.md`"
                target="_blank"
              >
                Edit this post
              </a>
            </div>
            <hr class="mb-4">
          </div>
        </div>
        <div class="w-full lg:w-3/5 xl:w-8/12 post__comment">
          <Disqus shortname="ibn-abubakre" :identifier="$page.post.title" :lazyConfig="lazyConfig" />
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
    image
    caption
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
  data: () => ({
    lazyConfig: {
      root: null,
      rootMargin: '500px',
      threshold: 0.5,
    }
  }),
  computed: {
    postPath() {
      let path = this.$page.post.path;
      return path.split('/')[2];
    }
  },
  mounted() {
    let codepenScript = document.createElement('script')
    codepenScript.async = true;
    codepenScript.setAttribute('src', 'https://static.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
  }
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
  // background-color: lighten($color: #2E394F, $amount: 5);
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

  .social {
    img {
      width: 30px;
    }
  }

  ol {
    list-style-type: decimal;
    padding-left: 20px;
    li {
      margin: 10px 0;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    li {
      margin: 10px 0;
    }
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
  font-size: .9rem;
}

.shiki-inline {
  background-color: #33384d;
  padding: .2em .5em;
  word-break: break-all;
  border-radius: 4px;
  font-size: 1rem;
}

.codepen-embed iframe {
  min-height: 400px;
}
</style>