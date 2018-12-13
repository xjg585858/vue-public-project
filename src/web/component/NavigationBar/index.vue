<template>
   <div class="Navigation-item">
       <router-link class="item" to='/'>{{$t('navbar.home')}}</router-link>
       <a href="javasrcipt:void(0)" class="item">新手入门</a>
       <a href="javasrcipt:void(0)" class="item">API</a>
       <a href="javasrcipt:void(0)" class="item">关于</a>
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
.Navigation-item
    display: flex
    .item
        line-height: 50px
        padding: 0 15px
        min-width: 80px
        text-align: center
        color: #828282
    .router-link-active
        color: #fff
        background: #a01600
</style>
