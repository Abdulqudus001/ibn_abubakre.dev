// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueScrollTo from 'vue-scrollto';
import VueFuse from 'vue-fuse';
import DefaultLayout from '~/layouts/Default.vue';
require('typeface-nunito');

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: 'ease',
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: 'keywords',
    content:
      'Gridsome, Vue, Tailwind, JavaScript, HTML, CSS, Vue.js, VueJS, Web development, Accessibility',
  });

  head.meta.push({
    name: 'description',
    content: 'Personal blog by Abdulqudus Abubakre.',
  });

  head.meta.push({
    name: 'twitter:title',
    content: 'Abdulqudus Abubakre | Frontend Developer'
  });

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  });

  head.meta.push({
    name: 'twitter:description',
    content: 'Personal blog by Abdulqudus Abubakre.'
  });



  head.meta.push({
    name: 'author',
    content: 'Abdulqudus Abubakre',
  });
}
