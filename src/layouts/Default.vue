<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
    <header class="border-t-14 border-orange">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-2">
        <div class="flex flex-wrap">
          <g-link to="/" class="mr-10 no-underline">
            <g-image src="../../static/brand.png" class="w-20 rounded-full" alt="logo" />
          </g-link>
          <ul
            class="uppercase tracking-wide font-bold w-full block flex-grow md:space-x-8 space-y-6 md:space-y-0 md:flex md:flex-initial md:w-auto items-center mt-8 md:mt-0"
            :class="isOpen ? ['nav-open bg-background-primary shadow-2xl md:shadow-none']: 'nav-hidden'"
            data-cypress="menu"
          >
            <g-link to="/" class="no-underline block md:hidden mx-auto">
              <g-image src="../../static/brand.png" class="w-40 rounded-full" alt="logo" />
            </g-link>
            <li>
              <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-copy-primary hover:text-gray-600" data-cypress="about">About</a>
              <g-link v-else to="/#about" class="text-copy-primary nav-item hover:text-gray-600">About</g-link>
            </li>
            <li>
              <g-link to="/tidbits" class="text-copy-primary nav-item hover:text-gray-600" data-cypress="blog">Tidbits</g-link>
            </li>
            <li>
              <g-link to="/blog" class="text-copy-primary nav-item hover:text-gray-600" data-cypress="blog">Blog</g-link>
            </li>
            <li>
              <theme-switcher :theme="theme" @themeChanged="updateTheme" />
            </li>
            <div class="mb-6 md:mb-0 block md:hidden">
              <search-input />
            </div>
            <button
              class="toggle toggle--nav block md:hidden"
              :class="isOpen ? 'open' : null"
              @click="toggle"
              :aria-label="isOpen ? 'Open Navbar' : 'Close Navbar'"
            >
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
              <span class="bg-orange" />
            </button>
          </ul>
        </div>
        <div class="mb-6 md:mb-0 hidden md:block">
          <search-input />
        </div>
        <div class="block md:hidden">
          <button
            class="toggle"
            v-if="isOpen === false"
            :class="isOpen ? 'open' : null"
            @click="toggle"
            :aria-label="isOpen ? 'Open Navbar' : 'Close Navbar'"
          >
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
            <span class="bg-orange" />
          </button>
        </div>
        
      </nav>
    </header>

    <main class="flex-grow bg-background-primary">
      <div class="container mx-auto">
        <slot/>
      </div>
    </main>

    <footer class="bg-background-primary text-copy-primary">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>&copy; Copyright {{ new Date().getFullYear() }}. All rights reserved.</div>
        </div>
        <ul class="flex items-center space-x-8">
          <li>
            <a
              href="mailto:me@abdulqudusabubakre@gmail.com"
              class="text-copy-primary hover:text-gray-400"
              aria-label="Send Email"
            >
              <svg width="25" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z" fill-rule="nonzero"/></svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/abdulqudus001"
              target="_blank"
              rel="noopener noreferrer"
              class="text-copy-primary hover:text-gray-400"
              aria-label="Github account"
            >
              <svg width="20" height="19" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z" fill-rule="nonzero"/></svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/ibn_abubakre"
              target="_blank"
              rel="noopener noreferrer"
              class="text-copy-primary hover:text-gray-400"
              aria-label="Twitter account"
            >
              <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z" fill-rule="nonzero"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    twitter {
      site
      creator
    }
  }
}
</static-query>

<script>
import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  metaInfo () {
    return {
      meta: [
        { key: 'author', name: 'author', content: this.$static.metadata.author },
        { key: 'twitter:site', name: 'twitter:site', content: this.$static.metadata.twitter.site },
        { key: 'twitter:creator', name: 'twitter:creator', content: this.$static.metadata.twitter.creator }
      ]
    }
  },
  components: {
    SearchInput,
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      isOpen: false,
      theme: '',
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>

<style src="../css/main.css" />

<style lang="scss" scoped>
.nav-hidden {
  @media screen and (max-width: 768px) {
    transform: translateX(-300px);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    position: fixed;
  }

  @media screen and (min-width: 768px) {
    transform: none;
    pointer-events: all;
    opacity: 1;
    visibility: visible;
    position: relative;

  }
}

.nav-open {
  @media screen and (max-width: 768px) {
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    border-top: 14px solid #ff6b42;
    height: 100vh;
    width: 300px;
    max-width: 100%;
    margin: 0;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    transform: translateX(0);
    pointer-events: all;
    opacity: 1;
    transition: transform .2s ease;
  }

  @media screen and (min-width: 768px) {
    z-index: unset;
    top: unset;
    position: relative;
    height: unset;
    width: unset;
    flex-direction: row;
    align-items: center;
  }
}

.toggle {
  width: 30px;
  height: 30px;
  position: relative;
  transition: .1s;
  margin: 10px 10px;
  cursor: pointer;
  display: inline-block;
  outline: none;

  &--nav {
    position: absolute;
    top: 20px;
    right: 10px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }

  span {
    width: 5px;
    height: 5px;
    display: block;
    border-radius: 50%;
    position: absolute;

    &:nth-child(1){
      left: 0;
      top: 0;
    }
    &:nth-child(2){
      left: 12px;
      top: 0;
    }
    &:nth-child(3){
      right: 0;
      top: 0;
    }
    &:nth-child(4){
      left: 0;
      top: 12px;
    }
    &:nth-child(5){
      position: absolute;
      left: 12px;
      top: 12px;
    }
    &:nth-child(6){
      right: 0px;
      top: 12px;
    }
    &:nth-child(7){
      left: 0px;
      bottom: 0px;
    }
    &:nth-child(8){
      position: absolute;
      left: 12px;
      bottom: 0px;
    }
    &:nth-child(9){
      right: 0px;
      bottom: 0px;
    }
  }

  &:hover span {
    transform: scale(1.2);
    transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
  }

  &.open {
    transform: rotate(180deg);
    cursor: pointer;
    transition: .2s cubic-bezier(.8, .5, .2, 1.4);

    span {
      border-radius: 50%;
      transition-delay: 200ms;
      transition: .5s cubic-bezier(.8, .5, .2, 1.4);
      &:nth-child(2) {
        left: 6px;
        top: 6px;
      }
      &:nth-child(4) {
        left: 6px;
        top: 18px;
      }
      &:nth-child(6) {
        right: 6px;
        top: 6px;
      }
      &:nth-child(8) {
        left: 18px;
        bottom: 6px;
      }
    }
  }
}
</style>