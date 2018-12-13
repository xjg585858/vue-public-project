<template>
    <div class="inlay-Footer">
        <div class="inlay-Footer-box">
            <router-link :to="{name:'Home'}">
                <p><i class="iconfont icon-weibiaoti--"></i></p>
                {{$t('inlayIndex.home')}}
            </router-link>
            <router-link :to="{name:'Forum'}">
                <p><i class="iconfont icon-shequ"></i></p>
                {{$t('inlayIndex.forum')}}
            </router-link>
            <router-link :to="{name:'Mine'}">
                <p><i class="iconfont icon-gerenzhongxin"></i></p>
                {{$t('inlayIndex.mine')}}
            </router-link>
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
@import "@/assets/mobile/scss/mixin.scss"
.inlay-Footer
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: size(80)
    z-index: 10
    padding-top: size(5)
    box-shadow: 0px 0px 8px 5px #999
    background: $HeaderBg
    .inlay-Footer-box
        display: flex
        width: 100%
        height: size(80)
        a
            flex-grow: 1
            text-align: center
            font-size: size(25)
            color: #fff
            text-decoration: none
            &.router-link-exact-active
                color: #ff7700
            p
                height: size(40)

</style>
