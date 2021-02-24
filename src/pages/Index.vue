<template>
  <Layout>
    <section class="hero flex items-center justify-center flex-column">
      <!-- <div class="text-center w-full" :class="isClicked === true ? 'leave' : null" @animationend="ended">
        <h1 class="hero__title">
          Abdulqudus Abubakre<br />
          <small>Frontend Developer</small>
        </h1>
        <h2 class="pacifico hero__subtitle">
          The world is my canvas and I create my reality
        </h2>
        <button class="bg-orange hero__cta shadow-lg" @click="startAnimation">
          Let's go
        </button>
      </div> -->
      <div
        class="hero__main"
      >
        <!-- <style id="style-tag"></style> -->
        <div>
          <div id="about" class="user">
            <div class="user__image"></div>
            <h2 class="user__title pacifico">
              Hello 👋, I'm
              <span class="text-orange">
                Abdulqudus Abubakre
              </span>
            </h2>
            <div id="about">
              <h2 class="user__subtitle">A little bit about me</h2>
              <p class="user__about my-2">
                I'm a frontend developer with a passion for building pixel-perfect web applications. I believe everyone deserves to use the web and as such, I try to make applications as accessible as possible.
                Although, not so good with UI design, I have a strong eye for good design and have no troubles bringing them to life.
              </p>
              <p class="user__about">
                Being community driven, I try my best to give back to the community by organizing tech events, writing blog posts, mentorings newbies....etc. I currently lead <span class="text-orange font-bold">javascriptminna</span> (a javascript focused community in Minna, Niger state, Nigeria), and am a co-lead for <a href="https://gdg.community.dev/gdg-bida/">GDGBida.</a>
              </p>
              <p class="user__about mt-3">
                You can find me on any of these social media platform, or you can send me an <a href="mailto:abdulqudusabubakre@gmail.com">email</a> 
              </p>
            </div>
            <div class="user-social flex justify-center">
              <a href="http://twitter.com/ibn_abubakre" target="_blank" rel="noopener noreferer">
                <img src="@/assets/images/twitter.svg" alt="Blue twitter logo">
              </a>
              <a href="http://github.com/abdulqudus001" target="_blank" rel="noopener noreferer">
                <img src="@/assets/images/github.svg" alt="Black octocat github logo">
              </a>
              <a href="http://linkedin.com/in/ibn-abubakre" target="_blank" rel="noopener noreferer">
                <img src="@/assets/images/linkedin.svg" alt="Blue linkedin logo">
              </a>
              <a href="http://dev.to/ibn_abubakre" target="_blank" rel="noopener noreferer">
                <img src="@/assets/images/devto.svg" alt="DEV text written on black background">
              </a>
            </div>
          </div>
        </div>
        <!-- <pre id="style-text"></pre> -->
      </div>
    </section>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
import text from '@/assets/hero-text.js';

export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;

    return {
      title: 'Abdulqudus Abubakre | Frontend Developer',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Abdulqudus Abubakre, Frontend developer, Javascript Enthusiast, Community builder',
        },
        { key: 'og:url', property: 'og:url', content: `${siteUrl}` },
        {
          key: 'og:title',
          property: 'og:title',
          content: 'Abdulqudus Abubakre | Frontend Developer',
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: 'Abdulqudus Abubakre, Frontend developer, Javascript Enthusiast, Community builder',
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: `${siteUrl}/avatar.webp`,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Abdulqudus Abubakre, Frontend developer, Javascript Enthusiast, Community builder',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: `${siteUrl}/avatar.webp`,
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: 'Abdulqudus Abubakre | Frontend Developer',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: 'Abdulqudus Abubakre, Frontend developer, Javascript Enthusiast, Community builder',
            author: {
              name: 'Abdulqudus Abubakre',
            },
            headline: 'Abdulqudus Abubakre | Frontend Developer',
            image: `${siteUrl}/avatar.webp`,
          },
        },
      ],
    };
  },
  data: () => ({
    isClicked: true,
    openComment: false,
  }),
  mounted() {
    // const style = document.createElement('style');
    // style.id = 'style-tag';
    // document.head.append(style)
  },
  methods: {
    startAnimation() {
      this.isClicked = true;
    },
    ended(e) {
      e.target.classList.add('hidden');
      // this.writeStyles(text, 0, 16);
    },
    writeStyleChar(which) {
      const pre = document.querySelector('#style-text');
      let styles = '';
      if (which === '/' && this.openComment === false) {
        this.openComment = true
        styles = pre.innerHTML + which
      } else if (which === '/' && this.openComment === true) {
        this.openComment = false
        styles = pre.innerHTML.replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
      } else if (which === ':') {
        styles = pre.innerHTML.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
      } else if (which === ';') {
        styles = pre.innerHTML.replace(/([^:]*)$/, '<em class="value">$1</em>;');
      } else if (which === '{') {
        styles = pre.innerHTML.replace(/(.*)$/, '<em class="selector">$1</em>{');
      } else {
        styles = pre.innerHTML + which
      }

      pre.innerHTML = styles
      document.querySelector('#style-tag').append(which);
    },
    writeStyles(message, index, interval) {
      if (index < message.length) {
        const pre = document.querySelector('#style-text');
        pre.scrollTop = pre.scrollHeight;
        this.writeStyleChar(message[index++]);
        setTimeout(() => {
          this.writeStyles(message, index, interval);
        }, interval)
      }
      // if index < message.length
      //   pre = document.getElementById 'style-text'
      //   pre.scrollTop = pre.scrollHeight
      //   writeStyleChar message[index++]
      //   setTimeout (->
      //     writeStyles message, index, interval
      //   ), interval
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

@keyframes exit {
  0% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
    transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: -1800px 50%;
    transform-origin: -1800px 50%;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px) rotateY(-30deg) scale(0);
    transform: translateX(1000px) rotateY(-30deg) scale(0);
    -webkit-transform-origin: -100% 50%;
    transform-origin: -100% 50%;
    opacity: 1;
  }
}

@keyframes enter {
  0% {
    -webkit-transform: translateZ(-1400px) translateX(1000px);
    transform: translateZ(-1400px) translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) translateX(0);
    transform: translateZ(0) translateX(0);
  }
}

.hero {
  overflow-x: hidden;
  min-height: 70vh;

  &__title {
    font-weight: 700;
    font-size: 1.2rem;
    opacity: 0.8;
  }

  &__subtitle {
    max-width: 700px;
    margin: 10px auto;
    font-size: 3rem;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }

  &__cta {
    padding: 10px 20px;
    border-radius: 50px;
    width: 200px;
    min-height: 60px;
    margin: 10px auto;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    transition: box-shadow 0.2s ease;
    outline: none;

    &:focus,
    &:hover {
      box-shadow: 0 2px 5px -3px rgba(0, 0, 0, 0.1),
        0 2px 3px -2px rgba(0, 0, 0, 0.05);
      opacity: 0.85;
    }
  }

  &__main {
    width: 100%;
    min-height: 70vh;
  }
}

.leave {
  animation: exit 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

.enter {
  animation: enter 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

.pacifico {
  font-family: 'Pacifico', cursive;
}
</style>

<style scoped>
.hero__main .user__image {
  width: 200px;
  height: 200px;
  border: 1px solid;
  margin: 20px auto;
  border-radius: 50%;
  background-position: 50% 50%;
  background-image: url('https://avatars.githubusercontent.com/u/36643967?s=460&u=fc6823727546425d31e9432791f119f6ed2b5670&v=4');
  background-size: contain;
  background-repeat: no-repeat;
}

.hero__main .user {
  text-align: center;
}

.hero__main .user-social a {
  margin: 10px;
  width: 30px;
  height: 30px;
}

.hero__main .user__title {
  font-size: 1.5rem;
  margin: 20px 0;
}

.hero__main #about {
  max-width: 700px;
  margin: 10px auto 20px;
}

.hero__main .user__subtitle {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 10px 0;
}

.hero__main .user-social img {
  width: 100%;
  height: 100%;
}
</style>
