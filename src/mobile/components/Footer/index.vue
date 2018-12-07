<template>
    <div class="inlay-Footer">
        <div class="inlay-Footer-box">
            <router-link :to="{name:'Home'}">{{$t('inlay.footer.home')}}</router-link>
            <router-link :to="{name:'Forum'}">{{$t('inlay.footer.forum')}}</router-link>
            <router-link :to="{name:'Mine'}">{{$t('inlay.footer.mine')}}</router-link>
        </div>
    </div>
</template>
<script>
export default{
  data () {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.inlay-Footer
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: 40px
    z-index: 10
    background: #e5e5e5
    .inlay-Footer-box
        display: flex
        width: 100%
        height: 40px
        a
            flex-grow: 1
            text-align: center
            line-height: 40px

</style>
