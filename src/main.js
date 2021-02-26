// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueScrollTo from 'vue-scrollto';
import VueFuse from 'vue-fuse';
import VueDisqus from 'vue-disqus';
import DefaultLayout from '~/layouts/Default.vue';
require('typeface-nunito');

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueDisqus);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease',
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: 'keywords',
    content:
      'Abdulqudus, Abubakre, ibn_abubakre, Vue, Tailwind, JavaScript, HTML, CSS, Vue.js, VueJS, Web development, Accessibility',
  });

  head.meta.push({
    name: 'author',
    content: 'Abdulqudus Abubakre',
  });
}
