<template>
  <div class="inlay-Home">
    <banner></banner>
      Home-inlay <router-link :to="{name:'Mine'}">Mine</router-link>
      <router-link :to="{name:'inlayAuto'}">登录</router-link>
      <!-- <vue-markdown :source="comment.body">i am a ~~tast~~ **test**.</vue-markdown> -->
      <!-- <div id="editor">
        <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
      </div> -->
  </div>
</template>

<script>
import { getinfo } from '../../../api/Management.js'
// import VueMarkdown from 'vue-markdown'
import banner from './banner/index'
export default {
  name: 'Home',
  components: {
    banner
    // VueMarkdown
  },
  computed: {
    // compiledMarkdown: function () {
    //   return marked(this.input, { sanitize: true })
    // }
  },
  data () {
    return {
      input: '# hello'
    }
  },
  mounted () {
    getinfo().then((req) => {
      console.log(req)
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    // update: _.debounce(function (e) {
    //   this.input = e.target.value
    // }, 300)
  }
}
</script>

<style>

</style>
