<template>
  <div class="main-index">
    <el-container>
      <el-header height='120px' class="main-header">
        <div class="wrapper">
          <webHeader></webHeader>
        </div>
        <div class="Navigation">
            <div class="wrapper">
                <NavigationBar></NavigationBar>
            </div>
        </div>
      </el-header>
      <el-main>
        <div class="wrapper">
            <el-container>
              <el-main style="padding-top: 0;padding-left: 0">
                <router-view/>
              </el-main>
              <el-aside width="250px">
                <asideItem></asideItem>
              </el-aside>
            </el-container>
        </div>
      </el-main>
      <el-footer>
        <div class="wrapper">
          Footer
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import webHeader from './component/Header'
import NavigationBar from './component/NavigationBar'
import asideItem from './view/aside'
export default {
  name: 'main-index',
  components: {
    webHeader,
    NavigationBar,
    asideItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '@/assets/web/mixin.scss'
.wrapper
  width: 1200px
  margin: 0 auto
.Navigation
  height: 50px
  background: #f0f0f0
</style>
