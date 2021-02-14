<template>
  <Layout>
    <section class="hero flex items-center justify-center flex-column">
      <div class="text-center w-full" :class="isClicked === true ? 'leave' : null" @animationend="ended">
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
      </div>
      <div
        class="hero__main enter"
        v-if="isClicked"
      >
        <!-- <style id="style-tag"></style> -->
        <span id="echo"></span>
	      <span id="heart"><i></i></span>
        <pre id="style-text"></pre>
      </div>
    </section>
  </Layout>
</template>

<script>
import text from '@/assets/hero-text.js';

export default {
  metaInfo: {
    title: 'ibn_abubakre.dev',
    titleTemplate: '',
  },
  data: () => ({
    isClicked: true,
    openComment: false,
  }),
  mounted() {
    console.log(text);
    const style = document.createElement('style');
    style.id = 'style-tag';
    document.head.append(style)
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
