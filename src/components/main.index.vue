<template>
  <div class="main-index">
    <el-container>
      <el-header style="padding:0">
        <div class="main-wrapper">
          <webHeader></webHeader>
        </div>
      </el-header>
      <el-main>
        <div class="main-wrapper">
          <router-view/>
        </div>
      </el-main>
      <el-footer>
        <div class="main-wrapper">
          Footer
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import webHeader from '../web/component/Header'
export default {
  name: 'main-index',
  components: {
    webHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '@/assets/web/mixin.scss'
.main-wrapper
  width: 1200px
  margin: 0 auto
</style>
