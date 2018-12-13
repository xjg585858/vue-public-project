<template>
  <div class="inlay-Header">
     <a href="javascript:void(0)" @click="$router.go(-1)">返回</a><span class="logo"></span> {{$t('auto.'+$route.meta.title)}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  mounted () {
    // this.$nextTick(() => {
    //   document.getElementsByClassName('inlay-index')[0].style.height = document.getElementsByClassName('child-view')[0].clientHeight + 'px'
    // })
  },
  watch: {
    '$route' (to, from) {
      console.log(this.$route.meta.title)
      document.title = this.$t('auto.' + this.$route.meta.title)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/mobile/scss/mixin.scss"

.inlay-Header
  position: relative
  height: size(90)
  line-height: size(90)
  width: 100%
  text-align: center
  background: $HeaderBg
  font-size: size(40)
  color: #fff
  a
    position: absolute
    left: 0
    padding: 0 10px
    font-size: size(24)
    color: #fff

</style>
