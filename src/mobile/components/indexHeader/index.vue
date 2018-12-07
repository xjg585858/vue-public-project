<template>
  <div class="inlay-Header">
      {{$t('inlay.header.'+$route.meta.title)}}
      <!-- Home-inlay <router-link :to="{name:'Mine'}">Mine</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  mounted () {
    this.$nextTick(() => {
      document.getElementsByClassName('inlay-index')[0].style.height = document.getElementsByClassName('child-view')[0].clientHeight + 'px'
    })
  },
  watch: {
    '$route' (to, from) {
      document.title = this.$t('inlay.header.' + this.$route.meta.title)
    }
  }
}
</script>

<style lang="sass" scoped>
.inlay-Header
    height: 45px
    line-height: 45px
    width: 100%
    text-align: center
    background: #fff
</style>
