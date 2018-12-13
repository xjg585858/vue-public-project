<template>
  <div class="inlay-Header">
     <span class="mune"  @click="angle = 'isB'" :class="angle"><i class="iconfont icon-caidan"></i></span>
     <span class="logo"></span> {{$t('inlayIndex.'+$route.meta.title)}}
      <!-- Home-inlay <router-link :to="{name:'Mine'}">Mine</router-link> -->
      <div class="mune-panel" :class="angle">
        <div class="mune-panel-box">
          <a href="javascript:void(0)" @click="angle = 'isA'">关闭</a>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      angle: 'isA'
    }
  },
  mounted () {
  },
  watch: {
    '$route' (to, from) {
      document.title = this.$t('inlayIndex.' + this.$route.meta.title)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/mobile/scss/mixin.scss"
.inlay-Header
  position: relative
  height: size(80)
  line-height: size(80)
  width: 100%
  text-align: center
  background: $HeaderBg
  color: #fff
  font-size: size(40)
  box-shadow: 0px 0px 8px 2px #999
  .mune
    position: absolute
    left: 0
    padding: 0 size(20)
    font-size: size(25)
    transition: transform 0.5s ease-in-out
    &.isA
      transform: rotate(0deg)
    &.isB
      transform: rotate(180deg)
  .mune-panel
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    overflow-y: scroll
    background: rgba(0,0,0,0.5)
    transition: transform 0.3s ease-in-out
    z-index: 20
    .mune-panel-box
      width: 100%
      min-height: 100%
  .isA
    transform: translate3d(-100%,0px,0px)
  .isB
    transform: translate3d(0px,0px,0px)
</style>
